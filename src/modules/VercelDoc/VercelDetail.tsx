"use client";

import InnerLayout from "@components/ui/InnerLayout";
import VercelGuide from "./VercelGuide";

const VercelDetail = () => {
  return (
    <div>
      <InnerLayout title="Vercel Documentation" isFullWidth={true}>
        <VercelGuide />
      </InnerLayout>
    </div>
  );
};

export default VercelDetail;
