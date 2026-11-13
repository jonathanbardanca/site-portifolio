import { useState } from 'react';
import { translations } from '../utils/translations.js';

export function Projetos({ lang }) {
  const t = translations[lang].projetos;
  const [activeTab, setActiveTab] = useState('estudos');

  // Filtra os projetos com base na aba selecionada
  const filteredProjects = t.items.filter((item) => item.category === activeTab);

  return (
    <section
      id="projetos"
      aria-labelledby="projetos-heading"
      className="relative bg-[#060F1F] py-24 px-4 overflow-hidden"
    >
      {/* Efeito de luz difusa nascendo na ponta superior esquerda (mesmo padrão da seção Sobre) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -left-16 h-[500px] w-[500px] rounded-full bg-sky-500/20 blur-[130px] animate-light-down"
      />

      <div className="mx-auto max-w-6xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-10">
          <span className="font-mono text-xs font-semibold tracking-wider text-sky-400 uppercase">
            {t.sectionTag}
          </span>
          <h2
            id="projetos-heading"
            className="mt-3 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {t.title}
          </h2>
        </div>

        {/* Abas de Navegação (Estudos de caso / Autorais) */}
        <div className="mb-12 flex items-center gap-3">
          <button
            onClick={() => setActiveTab('estudos')}
            className={`rounded-full px-5 py-2.5 font-display text-sm font-medium transition-all duration-300 ${
              activeTab === 'estudos'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                : 'border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-sky-400/40 hover:text-white'
            }`}
          >
            {t.tabs.estudos}
          </button>

          <button
            onClick={() => setActiveTab('autorais')}
            className={`rounded-full px-5 py-2.5 font-display text-sm font-medium transition-all duration-300 ${
              activeTab === 'autorais'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.4)]'
                : 'border border-slate-800 bg-slate-900/60 text-slate-300 hover:border-sky-400/40 hover:text-white'
            }`}
          >
            {t.tabs.autorais}
          </button>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.25)]"
            >
              {/* Área do Banner / Imagem do Projeto (Gradiente Azul com Placeholder) */}
              <div className="relative h-64 w-full bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-600 p-6 flex items-end overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <span className="relative font-mono text-xs tracking-wider text-white/90 bg-slate-950/30 px-3 py-1 rounded-md backdrop-blur-sm">
                  {t.imagePlaceholder}
                </span>
              </div>

              {/* Conteúdo do Card */}
              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    aria-label={`Ver detalhes do projeto ${project.title}`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-800/60 text-slate-300 transition-all duration-300 group-hover:border-sky-400 group-hover:bg-sky-500/10 group-hover:text-sky-400"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags de Tecnologias */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-1 font-mono text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}