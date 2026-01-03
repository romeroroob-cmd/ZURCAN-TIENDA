import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CreditCard, ShieldCheck, Truck } from 'lucide-react';

interface CheckoutProps {
  onBack: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onBack }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-stone-50 pt-32 pb-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-12"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Volver a la tienda</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Forms */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl text-stone-900 mb-6 flex items-center gap-3">
                1. Información de Envío
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Nombre</label>
                   <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-zurcan-orange transition-colors" placeholder="Victoria" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Apellidos</label>
                   <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-zurcan-orange transition-colors" placeholder="Federica" />
                 </div>
                 <div className="md:col-span-2 space-y-1">
                   <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Dirección</label>
                   <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-zurcan-orange transition-colors" placeholder="Calle Serrano, 45, 2ºB" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Ciudad</label>
                   <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-zurcan-orange transition-colors" placeholder="Madrid" />
                 </div>
                 <div className="space-y-1">
                   <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Código Postal</label>
                   <input type="text" className="w-full bg-transparent border-b border-stone-200 py-3 text-stone-900 focus:outline-none focus:border-zurcan-orange transition-colors" placeholder="28001" />
                 </div>
              </div>
            </div>

            {/* Payment Info */}
            <div>
              <h2 className="font-serif text-2xl text-stone-900 mb-6 flex items-center gap-3">
                2. Método de Pago
              </h2>
              <div className="bg-white p-8 rounded-[24px] shadow-sm border border-stone-100">
                <div className="flex gap-4 mb-6">
                   <button className="flex-1 border border-stone-900 bg-stone-900 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                     <CreditCard size={16} /> Tarjeta
                   </button>
                   <button className="flex-1 border border-stone-200 text-stone-400 hover:text-stone-900 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors">
                     PayPal
                   </button>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                     <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Número de Tarjeta</label>
                     <input type="text" className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-300 focus:ring-1 focus:ring-zurcan-orange" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Fecha Exp.</label>
                       <input type="text" className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-300 focus:ring-1 focus:ring-zurcan-orange" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-1">
                       <label className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">CVC</label>
                       <input type="text" className="w-full bg-stone-50 border-none rounded-xl px-4 py-3 text-stone-900 placeholder:text-stone-300 focus:ring-1 focus:ring-zurcan-orange" placeholder="123" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-stone-400 text-xs">
                  <ShieldCheck size={14} className="text-zurcan-orange" />
                  <span>Pagos encriptados y seguros 256-bit SSL</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-white rounded-[32px] p-8 shadow-2xl shadow-stone-200/50 border border-stone-100">
               <h3 className="font-serif text-xl text-stone-900 mb-8 border-b border-stone-100 pb-4">Resumen del Pedido</h3>
               
               {/* Item */}
               <div className="flex gap-4 mb-6">
                  <div className="w-20 h-24 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img src="https://maximilianequestrian.com/cdn/shop/files/6-IMG_7811.jpg?v=1704901559&width=1463" className="w-full h-full object-cover" alt="Product" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                       <h4 className="font-serif text-stone-900">Chaqueta Técnica Z-Pro</h4>
                       <span className="font-sans font-medium text-stone-900">1.00€</span>
                    </div>
                    <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Talla: M</p>
                    <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Color: Navy</p>
                  </div>
               </div>
               
               {/* Totals */}
               <div className="space-y-3 py-6 border-t border-stone-100">
                 <div className="flex justify-between text-sm text-stone-500">
                   <span>Subtotal</span>
                   <span>1.00€</span>
                 </div>
                 <div className="flex justify-between text-sm text-stone-500">
                   <span>Envío</span>
                   <span className="text-zurcan-orange text-xs font-bold uppercase">Gratis</span>
                 </div>
               </div>

               <div className="flex justify-between items-center py-6 border-t border-stone-100 mb-6">
                 <span className="font-serif text-lg text-stone-900">Total</span>
                 <span className="font-sans text-2xl font-bold text-stone-900">1.00€</span>
               </div>

               <button className="w-full bg-stone-900 text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-zurcan-orange transition-colors shadow-lg group relative overflow-hidden">
                 <span className="relative z-10">Pagar Ahora</span>
               </button>

               <div className="mt-6 flex justify-center gap-2 items-center text-[10px] text-stone-400 uppercase tracking-widest">
                  <Truck size={14} /> Envío Express en 24/48h
               </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};
