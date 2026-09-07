import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <div className="xl:hidden fixed bottom-0 left-0 right-0 z-40 flex h-14 shadow-2xl">
      <a
        href="tel:2254358289"
        className="flex-1 bg-royal text-white flex items-center justify-center gap-2 font-subheading font-semibold text-sm"
      >
        <Phone size={16} /> Call Now
      </a>
      <Link
        to="/free-estimate"
        className="flex-1 bg-navy text-white flex items-center justify-center gap-2 font-subheading font-semibold text-sm"
      >
        Free Estimate <ArrowRight size={16} />
      </Link>
    </div>
  );
}
