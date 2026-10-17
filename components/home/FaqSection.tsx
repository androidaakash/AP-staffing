"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { FAQS } from "@/data/home";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full py-space-3xl bg-surface" id="faq">
      <Container className="space-y-space-2xl max-w-4xl">
        <div className="text-center space-y-space-sm">
          <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
            {FAQS.label}
          </div>
          <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">{FAQS.heading}</h2>
          <p className="font-body-md text-body-md text-slate-text-muted">{FAQS.description}</p>
        </div>
        <div className="space-y-space-sm" id="faq-accordion">
          {FAQS.items.map((item, index) => {
            const expanded = openIndex === index;
            return (
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden" key={item.question}>
                <button
                  aria-expanded={expanded}
                  aria-controls={`faq-content-${index}`}
                  className="w-full p-space-lg text-left flex items-center justify-between gap-space-md focus:outline-none"
                  onClick={() => toggle(index)}
                  type="button"
                >
                  <span className="font-headline-sm text-[18px] text-slate-text-main font-semibold">
                    {item.question}
                  </span>
                  <Icon
                    name="expand_more"
                    className={`text-[20px] text-slate-text-muted transition-transform duration-200 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className="faq-content px-space-lg pb-space-lg text-body-sm text-slate-text-muted leading-relaxed"
                      id={`faq-content-${index}`}
                      role="region"
                      aria-hidden={!expanded}
                    >
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
