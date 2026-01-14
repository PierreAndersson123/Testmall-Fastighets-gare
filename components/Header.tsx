
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Hem', path: '/' },
    { name: 'Om oss', path: '/om-oss' },
    { name: 'Fastigheter', path: '/fastigheter' },
    { name: 'Projektutveckling', path: '/projektutveckling' },
    { name: 'Lediga lokaler', path: '/lediga-lokaler' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-[#1e3a8a] tracking-tight">
          Testföretag
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-[#1e3a8a] ${
                isActive(item.path) ? 'text-[#1e3a8a]' : 'text-[#475569]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-[#0f172a]"
          onClick={() => setIsOpen(true)}
          aria-label="Öppna meny"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
        <div className="absolute right-0 top-0 bottom-0 w-64 bg-white p-6 shadow-xl">
          <button
            className="mb-8 p-2 text-[#0f172a]"
            onClick={() => setIsOpen(false)}
            aria-label="Stäng meny"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium ${
                  isActive(item.path) ? 'text-[#1e3a8a]' : 'text-[#475569]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
