import { Header } from "./molecule/Header";
import { HeaderBelowSection } from "./molecule/header-below-section";
import { BodySection } from "./molecule/body-section";
import "./App.css";
import { TestimonialSection } from "./molecule/testimonial-section";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderBelowSection />
      <BodySection />
      <TestimonialSection />
    </div>
  );
}