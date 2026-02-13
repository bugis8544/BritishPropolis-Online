'use client'; // <--- INI KUNCINYA! WAJIB ADA DI PALING ATAS

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react'; // Tambahan untuk state menu mobile
import { MessageCircle, Menu, X } from 'lucide-react';
import { WEB_CONFIG } from '../data/content.jsx';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State untuk menu mobile

  // Fungsi helper untuk cek menu aktif
  const isActive = (path) => pathname === path ? 'text-emerald-800 border-b-2 border-emerald-800' : 'hover:text-emerald-800';

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">BP</div>
          <div className="flex flex-col">
            <h1 className="text-sm font-black uppercase text-zinc-900">British Propolis</h1>
            <span className="text-[10px] font-bold text-emerald-700 uppercase">Official Store</span>
          </div>
        </Link>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
          <Link href="/" className={`py-1 ${isActive('/')}`}>Beranda</Link>
          <Link href="/shop" className={`py-1 ${isActive('/shop')}`}>Produk</Link>
          <Link href="/testimonials" className={`py-1 ${isActive('/testimonials')}`}>Testimoni</Link>
          <Link href="/faq" className={`py-1 ${isActive('/faq')}`}>FAQ</Link>
        </div>

        {/* Tombol Konsultasi & Mobile Toggle */}
        <div className="flex items-center gap-4">
           <a 
             href={`https://wa.me/${WEB_CONFIG.contactWA}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="hidden sm:flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white text-[10px] font-bold uppercase rounded-full shadow-lg hover:bg-zinc-800 transition-all"
           >
             <MessageCircle size={12} /> Konsultasi
           </a>
           
           {/* Tombol Hamburger Mobile */}
           <button 
             className="md:hidden p-2 text-zinc-600"
             onClick={() => setIsOpen(!isOpen)}
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* Menu Mobile (Dropdown) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-bold text-zinc-600 py-2">Beranda</Link>
          <Link href="/shop" onClick={() => setIsOpen(false)} className="text-sm font-bold text-zinc-600 py-2">Produk</Link>
          <Link href="/testimonials" onClick={() => setIsOpen(false)} className="text-sm font-bold text-zinc-600 py-2">Testimoni</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="text-sm font-bold text-zinc-600 py-2">FAQ</Link>
        </div>
      )}
    </nav>
  );
}