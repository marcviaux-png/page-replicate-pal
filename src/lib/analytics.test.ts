import { beforeEach, describe, expect, it, vi } from "vitest";

type QueueWindow = Window & { dataLayer?: Array<ArrayLike<unknown>> };

beforeEach(() => {
  vi.resetModules();
  (window as QueueWindow).dataLayer = [];
  document.head.innerHTML = "";
});

const commands = () => ((window as QueueWindow).dataLayer ?? []).map((entry) => Array.from(entry));

describe("Google Analytics page views", () => {
  it("uses G-5GCGL7T8SX and queues exactly one initial page view", async () => {
    const { trackPageView } = await import("./analytics");
    trackPageView("/");
    trackPageView("/");
    expect(commands().find(([command]) => command === "config")).toEqual([
      "config", "G-5GCGL7T8SX", { send_page_view: false },
    ]);
    expect(commands().filter(([command, event]) => command === "event" && event === "page_view")).toHaveLength(1);
    expect(document.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')).toHaveLength(1);
  });

  it("queues page views for new routes, query changes, and return visits", async () => {
    const { trackPageView } = await import("./analytics");
    ["/", "/services", "/contact?source=services", "/"].forEach(trackPageView);
    const events = commands().filter(([command, event]) => command === "event" && event === "page_view");
    expect(events.map((event) => (event[2] as { page_path: string }).page_path)).toEqual([
      "/", "/services", "/contact?source=services", "/",
    ]);
  });

  it("does not access browser globals during static rendering", async () => {
    const { trackPageView } = await import("./analytics");
    vi.stubGlobal("window", undefined);
    try {
      expect(() => trackPageView("/services")).not.toThrow();
    } finally {
      vi.unstubAllGlobals();
    }
  });
});