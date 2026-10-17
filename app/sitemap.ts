import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "@/data/case-studies";
import { ARTICLES } from "@/data/insights";
import { LEGAL_DOCUMENTS } from "@/data/legal";
import { EPISODES } from "@/data/podcasts";
import { SERVICES } from "@/data/services";

const BASE_URL = "https://www.aakashap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...SERVICES.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/case-studies`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...CASE_STUDIES.map((caseStudy) => ({
      url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...ARTICLES.map((article) => ({
      url: `${BASE_URL}/blog/${article.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: `${BASE_URL}/podcasts`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...EPISODES.map((episode) => ({
      url: `${BASE_URL}/podcasts/${episode.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    {
      url: `${BASE_URL}/careers`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...LEGAL_DOCUMENTS.map((document) => ({
      url: `${BASE_URL}/${document.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
