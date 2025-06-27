import { Header } from "./molecule/Header";
import { HeaderBelowSection } from "./molecule/header-below-section";
import { BodySection } from "./molecule/body-section";
import "./App.css";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <HeaderBelowSection />
      <BodySection />
    </div>
  );
}

