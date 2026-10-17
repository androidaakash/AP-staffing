"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

type FaqItem = { question: string; answer: string };

type FaqAccordionProps = {
  items: FaqItem[];
  idPrefix?: string;
};

export function FaqAccordion({ items, idPrefix = "faq" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className="space-y-space-sm" id={`${idPrefix}-accordion`}>
      {items.map((item, index) => {
        const expanded = openIndex === index;
        return (
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden" key={item.question}>
            <button
              aria-expanded={expanded}
              aria-controls={`${idPrefix}-content-${index}`}
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
                  id={`${idPrefix}-content-${index}`}
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
  );
}
