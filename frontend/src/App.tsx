import { Header } from "./molecule/Header";
import { HeaderBelowSection } from "./molecule/header-below-section";
import { BodySection } from "./molecule/body-section";
import { DomainBanner } from "./molecule/domain-banner";
import { HomeFaq } from "./molecule/home-faq";
import { SubFooter } from "./molecule/footer";
import "./App.css";
import { TestimonialSection } from "./molecule/testimonial-section";
import { Footer } from "./molecule/footer";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderBelowSection />
      <BodySection />
      <TestimonialSection />
      <DomainBanner />
      <HomeFaq />
      <Footer />
      <SubFooter/>
    </div>
  );
}