import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="section-label justify-center mb-3">
      <span className="px-3">{children}</span>
    </div>
  );
}

export function GhostNumber({ n }: { n: string }) {
  return (
    <span
      className="absolute pointer-events-none select-none font-headline text-white"
      style={{ fontSize: '12rem', opacity: 0.05, top: '-1rem', left: '0.5rem', zIndex: 0, lineHeight: 1 }}
    >
      {n}
    </span>
  );
}

export function SectionHeading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`font-headline text-4xl md:text-5xl tracking-wider relative z-10 ${light ? 'text-charcoal' : 'text-white'}`}
    >
      {children}
    </h2>
  );
}

export function BlueCard({
  icon,
  title,
  description,
  linkTo,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  linkTo?: string;
}) {
  return (
    <div className="card-blue-border rounded-r p-6 flex flex-col gap-3 h-full">
      <div className="text-royal">{icon}</div>
      <h3 className="font-headline text-xl tracking-wider text-white">{title}</h3>
      <p className="text-white/70 text-sm font-subheading leading-relaxed flex-1">{description}</p>
      {linkTo && (
        <Link to={linkTo} className="text-royal text-sm font-subheading font-semibold flex items-center gap-1 hover:gap-2 transition-all">
          Learn More <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}

export function CtaBanner({
  headline = 'IS YOUR FOUNDATION AT RISK?',
  sub = 'Get a free, no-obligation inspection from Baton Rouge\'s premier foundation experts.',
}: {
  headline?: string;
  sub?: string;
}) {
  return (
    <section className="bg-charcoal py-20 relative" style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 100%)' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl text-white tracking-wider mb-4">{headline}</h2>
        <p className="text-white/70 font-subheading mb-8 text-lg">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/free-estimate"
            className="bg-royal text-white px-8 py-4 font-subheading font-semibold flex items-center justify-center gap-2 hover:bg-royal/90 transition-colors rounded"
          >
            GET FREE ESTIMATE <ArrowRight size={16} />
          </Link>
          <a
            href="tel:2254358289"
            className="border-2 border-white text-white px-8 py-4 font-subheading font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-charcoal transition-colors rounded"
          >
            <Phone size={16} /> CALL (225) 435-8289
          </a>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  subtitle,
  bg = 'bg-navy',
  cta = true,
}: {
  title: string;
  subtitle?: string;
  bg?: string;
  cta?: boolean;
}) {
  return (
    <section
      className={`${bg} py-24 pb-32 relative overflow-hidden`}
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 93%, 0 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h1 className="font-headline text-5xl md:text-6xl text-white tracking-wider mb-4">{title}</h1>
        {subtitle && <p className="text-white/70 font-subheading text-lg mb-8">{subtitle}</p>}
        {cta && (
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
              <Phone size={16} /> CALL (225) 435-8289
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export function StarRating({ stars = 5 }: { stars?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: stars }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}
