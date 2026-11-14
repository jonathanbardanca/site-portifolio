import { translations } from '../utils/translations.js';

export function Experiencias({ lang }) {
  const t = translations[lang].experiencias;

  return (
    <section
      id="experiencias"
      aria-labelledby="experiencias-heading"
      className="relative bg-[#040A19] py-28 px-4 overflow-hidden"
    >
      {/* Efeito de luz difusa nascendo na parte inferior à direita */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-[550px] w-[550px] rounded-full bg-sky-500/15 blur-[150px]"
      />

      <div className="mx-auto max-w-5xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-20 text-center">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {t.sectionTag}
          </span>
          <h2
            id="experiencias-heading"
            className="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Linha Central (visível em telas maiores, oculta no mobile) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block" />

          {/* Lista de Itens */}
          <div className="space-y-12">
            {t.items.map((item, index) => {
              const isLeft = item.side === 'left';
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Espaçamento para o lado oposto no desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Bolinha Central da Timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/50 bg-[#040A19] shadow-[0_0_15px_rgba(56,189,248,0.4)] z-10">
                    <span className="h-3 w-3 rounded-full bg-sky-400 animate-pulse" />
                  </div>

                  {/* Card de Conteúdo */}
                  <div className="w-full md:w-1/2 md:px-8">
                    <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]">
                      
                      {/* Período / Badge */}
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 font-mono text-xs text-sky-400">
                        {item.period}
                      </div>

                      {/* Título */}
                      <h3 className="font-display text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                        {item.title}
                      </h3>

                      {/* Instituição */}
                      <span className="mt-1 block font-mono text-xs text-slate-400">
                        {item.institution}
                      </span>

                      {/* Descrição */}
                      <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}