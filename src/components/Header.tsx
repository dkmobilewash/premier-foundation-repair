import { useState, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Clock, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import Logo from './Logo';

type DropdownItem = { label: string; to: string };
type NavItem = {
  label: string;
  to?: string;
  dropdown?: DropdownItem[];
};

const navItems: NavItem[] = [
  { label: 'Our Process', to: '/our-process' },
  {
    label: 'About',
    dropdown: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    label: 'Service Areas',
    dropdown: [
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Central', to: '/central' },
      { label: 'Denham Springs', to: '/denham-springs' },
      { label: 'Gonzales', to: '/gonzales' },
      { label: 'Hammond', to: '/hammond' },
      { label: 'Pine Grove', to: '/pine-grove' },
      { label: 'Plaquemine', to: '/plaquemine' },
      { label: 'Port Allen', to: '/port-allen' },
      { label: 'Prairieville', to: '/prairieville' },
      { label: 'Zachary', to: '/zachary' },
    ],
  },
  {
    label: 'Foundation Repair',
    dropdown: [
      { label: 'Foundation Repair Overview', to: '/foundation-repair' },
      { label: 'Slab Foundation Repair', to: '/foundation-repair' },
      { label: 'Pier & Beam Repair', to: '/pier-and-beam' },
      { label: 'Repair Methods', to: '/foundation-repair-methods' },
    ],
  },
  {
    label: 'Drainage',
    dropdown: [
      { label: 'Drainage Solutions', to: '/drainage' },
      { label: 'Catch Basins', to: '/drainage/catch-basins' },
      { label: 'Channel Drains', to: '/drainage/channel-drains' },
      { label: 'PVC Drains', to: '/drainage/pvc-drains' },
      { label: 'Sump Pumps', to: '/drainage/sump-pumps' },
      { label: 'Drainage Estimate', to: '/drainage-estimate' },
    ],
  },
  { label: 'Small Demo', to: '/small-demo' },
  {
    label: 'Resources',
    dropdown: [
      { label: 'Real Estate Agents', to: '/real-estate' },
      { label: 'Warranty', to: '/warranty' },
      { label: 'Financing', to: '/financing' },
      { label: 'Foundation Damage Quiz', to: '/foundation-quiz' },
      { label: 'Free Estimate', to: '/free-estimate' },
    ],
  },
];

function DropdownMenu({ items }: { items: DropdownItem[] }) {
  return (
    <div className="absolute top-full left-0 mt-1 bg-navy border border-steel/30 rounded shadow-2xl min-w-[220px] z-50 py-1">
      {items.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="block px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-royal/20 transition-colors font-subheading"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="bg-navy text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-8">
          <span className="flex items-center gap-1.5 text-white/70">
            <MapPin size={12} /> 670 O'Neal Ln, Baton Rouge, LA 70816
          </span>
          <a href="tel:2254358289" className="flex items-center gap-1.5 font-semibold text-white hover:text-royal transition-colors">
            <Phone size={12} /> (225) 435-8289
          </a>
          <span className="flex items-center gap-1.5 text-white/70">
            <Clock size={12} /> Mon–Fri 7am–6pm
          </span>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-charcoal border-b border-steel/20">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={() => item.dropdown && handleMouseLeave()}
              >
                {item.to ? (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `px-3 py-2 text-sm font-subheading font-semibold transition-colors rounded ${
                        isActive ? 'text-royal' : 'text-white/80 hover:text-white'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <button
                    className="px-3 py-2 text-sm font-subheading font-semibold text-white/80 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}
                {item.dropdown && openDropdown === item.label && (
                  <DropdownMenu items={item.dropdown} />
                )}
              </div>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-3">
            <Link
              to="/free-estimate"
              className="bg-royal hover:bg-royal/90 text-white px-5 py-2.5 rounded text-sm font-subheading font-semibold flex items-center gap-2 transition-colors"
            >
              Get Free Estimate <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-[88px] bg-charcoal z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-white font-subheading font-semibold text-lg border-b border-steel/20"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between px-4 py-3 text-white font-subheading font-semibold text-lg border-b border-steel/20"
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileOpenDropdown === item.label && item.dropdown && (
                      <div className="bg-navy/60 pl-6">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.to}
                            to={sub.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 text-white/80 text-sm font-subheading border-b border-steel/10 hover:text-royal"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-3 px-4">
              <a
                href="tel:2254358289"
                className="flex items-center justify-center gap-2 bg-steel text-white w-full py-3 rounded font-subheading font-semibold"
              >
                <Phone size={16} /> Call (225) 435-8289
              </a>
              <Link
                to="/free-estimate"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-royal text-white w-full py-3 rounded font-subheading font-semibold"
              >
                Get Free Estimate <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
