import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';

interface DrainageSubPageProps {
  title: string;
  subtitle: string;
  description: string;
  howItWorks: { step: string; desc: string }[];
  benefits: string[];
  installation: { n: string; title: string; desc: string }[];
  image?: string;
}

export default function DrainageSubPage({
  title,
  subtitle,
  description,
  howItWorks,
  benefits,
  installation,
  image,
}: DrainageSubPageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} />

      {/* Description */}
      <section className="bg-charcoal py-16">
        <div className="max-w-4xl mx-auto px-4">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          )}
          <p className="text-white/70 font-subheading text-lg leading-relaxed">{description}</p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <SectionHeading>THE PROCESS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {howItWorks.map((h, i) => (
              <div key={i} className="card-blue-border rounded-r p-5">
                <h4 className="font-subheading font-semibold text-white mb-2">{h.step}</h4>
                <p className="text-white/60 text-sm font-subheading">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-charcoal py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="mb-10">
            <SectionLabel>BENEFITS</SectionLabel>
            <SectionHeading>WHY HOMEOWNERS CHOOSE THIS SOLUTION</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {benefits.map((b) => (
              <div key={b} className="flex gap-3 items-start">
                <CheckCircle size={20} className="text-royal shrink-0 mt-0.5" />
                <span className="text-white/80 font-subheading">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation process */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="03" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>INSTALLATION</SectionLabel>
            <SectionHeading>OUR INSTALLATION PROCESS</SectionHeading>
          </div>
          <div className="space-y-4">
            {installation.map((s) => (
              <div key={s.n} className="flex gap-5 items-start bg-charcoal border border-steel/20 rounded-lg p-5">
                <div className="w-10 h-10 bg-royal rounded-full flex items-center justify-center font-headline text-white shrink-0">
                  {s.n}
                </div>
                <div>
                  <h4 className="font-subheading font-semibold text-white mb-1">{s.title}</h4>
                  <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-charcoal py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>RESULTS</SectionLabel>
            <SectionHeading>BEFORE & AFTER</SectionHeading>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src="https://media.istockphoto.com/id/2167164749/photo/repairing-old-district-heating-pipeline-in-concrete-trench.jpg?s=612x612&w=0&k=20&c=D3s7SoO3GYco_mVPSUDzRdJ2erbwupXj4puyc0vTAG0="
                alt="Before drainage installation"
                className="w-full h-full object-cover opacity-80"
              />
              <span className="absolute bottom-3 left-3 bg-charcoal/80 text-white font-headline text-sm px-3 py-1 rounded tracking-wider">BEFORE</span>
            </div>
            <div className="relative rounded-lg overflow-hidden h-48">
              <img
                src="https://media.istockphoto.com/id/2197902243/photo/water-management-system-takes-shape-underground-professional-sump-pump-and-drainage.jpg?s=612x612&w=0&k=20&c=Ocl9mEVYUIymqJLGBPD7pFQgv0iiqcD__O20rQ5MxFc="
                alt="After drainage installation"
                className="w-full h-full object-cover opacity-90"
              />
              <span className="absolute bottom-3 left-3 bg-royal/80 text-white font-headline text-sm px-3 py-1 rounded tracking-wider">AFTER</span>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        headline="READY TO FIX YOUR DRAINAGE?"
        sub="Get a free drainage estimate from Baton Rouge's trusted foundation and drainage specialists."
      />
    </>
  );
}
