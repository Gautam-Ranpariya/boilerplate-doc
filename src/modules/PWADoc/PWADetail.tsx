"use client";

import InnerLayout from "@components/ui/InnerLayout";
import PWAGuide from "./PWAGuide";

const PWADetail = () => {
  return (
    <div>
       <InnerLayout title="PWA Documentation" isFullWidth={true}>
        <PWAGuide />
      </InnerLayout>
    </div>
  );
};

export default PWADetail;
