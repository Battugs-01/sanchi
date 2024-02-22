"use client";

import Landing from "@/components/system/landing";
import { Suspense } from "react";
export default function Home() {
  return (
    <main>
      <Suspense>
        <Landing />
      </Suspense>
    </main>
  );
}
