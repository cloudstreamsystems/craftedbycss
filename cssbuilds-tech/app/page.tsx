import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import RecentProjects from "@/components/home/RecentProjects";
import FAQ from "@/components/home/FAQ";
import TrustedBy from "@/components/sections/TrustedBy";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Process />
      <RecentProjects />
      <FAQ />
      <TrustedBy
        title="Trusted by Industry Leaders"
        subtitle="Join hundreds of companies that trust us with their digital transformation"
        logoSet="clients"
      />
      <CTA />
    </>
  );
}
