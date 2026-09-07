/**
 * Site-wide SEO constants and JSON-LD builders.
 *
 * NOTE: the LocalBusiness (GeneralContractor) schema lives statically in
 * index.html so crawlers that don't execute JavaScript still see it. If the
 * NAP details below change, update index.html to match.
 */

export const SITE = {
  name: 'Premier Foundation Repair of Baton Rouge',
  brand: 'Premier Foundation Repair',
  origin: 'https://www.premierfoundationrepairofbatonrouge.com',
  phoneDisplay: '(225) 435-8289',
  phoneE164: '+1-225-435-8289',
  email: 'info@premierfoundationrepair.com',
  ogImage: '/og-image.png',
  businessId: 'https://www.premierfoundationrepairofbatonrouge.com/#business',
} as const;

/** Turn a root-relative path into an absolute URL. Absolute inputs pass through. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return new URL(path, SITE.origin).toString();
}

/**
 * Trim body copy down to a meta-description-sized string, cutting on a word
 * boundary rather than mid-word.
 */
export function clampDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[.,;:—-]$/, '')}…`;
}

/** Reference to the site-wide LocalBusiness node declared in index.html. */
export const businessRef = { '@id': SITE.businessId } as const;

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}) {
  const published = new Date(post.date);
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    ...(post.image ? { image: post.image } : {}),
    ...(Number.isNaN(published.getTime())
      ? {}
      : { datePublished: published.toISOString().slice(0, 10) }),
    author: { '@type': 'Organization', name: SITE.name, ...businessRef },
    publisher: { '@type': 'Organization', name: SITE.name, ...businessRef },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(`/${post.slug}`) },
  };
}
