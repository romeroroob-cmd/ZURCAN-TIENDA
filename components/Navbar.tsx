import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  onCartClick?: () => void;
  onHomeClick?: () => void;
}

const navItems: NavItem[] = [
  { label: 'Novedades', href: '#hero' },
  { label: 'Hombre', href: '#marketplace' },
  { label: 'Mujer', href: '#marketplace' },
  { label: 'Accesorios', href: '#marketplace' },
];

export const Navbar: React.FC<NavbarProps> = ({ onCartClick, onHomeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (onHomeClick) {
      onHomeClick();
      // Pequeño timeout para permitir que la vista cambie antes de intentar scrollear si es necesario
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navContainerClasses = scrolled 
    ? 'bg-white/90 backdrop-blur-xl border border-white/20 shadow-sm py-4' 
    : 'bg-transparent py-8';
    
  const linkClasses = scrolled 
    ? 'text-stone-600 hover:text-zurcan-orange' 
    : 'text-white/90 hover:text-white drop-shadow-sm';
    
  const logoClasses = scrolled ? 'text-stone-900' : 'text-white';
  const cartClasses = scrolled ? 'text-stone-900 border-stone-200' : 'text-white border-white/30';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-0' : 'py-0'
        }`}
      >
        <div className="container mx-auto px-6">
          <div 
            className={`
              flex items-center justify-between px-6 md:px-12
              rounded-b-[32px] transition-all duration-500
              ${navContainerClasses}
            `}
          >
            {/* Logo Text */}
            <a 
              href="#"
              onClick={(e) => { 
                e.preventDefault(); 
                if(onHomeClick) onHomeClick(); 
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className={`font-serif text-2xl font-bold tracking-tighter transition-colors duration-300 ${logoClasses}`}
            >
              ZURCAN
            </a>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 font-bold ${linkClasses}`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Right Side: Cart Icon */}
            <div className="hidden md:flex items-center">
              <button 
                onClick={onCartClick}
                className={`group relative p-3 rounded-full border transition-all duration-300 hover:bg-zurcan-orange hover:border-zurcan-orange hover:text-white ${cartClasses}`}
              >
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-zurcan-orange text-[9px] text-white group-hover:bg-white group-hover:text-zurcan-orange transition-colors">
                  1
                </span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className={`md:hidden relative z-50 p-2 transition-colors duration-300 ${logoClasses}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} className="text-stone-900" /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-40 bg-stone-50/95 md:hidden flex items-center justify-center"
          >
            <div className="flex flex-col items-center space-y-10">
              <span 
                className="font-serif text-3xl font-bold text-stone-900 mb-4"
                onClick={() => {
                  setIsOpen(false);
                  if(onHomeClick) onHomeClick();
                }}
              >
                ZURCAN
              </span>
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    handleNavClick(item.href);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="font-serif text-3xl text-stone-800 hover:text-zurcan-orange transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div 
                className="pt-8 flex items-center gap-2"
                onClick={() => { setIsOpen(false); if(onCartClick) onCartClick(); }}
              >
                 <ShoppingBag size={24} className="text-stone-900" />
                 <span className="text-sm font-bold uppercase tracking-widest text-stone-900">Cesta (1)</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};