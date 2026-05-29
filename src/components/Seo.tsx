import { Head } from "vite-react-ssg";

const SITE_URL = "https://page-replicate-pal.lovable.app";
const SITE_NAME = "LeapUX";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
}

const Seo = ({ title, description, path, ogType = "website" }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Seo;
