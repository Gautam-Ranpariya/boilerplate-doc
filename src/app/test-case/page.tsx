import SeoConfig from "@utils/Seo";
import TestCaseDetail from "@modules/TestCaseDoc/TestCaseDetail";

export const metadata = SeoConfig(
  "Test Case Documentation",
  "In-depth documentation on writing and managing test cases for your applications, including best practices and tools for effective testing."
)

const TestCase = () => {
  return <TestCaseDetail />
};

export default TestCase;
