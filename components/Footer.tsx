
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        {/* Kontakt */}
        <div>
          <h3 className="text-xl font-bold mb-6">Kontakt</h3>
          <div className="space-y-4 text-gray-400 text-sm">
            <p>Testföretag AB</p>
            <p>Stortorget 1, 211 34 Malmö</p>
            <p>Telefon: 040-123 45 67</p>
            <p>E-post: info@testforetag.se</p>
          </div>
        </div>

        {/* Snabblänkar */}
        <div>
          <h3 className="text-xl font-bold mb-6">Snabblänkar</h3>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">Hem</Link>
            <Link to="/om-oss" className="text-gray-400 text-sm hover:text-white transition-colors">Om oss</Link>
            <Link to="/fastigheter" className="text-gray-400 text-sm hover:text-white transition-colors">Fastigheter</Link>
            <Link to="/projektutveckling" className="text-gray-400 text-sm hover:text-white transition-colors">Projektutveckling</Link>
            <Link to="/lediga-lokaler" className="text-gray-400 text-sm hover:text-white transition-colors">Lediga lokaler</Link>
          </nav>
        </div>

        {/* Nyhetsbrev */}
        <div>
          <h3 className="text-xl font-bold mb-6">Nyhetsbrev</h3>
          <p className="text-gray-400 text-sm mb-4">Håll dig uppdaterad om våra senaste nyheter och lediga lokaler.</p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Din e-postadress"
              className="bg-gray-800 border-none rounded px-4 py-2 flex-grow text-sm focus:ring-2 focus:ring-[#1e3a8a] outline-none"
            />
            <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded text-sm font-bold hover:bg-blue-700 transition-colors">
              Skicka
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2026 Testföretag AB. Alla rättigheter förbehållna.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="#" className="hover:text-white">Cookies</Link>
          <Link to="#" className="hover:text-white">Integritetspolicy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
