"use client";

import { Icon } from "@/components/ui/Icon";
import { useBooking } from "@/components/booking/BookingProvider";

export function StickyCallCta() {
  const { openBooking } = useBooking();

  return (
    <aside className="fixed bottom-6 right-6 z-40 hidden sm:block">
      <button
        className="flex items-center gap-space-sm bg-forest-deep hover:bg-forest-mid text-on-primary px-space-lg py-space-sm rounded-full shadow-[0_10px_15px_-3px_rgba(13,59,46,0.25)] border border-forest-mid/50 transition-all duration-200 hover:-translate-y-0.5 group"
        data-path="contact-us"
        onClick={openBooking}
        type="button"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-accent opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-accent" />
        </span>
        <span className="font-label-md text-label-md font-semibold">Book a 15-min Call</span>
        <Icon name="arrow_forward" className="text-[18px] group-hover:translate-x-1 transition-transform" />
      </button>
    </aside>
  );
}
