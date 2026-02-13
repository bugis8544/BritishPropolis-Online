import Link from 'next/link';
import { ShieldCheck, ShoppingBag } from 'lucide-react';
import { WEB_CONFIG } from './data/content.jsx';

export default function HomePage() {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em]">
              <ShieldCheck size={14} /> Agen Resmi British Propolis Online
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-zinc-900 leading-[1.1] lg:leading-[1.05]">
                Jaga <span className="italic text-emerald-800 underline decoration-emerald-200 underline-offset-8">Standar</span> Kesehatan Keluarga
            </h1>
            <p className="text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-xl font-medium">
                Menghadirkan British Propolis original 100% dengan panduan penggunaan personal untuk hasil kesehatan optimal.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/shop" className="px-10 py-5 bg-emerald-800 text-white font-bold rounded-2xl hover:bg-emerald-900 transition-all shadow-xl uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Mulai Program Sehat
              </Link>
              <Link href="/testimonials" className="px-10 py-5 bg-white text-zinc-900 font-bold rounded-2xl border border-zinc-200 hover:bg-zinc-50 transition-all uppercase tracking-widest text-xs flex items-center justify-center">
                Lihat Bukti Nyata
              </Link>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
             <div className="aspect-square lg:aspect-[4/5] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl bg-gradient-to-br from-zinc-50 to-emerald-50 group border-4 lg:border-8 border-white p-4 lg:p-12 flex items-center justify-center transition-all duration-500 hover:scale-[1.02]">
               <img 
                 src={WEB_CONFIG.ogImage} 
                 alt="British Propolis Bottle" 
                 className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110 drop-shadow-2xl" 
               />
             </div>
          </div>
        </div>
      </section>
      
      {/* Authority Strip */}
      <div className="bg-zinc-50 border-y border-zinc-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
                { val: "100%", label: "Garansi Original" },
                { val: "12rb+", label: "Pelanggan Aktif" },
                { val: "24/7", label: "Layanan Konsultasi" },
                { val: "Instan", label: "Pengiriman Express" }
            ].map((item, i) => (
                <div key={i} className="space-y-3">
                    <div className="text-3xl font-serif font-bold text-zinc-900">{item.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">{item.label}</div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}