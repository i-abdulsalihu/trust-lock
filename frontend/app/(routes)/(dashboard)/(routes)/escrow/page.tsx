import { Wrapper } from "@/components/shared/wrapper";
import { Metadata } from "next";
import EscrowTable from "./_components/escrow-table";

export const metadata: Metadata = {
  title: "Escrow",
};

export default function EscrowPage() {
  return (
    <div className="flex-1 py-4 sm:p-6">
      <Wrapper className="flex flex-col gap-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">My Escrow</h1>
          <p className="text-base font-medium tracking-wide">
            Secure your payments, track progress, and stay in control—TrustLock
            ensures every step is verified and transparent.
          </p>
        </div>

        <EscrowTable />
      </Wrapper>
    </div>
  );
}
