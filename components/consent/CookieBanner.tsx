"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "aakash-ap-consent";

function persistConsent(analytics: boolean) {
  try {
    const preferences: ConsentPreferences = {
      essential: true,
      analytics,
      updatedAt: new Date().toISOString(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Storage unavailable (private mode) — the banner will simply reappear next visit.
  }
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = (analytics: boolean) => {
    persistConsent(analytics);
    setClosing(true);
    window.setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-8 md:max-w-xl z-50 bg-surface-container-lowest p-space-lg rounded-xl shadow-2xl border border-slate-border space-y-space-md transition-all duration-300 ${
        closing ? "translate-y-[150%] opacity-0" : "translate-y-0 opacity-100"
      }`}
      id="cookie-banner"
      role="region"
      aria-label="Privacy and cookie preferences"
    >
      <div className="flex items-start gap-space-md">
        <div className="w-10 h-10 rounded-lg bg-plum-deep/10 text-plum-deep flex items-center justify-center shrink-0">
          <Icon name="cookie" className="text-[22px]" />
        </div>
        <div className="space-y-1">
          <div className="font-headline-sm text-[16px] text-slate-text-main font-bold">
            Privacy &amp; Cookie Preferences
          </div>
          <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
            We use essential cookies to ensure our website functions correctly, and analytics
            cookies to optimize client advisory experiences.
          </p>
        </div>
      </div>

      {showPreferences ? (
        <div className="space-y-space-sm border-t border-slate-border pt-space-md">
          <label className="flex items-center justify-between gap-space-md">
            <span className="font-body-sm text-body-sm text-slate-text-main">
              <span className="font-semibold">Essential cookies</span>
              <span className="block text-slate-text-muted">
                Required for core site functionality. Always active.
              </span>
            </span>
            <input type="checkbox" checked disabled className="accent-plum-deep h-4 w-4" />
          </label>
          <label className="flex items-center justify-between gap-space-md cursor-pointer">
            <span className="font-body-sm text-body-sm text-slate-text-main">
              <span className="font-semibold">Analytics cookies</span>
              <span className="block text-slate-text-muted">
                Helps us understand how visitors use the site. Never loaded before consent.
              </span>
            </span>
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(event) => setAnalyticsEnabled(event.target.checked)}
              className="accent-plum-deep h-4 w-4"
            />
          </label>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-space-xs justify-end">
        <button
          className="px-space-md py-1.5 rounded-lg text-slate-text-muted hover:text-slate-text-main text-body-sm font-semibold transition-colors"
          onClick={() => setShowPreferences((value) => !value)}
          type="button"
          aria-expanded={showPreferences}
        >
          {showPreferences ? "Hide Preferences" : "Preferences"}
        </button>
        <button
          className="px-space-md py-1.5 rounded-lg bg-slate-surface hover:bg-slate-border text-slate-text-main text-body-sm font-semibold transition-colors"
          onClick={() => dismiss(false)}
          type="button"
        >
          Reject Non-Essential
        </button>
        <button
          className="px-space-md py-1.5 rounded-lg bg-plum-deep hover:bg-plum-mid text-on-primary text-body-sm font-semibold transition-colors shadow-sm"
          onClick={() => dismiss(showPreferences ? analyticsEnabled : true)}
          type="button"
        >
          {showPreferences ? "Save Preferences" : "Accept All"}
        </button>
      </div>
    </div>
  );
}
