import FreeEstimate from './FreeEstimate';
import Seo from '../components/Seo';

export default function DrainageEstimate() {
  return (
    <>
      <Seo
        title="Free Drainage Estimate in Baton Rouge"
        description="Request a free, no-obligation drainage estimate for your Baton Rouge property. Tell us about the water problem and we'll come assess it at no cost."
      />
      <FreeEstimate
        defaultService="Drainage"
        title="GET YOUR FREE DRAINAGE ESTIMATE"
        subtitle="Expert yard drainage solutions for Baton Rouge's heavy rainfall and high water tables."
      />
    </>
  );
}
