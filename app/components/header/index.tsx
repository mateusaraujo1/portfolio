"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
    { 
        label: "Home", 
        href: "/#hero-section",
        mobile: true
    },
    { 
        label: "Destaques", 
        href: "/#highlighted-projects" ,
        mobile: true
    },
    { 
        label: "Experiência", 
        href: "/#work-experience",
        md: true
    },
    { 
        label: "Projetos", 
        href: "/projects",
        mobile: true
    },
    { 
        label: "Contato", 
        href: "/#contact" 
    },
];

export const Header = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    // lista de ids das seções que deveríamos observar
    const sectionIds = NAV_ITEMS
      .filter((item) => item.href.includes("#"))
      .map((item) => item.href.split("#")[1]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          setActiveSection(id);

          // monta a URL corretamente sobre a rota atual,
          // garantindo a barra antes do hash (e sem barras duplicadas)
          const currentPath = window.location.pathname || "/";
          const base = currentPath === "/" ? "" : currentPath.replace(/\/+$/, "");
          const newUrl = base === "" ? `/#${id}` : `${base}/#${id}`;

          window.history.replaceState(null, "", newUrl);
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    // observa somente elementos que existam na DOM
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} src="/images/logo.png" alt="Logo Mateus Dev" />
        </Link>

        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <div
              key={item.href}
              className={
                item.md
                  ? "hidden md:block"
                  : item.mobile
                  ? "" // visível em todas as telas quando mobile: true
                  : "hidden sm:block" // visível a partir de sm
              }
            >
              <NavItem {...item} activeSection={activeSection} />
            </div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};