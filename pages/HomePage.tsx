
import React from 'react';
import { Hero, Card } from '../components/UI';
import { IMAGES } from '../constants';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <main className="animate-fade-in">
      {/* Hero Section */}
      <Hero
        title="Testföretag"
        tagline="Långsiktig förvaltning och utveckling av kommersiella fastigheter i Malmö."
        backgroundImage={IMAGES.img1}
        primaryCTA={{ text: "Se lediga lokaler", link: "#/lediga-lokaler" }}
        secondaryCTA={{ text: "Läs mer om oss", link: "#/om-oss" }}
      />

      {/* Intro Section - 2-kolumners sektion */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-[40px] leading-tight font-bold mb-8 text-[#0f172a]">
              Långsiktigt fastighetsägande i Malmö
            </h2>
            <div className="space-y-6 text-[#475569] text-lg leading-relaxed">
              <p>
                Testföretag har varit en stabil partner i Malmös stadsutveckling i över två decennier. Vi tror på att skapa miljöer där företag kan växa och människor kan trivas, genom personligt engagemang och hög närvaro.
              </p>
              <p>
                Vårt fokus ligger på att kombinera moderna kontorslösningar med ett hållbart och långsiktigt förvaltande av våra unika objekt.
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
            <img src={IMAGES.img5} alt="Modern kontorsinteriör" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Utvalda fastigheter - grid 2x2 desktop, 1x2 mobil */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Utvalda fastigheter</h2>
              <p className="text-[#475569]">Ett urval av våra mest profilstarka objekt.</p>
            </div>
            <Link to="/fastigheter" className="text-[#1e3a8a] font-bold border-b-2 border-[#1e3a8a] pb-1 hover:text-blue-700 hover:border-blue-700 transition-all">
              Visa alla fastigheter
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              image={IMAGES.img11}
              title="Fastighet – Västra Hamnen"
              text="Miljöcertifierad kontorsfastighet med fantastisk utsikt."
              metadata="Kontor | Malmö"
            />
            <Card
              image={IMAGES.img13}
              title="Fastighet – Dockan"
              text="Modern arkitektur möter industriell historia."
              metadata="Kontor | Malmö"
            />
            <Card
              image={IMAGES.img14}
              title="Fastighet – Gamla Staden"
              text="Klassisk exteriör med toppmodern interiör."
              metadata="Kontor | Malmö"
            />
            <Card
              image={IMAGES.img15}
              title="Fastighet – Hyllie"
              text="Strategiskt läge vid regionens viktigaste knutpunkt."
              metadata="Kontor | Malmö"
            />
          </div>
        </div>
      </section>

      {/* Projekt/nyheter highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-xl">
            <img src={IMAGES.img9} alt="Projektutveckling" className="w-full h-[400px] object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f172a]">Vi utvecklar för framtiden</h2>
            <p className="text-[#475569] text-lg mb-8">
              Lär dig mer om hur vi förvandlar äldre områden till levande stadsdelar genom våra senaste projektutvecklingsuppdrag.
            </p>
            <Link
              to="/projektutveckling"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-md font-bold hover:bg-black transition-colors"
            >
              Läs om projektutveckling
            </Link>
          </div>
        </div>
      </section>

      {/* CTA-band */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <img src={IMAGES.img6} alt="Lokal sök" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Letar du efter din nästa lokal?</h2>
          <Link
            to="/lediga-lokaler"
            className="bg-[#1e3a8a] text-white px-10 py-5 rounded-md font-bold text-lg hover:bg-blue-800 transition-all shadow-xl inline-block"
          >
            Se lediga lokaler
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
