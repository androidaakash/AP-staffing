"use client";

import Lenis from "lenis";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

let lenisInstance: Lenis | null = null;
let pendingHash: string | null = null;

const HEADER_OFFSET = -88;

export function stopSmoothScroll() {
  lenisInstance?.stop();
}

export function startSmoothScroll() {
  lenisInstance?.start();
}

function scrollToHash(hash: string) {
  const target = document.querySelector(hash);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target as HTMLElement, {
      offset: HEADER_OFFSET,
      duration: 1.1,
    });
  } else {
    (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SmoothScroll() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisInstance = lenis;

    let frame = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
    };
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let url: URL;
      try {
        url = new URL(href, window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (!url.hash || url.hash === "#") return;

      if (url.pathname === window.location.pathname) {
        event.preventDefault();
        scrollToHash(url.hash);
        return;
      }

      event.preventDefault();
      pendingHash = url.hash;
      router.push(url.pathname);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [router]);

  useEffect(() => {
    const hash = pendingHash ?? (window.location.hash.length > 1 ? window.location.hash : null);
    pendingHash = null;

    if (hash) {
      if (window.location.hash.length > 1) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      const timer = window.setTimeout(() => scrollToHash(hash), 150);
      return () => window.clearTimeout(timer);
    }

    if (window.location.hash.length <= 1) {
      lenisInstance?.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
