import { BUNDLES } from '../data/content.jsx';
import BundleCard from '../components/BundleCard.jsx';

export const metadata = {
  title: 'Program Perawatan | BP Online',
  description: 'Pilih paket hemat British Propolis dan Belgie Skincare.',
};

export default function ShopPage() {
  return (
    <div className="py-24 bg-white animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl font-serif text-zinc-900 mb-6">Program Perawatan Terarah</h1>
          <p className="text-xl text-zinc-500 italic">Pilih sistem yang dirancang secara saintifik untuk hasil nyata.</p>
        </div>
        
        <div className="space-y-24">
          <section>
            <h2 className="text-2xl font-serif font-medium mb-12 flex items-center gap-4">
                Wellness & Immune Protection <span className="h-px bg-zinc-100 flex-grow"></span>
            </h2>
            {/* Ubah grid jadi 3 kolom (lg:grid-cols-3) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BUNDLES.wellness.map((b) => <BundleCard key={b.id} bundle={b} isPrimary={b.id === 'w-family'} />)}
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-serif font-medium mb-12 flex items-center gap-4">
                Belgie Skincare Rituals <span className="h-px bg-zinc-100 flex-grow"></span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BUNDLES.skincare.map((b) => <BundleCard key={b.id} bundle={b} isPrimary={b.id === 'b-age-delay'} />)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}