import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import ProcessStacked from "@/components/home/ProcessStacked";
import RecentProjects from "@/components/home/RecentProjects";
import FAQ from "@/components/home/FAQ";
import TrustedBy from "@/components/sections/TrustedBy";
import CTA from "@/components/home/CTA";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver mode="chaos">
        <Hero />
      </ScrollObserver>

      <ScrollObserver mode="drift">
        <About />
      </ScrollObserver>

      <ScrollObserver mode="warning">
        <Stats />
      </ScrollObserver>

      <ScrollObserver mode="drift">
        <Services />
      </ScrollObserver>

      <ScrollObserver mode="drift">
        <ProcessStacked />
      </ScrollObserver>

      <ScrollObserver mode="drift">
        <RecentProjects />
      </ScrollObserver>

      <ScrollObserver mode="drift">
        <FAQ />
      </ScrollObserver>

      <ScrollObserver mode="drift">
        <TrustedBy
          title="Trusted by Industry Leaders"
          subtitle="Join hundreds of companies that trust us with their digital transformation"
          logoSet="clients"
        />
      </ScrollObserver>

      <ScrollObserver mode="warning">
        <CTA />
      </ScrollObserver>
    </>
  );
}
