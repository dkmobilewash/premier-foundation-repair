import { CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';

export default function PierAndBeam() {
  return (
    <>
      <title>Pier & Beam Foundation Repair Baton Rouge | Premier Foundation Repair</title>
      <PageHero
        title="PIER & BEAM FOUNDATION REPAIR"
        subtitle="Expert raised foundation repair for older Louisiana homes — permanent solutions with industry-leading warranty."
      />

      {/* What is pier & beam */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>ABOUT PIER & BEAM</SectionLabel>
              <h2 className="font-headline text-4xl text-white tracking-wider mb-4">WHAT IS PIER & BEAM CONSTRUCTION?</h2>
              <div className="space-y-4 text-white/70 font-subheading leading-relaxed">
                <p>Pier and beam foundations — also called raised foundations — are common in older Baton Rouge homes built before the 1960s. The home sits elevated above the ground on a network of concrete piers and wood beams, creating a crawl space underneath.</p>
                <p>This design offers excellent ventilation and easy access to plumbing and electrical systems. However, the wood components are vulnerable to moisture damage, insect infestation, and settling piers over time.</p>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/1638300486/photo/construction-site-insulation-of-a-buildings-foundation.jpg?s=612x612&w=0&k=20&c=oocJLHF_Dj-2alBVQXyUM0mBK2SsO6hFeyqLM8uDa3g="
              alt="Foundation crawl space"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Signs of damage */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>WARNING SIGNS</SectionLabel>
            <SectionHeading>SIGNS OF PIER & BEAM DAMAGE</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Sagging or Bouncy Floors', desc: 'Floors that flex or bounce when walked on indicate failed beams or joists.' },
              { title: 'Moisture & Mold in Crawl Space', desc: 'Visible moisture, staining, or mold growth under the home accelerates wood decay.' },
              { title: 'Rotting Joists or Beams', desc: 'Wood rot from prolonged moisture exposure compromises the structural integrity of the floor system.' },
              { title: 'Settling or Leaning Piers', desc: 'Concrete block piers can settle unevenly, causing the floor to tilt or dip.' },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 bg-charcoal border-l-4 border-royal rounded-r p-5">
                <AlertTriangle size={22} className="text-royal shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-subheading font-semibold text-white mb-1">{s.title}</h4>
                  <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-charcoal py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>OUR SERVICES</SectionLabel>
            <SectionHeading>PIER & BEAM REPAIR SERVICES</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'New Pier Installation', desc: 'Install new concrete piers to correct settling and restore proper floor level.' },
              { title: 'Beam Replacement', desc: 'Replace rotted or damaged main beams and floor joists with new lumber.' },
              { title: 'Moisture Barrier Installation', desc: 'Heavy-duty vapor barriers seal moisture out of the crawl space environment.' },
              { title: 'Crawl Space Vent Installation', desc: 'Proper ventilation prevents the moisture buildup that destroys wood components.' },
              { title: 'Concrete Block Support', desc: 'Additional support blocks placed strategically to eliminate floor flex and bounce.' },
              { title: 'Under-House Debris Clearing', desc: 'Remove old materials, debris, and hazardous material from the crawl space.' },
            ].map((s) => (
              <div key={s.title} className="card-blue-border rounded-r p-5">
                <CheckCircle size={20} className="text-royal mb-3" />
                <h4 className="font-headline text-lg text-white tracking-wider mb-2">{s.title}</h4>
                <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clearance notice */}
      <section className="bg-navy py-12">
        <div className="max-w-4xl mx-auto px-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZC822WS6TQqbmzIX8ggp9b8Y98RNeC5AR2g&s"
            alt="Foundation pier installation work"
            className="w-full h-52 object-cover rounded-lg mb-6"
          />
          <div className="bg-royal/10 border border-royal rounded-lg p-6 flex gap-4">
            <Info size={28} className="text-royal shrink-0 mt-0.5" />
            <div>
              <h4 className="font-subheading font-semibold text-white mb-2">Clearance Requirement Notice</h4>
              <p className="text-white/70 font-subheading text-sm">
                <strong className="text-white">We require a minimum of 16 inches from the ground to the floor joist</strong> to perform pier and beam foundation work. Please mention this when scheduling your free estimate so we can assess your home's crawl space clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty */}
      <section className="bg-charcoal py-16 text-center" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <SectionLabel>WARRANTY</SectionLabel>
          <h2 className="font-headline text-4xl text-white tracking-wider mb-4">10-YEAR LIMITED WARRANTY</h2>
          <p className="text-white/70 font-subheading mb-6">Pier and beam repair work is backed by our 10-year limited warranty. Ask about our lifetime warranty options for combined slab and pier work.</p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
