import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import TopContainer from "./components/TopContainer";

export default function Home() {
  return (
    <main>
      <TopContainer />
      <Services />
      <AboutUs />
      <Contact />
    </main>
  );
}
