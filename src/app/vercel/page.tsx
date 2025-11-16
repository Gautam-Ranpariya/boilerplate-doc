import VercelDetail from "@modules/VercelDoc/VercelDetail";
import SeoConfig from "@utils/Seo";
  
export const metadata = SeoConfig(
  "Vercel Documentation",
  "Extensive documentation on deploying and managing applications with Vercel, including setup guides, features, and best practices for optimal performance."
) 

const VercelPage = () => {
  return <VercelDetail />;  
};

export default VercelPage;
