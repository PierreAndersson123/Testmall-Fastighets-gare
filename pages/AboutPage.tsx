
import React from 'react';
import { Hero } from '../components/UI';
import { IMAGES } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <main className="animate-fade-in">
      <Hero
        title="Om oss"
        backgroundImage={IMAGES.img4}
        overlayOpacity="bg-black/50"
      />

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold mb-8">Vår filosofi</h2>
              <div className="space-y-6 text-[#475569] leading-relaxed">
                <p>
                  Testföretag grundades med en enkel vision: att vara den mest personliga och engagerade fastighetsägaren i Malmö. För oss är en fastighet inte bara betong och glas, det är en plattform för mänsklig interaktion och framgångsrika affärer.
                </p>
                <p>
                  Vårt arbetssätt genomsyras av långsiktighet. Vi bygger för att äga och förvalta i generationer, vilket ställer höga krav på materialval, arkitektonisk kvalitet och hållbarhet i alla led.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-12 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#1e3a8a]">Våra värderingar</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1e3a8a] flex items-center justify-center mr-4 mt-1 font-bold text-xs">1</div>
                  <p className="text-sm"><strong>Långsiktighet:</strong> Vi ser bortom kvartalsrapporter och bygger för framtiden.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1e3a8a] flex items-center justify-center mr-4 mt-1 font-bold text-xs">2</div>
                  <p className="text-sm"><strong>Närvaro:</strong> Vi finns alltid tillgängliga för våra hyresgäster.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-[#1e3a8a] flex items-center justify-center mr-4 mt-1 font-bold text-xs">3</div>
                  <p className="text-sm"><strong>Hållbarhet:</strong> Miljön är en integrerad del i vår förvaltning.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Vår historik</h2>
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block" />
              
              <div className="space-y-12">
                {[
                  { year: '2005', text: 'Testföretag grundas med fokus på kontorsfastigheter i Malmö City.' },
                  { year: '2012', text: 'Förvärv av vår första större fastighet i Västra Hamnen.' },
                  { year: '2018', text: 'Startskott för projektutvecklingsavdelningen och hållbarhetssatsning.' },
                  { year: '2024', text: 'Vi når målet om 100% förnybar energi i alla våra fastigheter.' },
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2 md:px-12 mb-4 md:mb-0 text-center md:text-right">
                      {idx % 2 !== 0 ? null : (
                        <div>
                          <span className="text-2xl font-bold text-[#1e3a8a] block mb-2">{item.year}</span>
                          <p className="text-[#475569]">{item.text}</p>
                        </div>
                      )}
                    </div>
                    <div className="z-10 w-4 h-4 rounded-full bg-[#1e3a8a] ring-4 ring-blue-50" />
                    <div className="w-full md:w-1/2 md:px-12 text-center md:text-left mt-4 md:mt-0">
                      {idx % 2 === 0 ? null : (
                        <div>
                          <span className="text-2xl font-bold text-[#1e3a8a] block mb-2">{item.year}</span>
                          <p className="text-[#475569]">{item.text}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Vårt arbetssätt</h2>
              <p className="text-[#475569] mb-6 leading-relaxed">
                Vi tror på ett nära samarbete med våra hyresgäster. Från första visning till inflyttning och löpande förvaltning har ni en dedikerad kontaktperson.
              </p>
              <ul className="space-y-4">
                {['Snabb återkoppling vid serviceärenden', 'Flexibla avtalsformer', 'Gemensamma hållbarhetsmål', 'Regelbundna hyresgästträffar'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-[#0f172a]">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={IMAGES.img5} alt="Arbetssätt" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
