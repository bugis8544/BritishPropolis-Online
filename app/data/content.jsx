import { ShieldCheck, Zap, Crown, Users2, Heart, ShoppingBag } from 'lucide-react';

export const WEB_CONFIG = {
  name: "British Propolis Online",
  tagline: "Official Distributor & Health Advisor",
  baseUrl: "https://britishpropolisonline.id", 
  description: "Pusat distribusi resmi British Propolis dan Belgie Skincare. Solusi kesehatan keluarga.",
  keywords: "british propolis, belgie skincare, suplemen kesehatan, skincare premium",
  ogImage: "https://images.unsplash.com/photo-1611073100823-424a13840673?auto=format&fit=crop&q=80&w=800",
  contactWA: "628118408383", // Nomor Baru Anda
};

export const BUNDLES = {
  skincare: [
    {
      id: 'b-full-rej',
      name: "Belgie Full Rejuvenation Ritual",
      tagline: "Transformasi Menyeluruh",
      desc: "Pendekatan holistik untuk menjaga kualitas penampilan Anda secara menyeluruh.",
      price: "855.000",
      originalPrice: "975.000",
      label: "Premium Set",
      icon: <Crown className="text-amber-500" />,
      items: ["Facial Wash", "Serum", "Day Cream", "Night Cream", "Hair Tonic"]
    },
    {
      id: 'b-age-delay',
      name: "Belgie Age-Delay System",
      tagline: "Kulit Menolak Tua",
      desc: "Strategi menjaga elastisitas, hidrasi, dan kekuatan skin barrier.",
      price: "699.000",
      originalPrice: "780.000",
      label: "Best Seller",
      icon: <Zap className="text-emerald-500" />,
      items: ["Facial Wash", "Anti-Aging Serum", "Day Cream", "Night Cream"]
    },
    {
      id: 'b-starter',
      name: "Belgie Starter Ritual",
      tagline: "Mulai Ritual Sehat",
      desc: "Rutinitas sederhana untuk membersihkan dan melindungi.",
      price: "549.000",
      originalPrice: "585.000",
      label: "Starter Favorite",
      icon: <ShoppingBag className="text-blue-400" />,
      items: ["Facial Wash", "Day Cream", "Night Cream"]
    }
  ],
  wellness: [
    {
      id: 'w-family',
      name: "Family Shield Pack",
      tagline: "Perlindungan Keluarga",
      desc: "Menghadirkan perlindungan menyeluruh untuk setiap anggota keluarga.",
      price: "699.000",
      originalPrice: "750.000",
      label: "Family Essential",
      icon: <Users2 className="text-blue-500" />,
      items: ["British Propolis", "Propolis Green Kids", "Brassic Propolis Blue"]
    },
    {
      id: 'w-women',
      name: "Women's Balance System",
      tagline: "Cantik Luar Dalam",
      desc: "Formula wanita aktif: menyeimbangkan hormon dan energi.",
      price: "679.000",
      originalPrice: "750.000",
      label: "Women Choice",
      icon: <Heart className="text-pink-500" />,
      items: ["Steffi Pro", "British Propolis", "Brassic Eye"]
    },
    {
      id: 'w-defense',
      name: "Daily Defense Stack",
      tagline: "Pertahanan Harian",
      desc: "Menjaga energi tetap stabil bagi pekerja sibuk.",
      price: "459.000",
      originalPrice: "500.000",
      label: "Essential Protection",
      icon: <ShieldCheck className="text-emerald-500" />,
      items: ["British Propolis", "BP Norway"]
    }
  ]
};

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    type: "text",
    name: "Ibu Maya",
    role: "Business Owner",
    content: "Setelah 2 minggu rutin pakai paket Imun Propolis, rasa lelah jam 3 sore perlahan hilang.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maya"
  },
  {
    id: 2,
    type: "text", // Diubah ke text dulu biar gampang, nanti bisa fitur image
    name: "Bapak Hendra",
    role: "Karyawan Swasta",
    content: "Brassic Pro sangat membantu sendi saya. Chat WA saya jadi bukti kepuasan.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Hendra"
  },
  {
    id: 3,
    type: "text",
    name: "Siska Amelia",
    role: "Digital Creator",
    content: "Skin barrier jauh lebih sehat dan tekstur kulit jadi lebih halus dalam 1 bulan.",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siska"
  }
];

// Data FAQ tetap boleh ada atau dihapus jika tidak dipakai
// ... kode bagian atas (WEB_CONFIG, BUNDLES, TESTIMONIALS) biarkan sama ...

export const FAQ_DATA = {
  umum: [
    { 
      q: "Apakah produk ini dijamin 100% Original?", 
      a: "Sangat dijamin. Kami adalah Distributor Resmi Pusat. Setiap botol British Propolis memiliki stiker hologram dan barcode yang bisa di-scan/lacak keasliannya. Garansi uang kembali 3x lipat jika terbukti palsu." 
    },
    { 
      q: "Apakah bisa bayar di tempat (COD)?", 
      a: "Bisa. Kami melayani pengiriman ke seluruh Indonesia dengan sistem COD. Barang sampai baru bayar ke kurir." 
    },
    { 
      q: "Berapa lama pengiriman sampai?", 
      a: "Untuk Jabodetabek 1-2 hari kerja. Luar Jabodetabek 2-4 hari kerja tergantung ekspedisi. Kami memproses pesanan di hari yang sama sebelum jam 15.00 WIB." 
    }
  ],
  health: [
    { 
      q: "Apa bedanya British Propolis Merah (Regular) dan Hijau (Kids)?", 
      a: "BP Regular (Merah) diformulasikan untuk usia 13 tahun ke atas dengan konsentrasi flavonoid tinggi untuk pemulihan & stamina. BP Kids (Hijau) khusus usia 1-12 tahun dengan rasa yang disukai anak (tidak terlalu pekat) dan komposisi 50% Propolis + 50% Propolis Trigona." 
    },
    { 
      q: "Bagaimana aturan minum yang benar?", 
      a: "Teteskan ke dalam setengah gelas air hangat. Aduk menggunakan sendok plastik (hindari sendok logam). Untuk menjaga kesehatan: 3-5 tetes 1x sehari. Untuk penyembuhan: 5-7 tetes 3x sehari. Sebaiknya diminum saat perut kosong." 
    },
    { 
      q: "Apakah aman untuk Ibu Hamil dan Menyusui?", 
      a: "British Propolis aman dan justru disarankan untuk Ibu Hamil (usia kandungan di atas 5 bulan) dan Ibu Menyusui untuk menjaga stamina serta kualitas ASI. Konsultasikan dosis via WA kami." 
    },
    {
      q: "Bolehkan diminum bersamaan dengan obat dokter?",
      a: "Boleh, namun beri jeda waktu sekitar 1-2 jam. Minum obat dokter terlebih dahulu, baru 2 jam kemudian minum British Propolis."
    }
  ],
  skin: [
    { 
      q: "Berapa lama hasil pemakaian Belgie Skincare terlihat?", 
      a: "Perubahan tekstur kulit (lebih lembab & halus) biasanya terasa dalam 7-14 hari pertama. Untuk efek mencerahkan dan anti-aging optimal, disarankan rutin minimal 28 hari sesuai siklus regenerasi kulit alami." 
    },
    { 
      q: "Apakah cocok untuk kulit sensitif / berjerawat?", 
      a: "Belgie mengandung Propolis Extract yang bersifat anti-bakteri dan anti-inflamasi, sehingga sangat bagus untuk menenangkan jerawat dan meredakan kemerahan pada kulit sensitif." 
    },
    { 
      q: "Bagaimana urutan pemakaian yang benar?", 
      a: "Pagi: Facial Wash -> Serum -> Day Cream. Malam: Facial Wash -> Serum -> Night Cream. Gunakan rutin untuk hasil maksimal." 
    }
  ]
};