import type { Metadata } from "next";
import { EpisodeCard } from "@/components/insights/EpisodeCard";
import { CtaSection } from "@/components/layout/CtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { EPISODES, PODCASTS } from "@/data/podcasts";

export const metadata: Metadata = {
  title: "Podcasts & Executive Conversations",
  description:
    "Expert roundtables with global recruitment innovators exploring offshore leverage, AI sourcing and scaling strategies. Listen to The Aakash AP Podcast.",
  alternates: {
    canonical: "/podcasts",
  },
};

export default function PodcastsPage() {
  return (
    <>
      <PageHero
        label={PODCASTS.label}
        heading={PODCASTS.heading}
        description={PODCASTS.description}
        crumbs={[{ label: "Home", href: "/" }, { label: "Podcasts" }]}
      />

      <section className="w-full py-space-3xl bg-surface">
        <Container className="space-y-space-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            {EPISODES.map((episode) => (
              <EpisodeCard episode={episode} key={episode.slug} />
            ))}
          </div>

          <div className="bg-slate-surface rounded-2xl p-space-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-lg">
            <div className="flex items-start gap-space-md">
              <div className="w-12 h-12 rounded-lg bg-forest-deep text-on-primary flex items-center justify-center shrink-0">
                <Icon name="mic" className="text-[24px]" />
              </div>
              <div className="space-y-1">
                <div className="font-headline-sm text-headline-sm text-forest-deep font-bold">
                  New episodes every month.
                </div>
                <p className="font-body-sm text-body-sm text-slate-text-muted max-w-xl">
                  Each episode ships with full show notes, key takeaways and chapter markers, so you can
                  apply the insight even if you only have ten minutes.
                </p>
              </div>
            </div>
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-forest-deep hover:bg-forest-mid text-on-primary font-label-md text-label-md rounded-lg transition-colors whitespace-nowrap"
              href="mailto:advisory@aakashap.com?subject=Podcast%20topic%20suggestion"
            >
              <span>Suggest a Topic</span>
              <Icon name="arrow_forward" className="text-[18px]" />
            </a>
          </div>
        </Container>
      </section>

      <CtaSection
        badge="FROM CONVERSATION TO CAPACITY"
        heading="Bring These Conversations into Your Business."
        description="The leaders on our podcast all started with one discovery call. Tell us your delivery gaps and we will map the offshore structure that closes them."
        secondary={{ label: "Read Client Case Studies", href: "/case-studies" }}
      />
    </>
  );
}
