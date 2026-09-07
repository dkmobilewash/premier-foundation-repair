import { CheckCircle } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';

const methods = [
  {
    title: 'Drilled Pier',
    recommended: true,
    cost: '$$$$',
    permanence: 'Permanent',
    bestFor: 'All Louisiana soil types',
    warranty: 'Lifetime',
    description: 'Deep concrete piers drilled past active clay layer into stable soil. The gold standard for Louisiana foundations.',
    pros: ['Recommended by structural engineers', 'Works in all soil conditions', 'Lifetime warranty eligible', 'No pier migration risk'],
  },
  {
    title: 'Pressed Concrete Pile',
    recommended: false,
    cost: '$$$',
    permanence: 'Moderate',
    bestFor: 'Stable soil conditions only',
    warranty: 'Limited',
    description: 'Hydraulically pressed precast concrete cylinders. Lower cost but higher risk of migration in Louisiana clay.',
    pros: ['Lower upfront cost', 'Faster installation', 'Widely available', 'OK for stable soils'],
  },
  {
    title: 'Helical Pier',
    recommended: false,
    cost: '$$$$$',
    permanence: 'Very High',
    bestFor: 'Soft soils, new additions',
    warranty: 'Varies',
    description: 'Steel screw piles with helical flights that anchor into stable strata. Ideal for new construction and additions.',
    pros: ['Immediate load bearing', 'Low vibration installation', 'Excellent for soft soils', 'Used in commercial work'],
  },
];

export default function FoundationRepairMethods() {
  return (
    <>
      <title>Foundation Repair Methods Compared | Premier Foundation Repair Baton Rouge</title>
      <PageHero
        title="FOUNDATION REPAIR METHODS COMPARED"
        subtitle="Understand the difference between drilled piers, pressed piles, and helical piers before you commit to a repair."
      />

      {/* Method cards */}
      <section className="bg-charcoal py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>THE OPTIONS</SectionLabel>
            <SectionHeading>THREE MAIN REPAIR METHODS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {methods.map((m) => (
              <div key={m.title} className={`rounded-r p-6 border-l-4 ${m.recommended ? 'border-royal bg-royal/10' : 'border-steel/30 bg-navy/50'}`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-headline text-xl text-white tracking-wider">{m.title}</h3>
                  {m.recommended && <span className="text-xs bg-royal text-white px-2 py-1 rounded font-subheading">RECOMMENDED</span>}
                </div>
                <p className="text-white/60 text-sm font-subheading mb-4">{m.description}</p>
                <ul className="space-y-2">
                  {m.pros.map((p) => (
                    <li key={p} className="flex gap-2 text-sm">
                      <CheckCircle size={15} className={m.recommended ? 'text-royal shrink-0 mt-0.5' : 'text-steel/60 shrink-0 mt-0.5'} />
                      <span className="text-white/70 font-subheading">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>SIDE BY SIDE</SectionLabel>
            <SectionHeading>FULL COMPARISON TABLE</SectionHeading>
          </div>
          <div className="overflow-x-auto rounded-lg border border-steel/30">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-charcoal">
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Method</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Cost</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Permanence</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Best For</th>
                  <th className="px-4 py-3 text-left font-subheading font-semibold text-white/70">Warranty</th>
                </tr>
              </thead>
              <tbody>
                {methods.map((m, i) => (
                  <tr key={m.title} className={`border-t border-steel/20 ${m.recommended ? 'bg-royal/10' : i % 2 === 0 ? 'bg-charcoal/20' : 'bg-charcoal/10'}`}>
                    <td className="px-4 py-3 font-subheading font-semibold text-white">
                      {m.title}
                      {m.recommended && <span className="ml-2 text-xs bg-royal text-white px-1.5 py-0.5 rounded">RECOMMENDED</span>}
                    </td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{m.cost}</td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{m.permanence}</td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{m.bestFor}</td>
                    <td className="px-4 py-3 text-white/70 font-subheading">{m.warranty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why drilled piers */}
      <section className="bg-charcoal py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="mb-8">
            <SectionLabel>OUR RECOMMENDATION</SectionLabel>
            <SectionHeading>WHY WE USE DRILLED PIERS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-white/70 font-subheading leading-relaxed">
              <p>After years of foundation repair work in Louisiana's notoriously challenging clay soils, we've seen what works and what doesn't. Pressed concrete piles — while cheaper upfront — have a higher failure rate in our region because they don't reach stable soil consistently.</p>
              <p>The drilled pier method anchors your foundation into competent soil or rock far below the active clay zone. This means no pier migration, no settling back down, and no repeat repairs.</p>
              <p>Every job we complete with drilled piers qualifies for our <strong className="text-white">lifetime transferable warranty</strong> — something we can only offer because we're confident in the method's permanence.</p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/2275046549/photo/repair-of-an-old-foundation-formwork-from-osb-sheets-and-wooden-boards-around-the-old.jpg?s=612x612&w=0&k=20&c=y-LpekjSQsIw6MMDPcTZW5U654uLLniI0B5uFbXUBhI="
                alt="Foundation repair formwork installation"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
