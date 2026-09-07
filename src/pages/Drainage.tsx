import { Link } from 'react-router-dom';
import { Droplets, ArrowRight } from 'lucide-react';
import { PageHero, SectionLabel, SectionHeading, GhostNumber, BlueCard, CtaBanner } from '../components/UI';
import Seo from '../components/Seo';

const services = [
  { icon: <Droplets size={28} />, title: 'Catch Basins', description: 'Underground collection points that gather surface runoff and direct it safely away from your foundation.', to: '/drainage/catch-basins' },
  { icon: <Droplets size={28} />, title: 'Channel Drains', description: 'Linear drainage channels installed at low points in driveways, patios, and yard areas to capture sheet flow.', to: '/drainage/channel-drains' },
  { icon: <Droplets size={28} />, title: 'PVC Drains', description: 'Subsurface PVC pipe networks that move collected water to a safe discharge point away from your home.', to: '/drainage/pvc-drains' },
  { icon: <Droplets size={28} />, title: 'Sump Pumps', description: 'Powered pump systems for areas with high water tables or severe flooding risk, keeping crawl spaces dry.', to: '/drainage/sump-pumps' },
];

export default function Drainage() {
  return (
    <>
      <Seo
        title="Yard Drainage Solutions in Baton Rouge"
        description="French drains, catch basins, channel drains, and sump pumps that move water away from your Baton Rouge foundation before it causes settling. Free estimates."
      />
      <PageHero
        title="YARD DRAINAGE SOLUTIONS IN BATON ROUGE"
        subtitle="Louisiana's relentless rainfall demands professional drainage. Protect your foundation before water causes permanent damage."
        bg="bg-navy"
      />

      {/* Intro */}
      <section className="bg-charcoal py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel>THE LOUISIANA DRAINAGE PROBLEM</SectionLabel>
              <h2 className="font-headline text-4xl text-white tracking-wider mb-4">WATER IS YOUR FOUNDATION'S WORST ENEMY</h2>
              <div className="space-y-4 text-white/70 font-subheading leading-relaxed">
                <p>Baton Rouge receives over 60 inches of rain annually — one of the highest rates in the continental U.S. When that water doesn't drain properly, it saturates the clay soil around your foundation, causing it to expand rapidly and unevenly.</p>
                <p>Prolonged soil saturation also erodes the support beneath your slab, leading to voids, settling, and cracks. Properly designed drainage doesn't just protect your yard — it's foundation repair prevention.</p>
              </div>
            </div>
            <img
              src="https://media.istockphoto.com/id/184105475/photo/airport-apron-concrete-reconstruction.jpg?s=612x612&w=0&k=20&c=nJPUXahSJAQELXldHUTEhmhWar22zYNnTEraJZJbl-k="
              alt="Yard drainage"
              className="rounded-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="01" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>DRAINAGE SERVICES</SectionLabel>
            <SectionHeading>OUR DRAINAGE SOLUTIONS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <BlueCard key={s.title} icon={s.icon} title={s.title} description={s.description} linkTo={s.to} />
            ))}
          </div>
        </div>
      </section>

      {/* How drainage affects foundation */}
      <section className="bg-charcoal py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <GhostNumber n="02" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>THE CONNECTION</SectionLabel>
            <SectionHeading>HOW DRAINAGE AFFECTS YOUR FOUNDATION</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', title: 'Soil Saturation', desc: 'Waterlogged clay swells and exerts lateral pressure against your foundation walls and slab.' },
              { n: '02', title: 'Void Formation', desc: 'As saturated soil erodes and shifts, voids form under the slab — the precursor to cracking and settling.' },
              { n: '03', title: 'Differential Settlement', desc: 'Uneven moisture distribution causes some areas to settle more than others, creating structural stress.' },
            ].map((s) => (
              <div key={s.n} className="card-blue-border rounded-r p-6">
                <div className="font-headline text-4xl text-royal/40 tracking-wider mb-2">{s.n}</div>
                <h4 className="font-headline text-lg text-white tracking-wider mb-2">{s.title}</h4>
                <p className="text-white/60 text-sm font-subheading">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/tips */}
      <section className="bg-[#E8ECF0] py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>RESOURCES</SectionLabel>
            <SectionHeading light>DRAINAGE TIPS FOR LOUISIANA HOMEOWNERS</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'How to Tell If You Have a Drainage Problem', excerpt: 'Standing water, soggy yards, and water stains are telltale signs your drainage needs attention.' },
              { title: 'Catch Basin vs. Channel Drain: Which Do You Need?', excerpt: 'Understanding the difference between these two drainage options can save you money and headaches.' },
              { title: 'Why Sump Pumps Are Essential in South Louisiana', excerpt: 'High water tables make sump pumps critical for below-grade and crawl space protection.' },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded overflow-hidden border-t-4 border-royal shadow-sm p-5">
                <h4 className="font-subheading font-semibold text-charcoal mb-2">{p.title}</h4>
                <p className="text-steel text-sm font-subheading mb-4">{p.excerpt}</p>
                <Link to="/drainage-estimate" className="text-royal text-sm font-subheading font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Get Drainage Estimate <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        headline="IS WATER THREATENING YOUR FOUNDATION?"
        sub="Get a free drainage evaluation from Baton Rouge's trusted foundation and drainage experts."
      />
    </>
  );
}
