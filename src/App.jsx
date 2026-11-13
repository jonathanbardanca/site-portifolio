import { useState, useEffect } from "react";
import { Header } from "./components/Header";

export default function App() {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <div
      className={`min-h-screen bg-bg-primary text-white w-full overflow-x-hidden`}
    >
      <Header lang={lang} onToggleLang={toggleLang} />

      <main className="w-full"></main>

      <footer></footer>
    </div>
  );
}
