"use client";

import InnerLayout from "@components/ui/InnerLayout";
import JestGuide from "./JestGuide";

const TestCaseDetail = () => {
  return (
    <div>      
      <InnerLayout title="Test Case Documentation" isFullWidth={true}>
        <JestGuide />
      </InnerLayout>
    </div>
  );
};

export default TestCaseDetail;
