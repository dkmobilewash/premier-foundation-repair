import { Link } from 'react-router-dom';
import { Wrench, Layers, Droplets, Zap, CheckCircle, MapPin, ArrowRight, Phone, ShieldCheck, Clock, Award } from 'lucide-react';
import { SectionLabel, GhostNumber, SectionHeading, BlueCard, CtaBanner, StarRating } from '../components/UI';
import Seo from '../components/Seo';

const services = [
  { icon: <Wrench size={28} />, title: 'Slab Foundation Repair', description: 'Precision leveling and stabilization for concrete slab foundations using industry-leading drilled pier methods.', to: '/foundation-repair' },
  { icon: <Layers size={28} />, title: 'Pier & Beam Repair', description: 'Comprehensive raised foundation repair including new pier installation, beam replacement, and moisture barriers.', to: '/pier-and-beam' },
  { icon: <Droplets size={28} />, title: 'Drainage Solutions', description: 'Custom yard drainage systems — catch basins, channel drains, sump pumps, and PVC drain networks.', to: '/drainage' },
  { icon: <Zap size={28} />, title: 'Small Demolition', description: 'Sidewalk, driveway, and patio demolition with haul-away services and under-house debris clearing.', to: '/small-demo' },
];

const features = [
  { title: 'Louisiana Clay Soil Experts', desc: 'We understand the unique expanding and contracting clay soils that cause foundation movement in Baton Rouge.' },
  { title: 'Drilled Pier Method', desc: 'Recommended by structural engineers for permanent stability — not temporary fixes.' },
  { title: 'Transferable Lifetime Warranty', desc: 'Our warranty stays with the home, adding resale value and peace of mind.' },
  { title: 'Flexible Financing', desc: 'Multiple financing options to fit your budget — don\'t delay critical repairs.' },
  { title: 'Free, No-Pressure Estimates', desc: 'Honest assessments with clear pricing. No surprises, no obligation.' },
];

const processSteps = [
  { n: '1', title: 'Free Estimate', desc: 'We assess your foundation at no cost and explain our findings clearly.' },
  { n: '2', title: 'Custom Repair Plan', desc: 'Engineered specifically for Louisiana clay soil conditions and your home\'s needs.' },
  { n: '3', title: 'Expert Installation', desc: 'Licensed crew uses the drilled pier method for permanent, proven results.' },
  { n: '4', title: 'Warranty & Sign-Off', desc: 'Every job backed by our transferable lifetime guarantee.' },
];

const areas = [
  { label: 'Baton Rouge', to: '/baton-rouge' },
  { label: 'Central', to: '/central' },
  { label: 'Denham Springs', to: '/denham-springs' },
  { label: 'Gonzales', to: '/gonzales' },
  { label: 'Hammond', to: '/hammond' },
  { label: 'Pine Grove', to: '/pine-grove' },
  { label: 'Plaquemine', to: '/plaquemine' },
  { label: 'Port Allen', to: '/port-allen' },
  { label: 'Prairieville', to: '/prairieville' },
  { label: 'Zachary', to: '/zachary' },
];

const testimonials = [
  { text: 'We bought a house to re-sell — the job was completed immediately. We\'re impressed with how quick it was done!', name: 'Chris K.', city: 'Prairieville, LA' },
  { text: 'I would be happy to recommend them to anyone. The job came out just great.', name: 'Mike B.', city: 'St. Amant, LA' },
  { text: 'We were amazed how quickly they came. All the guys are courteous and professional.', name: 'Steve & Debbie W.', city: 'Baton Rouge, LA' },
];

const blogPosts = [
  { slug: 'is-it-worth-fixing-foundation', date: 'May 20, 2025', title: 'Is It Worth Fixing the Foundation of a House?', excerpt: 'Foundation repair is a significant investment, but leaving it unfixed can cost far more. Here is how to think about the decision.', image: 'https://images.pexels.com/photos/14535071/pexels-photo-14535071.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'average-cost-foundation-repair-baton-rouge', date: 'Jun 17, 2025', title: 'What Is the Average Cost for Foundation Repair in Baton Rouge?', excerpt: 'Real-world cost ranges for foundation repair in the Baton Rouge area, broken down by severity and scope. Honest numbers.', image: 'https://images.pexels.com/photos/19408681/pexels-photo-19408681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { slug: 'will-house-insurance-pay-for-foundation-repair', date: 'Jun 3, 2025', title: 'Will House Insurance Pay for Foundation Repair?', excerpt: 'Most standard insurance does not cover settling — but there are important exceptions every Baton Rouge homeowner should know.', image: 'https://images.pexels.com/photos/7735624/pexels-photo-7735624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Premier Foundation Repair of Baton Rouge | Free Estimates"
        description="Foundation repair, pier and beam leveling, and yard drainage in Baton Rouge, LA. Free estimates, licensed and insured, lifetime transferable warranty."
        bareTitle
      />

      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col justify-center bg-charcoal overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #1A1F2E 0%, #0D1F4C 60%, #1A1F2E 100%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-32 flex flex-col items-center text-center">
          <div className="section-label justify-center mb-6 text-royal">
            <span className="px-3 text-xs font-semibold tracking-widest uppercase">BATON ROUGE, LOUISIANA</span>
          </div>

          <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-white tracking-wider leading-none mb-6">
            PREMIER<br />
            <span className="text-royal">FOUNDATION</span><br />
            REPAIR
          </h1>

          <p className="text-white/70 font-subheading text-lg md:text-xl max-w-2xl mb-10">
            Protecting Baton Rouge homes with precision engineering and a lifetime warranty.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/free-estimate"
              className="bg-royal hover:bg-royal/90 text-white px-10 py-4 font-subheading font-semibold flex items-center gap-2 transition-colors rounded text-lg"
            >
              GET A FREE ESTIMATE <ArrowRight size={18} />
            </Link>
            <a
              href="tel:2254358289"
              className="border-2 border-steel/70 hover:border-white text-white px-10 py-4 font-subheading font-semibold flex items-center gap-2 transition-colors rounded text-lg"
            >
              <Phone size={18} /> CALL (225) 435-8289
            </a>
          </div>

          {/* Hero stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 w-full max-w-3xl border border-steel/30 rounded overflow-hidden">
            {[
              { top: 'FREE', bottom: 'Estimates' },
              { top: 'LIFETIME', bottom: 'Warranty' },
              { top: '40+', bottom: 'Years Experience' },
              { top: '100%', bottom: 'Licensed & Insured' },
            ].map((s) => (
              <div key={s.top} className="bg-navy/60 border-t-2 border-royal p-4 text-center">
                <div className="font-headline text-2xl text-white tracking-wider">{s.top}</div>
                <div className="text-xs text-white/60 font-subheading mt-1">{s.bottom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#E8ECF0] pt-24 pb-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <SectionLabel>OUR SERVICES</SectionLabel>
            <SectionHeading light>EVERYTHING YOUR FOUNDATION NEEDS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <BlueCard key={s.title} icon={s.icon} title={s.title} description={s.description} linkTo={s.to} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY PREMIER */}
      <section className="bg-navy pt-24 pb-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <SectionLabel>WHY CHOOSE US</SectionLabel>
            <SectionHeading>BUILT ON PRECISION. BACKED BY WARRANTY.</SectionHeading>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Features list */}
            <div className="space-y-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-royal/20 rounded flex items-center justify-center text-royal">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-subheading font-semibold text-white">{f.title}</h4>
                    <p className="text-white/60 text-sm font-subheading">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-charcoal border border-steel/30 rounded-lg p-8 space-y-8">
              {[
                { n: '40+', label: 'Years Serving Baton Rouge' },
                { n: '139+', label: 'Verified Google Reviews' },
                { n: '100%', label: 'Customer Satisfaction Goal' },
              ].map((s) => (
                <div key={s.n} className="border-b border-steel/20 pb-6 last:border-0 last:pb-0">
                  <div className="font-headline text-6xl text-royal tracking-wider">{s.n}</div>
                  <div className="text-white/70 font-subheading mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-[#E8ECF0] pt-24 pb-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="03" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <SectionHeading light>OUR 4-STEP PROCESS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-16 h-16 rounded-full bg-royal flex items-center justify-center font-headline text-2xl text-white mx-auto mb-4">
                  {s.n}
                </div>
                <h4 className="font-headline text-xl text-charcoal tracking-wider mb-2">{s.title}</h4>
                <p className="text-steel text-sm font-subheading">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/our-process" className="text-royal font-subheading font-semibold flex items-center gap-1 justify-center hover:gap-2 transition-all">
              Learn More About Our Process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="bg-charcoal pt-24 pb-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="04" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <SectionLabel>WHERE WE WORK</SectionLabel>
            <SectionHeading>SERVING GREATER BATON ROUGE</SectionHeading>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {areas.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="bg-navy border border-steel/30 hover:border-royal rounded p-4 text-center text-white font-subheading font-semibold transition-colors group"
              >
                <MapPin size={18} className="mx-auto mb-2 text-steel group-hover:text-royal transition-colors" />
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-royal pt-24 pb-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="05" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-3" style={{ '--tw-border-opacity': 1 } as React.CSSProperties}>
              <div className="flex items-center gap-3 text-xs font-semibold tracking-widest uppercase text-white">
                <span className="flex-1 border-t border-white/40 max-w-[60px]" />
                <span>WHAT CLIENTS SAY</span>
                <span className="flex-1 border-t border-white/40 max-w-[60px]" />
              </div>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl text-white tracking-wider">REAL RESULTS FOR REAL HOMEOWNERS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-navy rounded-lg p-6 flex flex-col gap-4">
                <StarRating />
                <p className="text-white/80 font-subheading text-sm leading-relaxed italic flex-1">"{t.text}"</p>
                <div>
                  <div className="font-subheading font-semibold text-white">{t.name}</div>
                  <div className="text-white/50 text-xs font-subheading">{t.city}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[1,2,3,4].map(i => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-5 h-5" viewBox="0 0 20 20">
                <defs><linearGradient id="half"><stop offset="80%" stopColor="#facc15" /><stop offset="80%" stopColor="#ffffff40" /></linearGradient></defs>
                <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-white font-subheading font-semibold">4.8 ★ | 139+ Google Reviews</span>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="bg-[#E8ECF0] pt-24 pb-32 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="06" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <SectionLabel>LATEST RESOURCES</SectionLabel>
            <SectionHeading light>FOUNDATION TIPS FOR BATON ROUGE HOMEOWNERS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((p) => (
              <div key={p.slug} className="bg-white rounded overflow-hidden border-t-4 border-royal shadow-sm">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-5">
                  <span className="text-xs text-steel font-subheading">{p.date}</span>
                  <h4 className="font-subheading font-semibold text-charcoal mt-1 mb-2">{p.title}</h4>
                  <p className="text-steel text-sm font-subheading mb-4">{p.excerpt}</p>
                  <Link to={`/${p.slug}`} className="text-royal text-sm font-subheading font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="section-label mb-3">
                <span className="px-3 text-xs font-semibold tracking-widest uppercase text-royal">FIND US</span>
              </div>
              <h2 className="font-headline text-4xl md:text-5xl text-white tracking-wider mb-4">
                LOCATED IN<br />BATON ROUGE
              </h2>
              <p className="text-white/70 font-subheading mb-6 leading-relaxed">
                Serving homeowners across Greater Baton Rouge and surrounding parishes. Stop by or give us a call to schedule your free foundation inspection.
              </p>
              <div className="space-y-3 text-white/80 font-subheading text-sm">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-royal shrink-0" />
                  <span>670 O'Neal Ln, Baton Rouge, LA 70816</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-royal shrink-0" />
                  <a href="tel:2254358289" className="hover:text-royal transition-colors">(225) 435-8289</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-royal shrink-0" />
                  <span>Mon–Fri 7:00am – 6:00pm</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border-2 border-steel/30 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.375945172674!2d-91.01142442443029!3d30.458659674717698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8626bc430ec1d4d5%3A0xa8b3119375c4cba2!2s670%20O&#39;Neal%20Ln%2C%20Baton%20Rouge%2C%20LA%2070816!5e1!3m2!1sen!2sus!4v1780374716087!5m2!1sen!2sus"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Premier Foundation Repair of Baton Rouge location"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
