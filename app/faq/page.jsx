'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Pill, Sparkles, Truck } from 'lucide-react';
// Import data dari folder data di dalam app (mundur 2 langkah)
import { FAQ_DATA } from '../data/content.jsx';

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('umum'); // Pilihan: umum, health, skin
  const [openIndex, setOpenIndex] = useState(null);

  // Data kategori untuk tombol tab
  const categories = [
    { id: 'umum', label: 'Umum & Order', icon: <Truck size={14} /> },
    { id: 'health', label: 'British Propolis', icon: <Pill size={14} /> },
    { id: 'skin', label: 'Belgie Skincare', icon: <Sparkles size={14} /> },
  ];

  return (
    <div className="py-24 bg-zinc-50 min-h-screen animate-in fade-in duration-700">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-emerald-100 text-emerald-800 rounded-2xl mb-6">
            <HelpCircle size={32} />
          </div>
          <h1 className="text-4xl font-serif font-medium text-zinc-900 mb-4">Pusat Bantuan</h1>
          <p className="text-zinc-500">Temukan jawaban cepat seputar produk dan layanan kami.</p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveTab(cat.id); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === cat.id
                  ? 'bg-zinc-900 text-white shadow-lg scale-105'
                  : 'bg-white text-zinc-400 border border-zinc-200 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA[activeTab].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
              >
                <span className={`font-bold pr-8 ${openIndex === i ? 'text-emerald-800' : 'text-zinc-800'}`}>
                  {item.q}
                </span>
                <ChevronDown className={`text-zinc-400 transform transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-emerald-600' : ''}`} size={20} />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-zinc-50 mt-2 text-sm">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
            <p className="text-zinc-400 text-sm mb-4">Masih punya pertanyaan lain?</p>
            <a 
                href="https://wa.me/628118408383" 
                target="_blank"
                className="text-emerald-700 font-bold border-b-2 border-emerald-200 hover:border-emerald-600 transition-all text-sm pb-1"
            >
                Chat Langsung dengan CS Kami
            </a>
        </div>

      </div>
    </div>
  );
}