"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ValentineProposal from "@/components/ValentineProposal";

function ProposalContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  return <ValentineProposal name={name} />;
}

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div className="h-screen w-full romantic-gradient" />}>
        <ProposalContent />
      </Suspense>
    </main>
  );
}
