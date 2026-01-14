
import React, { useState } from 'react';
import { Hero, Card, Modal } from '../components/UI';
import { IMAGES } from '../constants';

const PropertiesPage: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const properties = [
    { id: 1, image: IMAGES.img11, title: "Navet 1", text: "Västra Hamnen, Malmö", category: "Kontor" },
    { id: 2, image: IMAGES.img13, title: "Lighthouse", text: "Dockan, Malmö", category: "Kontor" },
    { id: 3, image: IMAGES.img14, title: "Kuben", text: "Gamla Staden, Malmö", category: "Kontor / Lager" },
    { id: 4, image: IMAGES.img15, title: "Spetsen", text: "Hyllie, Malmö", category: "Kontor" },
    { id: 5, image: IMAGES.img1, title: "City Gate", text: "Centrum, Malmö", category: "Kontor" },
    { id: 6, image: IMAGES.img5, title: "Designhuset", text: "Möllevången, Malmö", category: "Ateljé" },
  ];

  const gallery = [IMAGES.img11, IMAGES.img13, IMAGES.img14, IMAGES.img15, IMAGES.img1, IMAGES.img5];

  return (
    <main className="animate-fade-in">
      <Hero
        title="Fastigheter"
        backgroundImage={IMAGES.img3}
        overlayOpacity="bg-black/40"
      />

      {/* Filterbar */}
      <section className="bg-white border-b py-8 sticky top-20 z-40">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <select className="border border-gray-200 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e3a8a]">
              <option>Alla Områden</option>
              <option>Centrum</option>
              <option>Västra Hamnen</option>
              <option>Hyllie</option>
            </select>
            <select className="border border-gray-200 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e3a8a]">
              <option>Alla Typer</option>
              <option>Kontor</option>
              <option>Lager</option>
              <option>Butik</option>
            </select>
          </div>
          <div className="flex-grow max-w-md">
            <input
              type="text"
              placeholder="Sök fastighet..."
              className="w-full border border-gray-200 rounded px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1e3a8a]"
            />
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-50 text-[#1e3a8a] text-xs font-bold px-3 py-1 rounded-full">Miljöcertifierat</span>
            <span className="bg-blue-50 text-[#1e3a8a] text-xs font-bold px-3 py-1 rounded-full">Nyproduktion</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((p) => (
              <Card
                key={p.id}
                image={p.image}
                title={p.title}
                text={p.text}
                metadata={p.category}
                ctaText="Visa detaljer"
                onClick={() => setSelectedProperty(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
        title={selectedProperty?.title || ""}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={selectedProperty?.image} className="w-full h-80 object-cover rounded-lg mb-6" alt={selectedProperty?.title} />
            <h3 className="text-xl font-bold mb-4">Om fastigheten</h3>
            <p className="text-[#475569] mb-4">
              Denna fastighet erbjuder moderna och flexibla lokaler anpassade efter dagens krav på teknik och komfort. Belägen i ett av Malmös mest expansiva områden med utmärkta pendlingsmöjligheter.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded">
              <div>
                <p className="text-gray-500">Område</p>
                <p className="font-bold">{selectedProperty?.text}</p>
              </div>
              <div>
                <p className="text-gray-500">Miljöklass</p>
                <p className="font-bold">BREEAM Excellent</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Galleri</h3>
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img, i) => (
                <img key={i} src={img} className="w-full h-32 object-cover rounded-lg hover:opacity-80 cursor-pointer transition-opacity" />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default PropertiesPage;
