import { useState } from "react";
import { translations } from "../utils/translations.js";

export function Header({ lang, onToggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const navItems = [
    { label: t.home, href: "#home" },
    { label: t.sobre, href: "#sobre" },
    { label: t.tecnologias, href: "#tecnologias" },
    { label: t.projetos, href: "#projetos" },
    { label: t.cursos, href: "#cursos" },
    { label: t.contato, href: "#contato" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-100 mx-auto max-w-6xl px-4">
      {/* Luz do topo acendendo suavemente e ficando fixa */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-10 right-0 -z-10 h-64 w-80 rounded-full bg-sky-500/25 blur-[95px] animate-light-down"
      />

      <nav
        aria-label="Navegação principal"
        className="flex items-center justify-between rounded-full border border-slate-800/80 bg-[#060C18]/70 px-6 py-3 backdrop-blur-md shadow-[0_0_25px_rgba(14,165,233,0.08)] shadow-black/30 backdrop-blur-lg"
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Jonathan Bardança - Início"
          className="font-mono text-base font-bold tracking-tight text-white transition hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
        >
          &lt;JB <span className="text-sky-400">/&gt;</span>
        </a>

        {/* Links Desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Ações Desktop (Idioma + Currículo) */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label="Alternar idioma entre Português e Inglês"
            className="cursor-pointer rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-1.5 font-mono text-xs font-medium text-slate-200 transition hover:border-sky-400/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <span className={lang === "pt" ? "text-sky-400 font-bold" : ""}>
              PT
            </span>
            {" / "}
            <span className={lang === "en" ? "text-sky-400 font-bold" : ""}>
              EN
            </span>
          </button>

          <a
            href="/curriculo-jonathan-bardanca.pdf"
            download
            className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)] transition duration-300 hover:shadow-[0_0_25px_rgba(56,189,248,0.75)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            {lang === "pt" ? "Baixar currículo" : "Download CV"}
          </a>
        </div>

        {/* Botão Menu Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Dropdown Mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="mt-2 rounded-2xl border border-slate-800 bg-[#060C18]/95 p-5 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-slate-200 hover:text-sky-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-4">
            <button
              type="button"
              onClick={onToggleLang}
              className="rounded-full border border-slate-700 px-4 py-2 font-mono text-xs text-slate-200"
            >
              PT / EN ({lang.toUpperCase()})
            </button>
            <a
              href="/curriculo-jonathan-bardanca.pdf"
              download
              className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
            >
              {lang === "pt" ? "Baixar currículo" : "Download CV"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
