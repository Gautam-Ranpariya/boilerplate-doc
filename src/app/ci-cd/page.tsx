import CICDDetail from "@modules/CICDDoc/CICDDetail";
import SeoConfig from "@utils/Seo";

export const metadata = SeoConfig(
  "CI/CD Documentation",
  "Comprehensive guide on setting up Continuous Integration and Continuous Deployment (CI/CD) pipelines using GitHub Actions and Vercel for your projects."
);

export default function CICDPage() {
  return <CICDDetail />;
}
