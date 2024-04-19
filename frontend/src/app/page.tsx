import Benefits from "@/components/landingpage/Benefits";
import Faq from "@/components/landingpage/Faq";
import Hero from "@/components/landingpage/Hero";
import Map from "@/components/landingpage/Map";
import News from "@/components/landingpage/News";
import Overview from "@/components/landingpage/Overview";
import Sponsors from "@/components/landingpage/Sponsors";
import { getLandingPage } from "@/lib/api";


export default async function Home() {
  const data = await getLandingPage();

  //console.log(data);
  

  return (
    <main className="flex justify-center flex-col w-full gap-16">
      <header className="flex flex-col ">
        <Hero />
        <div className="w-full h-64 bg-repeat-x bg-wave-transition"></div>
      </header>
      {/* Main content */}
      <Overview />
      <Benefits />
      <News />
      <Map />
      <Faq />
      <Sponsors />
    </main>
  );
}
