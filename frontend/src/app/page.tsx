import About from "@/components/landingpage/About";
import Faq from "@/components/landingpage/Faq";
import Map from "@/components/landingpage/Map";
import Overview from "@/components/landingpage/Overview";
import Sponsors from "@/components/landingpage/Sponsors";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center flex-col w-screen">
      <header className="flex flex-col relative  ">
        <div className="flex w-full justify-around  h-[calc(100vh-8rem)] bg-hero-squares bg-no-repeat  items-center ">
          <div className="flex justify-center flex-col my-4">
              <h1 className="text-6xl font-extrabold py-2 bg-gradient-to-r from-primary  to-foreground inline-block text-transparent bg-clip-text">Witaj w Elektroniku</h1>
                  <div className="flex flex-col my-4">
                      <p className="flex  text-left items-center text-xl max-w-[32rem] text-primary-foreground leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.
                      </p>
                      <span className="w-full flex justify-center py-4">
                      <Button asChild>
                        <Link href="/aktualnosci">Dowiedz się więcej</Link>
                      </Button>
                      </span>
                  </div>
          </div>
          <div className="relative w-2/5 h-4/5">
              <Image alt="dyrektor" src={"/hero-img-modified.png"} fill/>
          </div>
        </div>
        
        <div className="w-full h-48 bg-repeat-x bg-splash-transition "></div>
        <div className="w-full h-64 bg-repeat-x bg-wave-transition "></div>
      </header>
      {/* Main content */}
      {/* <div className="flex justify-center flex-wrap border  border-black items-center gap-4 w-full  z-10">
        <NewsCard  />
        <NewsCard  />
        <NewsCard  />
      </div> */}
      <Overview />
      <About />
      <Map />
      <Faq />
      <Sponsors />
    </main>
  );
}
