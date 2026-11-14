import { useEffect, useRef, useState } from 'react';
import { translations } from '../utils/translations.js';

export function Contato({ lang }) {
  const t = translations[lang].contato;
  const [isLit, setIsLit] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver para acender o neon da base suavemente ao chegar na seção
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLit(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      aria-labelledby="contato-heading"
      className="relative bg-[#060F1F] pt-24 pb-2 px-4 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative z-10 py-24">
        
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {t.sectionTag}
          </span>
          <h2
            id="contato-heading"
            className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]"
          >
            {t.titleLine1}{' '}
            <span className="block text-slate-100">{t.titleLine2}</span>
          </h2>
        </div>

        {/* Conteúdo Principal: Esquerda (Cards de Contato) | Direita (Formulário) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          
          {/* Coluna Esquerda: Informações de Contato */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-300 text-base leading-relaxed">
              {t.description}
            </p>

            {/* Card E-mail */}
            <a
              href="mailto:jonathanbardanca1@gmail.com"
              className="group relative flex items-center gap-5 p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:border-sky-400/50 transition-colors">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase block mb-1">
                  {t.emailLabel}
                </span>
                <span className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-sky-400 transition-colors">
                  jonathanbardanca1@gmail.com
                </span>
              </div>
            </a>

            {/* Card LinkedIn */}
            <a
              href="https://www.linkedin.com/in/SEU-USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-5 p-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
            >
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:border-sky-400/50 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase block mb-1">
                  {t.linkedinLabel}
                </span>
                <span className="font-display text-sm sm:text-base font-semibold text-white group-hover:text-sky-400 transition-colors">
                  Jonathan Bardança
                </span>
              </div>
            </a>
          </div>

          {/* Coluna Direita: Formulário de Mensagem */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {t.formSubtitle}
                  </p>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-2">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-slate-300 mb-2">
                      {t.emailInputLabel}
                    </label>
                    <input
                      type="email"
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-300 mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.messagePlaceholder}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 py-3.5 px-6 font-display text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.4)] transition duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] hover:brightness-110"
                >
                  {t.sendButton}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-sky-400 shadow-[0_-15px_35px_5px_rgba(56,189,248,0.85)] transition-all duration-[1500ms] ${
            isLit ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'
          }`}
        />
      </div>

      {/* FOOTER & LINHA NEON NA BORDA INFERIOR */}
      <div className="relative pt-8 border-t border-slate-800/80">
        
        {/* Linha Neon Reta Brilhante na Borda Inferior com Sombra Projetada para Cima */}

        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 relative z-10 pb-4">
          <div>
            <span className="font-display font-semibold text-white tracking-wide">
              {t.footerAuthor}
            </span>
            <p className="font-mono text-xs text-slate-500 mt-1">
              {t.footerRights}
            </p>
          </div>

          <a
            href="#top"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2.5 font-mono text-xs text-slate-300 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
          >
            {t.backToTop}
            <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M12 19V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}