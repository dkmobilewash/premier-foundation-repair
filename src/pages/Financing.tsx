import { ArrowRight, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero, SectionLabel, SectionHeading, CtaBanner } from '../components/UI';

const options = [
  {
    title: 'Same as Cash',
    desc: 'Finance your repair with no interest if paid in full within the promotional period. Perfect for those who prefer to spread payments without added cost.',
    features: ['0% interest promotional period', 'No prepayment penalty', 'Online account management', 'Fast approval process'],
  },
  {
    title: 'Low Monthly Payments',
    desc: 'Break your repair cost into manageable monthly payments that fit your budget. Multiple term lengths available to find the right fit.',
    features: ['Flexible term lengths', 'Competitive interest rates', 'Fixed monthly payments', 'No down payment required for qualified buyers'],
  },
  {
    title: 'Extended Financing',
    desc: 'For larger repair projects, extended financing terms provide maximum payment flexibility while protecting your home with a permanent solution.',
    features: ['Longer repayment terms', 'Higher loan amounts available', 'For larger repair projects', 'Quick pre-qualification'],
  },
];

export default function Financing() {
  return (
    <>
      <title>Foundation Repair Financing Baton Rouge | Premier Foundation Repair</title>
      <PageHero title="FINANCING OPTIONS" subtitle="Don't delay critical repairs. Flexible financing makes protecting your home affordable." cta={false} />

      <section className="bg-charcoal py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>PAYMENT OPTIONS</SectionLabel>
            <SectionHeading>FINANCING THAT FITS YOUR BUDGET</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {options.map((o) => (
              <div key={o.title} className="card-blue-border rounded-r p-6 flex flex-col">
                <DollarSign size={28} className="text-royal mb-3" />
                <h3 className="font-headline text-xl text-white tracking-wider mb-2">{o.title}</h3>
                <p className="text-white/60 text-sm font-subheading mb-4 flex-1">{o.desc}</p>
                <ul className="space-y-2">
                  {o.features.map((f) => (
                    <li key={f} className="flex gap-2 items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-royal shrink-0" />
                      <span className="text-white/70 font-subheading">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Don't delay messaging */}
          <div className="bg-navy border-l-4 border-royal rounded-r p-6 mb-10">
            <h3 className="font-subheading font-semibold text-white mb-2">Don't Delay Necessary Repairs</h3>
            <p className="text-white/70 font-subheading text-sm leading-relaxed">
              Foundation problems worsen over time. A crack that costs $4,000 to fix today can become a $15,000 repair if ignored. Financing allows you to address the problem now — before it grows — without draining your savings.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/free-estimate"
              className="bg-royal text-white px-10 py-4 font-subheading font-semibold rounded hover:bg-royal/90 transition-colors inline-flex items-center gap-2"
            >
              Apply During Your Free Estimate <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
