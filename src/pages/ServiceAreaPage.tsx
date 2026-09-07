import { Link } from 'react-router-dom';
import { MapPin, Wrench, Layers, Droplets, Zap, ArrowRight } from 'lucide-react';
import { SectionLabel, SectionHeading, GhostNumber, CtaBanner } from '../components/UI';
import Seo from '../components/Seo';
import { clampDescription } from '../lib/seo';

interface ServiceAreaPageProps {
  cityName: string;
  cityIntro: string;
  nearbyAreas: { label: string; to: string }[];
}

const services = [
  { icon: <Wrench size={22} />, title: 'Slab Foundation Repair', to: '/foundation-repair' },
  { icon: <Layers size={22} />, title: 'Pier & Beam Repair', to: '/pier-and-beam' },
  { icon: <Droplets size={22} />, title: 'Drainage Solutions', to: '/drainage' },
  { icon: <Zap size={22} />, title: 'Small Demolition', to: '/small-demo' },
];

export default function ServiceAreaPage({ cityName, cityIntro, nearbyAreas }: ServiceAreaPageProps) {
  return (
    <>
      <Seo
        title={`Foundation Repair in ${cityName}, Louisiana`}
        description={clampDescription(cityIntro)}
      />

      {/* Hero */}
      <section
        className="bg-navy py-24 pb-32 relative overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-royal text-xs font-semibold tracking-widest uppercase mb-4">
            <MapPin size={14} /> {cityName}, Louisiana
          </div>
          <h1 className="font-headline text-5xl md:text-6xl text-white tracking-wider mb-4">
            FOUNDATION REPAIR IN {cityName.toUpperCase()}, LOUISIANA
          </h1>
          <p className="text-white/70 font-subheading text-lg mb-8">{cityIntro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/free-estimate"
              className="bg-royal text-white px-8 py-4 font-subheading font-semibold flex items-center justify-center gap-2 hover:bg-royal/90 transition-colors rounded"
            >
              GET FREE ESTIMATE <ArrowRight size={16} />
            </Link>
            <a
              href="tel:2254358289"
              className="border-2 border-steel text-white px-8 py-4 font-subheading font-semibold flex items-center justify-center gap-2 hover:border-white transition-colors rounded"
            >
              CALL (225) 435-8289
            </a>
          </div>
        </div>
      </section>

      {/* Services offered */}
      <section className="bg-charcoal py-20 relative overflow-hidden">
        <GhostNumber n="01" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <SectionLabel>OUR SERVICES</SectionLabel>
            <SectionHeading>SERVICES AVAILABLE IN {cityName.toUpperCase()}</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="card-blue-border rounded-r p-5 flex items-center gap-4 group hover:bg-navy/40 transition-colors"
              >
                <div className="text-royal shrink-0">{s.icon}</div>
                <span className="font-subheading font-semibold text-white group-hover:text-royal transition-colors">{s.title}</span>
                <ArrowRight size={16} className="ml-auto text-steel group-hover:text-royal transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {nearbyAreas.length > 0 && (
        <section className="bg-navy py-20 relative overflow-hidden" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 94%, 0 100%)' }}>
          <GhostNumber n="02" />
          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
              <SectionLabel>NEARBY AREAS</SectionLabel>
              <SectionHeading>WE ALSO SERVE</SectionHeading>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {nearbyAreas.map((a) => (
                <Link
                  key={a.to}
                  to={a.to}
                  className="bg-charcoal border border-steel/30 hover:border-royal text-white font-subheading font-semibold px-5 py-2.5 rounded transition-colors text-sm flex items-center gap-2"
                >
                  <MapPin size={14} className="text-royal" /> {a.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Local CTA */}
      <section className="bg-charcoal py-16 text-center" style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 100%, 0 100%)' }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-headline text-4xl text-white tracking-wider mb-4">
            SCHEDULE YOUR FREE {cityName.toUpperCase()} ESTIMATE
          </h2>
          <p className="text-white/70 font-subheading mb-8">
            Don't wait for small cracks to become serious structural problems. Get a free, no-pressure foundation inspection today.
          </p>
          <Link
            to="/free-estimate"
            className="bg-royal text-white px-10 py-4 font-subheading font-semibold rounded hover:bg-royal/90 transition-colors inline-flex items-center gap-2"
          >
            GET FREE ESTIMATE <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
