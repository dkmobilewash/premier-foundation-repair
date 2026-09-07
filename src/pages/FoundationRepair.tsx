import { Link } from 'react-router-dom';
import { Wrench, Layers, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, BlueCard, CtaBanner } from '../components/UI';

const signs = [
  { icon: <AlertTriangle size={24} />, title: 'Cracks in Walls or Ceilings', desc: 'Diagonal cracks at door and window corners are a classic sign of foundation movement.' },
  { icon: <AlertTriangle size={24} />, title: 'Sticking Doors or Windows', desc: 'When frames shift, doors and windows bind or fail to latch properly.' },
  { icon: <AlertTriangle size={24} />, title: 'Uneven or Sloping Floors', desc: 'Floors that feel bouncy, spongy, or visibly slope indicate structural settlement.' },
  { icon: <AlertTriangle size={24} />, title: 'Gaps Between Walls and Trim', desc: 'Separation between crown molding, baseboards, and walls signals movement.' },
  { icon: <AlertTriangle size={24} />, title: 'Cracks in the Foundation Slab', desc: 'Visible cracks in concrete slabs, especially horizontal or stair-step patterns.' },
  { icon: <AlertTriangle size={24} />, title: 'Water Intrusion Near Foundation', desc: 'Moisture or pooling water near the foundation accelerates soil movement.' },
];

export default function FoundationRepair() {
  return (
    <>
      <title>Slab Foundation Repair Baton Rouge | Premier Foundation Repair | (225) 435-8289</title>
      <PageHero
        title="SLAB FOUNDATION REPAIR IN BATON ROUGE"
        subtitle="Louisiana's expanding clay soils demand precision engineering. We deliver permanent solutions with a lifetime warranty."
      />

      {/* Sub-service cards */}
      <section className="bg-charcoal pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BlueCard
              icon={<Wrench size={28} />}
              title="Slab Foundation Repair"
              description="Concrete slab foundation leveling and stabilization using the drilled pier method. Permanent correction for settling, cracking, and water intrusion issues common in Louisiana's clay-rich soils."
              linkTo="/foundation-repair"
            />
            <BlueCard
              icon={<Layers size={28} />}
              title="Pier & Beam Repair"
              description="Raised home foundation repair for older construction — new pier installation, beam and joist replacement, moisture barriers, and vent installation with a 16-inch minimum clearance requirement."
              linkTo="/pier-and-beam"
            />
          </div>
        </div>
      </section>

      {/* Louisiana soil section */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>THE LOUISIANA CHALLENGE</SectionLabel>
            <SectionHeading>WHY BATON ROUGE FOUNDATIONS FAIL</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-white/70 font-subheading leading-relaxed">
              <p>Greater Baton Rouge sits on highly expansive Beaumont clay soil. During wet seasons, this clay absorbs water and expands — pushing against your foundation. During dry spells, it shrinks and contracts, causing voids beneath your slab.</p>
              <p>This constant movement — called <strong className="text-white">differential settlement</strong> — is the #1 cause of foundation problems in Louisiana. Unlike other states, our soils require specialized repair methods designed for extreme volume change.</p>
              <p>Standard pressed pile repairs can fail in Louisiana's soils. That's why our structural engineers recommend the <strong className="text-white">drilled pier method</strong>, which anchors into stable soil or bedrock far below the active clay layer.</p>
            </div>
            <div className="space-y-4">
              <img
                src="https://media.istockphoto.com/id/1818587262/photo/a-house-foundation-that-cracks-due-to-unstable-soil-conditions.jpg?s=612x612&w=0&k=20&c=uGR1G0lqF0SlFI1uroZfunkREZMdbdh3nDe8FHbAIGo="
                alt="House foundation cracks from unstable soil"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="bg-charcoal border-l-4 border-royal rounded-r p-5 space-y-3">
                {[
                  { label: 'Soil Type', val: 'Beaumont Expansive Clay' },
                  { label: 'Swell Potential', val: 'High (4–8%)' },
                  { label: 'Recommended Method', val: 'Drilled Pier' },
                  { label: 'Warranty', val: 'Lifetime Transferable' },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between border-b border-steel/20 pb-2.5 last:border-0">
                    <span className="text-white/60 font-subheading text-sm">{r.label}</span>
                    <span className="text-white font-subheading font-semibold text-sm">{r.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drilled pier method */}
      <section className="bg-charcoal py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>OUR METHOD</SectionLabel>
            <SectionHeading>THE DRILLED PIER METHOD</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', title: 'Site Preparation', desc: 'We excavate around the foundation perimeter at each pier location.' },
              { n: '02', title: 'Drill to Stable Soil', desc: 'Holes are drilled deep into competent soil or bedrock, bypassing the active clay layer.' },
              { n: '03', title: 'Pour Concrete Pier', desc: 'Reinforced concrete is poured and cured, creating a permanent pier.' },
              { n: '04', title: 'Lift & Stabilize', desc: 'Hydraulic jacks lift the foundation to the optimal position, then locked in place.' },
            ].map((s) => (
              <div key={s.n} className="card-blue-border rounded-r p-5">
                <div className="font-headline text-4xl text-royal/40 tracking-wider mb-2">{s.n}</div>
                <h4 className="font-headline text-lg text-white tracking-wider mb-2">{s.title}</h4>
                <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs you need repair */}
      <section className="bg-[#E8ECF0] py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="03" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>WARNING SIGNS</SectionLabel>
            <SectionHeading light>SIGNS YOU NEED FOUNDATION REPAIR</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {signs.map((s) => (
              <div key={s.title} className="bg-charcoal border-l-4 border-royal rounded-r p-5 flex gap-3">
                <div className="text-royal shrink-0 mt-0.5">{s.icon}</div>
                <div>
                  <h4 className="font-subheading font-semibold text-white mb-1">{s.title}</h4>
                  <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methods comparison */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="04" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>COMPARISON</SectionLabel>
            <SectionHeading>METHOD COMPARISON</SectionHeading>
          </div>
          <div className="overflow-x-auto rounded-lg border border-steel/30">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy">
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Method</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Cost</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Permanence</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Best For</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Warranty</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { method: 'Drilled Pier', cost: '$$$$', perm: 'Permanent', best: 'All Louisiana soil types', warranty: 'Lifetime', highlight: true },
                  { method: 'Pressed Concrete Pile', cost: '$$$', perm: 'Moderate', best: 'Stable soil only', warranty: 'Limited', highlight: false },
                  { method: 'Helical Pier', cost: '$$$$$', perm: 'Very High', best: 'Soft soils, additions', warranty: 'Varies', highlight: false },
                ].map((r, i) => (
                  <tr key={r.method} className={`border-t border-steel/20 ${r.highlight ? 'bg-royal/10' : i % 2 === 0 ? 'bg-charcoal/40' : 'bg-charcoal/20'}`}>
                    <td className="px-4 py-3 font-subheading font-semibold text-white">
                      {r.method}
                      {r.highlight && <span className="ml-2 text-xs bg-royal text-white px-2 py-0.5 rounded font-subheading">RECOMMENDED</span>}
                    </td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{r.cost}</td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{r.perm}</td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{r.best}</td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{r.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link to="/foundation-repair-methods" className="text-royal font-subheading font-semibold flex items-center gap-1 justify-center hover:gap-2 transition-all">
              Compare All Methods In Detail <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Warranty callout */}
      <section className="bg-royal py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <CheckCircle size={48} className="text-white mx-auto mb-4" />
          <h2 className="font-headline text-4xl text-white tracking-wider mb-3">LIFETIME TRANSFERABLE WARRANTY</h2>
          <p className="text-white/80 font-subheading mb-6">Every slab foundation repair we complete is backed by our industry-leading lifetime warranty — transferable to future homeowners.</p>
          <Link to="/warranty" className="bg-white text-royal px-8 py-3 font-subheading font-semibold rounded hover:bg-white/90 transition-colors inline-flex items-center gap-2">
            View Warranty Details <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
