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
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono transition-colors",
        isActive && "text-gray-50 font-bold"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
};