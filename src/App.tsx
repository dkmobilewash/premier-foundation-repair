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
import Privacy from './pages/Privacy';
import BlogPost from './pages/BlogPost';
import ServiceAreaPage from './pages/ServiceAreaPage';
import { serviceAreas } from './data/serviceAreas';

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
          <Route path="/privacy" element={<Privacy />} />
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
