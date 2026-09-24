/**
 * Head-tag computation shared by the runtime <Seo> component and the build-time
 * prerenderer, so a page's static HTML and its hydrated DOM cannot disagree.
 */
import { SITE, absoluteUrl, breadcrumbSchema } from './seo';

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
  /** Marks the page as an article and adds the og article timestamps. */
  article?: { publishedTime?: string; modifiedTime?: string; section?: string };
  /** Breadcrumb trail. Derived from the path when not given; '/' gets none. */
  breadcrumb?: { name: string; path: string }[];
}

export interface HeadPayload {
  title: string;
  description: string;
  canonical: string;
  image: string;
  noindex: boolean;
  schema: JsonLd[];
  ogType: 'website' | 'article';
  article?: { publishedTime?: string; modifiedTime?: string; section?: string };
}

/** 'sump-pumps' -> 'Sump Pumps'. */
const titleCase = (segment: string) =>
  segment.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

/**
 * Home > … > this page. Intermediate crumbs are derived from the path, which
 * only reads well where the URL is genuinely hierarchical (/drainage/...).
 * Pages whose slug is not a good label — blog posts especially — pass their
 * own trail instead.
 */
function deriveTrail(pathname: string, title: string): { name: string; path: string }[] {
  if (pathname === '/') return [];
  const segments = pathname.split('/').filter(Boolean);
  const trail = [{ name: 'Home', path: '/' }];
  segments.forEach((segment, i) => {
    const isLast = i === segments.length - 1;
    trail.push({
      name: isLast ? title : titleCase(segment),
      path: `/${segments.slice(0, i + 1).join('/')}`,
    });
  });
  return trail;
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
  article,
  breadcrumb,
}: SeoInput): HeadPayload {
  const target = path ?? pathname;
  const normalized = target === '/' ? '/' : target.replace(/\/+$/, '');
  const blocks = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const trail = breadcrumb ?? deriveTrail(normalized, title);

  return {
    title: bareTitle ? title : `${title} | ${SITE.brand}`,
    description,
    canonical: absoluteUrl(normalized),
    image: absoluteUrl(image ?? SITE.ogImage),
    noindex,
    ogType: article ? 'article' : 'website',
    ...(article ? { article } : {}),
    schema: trail.length > 1 ? [...blocks, breadcrumbSchema(trail)] : blocks,
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
      'og:type': head.ogType,
      'og:title': head.title,
      'og:description': head.description,
      'og:url': head.canonical,
      'og:image': head.image,
      ...(head.article?.publishedTime
        ? { 'article:published_time': head.article.publishedTime }
        : {}),
      ...(head.article?.modifiedTime
        ? { 'article:modified_time': head.article.modifiedTime }
        : {}),
      ...(head.article?.section ? { 'article:section': head.article.section } : {}),
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
