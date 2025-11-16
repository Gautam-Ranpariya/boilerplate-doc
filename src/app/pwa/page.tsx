// Component Imports
import SeoConfig from "@utils/Seo";
import PWADetail from "@modules/PWADoc/PWADetail";

export const metadata = SeoConfig(
  "PWA Documentation",
  "Detailed documentation on Progressive Web Apps (PWA) implementation, features, and best practices for enhancing user experience and performance."
)

const PWADoc = () => {
  return <PWADetail />;
};

export default PWADoc;
