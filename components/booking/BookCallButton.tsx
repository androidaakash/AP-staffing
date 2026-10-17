"use client";

import { Icon } from "@/components/ui/Icon";
import { useBooking } from "./BookingProvider";

type BookCallButtonProps = {
  className?: string;
  label: string;
  icon?: string;
  iconPosition?: "before" | "after";
  iconClassName?: string;
  ariaLabel?: string;
};

export function BookCallButton({
  className,
  label,
  icon,
  iconPosition = "after",
  iconClassName = "text-[18px]",
  ariaLabel,
}: BookCallButtonProps) {
  const { openBooking } = useBooking();

  return (
    <button className={className} onClick={openBooking} type="button" aria-label={ariaLabel}>
      {icon && iconPosition === "before" ? <Icon name={icon} className={iconClassName} /> : null}
      <span>{label}</span>
      {icon && iconPosition === "after" ? <Icon name={icon} className={iconClassName} /> : null}
    </button>
  );
}
