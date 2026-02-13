import { ArrowRight } from 'lucide-react';
import { WEB_CONFIG } from '../data/content.jsx';

export default function BundleCard({ bundle, isPrimary = false }) {
  return (
    <div className={`flex flex-col h-full rounded-[2.5rem] border transition-all duration-500 group overflow-hidden ${isPrimary ? 'bg-zinc-900 text-white border-zinc-800 shadow-2xl scale-[1.02]' : 'bg-white text-zinc-900 border-zinc-100 hover:border-emerald-200 hover:shadow-xl'}`}>
        <div className="p-8 lg:p-10 flex flex-col h-full">
            <div className={`inline-block px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest mb-6 w-fit ${isPrimary ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-700'}`}>
                {bundle.label}
            </div>
            
            <div className="flex items-start justify-between mb-3">
                 <h3 className="text-2xl font-serif font-medium">{bundle.name}</h3>
                 {/* Icon kecil di kanan atas */}
                 <div className={`p-2 rounded-xl ${isPrimary ? 'bg-white/10' : 'bg-zinc-50'}`}>{bundle.icon}</div>
            </div>
            
            <p className={`text-xs font-bold italic uppercase mb-4 ${isPrimary ? 'text-emerald-400' : 'text-emerald-600'}`}>{bundle.tagline}</p>
            <p className={`text-sm mb-8 leading-relaxed flex-grow ${isPrimary ? 'text-zinc-400' : 'text-zinc-500'}`}>{bundle.desc}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
                {bundle.items.map((item, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-[10px] font-medium border ${isPrimary ? 'bg-white/5 border-white/10 text-zinc-300' : 'bg-zinc-50 border-zinc-100 text-zinc-600'}`}>{item}</span>
                ))}
            </div>

            <div className="mb-8">
                <span className={`text-xs line-through opacity-50 ${isPrimary ? 'text-zinc-400' : 'text-zinc-400'}`}>Rp {bundle.originalPrice}</span>
                <div className={`text-3xl font-serif font-bold ${isPrimary ? 'text-white' : 'text-emerald-800'}`}>Rp {bundle.price}</div>
            </div>
            
            <a href={`https://wa.me/${WEB_CONFIG.contactWA}?text=Halo, saya ingin memesan paket: ${bundle.name}`} target="_blank" className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 transition-colors ${isPrimary ? 'bg-white text-zinc-900 hover:bg-emerald-500 hover:text-white' : 'bg-zinc-900 text-white hover:bg-emerald-800'}`}>
                Ambil Program Ini <ArrowRight size={16} />
            </a>
        </div>
    </div>
  );
}