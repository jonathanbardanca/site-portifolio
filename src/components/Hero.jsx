import fotoPerfil from '../assets/foto-perfil.jpg';
import { translations } from '../utils/translations.js';

export function Hero({ lang }) {
  const t = translations[lang].home;

  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-4 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Coluna Esquerda: Textos e Ações */}
        <div className="lg:col-span-7">
          <h1
            id="home-heading"
            className="font-display text-5xl font-medium tracking-tight text-white sm:text-6xl lg:text-8xl leading-[1.08]"
          >
            Jonathan{' '}
            <span className="block bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Bardança.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {lang === 'pt' ? (
              <>
                Desenvolvedor de software focado em{' '}
                <strong className="font-semibold text-white">JavaScript</strong>,{' '}
                <strong className="font-semibold text-white">React</strong> e{' '}
                <strong className="font-semibold text-white">Node.js</strong>. Crio
                aplicações web completas com atenção a performance e UI/UX.
              </>
            ) : (
              <>
                Software developer focused on{' '}
                <strong className="font-semibold text-white">JavaScript</strong>,{' '}
                <strong className="font-semibold text-white">React</strong>, and{' '}
                <strong className="font-semibold text-white">Node.js</strong>. I build
                full-stack web applications with a focus on performance and UI/UX.
              </>
            )}
          </p>

          {/* Botões Principais */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2 min-w-[180px] rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.4)] transition duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              {t.btnProjects}
            </a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 min-w-[180px] rounded-xl border border-slate-700/90 bg-slate-900/60 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_15px_rgba(14,165,233,0.1)] transition duration-300 hover:border-sky-400/70 hover:bg-slate-800/80 hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              {t.btnContact}
            </a>
          </div>

          {/* Redes Sociais com hover neon */}
          <div className="mt-11 flex items-center gap-5 text-slate-400">
            <a
              href="https://github.com/SEU-USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Jonathan Bardança"
              className="transition duration-300 hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/SEU-USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Jonathan Bardança"
              className="transition duration-300 hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            <a
              href="mailto:jonathanbardanca1@gmail.com"
              aria-label="Enviar e-mail para Jonathan Bardança"
              className="transition duration-300 hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Coluna Direita: Foto + Feixe de Luz Subindo para se encontrar com a do topo */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <div className="relative">
            {/* Feixe de luz subindo da foto e fixando aceso */}
            <div
              aria-hidden="true"
              className="pointer-events-none -z-10 absolute -top-36 right-4 h-80 w-80 rounded-full bg-sky-500/30 blur-[100px] animate-light-up"
            />

            {/* Glow azul atrás da foto */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-full bg-sky-500/30 blur-2xl"
            />

            <div className="relative h-76 w-76 overflow-hidden rounded-full border-2 border-sky-400/50 shadow-2xl shadow-sky-500/30 sm:h-88 sm:w-88">
              <img
                src={fotoPerfil}
                alt="Retrato de Jonathan Bardança, desenvolvedor de software"
                width={380}
                height={380}
                fetchPriority="high"
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Badge de status */}
            <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-full border border-slate-700/80 bg-[#071021]/95 px-4 py-1.5 shadow-lg backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>
              <span className="font-mono text-xs text-slate-200">
                {t.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll e Seta */}
      <div className="mt-14 flex flex-col items-center justify-center">
        <span className="text-slate-400 font-display text-[10px] tracking-[0.18em]">SCROLL</span>
        <a
          href="#sobre"
          aria-label="Rolar para a seção Sobre"
          className="animate-bounce rounded-full p-1 text-sky-400/70 transition hover:text-sky-400"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}