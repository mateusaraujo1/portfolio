"use client";

import Image from "next/image";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS
      .filter((item) => item.href.includes("#"))
      .map((item) => item.href.split("#")[1]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);

            // atualiza URL sem reload
            window.history.replaceState(
              null,
              "",
              `/#${entry.target.id}`
            );
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="absolute top-0 w-full z-10 h-24 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            width={58}
            height={49}
            src="/images/logo.png"
            alt="Logo Mateus Dev"
          />
        </Link>

        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <div
                key={item.href}
                className={item.md ? "hidden md:block" : item.mobile ? "" : "hidden sm:block"}
                >
                <NavItem {...item} activeSection={activeSection} />
            </div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};