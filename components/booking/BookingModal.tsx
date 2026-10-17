"use client";

import { useEffect, useRef, useState } from "react";
import { startSmoothScroll, stopSmoothScroll } from "@/components/layout/SmoothScroll";
import { Icon } from "@/components/ui/Icon";
import { submitBookingRequest } from "@/lib/booking";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  business?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function BookingModal({ open, onClose }: BookingModalProps) {
  const [duration, setDuration] = useState<"15" | "30">("15");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [need, setNeed] = useState("Candidate Sourcing Pods");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setRendered(true);
      const timer = window.setTimeout(() => setVisible(true), 20);
      return () => window.clearTimeout(timer);
    }

    setVisible(false);
    const timer = window.setTimeout(() => setRendered(false), 350);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    setSubmitted(false);
    setSubmitError(null);
    setErrors({});
    setSubmitting(false);
    stopSmoothScroll();

    const focusTimer = window.setTimeout(() => nameRef.current?.focus(), 260);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      startSmoothScroll();
    };
  }, [open, onClose]);

  if (!rendered) return null;

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!email.trim()) {
      nextErrors.email = "Please enter your corporate email.";
    } else if (!EMAIL_PATTERN.test(email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!business.trim()) nextErrors.business = "Please enter your agency or business name.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitError(null);
    if (!validate()) return;

    setSubmitting(true);
    const result = await submitBookingRequest({
      duration,
      fullName: fullName.trim(),
      email: email.trim(),
      business: business.trim(),
      need,
      notes: notes.trim(),
    });
    setSubmitting(false);

    if (result.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-space-md py-2.5 rounded-lg bg-surface-container-lowest border text-slate-text-main focus:outline-none focus:ring-[3px] focus:ring-plum-deep/15 ${
      hasError ? "border-error focus:border-error" : "border-slate-border focus:border-plum-deep"
    }`;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center p-4 bg-plum-deep/60 backdrop-blur-sm transition-opacity duration-300 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-surface-container-lowest w-full max-w-2xl rounded-2xl shadow-2xl p-space-xl md:p-space-2xl space-y-space-lg relative max-h-[92vh] overflow-y-auto transition-all duration-300 ease-out ${
          visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.97]"
        }`}
      >
        <button
          aria-label="Close Modal"
          className="absolute top-5 right-5 text-slate-text-muted hover:text-slate-text-main p-1 rounded-lg"
          onClick={onClose}
          type="button"
        >
          <Icon name="close" className="text-[24px]" />
        </button>

        {submitted ? (
          <div className="py-space-xl text-center space-y-space-md">
            <div className="mx-auto w-14 h-14 rounded-full bg-violet-accent/10 text-violet-accent flex items-center justify-center">
              <Icon name="check" className="text-[30px]" />
            </div>
            <h3 id="booking-modal-title" className="font-headline-lg text-headline-lg text-plum-deep font-bold">
              Request Received
            </h3>
            <p className="font-body-sm text-body-sm text-slate-text-muted max-w-md mx-auto leading-relaxed">
              Thank you! Your discovery call request has been transmitted to our executive desk. A
              calendar invite will follow shortly.
            </p>
            <button
              className="px-space-xl py-space-sm bg-violet-accent hover:bg-plum-mid text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-md transition-colors"
              onClick={onClose}
              type="button"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-space-xs pr-space-xl">
              <div className="inline-flex items-center gap-1 font-label-caps text-label-caps text-violet-accent uppercase font-bold">
                <span>SCHEDULE EXECUTIVE ADVISORY</span>
              </div>
              <h3 id="booking-modal-title" className="font-headline-lg text-headline-lg text-plum-deep font-bold">
                Book a Discovery Call
              </h3>
              <p className="font-body-sm text-body-sm text-slate-text-muted">
                Select your preferred consultation window. An offshore operations partner will join
                to discuss your capacity requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-space-sm p-1 bg-slate-surface rounded-lg" role="group" aria-label="Consultation duration">
              <button
                className={`duration-btn py-2 text-center rounded-md text-body-sm font-semibold transition-all ${
                  duration === "15"
                    ? "bg-surface-container-lowest text-plum-deep shadow-sm"
                    : "text-slate-text-muted hover:text-slate-text-main"
                }`}
                onClick={() => setDuration("15")}
                type="button"
              >
                15-Min Quick Scoping
              </button>
              <button
                className={`duration-btn py-2 text-center rounded-md text-body-sm font-semibold transition-all ${
                  duration === "30"
                    ? "bg-surface-container-lowest text-plum-deep shadow-sm"
                    : "text-slate-text-muted hover:text-slate-text-main"
                }`}
                onClick={() => setDuration("30")}
                type="button"
              >
                30-Min Deep Operational Review
              </button>
            </div>

            <form className="space-y-space-md" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-slate-text-main font-semibold" htmlFor="booking-name">
                    Your Full Name
                  </label>
                  <input
                    ref={nameRef}
                    id="booking-name"
                    className={inputClass(Boolean(errors.fullName))}
                    placeholder="e.g. Richard Davies"
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName ? (
                    <p className="text-label-sm text-error">{errors.fullName}</p>
                  ) : null}
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-slate-text-main font-semibold" htmlFor="booking-email">
                    Corporate Email
                  </label>
                  <input
                    id="booking-email"
                    className={inputClass(Boolean(errors.email))}
                    placeholder="r.davies@recruitmentagency.com"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="text-label-sm text-error">{errors.email}</p> : null}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-slate-text-main font-semibold" htmlFor="booking-business">
                    Agency / Business Name
                  </label>
                  <input
                    id="booking-business"
                    className={inputClass(Boolean(errors.business))}
                    placeholder="e.g. Davies Talent Partners"
                    type="text"
                    value={business}
                    onChange={(event) => setBusiness(event.target.value)}
                    aria-invalid={Boolean(errors.business)}
                  />
                  {errors.business ? (
                    <p className="text-label-sm text-error">{errors.business}</p>
                  ) : null}
                </div>
                <div className="space-y-1">
                  <label className="font-label-sm text-label-sm text-slate-text-main font-semibold" htmlFor="booking-need">
                    Primary Need
                  </label>
                  <select
                    id="booking-need"
                    className={inputClass(false)}
                    value={need}
                    onChange={(event) => setNeed(event.target.value)}
                  >
                    <option>Candidate Sourcing Pods</option>
                    <option>Full-Cycle RPO Recruiters</option>
                    <option>Back-Office & Compliance BPO</option>
                    <option>Executive Staffing / Admin</option>
                    <option>Multiple Departments</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label-sm text-label-sm text-slate-text-main font-semibold" htmlFor="booking-notes">
                  Preferred Time &amp; Notes
                </label>
                <textarea
                  id="booking-notes"
                  className={inputClass(false)}
                  placeholder="Let us know your target start timeframe and timezone (UK GMT or US EST/PST)..."
                  rows={3}
                  value={notes}
                  onChange={(event) => setNotes(event.target.value)}
                />
              </div>
              {submitError ? (
                <p className="font-body-sm text-body-sm text-error" role="alert">
                  {submitError}
                </p>
              ) : null}
              <div className="pt-space-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-space-sm">
                <span className="font-body-sm text-xs text-slate-text-muted flex items-center gap-1">
                  <Icon name="lock" className="text-[16px] text-violet-accent" />
                  Encrypted confidential advisory
                </span>
                <button
                  className="px-space-xl py-space-sm bg-violet-accent hover:bg-plum-mid text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Transmitting…" : "Confirm Consultation Request"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
