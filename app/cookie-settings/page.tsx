import type { Metadata } from "next";
import { CookieSettingsPanel } from "@/components/consent/CookieSettingsPanel";
import { LegalPage } from "@/components/layout/LegalPage";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { COOKIE_POLICY } from "@/data/legal";

export const metadata: Metadata = {
  title: COOKIE_POLICY.title,
  description:
    "What cookies the Aakash AP website uses, why we use them, and how to manage your preferences at any time.",
  alternates: {
    canonical: "/cookie-settings",
  },
};

export default function CookieSettingsPage() {
  return (
    <>
      <PageHero
        label={COOKIE_POLICY.label}
        heading={COOKIE_POLICY.title}
        description="You are in control. Review what this site stores on your device and update your preferences below at any time."
        crumbs={[{ label: "Home", href: "/" }, { label: COOKIE_POLICY.title }]}
      />
      <section className="w-full pt-space-3xl bg-surface">
        <Container className="max-w-3xl">
          <CookieSettingsPanel />
        </Container>
      </section>
      <LegalPage document={COOKIE_POLICY} />
    </>
  );
}
