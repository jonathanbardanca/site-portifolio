import { useState } from 'react';
import { translations } from '../utils/translations.js';

export function Tecnologias({ lang }) {
  const t = translations[lang].tecnologias;
  const [activeStack, setActiveStack] = useState(t.stacks[0]);

  return (
    <section
      id="tecnologias"
      aria-labelledby="tecnologias-heading"
      className="relative bg-bg-primary py-24 px-4 overflow-hidden"
    >
      {/* Luz difusa nascendo no canto superior direito para manter o padrão harmonioso */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-sky-500/15 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-14">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {t.sectionTag}
          </span>
          <h2
            id="tecnologias-heading"
            className="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400">
            {t.subtitle}
          </p>
        </div>

        {/* Layout em Grid: Esquerda (Grid de Tecnologias) | Direita (Div de Preview Personalizada) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          
          {/* Coluna Esquerda: Grid de Cards de Tecnologias */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {t.stacks.map((stack, index) => {
              const isSelected = activeStack.name === stack.name;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveStack(stack)}
                  onClick={() => setActiveStack(stack)}
                  className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl border bg-slate-900/60 backdrop-blur-md cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)] ${
                    isSelected
                      ? 'border-sky-400/80 shadow-[0_0_25px_rgba(56,189,248,0.3)] bg-slate-800/80'
                      : 'border-slate-800/80 hover:border-sky-400/50'
                  }`}
                >
                  {/* Ícone Oficial via CDN */}
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 p-2.5 border border-sky-500/20 group-hover:border-sky-400/60 transition-colors">
                    <img
                      src={stack.icon}
                      alt={stack.name}
                      className={`h-7 w-7 object-contain ${
                        stack.isMonochrome ? 'brightness-0 invert' : ''
                      }`}
                    />
                  </div>

                  {/* Nome da Tecnologia */}
                  <span className="font-display text-sm font-medium text-white group-hover:text-sky-400 transition-colors text-center">
                    {stack.name}
                  </span>
                  
                  <span className="mt-1 font-mono text-[10px] text-slate-400 text-center">
                    {stack.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Coluna Direita: Div de Preview Personalizada */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="overflow-hidden rounded-2xl border border-sky-500/30 bg-slate-900/80 p-5 backdrop-blur-md shadow-[0_0_40px_rgba(14,165,233,0.15)] transition-all duration-300">
              
              {/* Imagem de Destaque */}
              <div className="relative h-60 w-full overflow-hidden rounded-xl border border-slate-700/60 bg-slate-950">
                <img
                  src={activeStack.image}
                  alt={activeStack.name}
                  className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060F1F] via-transparent to-transparent opacity-80" />
                
                {/* Badge flutuante */}
                <span className="absolute top-3 left-3 rounded-full border border-sky-400/40 bg-slate-950/80 px-3 py-1 font-mono text-xs text-sky-400 backdrop-blur-md">
                  {activeStack.category}
                </span>
              </div>

              {/* Bloco de Texto */}
              <div className="mt-5 space-y-3">
                <h3 className="font-display text-2xl font-semibold text-white tracking-tight flex items-center justify-between">
                  {activeStack.name}
                  <span className="font-mono text-xs text-sky-400/80 font-normal">Stack Info</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeStack.description}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}