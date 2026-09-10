import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  buildHead,
  collectHead,
  headMetaTags,
  type JsonLd,
} from '../lib/head';

interface SeoProps {
  /** Page-specific part of the title. The brand suffix is appended automatically. */
  title: string;
  description: string;
  /** Canonical path. Defaults to the current route. */
  path?: string;
  /** Social share image; root-relative or absolute. Defaults to the site OG image. */
  image?: string;
  /** Skip the " | Premier Foundation Repair" suffix (used by the homepage). */
  bareTitle?: boolean;
  noindex?: boolean;
  /** Page-level structured data, appended alongside the site-wide LocalBusiness node. */
  schema?: JsonLd | JsonLd[];
}

const SCHEMA_ATTR = 'data-seo-schema';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets the document title, meta description, canonical URL, social tags and
 * optional JSON-LD for the page that renders it.
 *
 * At build time these same values are baked into the static HTML by
 * scripts/prerender.mjs, which reads the payload this component collects during
 * the server pass. At runtime the effect below re-applies them on client-side
 * navigation, where there is no fresh document to prerender.
 */
export default function Seo(props: SeoProps) {
  const { pathname } = useLocation();
  const head = buildHead({ ...props, pathname });

  // Prerender pass: no document to mutate, so hand the payload to the collector.
  if (typeof document === 'undefined') collectHead(head);

  const headJson = JSON.stringify(head);

  useEffect(() => {
    const payload = JSON.parse(headJson);
    const tags = headMetaTags(payload);

    document.title = payload.title;
    upsertCanonical(payload.canonical);
    for (const [key, value] of Object.entries(tags.name)) upsertMeta('name', key, value as string);
    for (const [key, value] of Object.entries(tags.property)) upsertMeta('property', key, value as string);

    if (payload.noindex) {
      upsertMeta('name', 'robots', 'noindex, follow');
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }

    document.head.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach((el) => el.remove());
    for (const block of payload.schema) {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute(SCHEMA_ATTR, '');
      el.textContent = JSON.stringify(block);
      document.head.appendChild(el);
    }

    return () => {
      document.head.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach((el) => el.remove());
    };
  }, [headJson]);

  return null;
}
