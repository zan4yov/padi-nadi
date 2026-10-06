# Padi Nadi — Company Profile

Website profil perusahaan Padi Nadi, Mini-ERP untuk UMKM penggilingan padi.

- **Live:** https://padi-nadi.vercel.app
- **Stack:** React 19 · Vite · Tailwind CSS v4 · React Router
- **Desain:** Figma `Padi Nadi (Copy)`, halaman `03 — UI Design (Pages)`

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # build produksi ke dist/
npm run preview   # jalankan hasil build
npm run lint      # oxlint
```

Formatting memakai gaya tanpa titik koma dan kutip tunggal:

```bash
npx prettier --no-semi --single-quote --write "src/**/*.{js,jsx,css}"
```

## Halaman

| Rute | Isi |
|---|---|
| `/` | Home — hero, marquee, fitur, roadmap 4 langkah, FAQ, CTA |
| `/fitur-harga` | 6 fitur, 6 paket harga (anchor `#harga`), FAQ |
| `/tentang-kontak` | Misi, roadmap, tim, hasil survei, kontak (anchor `#kontak`) |

## Sebelum mengubah apa pun

Baca **[`docs/HANDOFF.md`](docs/HANDOFF.md)** lebih dulu. Isinya hal-hal yang
tidak terlihat dari kode: satuan spacing 0.8px, cara membaca spesifikasi eksak
dari ekspor Figma di `UI design/`, penyimpangan yang disengaja dari desain, dan
beberapa jebakan yang sudah pernah memakan waktu.

## Struktur singkat

```
src/
├── index.css        # semua design token (@theme) + CSS global
├── components/      # Layout, Navbar, Footer, PillButton, PageHero, FaqList
├── hooks/           # useScrollReveal
├── pages/           # Home, FiturHarga, TentangKontak
├── sections/        # home/ fitur/ tentang/
└── assets/
UI design/           # ekspor SVG Figma = sumber spesifikasi eksak
tools/figma/         # skrip pembaca spesifikasi dari SVG tersebut
vercel.json          # SPA fallback — jangan dihapus
```
