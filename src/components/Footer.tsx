import { Link } from 'react-router-dom';
import { Phone, MapPin, Facebook, Instagram, Star } from 'lucide-react';
import Logo from './Logo';

const serviceLinks = [
  { label: 'Foundation Repair Overview', to: '/foundation-repair' },
  { label: 'Pier & Beam Repair', to: '/pier-and-beam' },
  { label: 'Repair Methods', to: '/foundation-repair-methods' },
  { label: 'Drainage Solutions', to: '/drainage' },
  { label: 'Catch Basins', to: '/drainage/catch-basins' },
  { label: 'Sump Pumps', to: '/drainage/sump-pumps' },
  { label: 'Small Demolition', to: '/small-demo' },
];

const areaLinks = [
  { label: 'Baton Rouge', to: '/baton-rouge' },
  { label: 'Central', to: '/central' },
  { label: 'Denham Springs', to: '/denham-springs' },
  { label: 'Gonzales', to: '/gonzales' },
  { label: 'Hammond', to: '/hammond' },
  { label: 'Prairieville', to: '/prairieville' },
  { label: 'Zachary', to: '/zachary' },
];

const resourceLinks = [
  { label: 'Our Process', to: '/our-process' },
  { label: 'Warranty', to: '/warranty' },
  { label: 'Financing', to: '/financing' },
  { label: 'Real Estate Agents', to: '/real-estate' },
  { label: 'Foundation Quiz', to: '/foundation-quiz' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white" style={{ clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-0">
        {/* Logo + tagline */}
        <div className="mb-8">
          <Logo />
          <p className="text-white/60 font-subheading mt-3 text-sm">
            Baton Rouge's Premier Foundation Repair Experts
          </p>
        </div>

        {/* Stat bar */}
        <div className="border-t border-b border-steel/30 py-4 mb-10 flex flex-wrap gap-4 items-center justify-between">
          {['Free Estimates', 'Lifetime Warranty', 'Licensed & Insured', 'Locally Owned'].map((s, i, arr) => (
            <div key={s} className="flex items-center gap-4">
              <span className="font-subheading font-semibold text-sm text-white/90">{s}</span>
              {i < arr.length - 1 && <span className="hidden sm:block w-px h-4 bg-steel/50" />}
            </div>
          ))}
        </div>

        {/* 4 column link grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Services */}
          <div>
            <h4 className="font-headline text-white text-lg mb-4 tracking-wider">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-royal text-sm font-subheading transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-headline text-white text-lg mb-4 tracking-wider">Service Areas</h4>
            <ul className="space-y-2">
              {areaLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-royal text-sm font-subheading transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-headline text-white text-lg mb-4 tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-white/60 hover:text-royal text-sm font-subheading transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-headline text-white text-lg mb-4 tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:2254358289" className="flex items-start gap-2 text-royal hover:text-white transition-colors font-subheading font-semibold">
                  <Phone size={16} className="mt-0.5 shrink-0" /> (225) 435-8289
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/60 text-sm font-subheading">
                  <MapPin size={15} className="mt-0.5 shrink-0" />
                  670 O'Neal Ln<br />Baton Rouge, LA 70816
                </span>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a href="#" aria-label="Facebook" className="text-white/50 hover:text-royal transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="text-white/50 hover:text-royal transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="Google Reviews" className="text-white/50 hover:text-royal transition-colors">
                  <Star size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-xs text-white/50 font-subheading">
          <span>Louisiana Contractors License #LICENSE</span>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <span>© 2025 Premier Foundation Repair of Baton Rouge</span>
        </div>
      </div>
    </footer>
  );
}
