"use client";

import { use } from "react";
import ValentineProposal from "@/components/ValentineProposal";

export default function DynamicNamePage({ params }: { params: Promise<{ name: string }> }) {
    const resolvedParams = use(params);
    const name = decodeURIComponent(resolvedParams.name);

    return (
        <main>
            <ValentineProposal name={name} />
        </main>
    );
}
