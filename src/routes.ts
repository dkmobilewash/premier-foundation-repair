/**
 * The site's route manifest — the single source of truth for which URLs exist.
 *
 * The router builds its <Route> list from the same data these entries are
 * derived from, scripts/generate-sitemap.mjs writes public/sitemap.xml from
 * here, and scripts/prerender.mjs generates one static page per entry. Adding a
 * page means adding it here; nothing else has to be kept in step by hand.
 */
import { blogPosts } from './pages/Blog';
import { serviceAreas } from './data/serviceAreas';

export interface RouteDef {
  path: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
  /** Content date, when the page's own data carries one (blog posts). */
  lastmod?: string;
  /** Otherwise the file whose git history dates this page. */
  source?: string;
}

const page = (
  path: string,
  source: string,
  priority: number,
  changefreq: RouteDef['changefreq'] = 'monthly',
): RouteDef => ({ path, source, priority, changefreq });

/** 'Jun 24, 2025' -> '2025-06-24'. Returns undefined for anything unparseable. */
function isoDate(value: string): string | undefined {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

const staticRoutes: RouteDef[] = [
  page('/', 'src/pages/Home.tsx', 1.0, 'weekly'),

  page('/foundation-repair', 'src/pages/FoundationRepair.tsx', 0.9),
  page('/pier-and-beam', 'src/pages/PierAndBeam.tsx', 0.9),
  page('/foundation-repair-methods', 'src/pages/FoundationRepairMethods.tsx', 0.8),
  page('/drainage', 'src/pages/Drainage.tsx', 0.9),
  page('/drainage/catch-basins', 'src/pages/drainage/DrainagePages.tsx', 0.8),
  page('/drainage/channel-drains', 'src/pages/drainage/DrainagePages.tsx', 0.8),
  page('/drainage/pvc-drains', 'src/pages/drainage/DrainagePages.tsx', 0.8),
  page('/drainage/sump-pumps', 'src/pages/drainage/DrainagePages.tsx', 0.8),
  page('/small-demo', 'src/pages/SmallDemo.tsx', 0.8),

  page('/free-estimate', 'src/pages/FreeEstimate.tsx', 0.9),
  page('/drainage-estimate', 'src/pages/DrainageEstimate.tsx', 0.8),
  page('/contact', 'src/pages/Contact.tsx', 0.8),

  page('/our-process', 'src/pages/OurProcess.tsx', 0.7),
  page('/about', 'src/pages/About.tsx', 0.7),
  page('/faqs', 'src/pages/FAQs.tsx', 0.7),
  page('/warranty', 'src/pages/Warranty.tsx', 0.7),
  page('/financing', 'src/pages/Financing.tsx', 0.7),
  page('/real-estate', 'src/pages/RealEstate.tsx', 0.7),
  page('/foundation-quiz', 'src/pages/FoundationQuiz.tsx', 0.6),
  page('/blog', 'src/pages/Blog.tsx', 0.7, 'weekly'),
  page('/privacy', 'src/pages/Privacy.tsx', 0.3, 'yearly'),
];

const blogRoutes: RouteDef[] = blogPosts.map((post) => ({
  path: `/${post.slug}`,
  changefreq: 'yearly',
  priority: 0.7,
  // The post's own data dates it, so no git lookup is needed or wanted.
  lastmod: isoDate(post.updated ?? post.date),
}));

const areaRoutes: RouteDef[] = Object.keys(serviceAreas).map((slug) => ({
  path: `/${slug}`,
  changefreq: 'monthly',
  priority: 0.8,
  source: 'src/data/serviceAreas.ts',
}));

export const routes: RouteDef[] = [...staticRoutes, ...blogRoutes, ...areaRoutes];
