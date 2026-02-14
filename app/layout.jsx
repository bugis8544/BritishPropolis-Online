import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { MessageCircle } from "lucide-react";

// PERHATIKAN: Menggunakan ./ karena folder components ada di sebelah file ini (di dalam app)
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { WEB_CONFIG } from "./data/content.jsx";

// --- KONFIGURASI FONT ---
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// --- OPTIMASI SEO & METADATA ---
export const metadata = {
  // Ganti URL ini dengan domain Vercel Anda nanti (misal: https://bp-online.vercel.app)
  metadataBase: new URL("https://britishpropolisonline.id"),

  title: {
    default: "British Propolis Online | Distributor Resmi Terpercaya",
    template: "%s | British Propolis Online",
  },
  description:
    "Pusat belanja British Propolis dan Belgie Skincare Original. Garansi uang kembali, konsultasi gratis, dan pengiriman cepat seluruh Indonesia.",
  keywords: [
    "british propolis",
    "belgie skincare",
    "propolis inggris",
    "agen resmi british propolis",
    "obat herbal",
    "ippho santosa",
    "suplemen imunitas",
  ],
  authors: [{ name: "British Propolis Official Team" }],
  robots: {
    index: true,
    follow: true,
  },

  // Tampilan saat di-share di WhatsApp / Facebook
  openGraph: {
    title: "British Propolis Online - Solusi Kesehatan Keluarga",
    description:
      "Dapatkan produk asli British Propolis & Belgie Skincare di sini. Konsultasi Gratis!",
    url: "https://britishpropolisonline.id",
    siteName: "British Propolis Online",
    images: [
      {
        url: WEB_CONFIG.ogImage, // Mengambil gambar dari config
        width: 1200,
        height: 630,
        alt: "British Propolis Premium Packaging",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased text-zinc-900 bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />

        <main className="min-h-screen relative z-10">{children}</main>

        <Footer />

        {/* Floating WA Button (Muncul di semua halaman) */}
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right duration-1000">
          <a
            href={`https://wa.me/${WEB_CONFIG.contactWA}?text=Halo admin, saya ingin konsultasi.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 pl-6 pr-2 py-2 bg-[#25D366] text-white font-bold rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all group border-2 border-white"
          >
            <span className="text-xs uppercase tracking-widest hidden sm:block">
              Chat WA
            </span>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
              <MessageCircle size={20} fill="currentColor" />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
