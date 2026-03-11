/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import ServiceArea from "./components/ServiceArea";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyCallButton from "./components/StickyCallButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <ServiceArea />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <StickyCallButton />
    </div>
  );
}
