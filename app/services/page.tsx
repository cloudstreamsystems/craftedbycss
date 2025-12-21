import { Metadata } from "next";
import Container from "@/components/ui/Container";
import ScrollObserver from "@/components/ScrollObserver";
import { services } from "@/lib/data/services";
import { Check } from "lucide-react";
import ServiceSection from "@/components/services/ServiceSection";
import ProcessStackedServices from "@/components/services/ProcessStackedServices";

export const metadata: Metadata = {
  title: "Services | Cloudstream Systems",
  description: "Explore our comprehensive digital services including brand identities, web design, art direction, and development.",
};


export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <ScrollObserver mode="chaos">
        <section className="relative bg-gradient-to-br from-[#28236b] to-[#28236b] text-white py-12 md:py-24">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Comprehensive digital solutions tailored to elevate your brand and drive business growth.
              </p>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* Services Grid */}
      <ScrollObserver mode="drift">
        <section className="py-12 md:py-20 overflow-hidden bg-[#28236b]">
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceSection key={service.id} service={service} index={index} />
            ))}
          </div>
        </section>
      </ScrollObserver>

      {/* Process Section */}
      <ScrollObserver mode="drift">
        <ProcessStackedServices />
      </ScrollObserver>

      {/* Why Choose Us */}
      <ScrollObserver mode="drift">
        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-[#28236b] text-center">
                Why Choose Cloudstream Systems?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#28236b] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-[#28236b]">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>

      {/* CTA Section */}
      <ScrollObserver mode="warning">
        <section className="py-20 bg-gradient-to-br from-[#28236b] to-[#28236b] text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Let&apos;s discuss how we can help bring your vision to life with our comprehensive digital services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#28236b] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/projects"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </a>
              </div>
            </div>
          </Container>
        </section>
      </ScrollObserver>
    </>
  );
}



const benefits = [
  {
    title: "Full-Service Expertise",
    description: "From strategy to execution, we handle every aspect of your digital presence.",
  },
  {
    title: "Proven Track Record",
    description: "Years of experience delivering successful projects across diverse industries.",
  },
  {
    title: "Collaborative Approach",
    description: "We work closely with you as partners, ensuring your vision is realized.",
  },
  {
    title: "Cutting-Edge Technology",
    description: "We use the latest tools and frameworks to build future-proof solutions.",
  },
  {
    title: "Results-Focused",
    description: "Every decision is driven by data and focused on achieving measurable outcomes.",
  },
  {
    title: "Ongoing Support",
    description: "We're here for the long haul with maintenance, updates, and continuous optimization.",
  },
];
