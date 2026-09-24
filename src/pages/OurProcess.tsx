import { CheckCircle } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';
import Seo from '../components/Seo';

const stepImages: Record<string, string> = {
  '01': 'https://media.istockphoto.com/id/1818587262/photo/a-house-foundation-that-cracks-due-to-unstable-soil-conditions.jpg?s=612x612&w=0&k=20&c=uGR1G0lqF0SlFI1uroZfunkREZMdbdh3nDe8FHbAIGo=',
  '02': 'https://media.istockphoto.com/id/1638300486/photo/construction-site-insulation-of-a-buildings-foundation.jpg?s=612x612&w=0&k=20&c=oocJLHF_Dj-2alBVQXyUM0mBK2SsO6hFeyqLM8uDa3g=',
  '03': 'https://media.istockphoto.com/id/1397739479/photo/hispanic-men-working-on-a-new-concrete-driveway.jpg?s=612x612&w=0&k=20&c=CkvVFzKjCNnbAi5lyNUf8OjxHwR6dACp-BwjQRVI3E0=',
  '04': 'https://media.istockphoto.com/id/2275046549/photo/repair-of-an-old-foundation-formwork-from-osb-sheets-and-wooden-boards-around-the-old.jpg?s=612x612&w=0&k=20&c=y-LpekjSQsIw6MMDPcTZW5U654uLLniI0B5uFbXUBhI=',
};

const steps = [
  {
    n: '01',
    title: 'Free Estimate',
    body: 'We start with a thorough free assessment of your foundation. Our estimator will walk your home, inspect the interior and exterior, measure elevations, and explain exactly what they find — in plain language, not industry jargon. There\'s no obligation and no pressure. You get a written scope of work and price before any decision is made.',
    detail: ['Interior crack mapping', 'Exterior foundation inspection', 'Floor elevation measurement', 'Drainage assessment', 'Written estimate with full scope'],
  },
  {
    n: '02',
    title: 'Custom Repair Plan',
    body: 'Every foundation in Baton Rouge is different. Soil conditions, load distribution, drainage patterns, and home age all factor into the repair design. We don\'t use a one-size-fits-all approach — your repair plan is engineered specifically for your home\'s conditions and Louisiana\'s unique clay soil challenges.',
    detail: ['Engineer-reviewed pier layout', 'Soil condition analysis', 'Load distribution planning', 'Drainage integration if needed', 'Timeline and milestone schedule'],
  },
  {
    n: '03',
    title: 'Expert Installation',
    body: 'Our licensed crew uses the drilled pier method — the most permanent solution available for Louisiana\'s expansive clay soils. Work is typically completed in 1–3 days for most homes. We protect your landscaping, minimize disruption, and clean up completely when finished.',
    detail: ['Licensed, background-checked crew', 'Drilled pier method standard', 'Hydraulic leveling to optimal position', 'Daily progress updates', 'Full site cleanup'],
  },
  {
    n: '04',
    title: 'Warranty & Sign-Off',
    body: 'When the job is complete, you\'ll receive our written lifetime transferable warranty documentation. We walk you through what was done, show you the before/after elevation data, and explain exactly what the warranty covers. You\'re not just paying for repairs — you\'re investing in a documented, warranted, permanent solution.',
    detail: ['Lifetime transferable warranty issued', 'Before/after elevation report', 'Photos of completed work', 'Warranty transfer instructions', 'Direct contact for any future questions'],
  },
];

export default function OurProcess() {
  return (
    <>
      <Seo
        title="Our Foundation Repair Process"
        description="What to expect from your Baton Rouge foundation repair, step by step: free assessment, written estimate, drilled pier installation, and final elevation check."
      />
      <PageHero
        title="OUR 4-STEP PROCESS"
        subtitle="No surprises. No pressure. Just a clear, honest path to a permanent foundation solution."
        cta={false}
      />

      {/* Steps */}
      <div>
        {steps.map((s, i) => (
          <section
            key={s.n}
            className={`py-20 relative overflow-hidden ${i % 2 === 0 ? 'bg-charcoal' : 'bg-navy'}`}
            style={i > 0 ? { clipPath: 'polygon(0 3%, 100% 0, 100% 97%, 0 100%)' } : undefined}
          >
            <GhostNumber n={s.n} />
            <div className="max-w-5xl mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <div>
                  <div className="w-16 h-16 rounded-full bg-royal flex items-center justify-center font-headline text-2xl text-white mb-6">
                    {parseInt(s.n, 10)}
                  </div>
                  <SectionLabel>STEP {s.n}</SectionLabel>
                  <h2 className="font-headline text-4xl text-white tracking-wider mb-4">{s.title}</h2>
                  <p className="text-white/70 font-subheading leading-relaxed">{s.body}</p>
                </div>
                <div className="space-y-4">
                  {stepImages[s.n] && (
                    <img
                      src={stepImages[s.n]}
                      alt={s.title}
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                  )}
                  <div className="bg-charcoal/50 border border-steel/20 rounded-lg p-6 space-y-3">
                    <h4 className="font-subheading font-semibold text-white mb-4">What's Included:</h4>
                    {s.detail.map((d) => (
                      <div key={d} className="flex gap-3 items-center">
                        <CheckCircle size={18} className="text-royal shrink-0" />
                        <span className="text-white/80 font-subheading text-sm">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* No surprises callout */}
      <section className="bg-royal py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-white tracking-wider mb-3">THE "NO SURPRISES" PROMISE</h2>
          <p className="text-white/80 font-subheading text-lg">
            We provide written estimates before work begins. The price you're quoted is the price you pay — no hidden fees, no change orders, no upsells.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
