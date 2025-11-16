"use client";

import InnerLayout from "@components/ui/InnerLayout";
import JestGuide from "./JestGuide";

const TestCaseDetail = () => {
  return (
    <>      
      <InnerLayout title="Test Case Documentation" isFullWidth={true}>
        <JestGuide />
      </InnerLayout>
    </>
  );
};

export default TestCaseDetail;
