import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE, absoluteUrl } from '../lib/seo';

type JsonLd = Record<string, unknown>;

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

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
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
 * React 18 does not hoist <title>/<meta> out of the component tree the way
 * React 19 does, so these are applied to <head> imperatively. Googlebot renders
 * JavaScript and picks them up; non-rendering crawlers (Facebook, X, iMessage)
 * see the static fallbacks in index.html instead.
 */
export default function Seo({
  title,
  description,
  path,
  image,
  bareTitle = false,
  noindex = false,
  schema,
}: SeoProps) {
  const { pathname } = useLocation();
  const canonicalPath = path ?? pathname;
  const schemaJson = schema ? JSON.stringify(schema) : '';

  useEffect(() => {
    const fullTitle = bareTitle ? title : `${title} | ${SITE.brand}`;
    const canonical = absoluteUrl(canonicalPath === '/' ? '/' : canonicalPath.replace(/\/+$/, ''));
    const shareImage = absoluteUrl(image ?? SITE.ogImage);

    document.title = fullTitle;
    upsertMeta('name', 'description', description);
    upsertCanonical(canonical);

    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', shareImage);
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', shareImage);

    if (noindex) {
      upsertMeta('name', 'robots', 'noindex, follow');
    } else {
      removeMeta('name', 'robots');
    }

    document.head.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach((el) => el.remove());
    if (schemaJson) {
      const blocks: JsonLd[] = JSON.parse(schemaJson);
      (Array.isArray(blocks) ? blocks : [blocks]).forEach((block) => {
        const el = document.createElement('script');
        el.type = 'application/ld+json';
        el.setAttribute(SCHEMA_ATTR, '');
        el.textContent = JSON.stringify(block);
        document.head.appendChild(el);
      });
    }

    return () => {
      document.head.querySelectorAll(`script[${SCHEMA_ATTR}]`).forEach((el) => el.remove());
    };
  }, [title, description, canonicalPath, image, bareTitle, noindex, schemaJson]);

  return null;
}
