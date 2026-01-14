
import React, { useState } from 'react';
import { Hero, Card, Modal } from '../components/UI';
import { IMAGES } from '../constants';

const AvailablePage: React.FC = () => {
  const [selectedPremise, setSelectedPremise] = useState<any>(null);

  const premises = [
    { id: 1, image: IMAGES.img2, title: "Modern Kontorsyta", text: "Västra Hamnen | 350 kvm", metadata: "Ledig omgående" },
    { id: 2, image: IMAGES.img7, title: "Ljus Ateljé", text: "Dockan | 120 kvm", metadata: "Ledig Q2 2026" },
    { id: 3, image: IMAGES.img10, title: "Öppet Kontorslandskap", text: "Centrum | 500 kvm", metadata: "Ledig nu" },
    { id: 4, image: IMAGES.img11, title: "Flerfunktionell lokal", text: "Hyllie | 800 kvm", metadata: "Ledig enligt ö.k" },
  ];

  const gallery = [IMAGES.img3, IMAGES.img14, IMAGES.img15];

  return (
    <main className="animate-fade-in">
      <Hero
        title="Lediga lokaler"
        backgroundImage={IMAGES.img12}
        overlayOpacity="bg-black/50"
      />

      {/* Sök & filter */}
      <section className="py-12 bg-gray-50 border-b sticky top-20 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="relative flex-grow w-full">
              <input
                type="text"
                placeholder="Sök på område, storlek eller typ..."
                className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#1e3a8a] bg-white text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap justify-center">
              {['Alla', 'Kontor', 'Lager', 'Butik'].map(chip => (
                <button key={chip} className="px-4 py-2 rounded-full border border-gray-200 text-xs font-bold hover:border-[#1e3a8a] hover:text-[#1e3a8a] bg-white transition-all">
                  {chip}
                </button>
              ))}
            </div>
            <select className="border border-gray-200 rounded-lg px-4 py-3 text-sm bg-white font-medium">
              <option>Sortering: Nyast först</option>
              <option>Storlek: Minst först</option>
              <option>Storlek: Störst först</option>
            </select>
          </div>
        </div>
      </section>

      {/* Resultatlista */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premises.map((p) => (
              <Card
                key={p.id}
                image={p.image}
                title={p.title}
                text={p.text}
                metadata={p.metadata}
                ctaText="Se lokaldetaljer"
                onClick={() => setSelectedPremise(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lokaldetalj (modal) */}
      <Modal
        isOpen={!!selectedPremise}
        onClose={() => setSelectedPremise(null)}
        title={selectedPremise?.title || "Lokaldetaljer"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img src={selectedPremise?.image} className="w-full h-80 object-cover rounded-xl mb-8 shadow-lg" alt={selectedPremise?.title} />
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">Om lokalen</h3>
                <p className="text-[#475569] leading-relaxed">
                  En toppmodern lokal med generöst ljusinsläpp och flexibla ytor som kan anpassas efter er verksamhets specifika behov. Fastigheten erbjuder hög teknisk standard och ett utmärkt läge för både kunder och anställda.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 p-6 bg-blue-50/50 rounded-xl">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Yta</p>
                  <p className="font-bold text-[#1e3a8a]">{selectedPremise?.text.split('|')[1]}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Tillgänglighet</p>
                  <p className="font-bold text-[#1e3a8a]">{selectedPremise?.metadata}</p>
                </div>
              </div>
              <button className="w-full bg-[#1e3a8a] text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-all shadow-md transform hover:-translate-y-1">
                Boka visning
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Galleri</h3>
            <div className="grid grid-cols-1 gap-4">
              {gallery.map((img, i) => (
                <img key={i} src={img} className="w-full h-48 object-cover rounded-xl transition-transform hover:scale-[1.02] cursor-pointer" alt="Interiör" />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default AvailablePage;
