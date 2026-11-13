import { translations } from '../utils/translations.js';

export function Sobre({ lang }) {
  const t = translations[lang].sobre;

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="relative bg-[#060F1F] py-24 px-4 overflow-hidden"
    >
      {/* Efeito de luz difusa nascendo na ponta superior esquerda */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[130px] animate-light-down"
      />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da Seção com Tag e Título H2 */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {t.sectionTag}
          </span>
          <h2
            id="sobre-heading"
            className="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.title}
          </h2>
        </div>

        {/* Grid Principal: Esquerda (Textos + Badges + Citação) | Direita (Cards Empilhados) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Coluna Esquerda */}
          <div className="lg:col-span-6 space-y-8">
            {/* Parágrafos de Apresentação */}
            <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                {t.p1Part1}
                <strong className="font-semibold text-white">{t.p1Bold}</strong>
                {t.p1Part2}
              </p>
              <p>{t.p2}</p>
            </div>

            {/* Badges / Pills */}
            <div className="flex flex-wrap gap-2.5">
              {t.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 font-mono text-xs tracking-wider text-slate-300 backdrop-blur-md shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Citação com barra lateral azul */}
            <div className="border-l-2 border-sky-500 pl-5 py-1">
              <blockquote className="font-display text-lg sm:text-xl font-medium text-white italic tracking-wide">
                {t.quote}
              </blockquote>
            </div>
          </div>

          {/* Coluna Direita: Cards Empilhados */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {t.cards.map((card, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
              >
                <div className="flex items-center gap-5">
                  {/* Ícone Estilizado */}
                  <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:border-sky-400/50 transition-colors">
                    {index === 0 && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                      </svg>
                    )}
                  </div>

                  {/* Títulos e Descrições */}
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Número do Card (01, 02, 03) */}
                <span className="font-mono text-sm font-semibold text-sky-400/80 shrink-0 ml-4">
                  {card.num}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}