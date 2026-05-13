import { Hero } from "../components/Hero";
import { SelectedWork } from "../components/SelectedWork";
import { Method } from "../components/Method";
import { Process } from "../components/Process";
import { WhoFor } from "../components/WhoFor";
import { Logos } from "../components/Logos";
import { Testimonials } from "../components/Testimonials";
import { Founders } from "../components/Founders";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Method />
      <Process />
      <WhoFor />
      <Logos />
      <Testimonials />
      <Founders />
      <Contact />
    </>
  );
}
