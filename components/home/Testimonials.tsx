"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { TESTIMONIALS } from "@/data/home";

export function Testimonials() {
  const [offset, setOffset] = useState(0);
  const [fading, setFading] = useState(false);
  const total = TESTIMONIALS.items.length;

  const shift = (direction: 1 | -1) => {
    setFading(true);
    window.setTimeout(() => {
      setOffset((value) => (value + direction + total) % total);
      setFading(false);
    }, 200);
  };

  const orderedItems = TESTIMONIALS.items.map((_, index) => TESTIMONIALS.items[(index + offset) % total]);

  return (
    <section className="w-full py-space-3xl bg-surface" id="testimonials">
      <Container className="space-y-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div className="space-y-space-xs max-w-xl">
            <div className="font-label-caps text-label-caps text-emerald-accent tracking-widest uppercase font-bold">
              {TESTIMONIALS.label}
            </div>
            <h2 className="font-headline-xl text-headline-xl text-forest-deep font-bold">
              {TESTIMONIALS.heading}
            </h2>
            <p className="font-body-md text-body-md text-slate-text-muted">{TESTIMONIALS.description}</p>
          </div>
          <div className="flex items-center gap-space-xs">
            <button
              aria-label="Previous Testimonial"
              className="p-2.5 rounded-lg bg-surface-container-lowest hover:bg-slate-surface text-forest-deep shadow-sm transition-colors"
              onClick={() => shift(-1)}
              type="button"
            >
              <Icon name="chevron_left" className="text-[20px]" />
            </button>
            <button
              aria-label="Next Testimonial"
              className="p-2.5 rounded-lg bg-surface-container-lowest hover:bg-slate-surface text-forest-deep shadow-sm transition-colors"
              onClick={() => shift(1)}
              type="button"
            >
              <Icon name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-space-lg transition-opacity duration-200 ${
            fading ? "opacity-50" : "opacity-100"
          }`}
          id="testimonial-container"
        >
          {orderedItems.map((item) => (
            <div
              className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow space-y-space-md flex flex-col justify-between"
              key={item.name}
            >
              <div className="space-y-space-sm">
                <div className="flex items-center text-amber-cta gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon name="star" className="text-[18px]" key={index} />
                  ))}
                </div>
                <p className="font-body-md text-body-md text-slate-text-main italic leading-relaxed">
                  {item.quote}
                </p>
              </div>
              <div className="pt-space-md flex items-center gap-space-sm">
                <div className="w-11 h-11 rounded-full bg-forest-deep/10 text-forest-deep flex items-center justify-center font-bold">
                  {item.initials}
                </div>
                <div>
                  <div className="font-headline-sm text-[16px] text-slate-text-main font-bold">{item.name}</div>
                  <div className="font-body-sm text-body-sm text-slate-text-muted">{item.role}</div>
                  <div className="font-label-sm text-label-sm text-emerald-accent">{item.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
