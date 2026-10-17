import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { PageHero } from "@/components/layout/PageHero";
import { PRIVACY_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.title,
  description:
    "How Aakash AP Ltd collects, uses and protects personal data across our offshore delivery network, in line with UK GDPR and international data protection law.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label={PRIVACY_POLICY.label}
        heading={PRIVACY_POLICY.title}
        description="Your privacy matters to us. This policy explains what personal data we collect, why we collect it, and the rights you can exercise at any time."
        crumbs={[{ label: "Home", href: "/" }, { label: PRIVACY_POLICY.title }]}
      />
      <LegalPage document={PRIVACY_POLICY} />
    </>
  );
}
