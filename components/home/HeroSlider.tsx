"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Icon } from "@/components/ui/Icon";
import { HERO_SLIDES } from "@/data/home";

const primaryCtaClass =
  "inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-violet-accent hover:bg-plum-mid text-on-primary font-label-md text-label-md shadow-lg transition-all duration-200";
const ghostCtaClass =
  "inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-lg bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md backdrop-blur-sm transition-all duration-200";
const headlineClass =
  "font-headline-xl text-headline-xl lg:text-[52px] lg:leading-[60px] tracking-tight font-extrabold text-surface-container-lowest";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const intervalRef = useRef<number | null>(null);
  const total = HERO_SLIDES.length;

  const goToSlide = useCallback((index: number) => {
    setCurrent(((index % total) + total) % total);
  }, [total]);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    intervalRef.current = window.setInterval(() => {
      setCurrent((value) => (value + 1) % total);
    }, 6000);

    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, [playing, total]);

  return (
    <section
      className="relative w-full overflow-hidden bg-primary text-on-primary"
      aria-roledescription="carousel"
      aria-label="Aakash AP highlights"
    >
      <div
        className="relative w-full min-h-[620px] lg:min-h-[700px] flex transition-transform duration-700 ease-out motion-reduce:transition-none"
        id="hero-slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.badge}
            className="min-w-full relative flex items-center py-space-2xl px-margin-mobile md:px-margin lg:px-margin-desktop"
            aria-hidden={index !== current}
          >
            <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
              <Image
                alt={slide.imageAlt}
                className="object-cover"
                src={slide.image}
                fill
                sizes="100vw"
                priority={index === 0}
                loading={index === 0 ? undefined : "lazy"}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-plum-deep via-plum-deep/90 to-transparent" />
            <div className="relative z-10 max-w-4xl space-y-space-lg">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-plum-mid/60 text-primary-fixed font-label-caps text-label-caps tracking-widest uppercase">
                <span
                  className={`w-2 h-2 rounded-full bg-violet-accent ${slide.badgePulse ? "animate-pulse" : ""}`}
                />
                {slide.badge}
              </div>
              {index === 0 ? (
                <h1 className={headlineClass}>
                  {slide.titleLead}
                  <span className="text-primary-fixed">{slide.titleAccent}</span>
                </h1>
              ) : (
                <h2 className={headlineClass}>
                  {slide.titleLead}
                  <span className="text-primary-fixed">{slide.titleAccent}</span>
                </h2>
              )}
              <p className="font-body-lg text-body-lg text-surface-container-high max-w-2xl leading-relaxed">
                {slide.body}
              </p>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                {slide.ctas.map((cta) =>
                  cta.kind === "booking" ? (
                    <BookCallButton
                      key={cta.label}
                      className={cta.style === "primary" ? primaryCtaClass : ghostCtaClass}
                      label={cta.label}
                      icon={cta.icon}
                      iconPosition="before"
                    />
                  ) : (
                    <a
                      key={cta.label}
                      className={cta.style === "primary" ? primaryCtaClass : ghostCtaClass}
                      data-path={cta.dataPath}
                      href={cta.href}
                    >
                      {cta.style === "primary" ? (
                        <>
                          <span>{cta.label}</span>
                          <Icon name={cta.icon} className="text-[18px]" />
                        </>
                      ) : (
                        <>
                          <Icon name={cta.icon} className="text-[18px]" />
                          <span>{cta.label}</span>
                        </>
                      )}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 inset-x-0 z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.badge}
              aria-label={`Slide ${index + 1}`}
              aria-current={index === current}
              className={`slider-dot h-2 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-surface-container-lowest" : "w-2 bg-surface-container-lowest/40"
              }`}
              onClick={() => goToSlide(index)}
              type="button"
            />
          ))}
        </div>
        <div className="flex items-center gap-space-xs bg-plum-deep/80 backdrop-blur-md p-1 rounded-lg">
          <button
            aria-label="Previous Slide"
            className="p-2 rounded-md hover:bg-plum-mid text-surface-container-lowest transition-colors"
            onClick={() => goToSlide(current - 1)}
            type="button"
          >
            <Icon name="chevron_left" className="text-[20px]" />
          </button>
          <button
            aria-label={playing ? "Pause Auto Play" : "Play Auto Play"}
            className="p-2 rounded-md hover:bg-plum-mid text-surface-container-lowest transition-colors"
            id="play-pause-btn"
            onClick={() => setPlaying((value) => !value)}
            type="button"
          >
            <Icon name={playing ? "pause" : "play_arrow"} className="text-[18px]" />
          </button>
          <button
            aria-label="Next Slide"
            className="p-2 rounded-md hover:bg-plum-mid text-surface-container-lowest transition-colors"
            onClick={() => goToSlide(current + 1)}
            type="button"
          >
            <Icon name="chevron_right" className="text-[20px]" />
          </button>
        </div>
      </div>
    </section>
  );
}
