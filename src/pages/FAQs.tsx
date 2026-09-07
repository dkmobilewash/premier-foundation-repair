import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PageHero, CtaBanner } from '../components/UI';

const faqs = [
  {
    q: 'How do I know if I have foundation problems?',
    a: 'Common signs include diagonal cracks at door and window corners, doors or windows that stick or won\'t close, floors that slope or feel bouncy, gaps between walls and trim or ceiling, and visible cracks in the foundation slab. If you notice one or more of these signs, contact us for a free assessment.',
  },
  {
    q: 'What is the drilled pier method?',
    a: 'The drilled pier method involves drilling holes down through the active clay layer to stable soil or bedrock, then filling them with reinforced concrete to create permanent piers. Hydraulic equipment then raises the foundation to its optimal level. This method is recommended by structural engineers for Louisiana\'s expansive clay soils because the piers can\'t migrate or settle like pressed piles.',
  },
  {
    q: 'Can I stay in my home during repairs?',
    a: 'Yes, in most cases. Foundation repair work is done from the outside of your home. You may notice some noise and vibration during the pier drilling process, but you can typically remain in your home throughout the repair. We\'ll let you know if any specific conditions at your property would require a temporary relocation.',
  },
  {
    q: 'How long does foundation repair take?',
    a: 'Most slab foundation repairs are completed in 1–3 days. The duration depends on the number of piers required and the complexity of the project. We\'ll give you a specific timeline in your written estimate before work begins.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Yes. Slab foundation repairs using the drilled pier method are backed by our lifetime transferable warranty. This warranty stays with the home and can be transferred to future owners, adding real value if you sell. Pier and beam repair work comes with a 10-year limited warranty.',
  },
  {
    q: 'How much does foundation repair cost in Louisiana?',
    a: 'Foundation repair costs vary widely depending on the severity of the problem, number of piers required, and soil conditions. Minor repairs may start around $3,000–$5,000 while more extensive jobs can range from $10,000–$20,000+. The best way to get an accurate number is through our free, no-obligation estimate.',
  },
  {
    q: 'What causes foundation problems in Baton Rouge?',
    a: 'The primary cause is Louisiana\'s highly expansive Beaumont clay soil. This clay swells significantly when wet and shrinks when dry, causing constant movement beneath your foundation. Drought periods followed by heavy rain create the worst conditions. Poor drainage that allows water to pool near the foundation accelerates the problem.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. We partner with financing companies to offer flexible payment options for qualified homeowners. Don\'t delay necessary repairs — the longer foundation problems go unaddressed, the more expensive they become. Contact us to discuss financing options during your free estimate.',
  },
  {
    q: 'What is pier and beam repair?',
    a: 'Pier and beam foundations are raised foundations common in older Baton Rouge homes. The home sits on wood beams supported by concrete piers, creating a crawl space underneath. Pier and beam repair includes new pier installation, beam and joist replacement, moisture barrier installation, and crawl space vent installation. We require a minimum 16-inch clearance from ground to floor joist to perform this work.',
  },
  {
    q: 'How does drainage affect my foundation?',
    a: 'Poor drainage allows water to pool near your foundation, saturating the clay soil and causing it to expand unevenly. This uneven soil pressure is a major driver of foundation settling and cracking. Conversely, water that drains too rapidly away from the foundation during dry periods can cause soil shrinkage and voids. A proper drainage system keeps moisture levels consistent, which is the key to long-term foundation stability.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-charcoal border border-steel/20 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
      >
        <span className="font-subheading font-semibold text-white">{q}</span>
        <span className="text-royal shrink-0">
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-5 text-white/70 font-subheading text-sm leading-relaxed border-t border-steel/20 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  return (
    <>
      <title>Foundation Repair FAQs | Premier Foundation Repair Baton Rouge</title>
      <PageHero title="FREQUENTLY ASKED QUESTIONS" subtitle="Straight answers about foundation repair, drainage, and working with us." cta={false} />

      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          {faqs.map((f) => (
            <FAQItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
