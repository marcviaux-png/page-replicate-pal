import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
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
import GEO from "./pages/GEO";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Home />, entry: "src/pages/Home.tsx" },
      { path: "about", element: <About />, entry: "src/pages/About.tsx" },
      { path: "services", element: <Services />, entry: "src/pages/Services.tsx" },
      { path: "capabilities", element: <Capabilities />, entry: "src/pages/Capabilities.tsx" },
      { path: "contact", element: <Contact />, entry: "src/pages/Contact.tsx" },
      { path: "ai-training", element: <AITraining />, entry: "src/pages/AITraining.tsx" },
      { path: "ai-services", element: <AIServices />, entry: "src/pages/AIServices.tsx" },
      { path: "geo", element: <GEO />, entry: "src/pages/GEO.tsx" },
      { path: "portfolio", element: <Portfolio />, entry: "src/pages/Portfolio.tsx" },
      { path: "portfolio/pspc", element: <PSPC />, entry: "src/pages/portfolio/PSPC.tsx" },
      { path: "portfolio/ised", element: <ISED />, entry: "src/pages/portfolio/ISED.tsx" },
      { path: "portfolio/st-john-ambulance", element: <StJohnAmbulance />, entry: "src/pages/portfolio/StJohnAmbulance.tsx" },
      { path: "portfolio/ijc", element: <IJC />, entry: "src/pages/portfolio/IJC.tsx" },
      { path: "portfolio/soldiers-helping-soldiers", element: <SHS />, entry: "src/pages/portfolio/SHS.tsx" },
      { path: "portfolio/beneva", element: <Beneva />, entry: "src/pages/portfolio/Beneva.tsx" },
      { path: "unsubscribe", element: <Unsubscribe />, entry: "src/pages/Unsubscribe.tsx" },
      { path: "*", element: <NotFound />, entry: "src/pages/NotFound.tsx" },
    ],
  },
];

export default routes;
