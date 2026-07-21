import { useState, useEffect, useRef } from "react";

import { navLinks } from "../constants";

const WHATSAPP_NUMBER = "+2347013518696"; // replace with your WhatsApp number
const EMAIL_ADDRESS = "dubemjesseco@gmail.com"; // replace with your email address

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Dubem || Jesse
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="contact-btn group"
          >
            <div className="inner">
              <span>Contact me</span>
            </div>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-black-200 border border-white/10 shadow-lg overflow-hidden z-50">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                {/* WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-[#25D366]" viewBox="0 0 32 32">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.824.736 5.478 2.027 7.785L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.764-1.847l-.484-.287-5 1.193 1.22-4.87-.317-.5A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.274-9.874c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.199-.266.398-1.03 1.295-1.263 1.561-.233.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.214-2.758-.233-.398-.025-.613.175-.811.18-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.067-.499-.033-.698-.1-.199-.897-2.163-1.23-2.96-.323-.778-.65-.673-.897-.686l-.764-.013c-.266 0-.698.1-1.064.499-.365.398-1.396 1.362-1.396 3.32s1.43 3.851 1.629 4.117c.199.266 2.814 4.3 6.818 6.028.953.411 1.696.657 2.276.842.957.305 1.828.262 2.516.159.767-.114 2.355-.962 2.688-1.891.333-.93.333-1.728.233-1.891-.1-.166-.365-.266-.763-.465z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-white/10 transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                {/* Email icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-white/80" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;