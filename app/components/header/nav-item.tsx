"use client";

import { cn } from "@/app/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
  activeSection: string;
};

export const NavItem = ({ label, href, activeSection }: NavItemProps) => {
  const pathname = usePathname();

  const isAnchor = href.includes("#");
  const sectionId = href.split("#")[1];

  const isActive = isAnchor
    ? activeSection === sectionId
    : pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor && pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative inline-flex items-center gap-2 pb-1 font-medium font-mono transition-colors",
        "text-gray-400",
        isActive && "text-gray-50 font-bold"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}

      <span
        aria-hidden="true"
        className={cn(
          "absolute left-0 -bottom-1 w-full h-[2px] bg-emerald-400 transform origin-left transition-transform duration-300 pointer-events-none",
          isActive ? "scale-x-100" : "scale-x-0"
        )}
      />
    </Link>
  );
};