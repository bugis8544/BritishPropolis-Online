// components/Footer.jsx
import { WEB_CONFIG } from "../data/content.jsx"; // Pakai titik dua (..)
import { MessageCircle, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white pt-24 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-zinc-800 pb-20">
          <div className="space-y-6">
            <div className="text-2xl font-serif font-bold">
              BritishPropolis<span className="text-emerald-500">.Online</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Mitra kesehatan keluarga Indonesia.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-6">
              Kontak
            </h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <MessageCircle size={14} /> {WEB_CONFIG.contactWA}
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} /> Buka 24 Jam
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-zinc-600 text-xs uppercase tracking-widest">
          &copy; 2024 {WEB_CONFIG.name}
        </div>
      </div>
    </footer>
  );
}
