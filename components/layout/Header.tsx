"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "@/components/booking/BookCallButton";
import { Icon } from "@/components/ui/Icon";
import { SITE } from "@/data/site";
import {
  MEGA_MENU,
  PRIMARY_NAV,
  PRIMARY_NAV_AFTER_SERVICES,
  type NavItem,
} from "@/data/navigation";

const navLinkClass =
  "font-label-md text-label-md text-slate-text-muted hover:text-plum-deep transition-colors";

function Logo() {
  return (
    <Link className="flex items-center gap-space-sm group" data-path="home" href="/" aria-label={`${SITE.name} — home`}>
      <Image
        alt={`${SITE.name} Brand Logo`}
        className="h-8 w-8 object-contain"
        src={SITE.logoMark}
        width={32}
        height={32}
        priority
      />
      <span className="font-headline-sm text-headline-sm tracking-tight text-plum-deep uppercase">
        {SITE.name}
      </span>
    </Link>
  );
}

function MegaMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const handlePointerDown = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open]);

  return (
    <div
      className="relative py-space-sm"
      ref={wrapperRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-controls="services-mega-menu"
        aria-expanded={open}
        className={`flex items-center gap-1 font-label-md text-label-md transition-colors focus:outline-none ${
          open ? "text-plum-deep" : "text-slate-text-muted hover:text-plum-deep"
        }`}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <span>Services</span>
        <Icon
          name="expand_more"
          className={`text-[18px] transition-transform duration-200 ${open ? "rotate-180 text-plum-deep" : "text-slate-text-muted"}`}
        />
      </button>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 w-[720px] bg-surface-container-lowest rounded-xl p-space-xl shadow-[0_20px_25px_-5px_rgba(15,23,42,0.1),0_8px_10px_-6px_rgba(15,23,42,0.05)] border border-slate-border transition-all duration-200 ease-out z-50 ${
          open
            ? "opacity-100 visible translate-y-0 pointer-events-auto"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
        id="services-mega-menu"
      >
        <div className="grid grid-cols-2 gap-space-xl">
          {MEGA_MENU.map((column) => (
            <div className="space-y-space-md" key={column.heading}>
              <div className="flex items-center gap-space-xs text-plum-deep pb-space-xs border-b border-slate-border">
                <Icon name={column.icon} className="text-[20px] text-plum-mid" />
                <span className="font-label-caps text-label-caps uppercase tracking-wider text-plum-deep">
                  {column.heading}
                </span>
              </div>
              <div className="space-y-space-sm">
                {column.links.map((link) => (
                  <Link
                    className="block p-space-sm rounded-lg hover:bg-slate-surface transition-colors group/item"
                    data-path={link.dataPath}
                    href={link.href}
                    key={link.label}
                    onClick={() => setOpen(false)}
                  >
                    <div className="font-label-md text-label-md text-slate-text-main group-hover/item:text-plum-deep">
                      {link.label}
                    </div>
                    <p className="font-body-sm text-body-sm text-slate-text-muted">{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-space-lg pt-space-md border-t border-slate-border">
          <Link
            className="inline-flex items-center gap-space-xs font-label-md text-label-md text-plum-mid hover:text-violet-accent font-semibold"
            data-path="services"
            href="/services"
            onClick={() => setOpen(false)}
          >
            <span>Explore all services</span>
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function DesktopNavLink({ item }: { item: NavItem }) {
  return (
    <Link className={navLinkClass} data-path={item.dataPath} href={item.href}>
      {item.label}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRendered, setMobileRendered] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      setMobileRendered(true);
      const timer = window.setTimeout(() => setMobileVisible(true), 20);
      return () => window.clearTimeout(timer);
    }

    setMobileVisible(false);
    const timer = window.setTimeout(() => setMobileRendered(false), 350);
    return () => window.clearTimeout(timer);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-lg">
          <Logo />
        </div>

        <nav className="hidden xl:flex items-center gap-space-lg" aria-label="Primary">
          <Link
            aria-current="page"
            className="transition-colors text-plum-deep font-semibold font-label-md text-label-md"
            data-path="home"
            href="/"
          >
            Home
          </Link>
          {PRIMARY_NAV.slice(1).map((item) => (
            <DesktopNavLink item={item} key={item.label} />
          ))}
          <MegaMenu />
          {PRIMARY_NAV_AFTER_SERVICES.map((item) => (
            <DesktopNavLink item={item} key={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <BookCallButton
            className="hidden sm:inline-flex items-center justify-center px-space-md py-space-sm bg-violet-accent hover:bg-plum-mid text-on-primary font-label-md text-label-md rounded-lg shadow-[0_1px_3px_0_rgba(15,23,42,0.04)] transition-all duration-200"
            label="Book a Discovery Call"
          />

          <button
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg text-plum-deep hover:bg-slate-surface transition-colors"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            <Icon name={mobileOpen ? "close" : "menu"} className="text-[24px]" />
          </button>
        </div>
      </div>

      {mobileRendered ? (
        <div
          className={`xl:hidden fixed inset-0 top-20 z-40 transition-opacity duration-300 ease-out ${
            mobileVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-plum-deep/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav
            className={`absolute right-0 top-0 h-[calc(100vh-5rem)] w-full max-w-sm bg-surface-container-lowest shadow-2xl overflow-y-auto p-space-lg space-y-space-md transition-transform duration-300 ease-out ${
              mobileVisible ? "translate-x-0" : "translate-x-full"
            }`}
            aria-label="Mobile"
          >
            <Link
              className="block py-space-sm font-label-md text-label-md text-plum-deep font-semibold border-b border-slate-border"
              href="/"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            {PRIMARY_NAV.slice(1).map((item) => (
              <Link
                className="block py-space-sm font-label-md text-label-md text-slate-text-main border-b border-slate-border"
                href={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-b border-slate-border pb-space-sm">
              <button
                aria-expanded={servicesOpen}
                className="w-full flex items-center justify-between py-space-sm font-label-md text-label-md text-slate-text-main"
                onClick={() => setServicesOpen((value) => !value)}
                type="button"
              >
                <span>Services</span>
                <Icon
                  name="expand_more"
                  className={`text-[20px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  servicesOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-space-md pt-space-sm">
                    {MEGA_MENU.map((column) => (
                      <div className="space-y-space-sm" key={column.heading}>
                        <div className="font-label-caps text-label-caps uppercase tracking-wider text-plum-deep">
                          {column.heading}
                        </div>
                        {column.links.map((link) => (
                          <Link
                            className="block p-space-sm rounded-lg hover:bg-slate-surface transition-colors"
                            href={link.href}
                            key={link.label}
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="font-label-md text-label-md text-slate-text-main">{link.label}</div>
                            <p className="font-body-sm text-body-sm text-slate-text-muted">{link.description}</p>
                          </Link>
                        ))}
                      </div>
                    ))}
                    <Link
                      className="flex items-center gap-space-xs p-space-sm font-label-md text-label-md text-plum-mid font-semibold"
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span>Explore all services</span>
                      <Icon name="arrow_forward" className="text-[16px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {PRIMARY_NAV_AFTER_SERVICES.map((item) => (
              <Link
                className="block py-space-sm font-label-md text-label-md text-slate-text-main border-b border-slate-border"
                href={item.href}
                key={item.label}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="space-y-space-sm pt-space-sm">
              <BookCallButton
                className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-violet-accent hover:bg-plum-mid text-on-primary font-label-md text-label-md rounded-lg transition-colors"
                label="Book a Discovery Call"
                icon="calendar_today"
                iconPosition="before"
              />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
