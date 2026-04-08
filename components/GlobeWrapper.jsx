"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const GlobeContent = dynamic(() => import("./globe").then(m => m.World), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function GlobeWrapper(props) {
  return (
    <Suspense fallback={<div className="w-full h-full" />}>
      <GlobeContent {...props} />
    </Suspense>
  );
}
