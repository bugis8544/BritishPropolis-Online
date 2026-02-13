import "./globals.css";
// PERUBAHAN PENTING: Gunakan titik satu (./) karena folder ada di sebelah file ini
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { WEB_CONFIG } from "./data/content.jsx";
import { MessageCircle } from "lucide-react";

export const metadata = {
  title: WEB_CONFIG.name,
  description: WEB_CONFIG.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="antialiased text-zinc-900 bg-white">
        <Navbar />
        <main className="min-h-screen relative z-10">{children}</main>
        <Footer />

        <div className="fixed bottom-6 right-6 z-50">
          <a
            href={`https://wa.me/${WEB_CONFIG.contactWA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 pl-6 pr-2 py-2 bg-[#25D366] text-white font-bold rounded-full shadow-2xl"
          >
            <span className="text-xs uppercase tracking-widest">Chat WA</span>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle size={20} />
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
