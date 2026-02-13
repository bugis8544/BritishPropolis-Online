import { TESTIMONIALS_DATA } from "../data/content.jsx"; // Mundur 2 langkah
import { Star, Quote } from "lucide-react";

export const metadata = { title: "Testimoni Pelanggan" };

export default function TestimonialPage() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-serif font-medium mb-16 text-center">
          Kata Mereka
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-zinc-50 p-10 rounded-[2.5rem] relative"
            >
              <Quote
                className="absolute top-8 right-8 text-zinc-200"
                size={40}
              />
              <div className="flex gap-1 text-amber-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-8 font-medium">
                "{t.content}"
              </p>
              <div>
                <div className="font-bold text-zinc-900">{t.name}</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
