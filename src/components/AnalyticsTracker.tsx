import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

export default function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Allow the destination page's head metadata to update before tracking it.
    const timer = window.setTimeout(() => trackPageView(pathname + search), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  return null;
}