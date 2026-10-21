// The public fallback keeps analytics working on the independently hosted site.
export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY || "G-5GCGL7T8SX";

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

let initialized = false;
let lastPageLocation: string | undefined;

export function trackPageView(pagePath: string) {
  if (typeof window === "undefined") return;
  const analyticsWindow = window as AnalyticsWindow;

  if (!initialized) {
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = function (..._args: unknown[]) {
      // gtag expects Arguments objects, not arrays.
      // eslint-disable-next-line prefer-rest-params
      analyticsWindow.dataLayer?.push(arguments);
    };
    analyticsWindow.gtag("set", "developer_id.dZjgwMW", true);
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", GA_MEASUREMENT_ID, { send_page_view: false });
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
    document.head.appendChild(script);
    initialized = true;
  }

  const pageLocation = `${window.location.origin}${pagePath}`;
  if (lastPageLocation === pageLocation) return;
  analyticsWindow.gtag?.("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_path: pagePath,
    page_location: pageLocation,
    page_title: document.title,
    page_referrer: lastPageLocation ?? document.referrer,
  });
  lastPageLocation = pageLocation;
}