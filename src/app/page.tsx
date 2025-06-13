import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Why Work With Us"
        title=" Make your business energy smart"
      >
        We offer smart energy-saving solutions tailored for small enterprises. Our tools and insights help you reduce power costs and boost productivity — all without interrupting your daily operations.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        Learn How Our Solution Works
        Watch this short demo to see how we audit power usage, generate reports, and help your business save money month after month.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Hear directly from business owners who have lowered their energy bills and improved performance using our solutions.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="Need Help?" title="Frequently Asked Questions">
        Find quick answers about our energy audits, pricing, implementation timeline, and how we help businesses stay energy-smart.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
