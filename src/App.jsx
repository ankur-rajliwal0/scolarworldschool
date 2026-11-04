import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuickInquiryModal from './components/QuickInquiryModal';
import FloatingActions from './components/FloatingActions';

import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import DayBoarding from './pages/DayBoarding';
import Admissions from './pages/Admissions';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-300 selection:text-navy-950">
        
        {/* Top Notification Strip */}
        <TopBanner onOpenInquiry={handleOpenInquiry} />

        {/* Main Sticky Header */}
        <Navbar onOpenInquiry={handleOpenInquiry} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/about" element={<About onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/academics" element={<Academics onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/day-boarding" element={<DayBoarding onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/admissions" element={<Admissions onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/facilities" element={<Facilities onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/gallery" element={<Gallery onOpenInquiry={handleOpenInquiry} />} />
            <Route path="/contact" element={<Contact onOpenInquiry={handleOpenInquiry} />} />
            <Route path="*" element={<Home onOpenInquiry={handleOpenInquiry} />} />
          </Routes>
        </main>

        {/* Comprehensive Footer */}
        <Footer onOpenInquiry={handleOpenInquiry} />

        {/* Floating Quick Action Buttons */}
        <FloatingActions onOpenInquiry={handleOpenInquiry} />

        {/* Interactive Fast Admission Inquiry Modal */}
        <QuickInquiryModal 
          isOpen={isInquiryOpen} 
          onClose={handleCloseInquiry} 
        />

      </div>
    </BrowserRouter>
  );
}
