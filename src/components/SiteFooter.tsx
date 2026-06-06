"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, MouseEvent } from "react";
import { Container } from "./Container";
import wordmark from "../assets/wordmark.png";


export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    footerRef.current.style.setProperty('--mouse-x', `${x}px`);
    footerRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const productLinks = [
    { name: "Home", href: "/" },
    { name: "Apps", href: "/apps" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "GitHub Repository", href: "https://github.com/biowess-dev" },
    { name: "Releases", href: "https://github.com/biowess-dev" },
    { name: "Issues", href: "https://github.com/biowess-dev" },
  ];

  const legalLinks = [
    { name: "License", href: "/license" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .footer-glow-wrapper::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%),
            rgba(255, 255, 255, 0.08),
            transparent 80%
          );
          opacity: 0;
          transition: opacity 400ms ease;
          z-index: 1;
        }
        .footer-glow-wrapper:hover::after {
          opacity: 1;
          transition: opacity 150ms ease;
        }
      `}} />
      <footer 
        id="site-footer" 
        ref={footerRef}
        onMouseMove={handleMouseMove}
        className="footer-glow-wrapper w-full flex flex-col glass-panel edge-light-top relative mt-auto transition-all duration-[var(--duration-slow)] hover:border-[rgba(255,255,255,0.15)] overflow-hidden"
      >
        <div className="w-full relative z-10 py-8 md:py-10">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
              
              {/* Brand & Tagline - Takes up 4 cols on desktop */}
              <div className="flex flex-col gap-6 md:col-span-5 lg:col-span-4">
                <Link href="/" className="flex items-center">
                  <Image
                    src={wordmark}
                    alt="Biowess"
                    className="h-8 w-auto"
                  />
                </Link>
                <p className="type-body text-[var(--color-text-tier-2)] max-w-sm">
                  Open-source medical educational software.
                </p>
                <p className="type-small text-[var(--color-text-tier-3)] mt-auto pt-4 md:pt-12">
                  © 2026 Biowess. All rights reserved.
                </p>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden lg:block lg:col-span-2"></div>

              {/* Links Sections - Take up remaining cols */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:col-span-7 lg:col-span-6">
                
                {/* Product Links */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[var(--color-text-tier-3)] mb-2">
                    Product
                  </h3>
                  {productLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="type-body relative transition-colors duration-[var(--duration-fast)] text-[var(--color-text-tier-2)] hover:text-white w-fit after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-[var(--duration-base)] after:scale-x-0 hover:after:scale-x-100"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Resource Links */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[var(--color-text-tier-3)] mb-2">
                    Resources
                  </h3>
                  {resourceLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="type-body relative transition-colors duration-[var(--duration-fast)] text-[var(--color-text-tier-2)] hover:text-white flex items-center gap-1 w-fit group after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-[var(--duration-base)] after:scale-x-0 hover:after:scale-x-100"
                    >
                      {link.name}
                      <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>

                {/* Legal Links */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold tracking-wider uppercase text-[var(--color-text-tier-3)] mb-2">
                    Legal
                  </h3>
                  {legalLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="type-body relative transition-colors duration-[var(--duration-fast)] text-[var(--color-text-tier-2)] hover:text-white w-fit flex items-center gap-1 group after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white after:origin-left after:transition-transform after:duration-[var(--duration-base)] after:scale-x-0 hover:after:scale-x-100"
                    >
                      {link.name}
                      {link.href.startsWith("http") && (
                        <span className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                          ↗
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </Container>
        </div>

        {/* Bottom Bar */}
        <div className="w-full relative z-10 edge-light-top" style={{ borderTop: "1px solid var(--glass-border)", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-3">
              <p className="type-small text-[var(--color-text-tier-3)]">
                Built with rigor. Designed for medical education.
              </p>
              <p className="type-small text-[var(--color-text-tier-3)] font-mono">
                © BIOWESS 2026
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
