import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex justify-center flex-col">
      <Header title="Witaj na stronie" subtitle="Rozpoczynamy nabór na rok szkolny 2024! Nasza szkoła to miejsce, gdzie każdy uczeń znajdzie wsparcie, inspirację i możliwości rozwoju. Dołącz do naszej społeczności, gdzie stawiamy na aktywne metody nauczania, rozwój kompetencji społecznych i kreatywność. Niezależnie od zainteresowań - zapraszamy do aplikowania i dołączenia do naszego wspaniałego środowiska edukacyjnego!">
      
      </Header>
      <div className="flex justify-center items-center h-96 w-full border border-black z-10">Main content</div>
    </main>
  );
}
