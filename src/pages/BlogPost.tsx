import { useParams, Link, useLocation } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, ArrowLeft } from 'lucide-react';
import { blogPosts } from './Blog';
import { CtaBanner } from '../components/UI';
import Seo from '../components/Seo';
import { blogPostingSchema, clampDescription } from '../lib/seo';

export default function BlogPost() {
  const { slug: paramSlug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const slug = paramSlug ?? pathname.replace(/^\//, '');
  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <Seo title="Post Not Found" description="This blog post could not be found." noindex />
        <div className="text-center">
          <h1 className="font-headline text-4xl text-white mb-4">POST NOT FOUND</h1>
          <Link to="/blog" className="text-royal font-subheading">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={post.title}
        description={clampDescription(post.excerpt)}
        path={`/${post.slug}`}
        image={post.image}
        schema={blogPostingSchema(post)}
      />

      {/* Hero */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link to="/blog" className="text-white/50 hover:text-white text-sm font-subheading flex items-center gap-1 mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="bg-royal text-white text-xs font-subheading font-semibold px-3 py-1 rounded mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="font-headline text-4xl md:text-5xl text-white tracking-wider mb-4">{post.title}</h1>
          <div className="flex items-center gap-3 text-white/50 text-sm font-subheading">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#E8ECF0] pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main article */}
            <article className="lg:col-span-2">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
              <div
                className="prose prose-lg max-w-none text-charcoal"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {post.body.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h3 key={i} className="font-subheading font-bold text-charcoal text-lg mt-6 mb-2">{para.replace(/\*\*/g, '')}</h3>;
                  }
                  if (para.startsWith('- ')) {
                    const items = para.split('\n').filter(l => l.startsWith('- '));
                    return (
                      <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-steel font-subheading">
                        {items.map((item, j) => <li key={j}>{item.replace('- ', '')}</li>)}
                      </ul>
                    );
                  }
                  // Format inline bold
                  const formatted = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                  return <p key={i} className="text-steel font-subheading text-base leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: formatted }} />;
                })}
              </div>
            </article>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-charcoal rounded-lg p-6 text-center sticky top-24">
                <h4 className="font-headline text-xl text-white tracking-wider mb-2">GET A FREE ESTIMATE</h4>
                <p className="text-white/60 text-xs font-subheading mb-4">Ready to fix your foundation? Get a no-obligation estimate today.</p>
                <Link to="/free-estimate" className="bg-royal text-white px-5 py-3 rounded font-subheading font-semibold text-sm hover:bg-royal/90 transition-colors inline-flex items-center gap-2 w-full justify-center">
                  Get Started <ArrowRight size={14} />
                </Link>
                <div className="mt-4 pt-4 border-t border-steel/20">
                  <a href="tel:2254358289" className="text-royal font-headline text-2xl hover:text-white transition-colors">(225) 435-8289</a>
                </div>
              </div>
            </div>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-headline text-2xl text-charcoal tracking-wider mb-6">RELATED ARTICLES</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((p) => (
                  <div key={p.slug} className="bg-white rounded overflow-hidden border-t-4 border-royal shadow-sm">
                    <img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
                    <div className="p-4">
                      <h4 className="font-subheading font-semibold text-charcoal mb-2 text-sm">{p.title}</h4>
                      <Link to={`/${p.slug}`} className="text-royal text-xs font-subheading font-semibold flex items-center gap-1">
                        Read More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
