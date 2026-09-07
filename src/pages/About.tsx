import { CheckCircle, Award, Users, Shield, Heart } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner, StarRating } from '../components/UI';
import Seo from '../components/Seo';

const values = [
  { icon: <Award size={28} />, title: 'Precision', desc: 'Every repair is engineered for Louisiana\'s specific soil conditions — no cookie-cutter solutions.' },
  { icon: <Shield size={28} />, title: 'Transparency', desc: 'Written estimates, clear pricing, and honest assessments. You\'ll always know exactly what\'s happening.' },
  { icon: <CheckCircle size={28} />, title: 'Warranty', desc: 'Our lifetime transferable warranty means we stand behind our work long after the job is done.' },
  { icon: <Heart size={28} />, title: 'Community', desc: 'We live and work in Greater Baton Rouge. Your neighborhood is our neighborhood.' },
];

const testimonials = [
  { text: 'We bought a house to re-sell — the job was completed immediately. We\'re impressed with how quick it was done!', name: 'Chris K.', city: 'Prairieville, LA' },
  { text: 'I would be happy to recommend them to anyone. The job came out just great.', name: 'Mike B.', city: 'St. Amant, LA' },
  { text: 'We were amazed how quickly they came. All the guys are courteous and professional.', name: 'Steve & Debbie W.', city: 'Baton Rouge, LA' },
  { text: 'Premier did an outstanding job on our foundation. The crew was professional and efficient.', name: 'James T.', city: 'Central, LA' },
  { text: 'Best decision we made for our home. Foundation is solid and the warranty gives us peace of mind.', name: 'Patricia M.', city: 'Denham Springs, LA' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Premier Foundation Repair of Baton Rouge"
        description="Locally owned foundation repair contractor serving Greater Baton Rouge with decades of combined experience, licensed crews, and a lifetime warranty."
      />
      <PageHero
        title="ABOUT PREMIER FOUNDATION REPAIR"
        subtitle="Locally owned and operated. Serving Greater Baton Rouge for over 40 years."
        cta={false}
      />

      {/* Story */}
      <section className="bg-charcoal py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>OUR STORY</SectionLabel>
              <h2 className="font-headline text-4xl text-white tracking-wider mb-5">BATON ROUGE BUILT. BATON ROUGE PROUD.</h2>
              <div className="space-y-4 text-white/70 font-subheading leading-relaxed">
                <p>Premier Foundation Repair of Baton Rouge has been protecting Louisiana homes for over 40 years. We started as a small crew with a deep understanding of the unique challenges posed by South Louisiana's expansive Beaumont clay soils.</p>
                <p>Today, we're the Greater Baton Rouge area's trusted foundation repair specialists — but we've never lost the small-company values that built our reputation: honest assessments, fair pricing, and work we're proud to put our name on.</p>
                <p>As a locally owned business, we don't answer to national shareholders. We answer to our neighbors — and that makes all the difference in how we approach every job.</p>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1421081631/photo/basement-waterproofing-worker-sealing-cracks-in-basement-floor-to-prevent-flooding-and-mold.jpg?s=612x612&w=0&k=20&c=6j3wi3PgzhdOqsKvUdoFi6RYw6KzGdOmKZjWsZfT98M="
              alt="Foundation repair crew"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>WHAT WE STAND FOR</SectionLabel>
            <SectionHeading>OUR CORE VALUES</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-blue-border rounded-r p-6">
                <div className="text-royal mb-3">{v.icon}</div>
                <h4 className="font-headline text-xl text-white tracking-wider mb-2">{v.title}</h4>
                <p className="text-white/60 text-sm font-subheading">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-steel/30 rounded overflow-hidden">
            {[
              { n: '40+', label: 'Years of Experience' },
              { n: '139+', label: 'Verified Reviews' },
              { n: '100%', label: 'Licensed & Insured' },
              { n: 'A+', label: 'Reputation' },
            ].map((s) => (
              <div key={s.n} className="border-t-4 border-royal p-6 text-center">
                <div className="font-headline text-4xl text-royal tracking-wider">{s.n}</div>
                <div className="text-white/60 text-sm font-subheading mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>WHAT CLIENTS SAY</SectionLabel>
            <SectionHeading>REAL HOMEOWNERS. REAL RESULTS.</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-charcoal border border-steel/20 rounded-lg p-6">
                <StarRating />
                <p className="text-white/80 font-subheading text-sm leading-relaxed italic mt-3 mb-4">"{t.text}"</p>
                <div className="font-subheading font-semibold text-white text-sm">{t.name}</div>
                <div className="text-white/50 text-xs font-subheading">{t.city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
