"use client";

import InnerLayout from "@components/ui/InnerLayout";
import VercelGuide from "./VercelGuide";

const VercelDetail = () => {
  return (
    <>
      <InnerLayout title="Vercel Documentation" isFullWidth={true}>
        <VercelGuide />
      </InnerLayout>
    </>
  );
};

export default VercelDetail;
