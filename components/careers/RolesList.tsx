"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { CAREERS_EMAIL, type JobRole } from "@/data/careers";

export function RolesList({ roles }: { roles: JobRole[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="space-y-space-sm">
      {roles.map((role) => {
        const expanded = openId === role.id;
        return (
          <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden" key={role.id}>
            <button
              aria-expanded={expanded}
              aria-controls={`role-${role.id}`}
              className="w-full p-space-lg text-left flex flex-col md:flex-row md:items-center justify-between gap-space-sm focus:outline-none"
              onClick={() => toggle(role.id)}
              type="button"
            >
              <div className="space-y-1">
                <div className="font-headline-sm text-[18px] text-slate-text-main font-semibold">
                  {role.title}
                </div>
                <div className="flex flex-wrap items-center gap-space-sm font-label-sm text-label-sm text-slate-text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Icon name="work" className="text-[15px]" />
                    {role.department}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Icon name="location_on" className="text-[15px]" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Icon name="schedule" className="text-[15px]" />
                    {role.shift}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <span className="px-2 py-0.5 rounded-full text-xs bg-slate-surface text-forest-deep font-semibold">
                  {role.type}
                </span>
                <Icon
                  name="expand_more"
                  className={`text-[20px] text-slate-text-muted transition-transform duration-200 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="px-space-lg pb-space-lg space-y-space-lg border-t border-slate-border pt-space-lg"
                  id={`role-${role.id}`}
                  role="region"
                  aria-hidden={!expanded}
                >
                  <p className="font-body-sm text-body-sm text-slate-text-muted leading-relaxed">
                    {role.summary}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                    <div className="space-y-space-sm">
                      <div className="font-label-caps text-label-caps uppercase text-forest-deep tracking-wider">
                        What you will do
                      </div>
                      <ul className="space-y-1.5">
                        {role.responsibilities.map((item) => (
                          <li
                            className="flex items-start gap-space-sm font-body-sm text-body-sm text-slate-text-muted"
                            key={item}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-space-sm">
                      <div className="font-label-caps text-label-caps uppercase text-forest-deep tracking-wider">
                        What we look for
                      </div>
                      <ul className="space-y-1.5">
                        {role.requirements.map((item) => (
                          <li
                            className="flex items-start gap-space-sm font-body-sm text-body-sm text-slate-text-muted"
                            key={item}
                          >
                            <Icon name="check_circle" className="text-[16px] text-emerald-accent mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-emerald-accent hover:bg-forest-mid text-on-primary font-label-md text-label-md rounded-lg transition-colors"
                    href={`mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}
                  >
                    <span>Apply for this role</span>
                    <Icon name="arrow_forward" className="text-[18px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
