import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { PageHero } from "@/components/layout/PageHero";
import { Icon } from "@/components/ui/Icon";
import { SECURITY_SLA } from "@/data/legal";

export const metadata: Metadata = {
  title: SECURITY_SLA.title,
  description:
    "Dream Gadge's information security framework and service level commitments: ISO 27001 alignment, GDPR and SOC 2 compliance, VDI infrastructure and SLA targets.",
  alternates: {
    canonical: "/security-sla",
  },
};

const TRUST_BADGES = [
  { icon: "verified_user", label: "ISO 27001 aligned" },
  { icon: "security", label: "GDPR & SOC 2 compliant" },
  { icon: "desktop_windows", label: "Encrypted VDI delivery" },
  { icon: "bolt", label: "99.5% uptime commitment" },
];

export default function SecuritySlaPage() {
  return (
    <>
      <PageHero
        label={SECURITY_SLA.label}
        heading={SECURITY_SLA.title}
        description="Enterprise-grade governance is not an add-on at Dream Gadge; it is the baseline. Here is exactly how we protect client data and what our engagements commit to."
        crumbs={[{ label: "Home", href: "/" }, { label: "Security & SLA" }]}
      >
        <div className="flex flex-wrap items-center gap-space-sm">
          {TRUST_BADGES.map((badge) => (
            <span
              className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-lowest/10 text-primary-fixed font-label-sm text-label-sm"
              key={badge.label}
            >
              <Icon name={badge.icon} className="text-[14px]" />
              {badge.label}
            </span>
          ))}
        </div>
      </PageHero>
      <LegalPage document={SECURITY_SLA} />
    </>
  );
}
