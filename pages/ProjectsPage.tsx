
import React from 'react';
import { Hero } from '../components/UI';
import { IMAGES } from '../constants';

const ProjectsPage: React.FC = () => {
  return (
    <main className="animate-fade-in">
      <Hero
        title="Projektutveckling"
        backgroundImage={IMAGES.img9}
        overlayOpacity="bg-black/50"
      />

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Vår utvecklingsprocess</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">Vi tar ansvar för hela kedjan, från tidiga idéskisser till färdigställd fastighet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Idé & Planering", text: "Vi identifierar potential i outnyttjade områden och ritar upp framtidens stadsmiljö." },
              { title: "Genomförande", text: "Med fokus på kvalitet och hållbarhet bygger vi lokaler som står sig över tid." },
              { title: "Förvaltning", text: "När huset står klart tar vår förvaltningsavdelning över för att säkerställa långsiktig drift." },
            ].map((step, idx) => (
              <div key={idx} className="text-center p-8 rounded-xl bg-gray-50">
                <div className="w-16 h-16 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Highlight */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Kvarteret Framtiden</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Vårt senaste prestigeprojekt är en total transformation av den gamla textilfabriken till ett hypermodernt kluster för techbolag och startup-miljöer. Här kombineras bevarad industrihistoria med smart teknologi.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-sm font-bold text-blue-400">
                <span className="mr-2">Yta:</span>
                <span className="text-white">12 500 kvm</span>
              </div>
              <div className="flex items-center text-sm font-bold text-blue-400">
                <span className="mr-2">Status:</span>
                <span className="text-white">Pågående (Beräknat klart Q4 2026)</span>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src={IMAGES.img6} alt="Case Study" className="w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Galleri */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Referensprojekt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="h-96 overflow-hidden rounded-lg">
              <img src={IMAGES.img11} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="h-96 overflow-hidden rounded-lg">
              <img src={IMAGES.img13} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="h-96 overflow-hidden rounded-lg">
              <img src={IMAGES.img1} className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
