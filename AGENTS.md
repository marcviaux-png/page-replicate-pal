# Architecture rules

- Initialize GA4 and send manual page views through the shared analytics helper and router-level tracker; disable automatic initial views to avoid duplicates and guard browser access for static rendering.
- Keep a public measurement-ID fallback alongside the connector environment setting so independent hosting does not require Lovable-only environment variables.