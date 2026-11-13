import { useState } from 'react';
import { Header } from './components/Header';

export default function App() {

return (
      <div className={`min-h-screen bg-bg-primary text-white w-full overflow-x-hidden`}>
        <Header lang={"pt"}/>
        
        <main className="w-full">
        </main>

        <footer></footer>
      </div>
  );
}
