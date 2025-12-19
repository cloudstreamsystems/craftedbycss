import { Metadata } from "next";
import Container from "@/components/ui/Container";
import LogoCarousel, { techLogos, clientLogos } from "@/components/ui/LogoCarousel";
import TrustedBy from "@/components/sections/TrustedBy";

export const metadata: Metadata = {
  title: "Logo Carousel Demo | Cloudstream Systems",
  description: "Demo of the logo carousel component recreated from the WordPress site.",
};

// Custom logo set example - using original WordPress company logos
const customLogos = [
  {
    id: "company-1",
    name: "Company Logo 1",
    src: "/logos/client-1.png",
    alt: "Company Logo 1",
  },
  {
    id: "company-2",
    name: "Company Logo 2",
    src: "/logos/client-2.png",
    alt: "Company Logo 2",
  },
  {
    id: "company-3",
    name: "Company Logo 3",
    src: "/logos/client-3.png",
    alt: "Company Logo 3",
  },
  {
    id: "company-4",
    name: "Company Logo 4",
    src: "/logos/client-4.png",
    alt: "Company Logo 4",
  },
  {
    id: "company-5",
    name: "Company Logo 5",
    src: "/logos/client-5.png",
    alt: "Company Logo 5",
  },
];

export default function LogoCarouselDemo() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#28236b] to-[#28236b] text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Logo Carousel Demo
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Recreated from the WordPress site with modern React components
            </p>
          </div>
        </Container>
      </section>

      {/* Demo Sections */}
      <div className="py-20 space-y-20">

        {/* Tech Logos Carousel */}
        <section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technology Stack
              </h2>
              <p className="text-lg text-gray-600">
                Modern tools and frameworks we use
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <LogoCarousel
                logos={techLogos}
                speed={20}
                direction="left"
                pauseOnHover={true}
                grayscale={true}
                className="py-8"
              />
            </div>
          </Container>
        </section>

        {/* Client Logos Carousel - Reverse Direction */}
        <section className="bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Client Logos (WordPress Originals)
              </h2>
              <p className="text-lg text-gray-600">
                Actual customer logos from the WordPress site
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

              <LogoCarousel
                logos={clientLogos}
                speed={25}
                direction="right"
                pauseOnHover={true}
                grayscale={false}
                className="py-8"
              />
            </div>
          </Container>
        </section>

        {/* Custom Logos - No Grayscale */}
        <section className="bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Company Logos (No Grayscale)
              </h2>
              <p className="text-lg text-gray-600">
                Original company logos from WordPress uc_logo_carousel
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <LogoCarousel
                logos={customLogos}
                speed={30}
                direction="left"
                pauseOnHover={true}
                grayscale={false}
                className="py-8"
              />
            </div>
          </Container>
        </section>

        {/* Full TrustedBy Section Component */}
        <TrustedBy
          title="Complete Trusted By Section"
          subtitle="This is the full section component with stats"
          logoSet="clients"
        />

        {/* Configuration Examples */}
        <section className="bg-gray-100">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Configuration Options
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">LogoCarousel Props</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>logos:</strong> Array of logo objects</li>
                    <li><strong>speed:</strong> Animation speed (default: 30)</li>
                    <li><strong>direction:</strong> &quot;left&quot; or &quot;right&quot; (default: &quot;left&quot;)</li>
                    <li><strong>pauseOnHover:</strong> Pause on hover (default: true)</li>
                    <li><strong>grayscale:</strong> Apply grayscale filter (default: true)</li>
                    <li><strong>className:</strong> Additional CSS classes</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Logo Object Structure</h3>
                  <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                    {`{
  id: "unique-id",
  name: "Logo Name",
  src: "/path/to/logo.svg",
  alt: "Alt text",
  width?: 120,
  height?: 60
}`}
                  </pre>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}
