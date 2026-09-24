import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Truck } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';
import Seo from '../components/Seo';

export default function SmallDemo() {
  return (
    <>
      <Seo
        title="Small Demolition Services in Baton Rouge"
        description="Small demolition in Baton Rouge: concrete driveways, patios, slabs, sheds, and interior tear-outs. Licensed, insured, and cleaned up when we leave."
      />
      <PageHero
        title="SMALL DEMOLITION SERVICES — BATON ROUGE"
        subtitle="Concrete and asphalt demolition, haul-away, and under-house debris clearing for residential properties."
        bg="bg-charcoal"
      />

      {/* Services */}
      <section className="bg-navy py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>WHAT WE DEMO</SectionLabel>
            <SectionHeading>SMALL DEMOLITION SERVICES</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Sidewalk Demolition', desc: 'Breaking and removal of concrete sidewalks, pathways, and walkways, including all debris haul-away.' },
              { title: 'Driveway Demolition', desc: 'Concrete and asphalt driveway removal. We can handle full driveway tearouts to prepare for new installations.' },
              { title: 'Patio Demolition', desc: 'Concrete slab patio tearouts, including stamped concrete, to reclaim your outdoor space.' },
              { title: 'Concrete & Asphalt Breakdown', desc: 'General concrete and asphalt cutting, breaking, and removal for residential projects.' },
              { title: 'Debris Haul-Away', desc: 'Complete cleanup and haul-away of all demolition debris so your property is clean when we\'re done.' },
              { title: 'Under-House Debris Clearing', desc: 'Removal of old materials, accumulated debris, and hazardous material from crawl spaces before pier & beam work.' },
            ].map((s) => (
              <div key={s.title} className="card-blue-border rounded-r p-5">
                <Wrench size={20} className="text-royal mb-3" />
                <h4 className="font-headline text-lg text-white tracking-wider mb-2">{s.title}</h4>
                <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment callout */}
      <section className="bg-charcoal py-16 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="bg-navy border border-royal/40 rounded-lg overflow-hidden flex flex-col md:flex-row gap-0">
            <img
              src="https://media.istockphoto.com/id/1406593513/photo/close-up-of-demolition-hammer-with-dust-and-sparks-and-broken-concrete-pieces.jpg?s=612x612&w=0&k=20&c=VvxWIkXt1UzCiJY5fAypVClhwSpG5TCuU-wYEyyJ44c="
              alt="Demolition hammer in action"
              className="w-full md:w-56 h-48 md:h-auto object-cover shrink-0"
            />
            <div className="p-8 flex gap-5 items-start">
            <Truck size={36} className="text-royal shrink-0 mt-1" />
            <div>
              <h3 className="font-headline text-2xl text-white tracking-wider mb-3">OUR EQUIPMENT</h3>
              <p className="text-white/70 font-subheading text-sm leading-relaxed mb-4">
                We use professional-grade equipment to handle residential demolition work efficiently and safely:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Auger on Skid-Steer — for precision drilling and post-hole work',
                  'Bobcat Loader — for material handling, grading, and debris removal',
                  'Jackhammers & Concrete Saws — for precise concrete cutting',
                  'Haul trucks — complete debris removal and site cleanup',
                ].map((e) => (
                  <div key={e} className="flex gap-2 items-start text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-royal shrink-0 mt-2" />
                    <span className="text-white/70 font-subheading">{e}</span>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety section */}
      <section className="bg-navy py-16 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <SectionLabel>SAFETY & PROCESS</SectionLabel>
          <h2 className="font-headline text-3xl text-white tracking-wider mb-5">HOW WE WORK SAFELY</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Utility Locating', desc: 'We verify underground utility locations before any digging or demolition begins.' },
              { title: 'Dust & Debris Control', desc: 'Water misting and containment procedures minimize dust and debris migration.' },
              { title: 'Property Protection', desc: 'We protect adjacent structures, landscaping, and surfaces not scheduled for demo.' },
              { title: 'Licensed & Insured', desc: 'All demolition work is performed by licensed, insured professionals.' },
            ].map((s) => (
              <div key={s.title} className="flex gap-3 items-start">
                <div className="w-8 h-8 bg-royal/20 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-royal text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-subheading font-semibold text-white text-sm">{s.title}</h4>
                  <p className="text-white/60 text-xs font-subheading">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner headline="NEED SOMETHING DEMOLISHED?" sub="Get a free estimate for your residential demolition or haul-away project." />
    </>
  );
}
