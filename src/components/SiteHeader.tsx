"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import wordmark from "../assets/wordmark.png";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);
import { Container } from "./Container";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
}

export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    if (isMobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileNavOpen]);

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        id="site-nav"
        className={`nav-edge-light ${scrolled || isMobileNavOpen ? 'glass-panel' : ''}`}
        style={{
          height: "60px",
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: "var(--z-sticky)",
          isolation: "isolate",
          willChange: "backdrop-filter",
          transition: "all var(--duration-base) var(--ease-standard)",
          borderBottom: (scrolled || isMobileNavOpen) ? undefined : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Container className="h-full grid grid-cols-2 md:grid-cols-3 items-center relative z-10">
          {/* Left: Wordmark */}
          <div className="flex items-center justify-start">
            <Link
              href="/"
              className="flex items-center ml-2 md:ml-0"
            >
              <Image
                src={wordmark}
                alt="Biowess"
                className="h-7 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center justify-center">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    style={isActive ? {
                      textShadow: '0 0 40px rgba(255,255,255,0.12), 0 0 80px rgba(255,255,255,0.05)',
                    } : undefined}
                    className={`type-body relative transition-colors duration-[var(--duration-fast)] ${isActive
                      ? "text-white after:scale-x-100"
                      : "text-[rgba(255,255,255,0.85)] hover:text-white after:scale-x-0 hover:after:scale-x-100"
                      } after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-[var(--duration-base)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-border-hover)]`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: GitHub + Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-4">
            <a
              href="https://github.com/biowess-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex text-[#505050] hover:text-[#a0a0a0] transition-all duration-[var(--duration-fast)] hover:rotate-[8deg] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-border-hover)]"
            >
              <GithubIcon size={20} />
            </a>
            <button
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-[var(--color-text-tier-3)] hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-border-hover)]"
              aria-label={isMobileNavOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileNavOpen}
            >
              <Menu
                size={24}
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: isMobileNavOpen ? 0 : 1,
                  transform: isMobileNavOpen ? "scale(0.5) rotate(-90deg)" : "scale(1) rotate(0)",
                }}
              />
              <X
                size={24}
                className="absolute transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  opacity: isMobileNavOpen ? 1 : 0,
                  transform: isMobileNavOpen ? "scale(1) rotate(0)" : "scale(0.5) rotate(90deg)",
                }}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          inset: 0,
          top: "60px",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: "calc(var(--z-sticky) - 2)",
          opacity: isMobileNavOpen ? 1 : 0,
          pointerEvents: isMobileNavOpen ? "auto" : "none",
          transition: "opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        onClick={() => setIsMobileNavOpen(false)}
      />

      {/* Mobile Top Drawer */}
      <div
        className="md:hidden flex flex-col glass-panel"
        style={{
          position: "fixed",
          top: "60px",
          left: 0,
          right: 0,
          zIndex: "calc(var(--z-sticky) - 1)",
          transform: isMobileNavOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isMobileNavOpen ? 1 : 0,
          pointerEvents: isMobileNavOpen ? "auto" : "none",
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: isMobileNavOpen ? "0 20px 40px rgba(0,0,0,0.5)" : "none",
          padding: "var(--space-4) var(--space-4) var(--space-8)",
        }}
      >
        <nav className="flex flex-col">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileNavOpen(false)}
                className={`type-h3 relative flex items-center justify-between transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-none ${isActive ? "text-white bg-[rgba(255,255,255,0.03)]" : "text-[rgba(255,255,255,0.6)] hover:text-white hover:bg-[rgba(255,255,255,0.02)]"
                  }`}
                style={{
                  padding: "var(--space-4)",
                  marginBottom: "4px",
                  border: "1px solid transparent",
                  borderColor: isActive ? "rgba(255,255,255,0.08)" : "transparent",
                  transform: isMobileNavOpen ? "translateY(0)" : "translateY(-10px)",
                  opacity: isMobileNavOpen ? 1 : 0,
                  transitionDelay: isMobileNavOpen ? `${i * 0.05}s` : "0s",
                  ...(isActive && {
                    textShadow: '0 0 20px rgba(255,255,255,0.15)',
                  }),
                }}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-none bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div
          className="mt-6 px-4"
          style={{
            transform: isMobileNavOpen ? "translateY(0)" : "translateY(-10px)",
            opacity: isMobileNavOpen ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: isMobileNavOpen ? `${navLinks.length * 0.05}s` : "0s",
          }}
        >
          <a
            href="https://github.com/biowess-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[#808080] hover:text-white transition-colors duration-[var(--duration-fast)] type-body focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-border-hover)] px-5 py-3 rounded-none border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)]"
          >
            <GithubIcon size={20} />
            <span className="font-medium">GitHub Repository</span>
          </a>
        </div>
      </div>
    </>
  );
}
