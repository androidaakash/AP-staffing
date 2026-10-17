"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

type ConsentPreferences = {
  essential: true;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "aakash-ap-consent";

export function CookieSettingsPanel() {
  const [analytics, setAnalytics] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const preferences = JSON.parse(stored) as Partial<ConsentPreferences>;
        setAnalytics(Boolean(preferences.analytics));
      }
    } catch {
      setAnalytics(false);
    }
  }, []);

  const save = (value: boolean) => {
    try {
      const preferences: ConsentPreferences = {
        essential: true,
        analytics: value,
        updatedAt: new Date().toISOString(),
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 2500);
    } catch {
      setSaved(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-md border border-slate-border p-space-lg space-y-space-lg">
      <div className="flex items-start gap-space-md">
        <div className="w-10 h-10 rounded-lg bg-forest-deep/10 text-forest-deep flex items-center justify-center shrink-0">
          <Icon name="tune" className="text-[22px]" />
        </div>
        <div className="space-y-1">
          <div className="font-headline-sm text-[16px] text-slate-text-main font-bold">
            Manage Cookie Preferences
          </div>
          <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
            Changes apply immediately and are stored on this device only. Essential cookies keep the
            site functioning and can never be switched off.
          </p>
        </div>
      </div>

      <div className="space-y-space-sm border-t border-slate-border pt-space-md">
        <label className="flex items-center justify-between gap-space-md">
          <span className="font-body-sm text-body-sm text-slate-text-main">
            <span className="font-semibold">Essential cookies</span>
            <span className="block text-slate-text-muted">
              Required for core site functionality. Always active.
            </span>
          </span>
          <input type="checkbox" checked disabled className="accent-forest-deep h-4 w-4" />
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
            checked={analytics}
            onChange={(event) => setAnalytics(event.target.checked)}
            className="accent-forest-deep h-4 w-4"
          />
        </label>
      </div>

      <div className="flex flex-wrap items-center justify-end gap-space-xs">
        <p
          aria-live="polite"
          role="status"
          className={`mr-auto font-body-sm text-body-sm text-emerald-accent transition-opacity duration-200 ${
            saved ? "opacity-100" : "opacity-0"
          }`}
        >
          Preferences saved.
        </p>
        <button
          className="px-space-md py-1.5 rounded-lg bg-slate-surface hover:bg-slate-border text-slate-text-main text-body-sm font-semibold transition-colors"
          onClick={() => {
            setAnalytics(false);
            save(false);
          }}
          type="button"
        >
          Reject Non-Essential
        </button>
        <button
          className="px-space-md py-1.5 rounded-lg bg-forest-deep hover:bg-forest-mid text-on-primary text-body-sm font-semibold transition-colors shadow-sm"
          onClick={() => save(analytics)}
          type="button"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
