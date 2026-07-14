import { Head } from "vite-react-ssg";

const SITE_URL = "https://leapux.com";
const SITE_NAME = "LeapUX";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  image?: string;
  ogTitle?: string;
  ogDescription?: string;
}

const Seo = ({ title, description, path, ogType = "website", image, ogTitle, ogDescription }: SeoProps) => {
  const finalOgTitle = ogTitle ?? title;
  const finalOgDescription = ogDescription ?? description;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : DEFAULT_OG_IMAGE;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} — ${finalOgTitle}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default Seo;
