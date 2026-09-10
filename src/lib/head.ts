/**
 * Head-tag computation shared by the runtime <Seo> component and the build-time
 * prerenderer, so a page's static HTML and its hydrated DOM cannot disagree.
 */
import { SITE, absoluteUrl } from './seo';

export type JsonLd = Record<string, unknown>;

export interface SeoInput {
  title: string;
  description: string;
  /** Route being rendered, used when `path` is not given explicitly. */
  pathname: string;
  path?: string;
  image?: string;
  bareTitle?: boolean;
  noindex?: boolean;
  schema?: JsonLd | JsonLd[];
}

export interface HeadPayload {
  title: string;
  description: string;
  canonical: string;
  image: string;
  noindex: boolean;
  schema: JsonLd[];
}

export function buildHead({
  title,
  description,
  pathname,
  path,
  image,
  bareTitle = false,
  noindex = false,
  schema,
}: SeoInput): HeadPayload {
  const target = path ?? pathname;
  const normalized = target === '/' ? '/' : target.replace(/\/+$/, '');
  return {
    title: bareTitle ? title : `${title} | ${SITE.brand}`,
    description,
    canonical: absoluteUrl(normalized),
    image: absoluteUrl(image ?? SITE.ogImage),
    noindex,
    schema: schema ? (Array.isArray(schema) ? schema : [schema]) : [],
  };
}

/** The meta tags a payload maps to, keyed by the attribute that identifies them. */
export function headMetaTags(head: HeadPayload): {
  name: Record<string, string>;
  property: Record<string, string>;
} {
  return {
    name: {
      description: head.description,
      'twitter:title': head.title,
      'twitter:description': head.description,
      'twitter:image': head.image,
    },
    property: {
      'og:title': head.title,
      'og:description': head.description,
      'og:url': head.canonical,
      'og:image': head.image,
    },
  };
}

/**
 * During a prerender pass there is no document to mutate, so <Seo> hands its
 * payload here instead and scripts/prerender.mjs collects it after renderToString.
 * Rendering is single-pass and one route at a time, so a module-level slot is safe.
 */
let collected: HeadPayload | null = null;

export function collectHead(head: HeadPayload): void {
  collected = head;
}

export function takeCollectedHead(): HeadPayload | null {
  const head = collected;
  collected = null;
  return head;
}
