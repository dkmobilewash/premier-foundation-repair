import { ArrowRight, CheckCircle, FileText, Clock, Award } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';

export default function RealEstate() {
  return (
    <>
      <title>Foundation Repair for Real Estate Agents Baton Rouge | Premier Foundation Repair</title>
      <PageHero
        title="FOUNDATION REPAIR FOR REAL ESTATE TRANSACTIONS"
        subtitle="Fast estimates, pre-listing inspections, and transferable warranties — built for Baton Rouge agents and buyers."
        cta={false}
      />

      {/* Why agents partner */}
      <section className="bg-charcoal py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <SectionLabel>FOR REAL ESTATE PROFESSIONALS</SectionLabel>
            <SectionHeading>WHY AGENTS PARTNER WITH PREMIER</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock size={28} />,
                title: 'Fast Turnaround',
                desc: 'We understand real estate timelines. We can often provide written estimates within 48–72 hours of contacting us.',
              },
              {
                icon: <FileText size={28} />,
                title: 'Pre-Listing Inspections',
                desc: 'Get a professional assessment before listing. Identify and address issues before they derail a transaction.',
              },
              {
                icon: <Award size={28} />,
                title: 'Transferable Warranty',
                desc: 'Our lifetime transferable warranty is a genuine selling point. Buyers get peace of mind, sellers get stronger offers.',
              },
            ].map((c) => (
              <div key={c.title} className="card-blue-border rounded-r p-6">
                <div className="text-royal mb-3">{c.icon}</div>
                <h4 className="font-headline text-lg text-white tracking-wider mb-2">{c.title}</h4>
                <p className="text-white/60 text-sm font-subheading">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process for RE deals */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>THE PROCESS</SectionLabel>
            <SectionHeading>HOW IT WORKS FOR REAL ESTATE DEALS</SectionHeading>
          </div>
          <div className="space-y-4">
            {[
              { n: '1', title: 'Contact Us With the Address', desc: 'Provide the property address and your timeline. We\'ll schedule an estimate visit promptly.' },
              { n: '2', title: 'On-Site Assessment', desc: 'Our estimator inspects the foundation and provides a written report and pricing.' },
              { n: '3', title: 'Negotiate & Schedule', desc: 'Use our written estimate in negotiations or schedule repairs before closing.' },
              { n: '4', title: 'Repair & Warranty Issue', desc: 'We complete the repair and issue warranty documentation for the transaction file.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5 items-start bg-charcoal border border-steel/20 rounded-lg p-5">
                <div className="w-10 h-10 bg-royal rounded-full flex items-center justify-center font-subheading font-bold text-white shrink-0">
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

      {/* Agent contact form */}
      <section className="bg-charcoal py-20">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <SectionLabel>AGENT INQUIRIES</SectionLabel>
            <SectionHeading>CONTACT US ABOUT A PROPERTY</SectionHeading>
          </div>
          <form action="mailto:agents@premierfoundationrepair.com" method="post" encType="text/plain" className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm font-subheading mb-1">Agent Name *</label>
                <input type="text" required className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-subheading mb-1">Agency / Brokerage</label>
                <input type="text" className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/70 text-sm font-subheading mb-1">Phone *</label>
                <input type="tel" required className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
              </div>
              <div>
                <label className="block text-white/70 text-sm font-subheading mb-1">Email *</label>
                <input type="email" required className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
              </div>
            </div>
            <div>
              <label className="block text-white/70 text-sm font-subheading mb-1">Property Address *</label>
              <input type="text" required className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-subheading mb-1">Closing Date / Timeline</label>
              <input type="text" className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal" placeholder="e.g. Must close by July 15" />
            </div>
            <div>
              <label className="block text-white/70 text-sm font-subheading mb-1">Notes / Issues Identified</label>
              <textarea rows={3} className="w-full bg-navy border border-steel/30 rounded px-4 py-3 text-white font-subheading text-sm focus:outline-none focus:border-royal resize-none" />
            </div>
            <button type="submit" className="w-full bg-royal hover:bg-royal/90 text-white py-4 font-subheading font-semibold rounded transition-colors flex items-center justify-center gap-2">
              SUBMIT AGENT INQUIRY <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
