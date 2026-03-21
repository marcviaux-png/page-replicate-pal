import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import AITraining from "./pages/AITraining";
import AIServices from "./pages/AIServices";
import Portfolio from "./pages/Portfolio";
import PSPC from "./pages/portfolio/PSPC";
import ISED from "./pages/portfolio/ISED";
import StJohnAmbulance from "./pages/portfolio/StJohnAmbulance";
import IJC from "./pages/portfolio/IJC";
import SHS from "./pages/portfolio/SHS";
import Beneva from "./pages/portfolio/Beneva";
import NotFound from "./pages/NotFound";
import LeapNavbar from "./components/LeapNavbar";
import LeapFooter from "./components/LeapFooter";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <LeapNavbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/ai-training" element={<AITraining />} />
              <Route path="/ai-services" element={<AIServices />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <LeapFooter />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
