"use client";
import InnerLayout from "@components/ui/InnerLayout";
import CICDGuide from "./CICDGuide";

const CICDDetail = () => {
  return (
    <>
      <InnerLayout title="CI/CD Documentation" isFullWidth={true}>
        <CICDGuide />
      </InnerLayout>
    </>
  );
};

export default CICDDetail;
