import About from "@/components/landingpage/About";
import Faq from "@/components/landingpage/Faq";
import Map from "@/components/landingpage/Map";
import News from "@/components/landingpage/News";
import Overview from "@/components/landingpage/Overview";
import Sponsors from "@/components/landingpage/Sponsors";
import { Button } from "@/components/ui/button";
import { getNavigation } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const navigation = await getNavigation();

  console.log(navigation);
  

  return (
    <main className="flex justify-center flex-col w-full">
      <header className="flex flex-col relative">
        <div className="px-4 flex flex-col justify-center gap-8 lg:flex-row xl:justify-around w-full items-center h-[calc(100vh-8rem)] bg-hero-squares bg-no-repeat">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl px-4 lg:text-6xl xl:text-7xl text-center lg:text-left font-extrabold py-2 bg-gradient-to-r from-primary to-primary-foreground inline-block text-transparent bg-clip-text">Witaj w Elektroniku</h1>
            <p className="flex px-4 text-center lg:text-left items-center text-lg max-w-[32rem] text-primary-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.
            </p>
            <span className="w-full flex justify-center py-4">
            <Button asChild>
              <Link href="/aktualnosci">Dowiedz się więcej</Link>
            </Button>
            </span>
          </div>
          <div className="hidden lg:block lg:aspect-[125/84] max-w-[50rem] relative w-2/4 h-7/12">
              <Image alt="dyrektor" src={"/hero.svg"} fill/>
          </div>
        </div>
        
        <div className="w-full h-48 bg-repeat-x bg-splash-transition"></div>
        <div className="w-full h-64 bg-repeat-x bg-wave-transition"></div>
      </header>
      {/* Main content */}
      <Overview />
      <About />
      <News />
      <Map />
      <Faq />
      <Sponsors />
    </main>
  );
}
