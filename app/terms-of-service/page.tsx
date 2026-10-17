import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { PageHero } from "@/components/layout/PageHero";
import { TERMS_OF_SERVICE } from "@/data/legal";

export const metadata: Metadata = {
  title: TERMS_OF_SERVICE.title,
  description:
    "The terms governing use of the Aakash AP website and the professional offshore recruitment and business support services we provide to clients.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        label={TERMS_OF_SERVICE.label}
        heading={TERMS_OF_SERVICE.title}
        description="Clear, fair terms for working with us. This page sets out the agreement between Aakash AP Ltd and our clients and website visitors."
        crumbs={[{ label: "Home", href: "/" }, { label: TERMS_OF_SERVICE.title }]}
      />
      <LegalPage document={TERMS_OF_SERVICE} />
    </>
  );
}
