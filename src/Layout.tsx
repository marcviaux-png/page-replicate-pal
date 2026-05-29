import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LeapNavbar from "./components/LeapNavbar";
import LeapFooter from "./components/LeapFooter";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <LeapNavbar />
        <main className="flex-grow">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
        <LeapFooter />
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default Layout;
