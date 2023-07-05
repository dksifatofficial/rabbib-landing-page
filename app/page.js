"use client";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import TopContainer from "./components/TopContainer";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Home() {
  return (
    <main>
      <TopContainer />
      <Services />
      <AboutUs />
      <Contact />
      <FloatingWhatsApp
          phoneNumber="+8801993383387"
          accountName="DK Sifat"
          statusMessage = 'Typically replies within 5 min'
        />
    </main>
  );
}
