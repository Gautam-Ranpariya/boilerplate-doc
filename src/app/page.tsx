// Component Imports
import TestCaseDetail from "@modules/TestCaseDoc/TestCaseDetail";
import SeoConfig from "@utils/Seo";

export const metadata = SeoConfig(
  "Test Case Documentation",
  "In-depth documentation on writing and managing test cases for your applications, including best practices and tools for effective testing."
)

export default function Home() {
  return (
    <>
      <TestCaseDetail />
    </>
  );
}
