"use client";

import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import TopContainer from "./components/TopContainer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Image from "next/image";
import image from "./assets/image/client3.jpg";

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
          avatar= {image}
          statusMessage = 'Typically replies within 1 hour'
        />
    </main>
  );
}
