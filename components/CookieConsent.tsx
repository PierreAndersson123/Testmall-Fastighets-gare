
import React, { useState, useEffect } from 'react';
import { Modal } from './UI';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible && !showSettings) return null;

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f172a] text-white p-6 shadow-2xl border-t border-gray-800">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm md:text-base text-gray-300">
              <p>Vi använder cookies för att förbättra din upplevelse på vår webbplats. Genom att fortsätta godkänner du vår användning av cookies.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowSettings(true)}
                className="text-sm font-medium hover:underline px-2"
              >
                Inställningar
              </button>
              <button
                onClick={handleDecline}
                className="text-sm bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded font-bold transition-colors"
              >
                Avvisa
              </button>
              <button
                onClick={handleAccept}
                className="text-sm bg-[#1e3a8a] hover:bg-blue-700 px-6 py-2 rounded font-bold transition-colors"
              >
                Acceptera
              </button>
            </div>
          </div>
        </div>
      )}

      <Modal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        title="Cookieinställningar"
      >
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Nödvändiga cookies</h3>
            <p className="text-gray-600 text-sm">Dessa är nödvändiga för att webbplatsen ska fungera och kan inte stängas av.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Analyscookies</h3>
            <p className="text-gray-600 text-sm">Hjälper oss förstå hur besökare interagerar med webbplatsen genom att samla in anonym information.</p>
          </div>
          <div className="flex justify-end pt-6">
            <button
              onClick={() => {
                handleAccept();
                setShowSettings(false);
              }}
              className="bg-[#1e3a8a] text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition-colors"
            >
              Spara val
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CookieConsent;
