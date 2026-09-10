import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Seo from './components/Seo';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

import Home from './pages/Home';
import FoundationRepair from './pages/FoundationRepair';
import PierAndBeam from './pages/PierAndBeam';
import FoundationRepairMethods from './pages/FoundationRepairMethods';
import Drainage from './pages/Drainage';
import { CatchBasins, ChannelDrains, PVCDrains, SumpPumps } from './pages/drainage/DrainagePages';
import DrainageEstimate from './pages/DrainageEstimate';
import SmallDemo from './pages/SmallDemo';
import OurProcess from './pages/OurProcess';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Warranty from './pages/Warranty';
import Financing from './pages/Financing';
import RealEstate from './pages/RealEstate';
import FoundationQuiz from './pages/FoundationQuiz';
import FreeEstimate from './pages/FreeEstimate';
import Blog, { blogPosts } from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceAreaPage from './pages/ServiceAreaPage';

const serviceAreas: Record<string, { cityName: string; cityIntro: string; nearbyAreas: { label: string; to: string }[] }> = {
  'baton-rouge': {
    cityName: 'Baton Rouge',
    cityIntro: 'Greater Baton Rouge\'s most trusted foundation repair specialists. Serving homeowners across East Baton Rouge Parish with permanent solutions for Louisiana\'s challenging clay soils.',
    nearbyAreas: [
      { label: 'Central', to: '/central' },
      { label: 'Zachary', to: '/zachary' },
      { label: 'Port Allen', to: '/port-allen' },
      { label: 'Prairieville', to: '/prairieville' },
    ],
  },
  'central': {
    cityName: 'Central',
    cityIntro: 'Premier Foundation Repair serves Central, Louisiana homeowners with the same precision engineering and lifetime warranty that has made us the trusted choice across Greater Baton Rouge.',
    nearbyAreas: [
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Zachary', to: '/zachary' },
      { label: 'Denham Springs', to: '/denham-springs' },
    ],
  },
  'denham-springs': {
    cityName: 'Denham Springs',
    cityIntro: 'Denham Springs homeowners face the same expansive clay soil challenges as the rest of the Baton Rouge metro. Our drilled pier method delivers permanent results backed by a lifetime warranty.',
    nearbyAreas: [
      { label: 'Central', to: '/central' },
      { label: 'Hammond', to: '/hammond' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
    ],
  },
  'gonzales': {
    cityName: 'Gonzales',
    cityIntro: 'Serving Gonzales and Ascension Parish with expert foundation repair, drainage solutions, and small demolition services. Licensed, insured, and backed by our lifetime warranty.',
    nearbyAreas: [
      { label: 'Prairieville', to: '/prairieville' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Plaquemine', to: '/plaquemine' },
    ],
  },
  'hammond': {
    cityName: 'Hammond',
    cityIntro: 'Premier Foundation Repair brings our proven drilled pier method and decades of Louisiana soil expertise to Hammond and Tangipahoa Parish homeowners.',
    nearbyAreas: [
      { label: 'Denham Springs', to: '/denham-springs' },
      { label: 'Pine Grove', to: '/pine-grove' },
    ],
  },
  'pine-grove': {
    cityName: 'Pine Grove',
    cityIntro: 'Foundation repair services for Pine Grove and the surrounding communities. Same trusted methods, same lifetime warranty, same local team.',
    nearbyAreas: [
      { label: 'Hammond', to: '/hammond' },
      { label: 'Denham Springs', to: '/denham-springs' },
    ],
  },
  'plaquemine': {
    cityName: 'Plaquemine',
    cityIntro: 'Serving Plaquemine and Iberville Parish with expert slab and pier & beam foundation repair, drainage solutions, and demolition services.',
    nearbyAreas: [
      { label: 'Port Allen', to: '/port-allen' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Gonzales', to: '/gonzales' },
    ],
  },
  'port-allen': {
    cityName: 'Port Allen',
    cityIntro: 'Port Allen and West Baton Rouge Parish homeowners trust Premier Foundation Repair for permanent foundation solutions engineered for Louisiana\'s demanding soil conditions.',
    nearbyAreas: [
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Plaquemine', to: '/plaquemine' },
    ],
  },
  'prairieville': {
    cityName: 'Prairieville',
    cityIntro: 'Prairieville is one of the fastest-growing communities in the Baton Rouge area — and its clay soils present the same foundation challenges. We deliver permanent solutions with a lifetime warranty.',
    nearbyAreas: [
      { label: 'Gonzales', to: '/gonzales' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Zachary', to: '/zachary' },
    ],
  },
  'zachary': {
    cityName: 'Zachary',
    cityIntro: 'Premier Foundation Repair serves Zachary and northern East Baton Rouge Parish with expert foundation repair, drainage, and demolition services backed by our lifetime warranty.',
    nearbyAreas: [
      { label: 'Central', to: '/central' },
      { label: 'Baton Rouge', to: '/baton-rouge' },
      { label: 'Hammond', to: '/hammond' },
    ],
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foundation-repair" element={<FoundationRepair />} />
          <Route path="/pier-and-beam" element={<PierAndBeam />} />
          <Route path="/foundation-repair-methods" element={<FoundationRepairMethods />} />
          <Route path="/drainage" element={<Drainage />} />
          <Route path="/drainage/catch-basins" element={<CatchBasins />} />
          <Route path="/drainage/channel-drains" element={<ChannelDrains />} />
          <Route path="/drainage/pvc-drains" element={<PVCDrains />} />
          <Route path="/drainage/sump-pumps" element={<SumpPumps />} />
          <Route path="/drainage-estimate" element={<DrainageEstimate />} />
          <Route path="/small-demo" element={<SmallDemo />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/foundation-quiz" element={<FoundationQuiz />} />
          <Route path="/free-estimate" element={<FreeEstimate />} />
          <Route path="/blog" element={<Blog />} />
          {blogPosts.map((p) => (
            <Route key={p.slug} path={`/${p.slug}`} element={<BlogPost />} />
          ))}
          {Object.entries(serviceAreas).map(([slug, props]) => (
            <Route key={slug} path={`/${slug}`} element={<ServiceAreaPage {...props} />} />
          ))}
          <Route path="*" element={
            <div className="min-h-screen bg-charcoal flex items-center justify-center">
              <Seo title="Page Not Found" description="This page could not be found." noindex />
              <div className="text-center">
                <h1 className="font-headline text-6xl text-white mb-4">404</h1>
                <p className="text-white/60 font-subheading mb-6">Page not found.</p>
                <a href="/" className="text-royal font-subheading font-semibold">← Return Home</a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

/**
 * Everything below the router. Kept router-agnostic so the build-time
 * prerenderer can mount it under a StaticRouter (see src/entry-server.tsx).
 */
export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
