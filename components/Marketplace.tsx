import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { ShoppingBag, ArrowUpRight, Tag, Filter, X, ChevronRight } from 'lucide-react';
import { ProductItem } from '../types';

interface MarketplaceProps {
  onCheckout?: () => void;
}

const products: ProductItem[] = [
  {
    id: 1,
    name: "Chaqueta Técnica Z-Pro",
    category: "Chaquetas",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463", 
  },
  {
    id: 2,
    name: "Polo Competición Elite",
    category: "Polos",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  },
  {
    id: 3,
    name: "Pantalón Breeches 2026",
    category: "Pantalones",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  },
  {
    id: 4,
    name: "Camiseta Signature Cotton",
    category: "Camisetas",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  },
  {
    id: 5,
    name: "Chaqueta Softshell Rider",
    category: "Chaquetas",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  },
  {
    id: 6,
    name: "Polo Entrenamiento Dry",
    category: "Polos",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  },
  {
    id: 7,
    name: "Pantalón Salto Técnico",
    category: "Pantalones",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  },
  {
    id: 8,
    name: "Camiseta Zurcan Team",
    category: "Camisetas",
    image: "https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463",
  }
];

const categories = ['Todos', 'Camisetas', 'Polos', 'Chaquetas', 'Pantalones'];
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

export const Marketplace: React.FC<MarketplaceProps> = ({ onCheckout }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="marketplace" className="py-20 bg-stone-50 relative min-h-screen">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Barra de Filtros y Control */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="font-serif text-3xl text-stone-900">
               Catálogo
            </h2>

            <div className="flex flex-wrap justify-center gap-2">
               {categories.map((filter) => (
                  <button 
                    key={filter} 
                    onClick={() => setActiveCategory(filter)}
                    className={`
                      px-5 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all duration-300 border
                      ${activeCategory === filter 
                        ? 'bg-stone-900 text-white border-stone-900' 
                        : 'bg-transparent text-stone-500 border-stone-200 hover:border-zurcan-orange hover:text-zurcan-orange'}
                    `}
                  >
                     {filter}
                  </button>
               ))}
               <button className="px-5 py-2 rounded-full border border-stone-200 text-stone-500 hover:bg-stone-100 flex items-center gap-2 text-[10px] uppercase tracking-widest">
                  <Filter size={12} /> Filtros
               </button>
            </div>
        </div>

        {/* Grid de Productos */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="group cursor-pointer">
                  {/* Imagen */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] mb-4 bg-stone-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    
                    {/* Hover Actions */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                       <button 
                         onClick={() => setSelectedProduct(product)}
                         className="w-full bg-white text-stone-900 py-3 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors shadow-xl"
                       >
                          Vista Rápida
                       </button>
                    </div>

                    {/* New Badge */}
                    <div className="absolute top-3 left-3">
                       <span className="bg-white/90 backdrop-blur px-2 py-1 text-[9px] font-bold tracking-widest uppercase text-stone-900">
                         New
                       </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-left">
                    <p className="text-[10px] text-stone-500 uppercase tracking-widest mb-1">{product.category}</p>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg text-stone-900 group-hover:text-zurcan-orange transition-colors">
                        {product.name}
                        </h3>
                        <span className="font-sans text-sm font-medium text-stone-900">1€</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick View Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
              >
                {/* Modal Image */}
                <div className="w-full md:w-1/2 h-96 md:h-auto relative bg-stone-100">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/80 backdrop-blur px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-stone-900">
                       En Stock
                     </span>
                  </div>
                </div>

                {/* Modal Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative bg-white">
                  <button 
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-6 right-6 p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-stone-900"
                  >
                    <X size={24} />
                  </button>

                  <div className="mb-8">
                    <span className="text-zurcan-orange text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
                      {selectedProduct.category}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">
                      {selectedProduct.name}
                    </h3>
                    <p className="font-sans text-xl font-medium text-stone-900">1€</p>
                  </div>

                  <p className="text-stone-500 font-light text-sm leading-relaxed mb-8 border-b border-stone-100 pb-8">
                    Diseñado para el máximo rendimiento y elegancia. Confeccionado con tejidos técnicos de última generación que garantizan transpirabilidad y libertad de movimiento en cada salto.
                  </p>

                  <div className="mb-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-900 block mb-4">
                      Talla
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map((size) => (
                        <button key={size} className="w-12 h-12 flex items-center justify-center border border-stone-200 text-stone-600 text-xs hover:border-stone-900 hover:text-stone-900 transition-colors">
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex gap-4">
                     <button 
                       onClick={() => { setSelectedProduct(null); if(onCheckout) onCheckout(); }}
                       className="flex-1 bg-stone-900 text-white py-4 px-6 text-xs font-bold uppercase tracking-widest hover:bg-zurcan-orange transition-colors flex items-center justify-center gap-2 group"
                     >
                        Añadir a la cesta
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                     </button>
                     <button className="p-4 border border-stone-200 hover:border-zurcan-orange text-stone-400 hover:text-zurcan-orange transition-colors">
                        <ShoppingBag size={20} />
                     </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter / Club */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-32 pt-20 border-t border-stone-200"
        >
          <div className="max-w-2xl mx-auto text-center">
             <Tag className="w-6 h-6 text-stone-900 mx-auto mb-6" />
             <h3 className="font-serif text-3xl text-stone-900 mb-4">
               Zurcan Members Club
             </h3>
             <p className="text-stone-500 mb-8 font-light text-sm leading-relaxed">
               Suscríbete para recibir acceso anticipado a nuevas colecciones, eventos exclusivos y contenido editorial.
             </p>
             <div className="flex gap-2 border-b border-stone-300 pb-2">
                <input type="email" placeholder="Correo electrónico" className="bg-transparent w-full focus:outline-none text-stone-900 placeholder:text-stone-400" />
                <button className="text-xs uppercase tracking-widest font-bold text-stone-900 hover:text-zurcan-orange">Suscribirse</button>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};