import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, CtaBanner } from '../components/UI';
import Seo from '../components/Seo';

export default function Warranty() {
  return (
    <>
      <Seo
        title="Our Foundation Repair Warranty"
        description="Slab repairs using our drilled pier method carry a lifetime transferable warranty; pier and beam work carries a 10-year limited warranty. See what is covered."
      />
      <PageHero title="OUR WARRANTY" subtitle="Industry-leading coverage that protects your investment for the life of your home." cta={false} />

      <section className="bg-charcoal py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Slab warranty */}
            <div className="card-blue-border rounded-r p-8">
              <div className="text-royal mb-3">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-headline text-2xl text-white tracking-wider mb-3">LIFETIME TRANSFERABLE WARRANTY</h3>
              <p className="text-royal font-subheading font-semibold mb-3">Slab Foundation Repair — Drilled Pier Method</p>
              <p className="text-white/70 font-subheading text-sm leading-relaxed">
                All slab foundation repairs completed using our drilled pier method are backed by a lifetime transferable warranty. This warranty remains in effect for as long as the home stands and transfers automatically to future owners — adding measurable value at resale.
              </p>
            </div>
            {/* Pier & beam warranty */}
            <div className="bg-navy border border-steel/30 rounded-lg p-8">
              <div className="text-steel mb-3">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-headline text-2xl text-white tracking-wider mb-3">10-YEAR LIMITED WARRANTY</h3>
              <p className="text-white/60 font-subheading font-semibold mb-3">Pier & Beam Foundation Repair</p>
              <p className="text-white/70 font-subheading text-sm leading-relaxed">
                Pier and beam repair work is covered by our 10-year limited warranty covering defects in materials and workmanship. The warranty covers pier settling, beam failure, and moisture barrier defects.
              </p>
            </div>
          </div>

          {/* What's covered */}
          <div className="mb-12">
            <SectionLabel>COVERAGE</SectionLabel>
            <h2 className="font-headline text-3xl text-white tracking-wider mb-6">WHAT'S COVERED</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Pier settling or failure',
                'Foundation re-leveling if movement occurs',
                'Defects in materials or workmanship',
                'Return service calls at no charge',
                'Written documentation for resale',
                'Transferable to new homeowner',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <CheckCircle size={18} className="text-royal shrink-0" />
                  <span className="text-white/80 font-subheading">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transfer process */}
          <div className="mb-12">
            <SectionLabel>WARRANTY TRANSFER</SectionLabel>
            <h2 className="font-headline text-3xl text-white tracking-wider mb-4">HOW TO TRANSFER YOUR WARRANTY</h2>
            <p className="text-white/70 font-subheading mb-4">Transferring your lifetime warranty to a new homeowner is simple:</p>
            <div className="space-y-3">
              {[
                { n: '1', text: 'Provide your original warranty documentation to the buyer at closing.' },
                { n: '2', text: 'New owner contacts us with the original warranty number and their information.' },
                { n: '3', text: 'We update our records and issue a new warranty certificate in the buyer\'s name.' },
              ].map((s) => (
                <div key={s.n} className="flex gap-4 items-start bg-navy/50 border border-steel/20 rounded p-4">
                  <div className="w-8 h-8 bg-royal rounded-full flex items-center justify-center font-subheading font-bold text-white shrink-0 text-sm">
                    {s.n}
                  </div>
                  <span className="text-white/80 font-subheading text-sm">{s.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warranty service CTA */}
      <section className="bg-royal py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-white tracking-wider mb-3">NEED WARRANTY SERVICE?</h2>
          <p className="text-white/80 font-subheading mb-6">If you believe your repair qualifies for warranty service, contact us and we'll schedule an inspection promptly.</p>
          <a
            href="tel:2254358289"
            className="bg-white text-royal px-8 py-4 font-subheading font-semibold rounded hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Call (225) 435-8289 <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
