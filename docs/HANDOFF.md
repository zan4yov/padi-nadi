# Padi Nadi — Catatan Pengerjaan (Respawn Point)

Dokumen ini adalah titik pijak untuk revisi berikutnya. Isinya: dari mana angka
desain berasal, keputusan yang diambil beserta alasannya, jebakan yang sudah
pernah memakan waktu, dan cara memverifikasi perubahan.

**Status milestone:** tiga halaman selesai, live di produksi.

| | |
|---|---|
| Repo | https://github.com/zan4yov/padi-nadi |
| Live | https://padi-nadi.vercel.app |
| Deploy | Vercel, otomatis dari branch `main` (~30–60 detik) |
| Commit terakhir milestone | `88f522a` |

---

## 1. Stack & perintah

React 19 + Vite + Tailwind CSS v4 + React Router. JavaScript, bukan TypeScript.

```bash
npm install
npm run dev       # server pengembangan
npm run build     # build produksi ke dist/
npm run preview   # jalankan hasil build (dipakai untuk verifikasi)
npm run lint      # oxlint
```

**Formatting:** proyek ini memakai gaya *tanpa titik koma* dan *kutip tunggal*.
Prettier tidak dikonfigurasi, jadi `npx prettier --write` apa adanya akan
mengubah seluruh file. Selalu pakai:

```bash
npx prettier --no-semi --single-quote --write "src/**/*.{js,jsx,css}"
```

---

## 2. Sumber desain (Figma)

File: **Padi Nadi (Copy)** — `Hv2BHWdiNOxKwvVKAlFHUN`
(duplikat milik sendiri; file asli hanya view-only sehingga tidak bisa dibaca
oleh tooling).

Halaman yang dipakai: **`03 — UI Design (Pages)`**.
Halaman `01 — Design System` kosong — tidak ada token library di Figma, semua
token di bawah diturunkan manual dari hasil ekspor.

### Node ID per halaman

| Halaman | Node frame | Ukuran |
|---|---|---|
| Home | `79:6129` | 1440 × 7863 |
| Fitur & Harga | `76:3611` | 1440 × 6608.8 |
| Tentang & Kontak | `76:4311` | 1440 × 5256 |

Node per section tercatat sebagai komentar di atas tiap komponen, contoh:
`// Figma node 79:6291 — cards 645.12 / 583.68 split, 19.2px gaps, 26px radius.`

### Ekspor yang tersimpan di repo — `UI design/`

Ini **sumber kebenaran offline**. Selama file ini ada, spesifikasi eksak bisa
dibaca ulang tanpa membuka Figma sama sekali.

| File | Isi |
|---|---|
| `Company Profile Website Design-1.svg` | **Home** (1440×7917) |
| `Company Profile Website Design.svg` | **Fitur & Harga** (1440×6611) |
| `Company Profile Website Design-2 (Tentang Kontak).svg` | **Tentang & Kontak** (1440×5258) |
| `HomePage.svg` | hanya section "Satu Aplikasi" (1295×902) |

> Nama dua file pertama memang membingungkan (bawaan ekspor Figma). Silakan
> rename kalau mau — tidak ada kode yang merujuk ke file-file ini.

### Cara ekspor ulang kalau desain berubah

Dev Mode Figma **terkunci** di paket Starter (nilainya tampil blur). Tapi mode
desain biasa sudah cukup:

1. Buka file, pilih frame halaman (lihat node ID di atas).
2. Panel kanan → **Export** → `+` → pilih **SVG**.
3. Klik ikon `•••` → **wajib**:
   - **centang** `Include "id" attribute` → nama layer ikut terbawa
   - **hapus centang** `Outline text` → font & ukuran tetap terbaca sebagai teks
   (checkbox ini sering tidak bereaksi pada klik pertama — cek ulang.)
4. Klik **Export**, simpan ke `UI design/`.

SVG hasilnya memuat koordinat absolut, warna, font, letter-spacing, nama layer,
**dan gambar raster ter-embed sebagai base64** — satu file berisi segalanya.

### Tooling pembaca spesifikasi — `tools/figma/`

Skrip Python murni — hanya pustaka bawaan, tidak perlu install apa pun.
Semua perintah dijalankan dari dalam `tools/figma/`:

```bash
cd tools/figma

# Struktur teks + ukuran tiap elemen dalam satu group
python extract.py "../../UI design/Company Profile Website Design-1.svg" spec HomePage_3

# Geometri kotak/kartu (posisi, ukuran, fill, stroke) — minimal 24px
python shapes.py "../../UI design/Company Profile Website Design-1.svg" HomePage_3 24

# Keluarkan foto ter-embed menjadi file gambar
python extract.py "../../UI design/Company Profile Website Design-1.svg" images HomePage ./out

# Keluarkan ikon menjadi SVG terpisah (sudah dedupe + padding stroke)
python icons.py "../../UI design/Company Profile Website Design-1.svg" HomePage_3 ./out-icons
```

`pathbox.py` adalah parser bounding-box path SVG yang dipakai `shapes.py` dan
`icons.py` — jangan dihapus.

**Nama group** yang dipakai sebagai argumen bisa dilihat dengan menjalankan
`extract.py ... spec Body` lalu membaca daftar `[NamaGroup]` di keluarannya.

---

## 3. Sistem design token

Semua token ada di **`src/index.css`** dalam blok `@theme` (~155 token).

### Kunci utama: satuan spacing 0.8px

Frame Figma digambar pada skala 80%, sehingga **setiap nilai spacing adalah
kelipatan 0.8px** (20.8, 33.6, 104…). Maka:

```css
--spacing: 0.8px;
```

Artinya angka pada class Tailwind = nilai Figma ÷ 0.8:

| Figma | Class | Hasil |
|---|---|---|
| 104px | `py-130` | padding section standar |
| 48px | `gap-60` / `p-60` | |
| 19.2px | `gap-24` | |
| 25.6px | `p-32` | |

**Jangan** memakai angka pecahan seperti `pt-18.5` — Tailwind v4 tidak
menghasilkan class-nya dan gagal diam-diam (tidak ada error, style hilang
begitu saja). Untuk nilai di luar grid, pakai nilai arbitrer eksplisit:
`pt-[14.8px]`, `lg:min-h-[236.22px]`.

### Kategori token

- **Warna** — `brand` `#036b46`, `brand-deep` `rgb(2 45 29)`, `gold` `#f4c542`,
  `ink` `#1a1a1a`, `muted` `#6b6b6b`, `line` `#d9d9d9`, `cream` `#faf8f3`,
  `mint` `#e6f2ed`, `ash`, `dim`, `grey`, `placeholder`, `line-dark`, dll.
- **Tipografi** — tiap gaya membawa `--text-*`, `--text-*--line-height`, dan
  `--text-*--letter-spacing` persis dari Figma (`text-h1`, `text-prose`,
  `text-price`, …). Varian `-sm` adalah **tambahan saya** untuk layar kecil;
  Figma hanya mendefinisikan desktop.
- **Radius** — `rounded-card` 26px, `rounded-tile` 14px.
- **Layout** — `max-w-page` 1248px (lebar container semua halaman).

### Font

**Plus Jakarta Sans** (400/500/600/700) dari Google Fonts, dimuat di
`index.html`. Bukan Inter.

---

## 4. Struktur kode

```
src/
├── App.jsx                     # routing
├── index.css                   # SEMUA token + CSS global
├── components/
│   ├── Layout.jsx              # navbar + outlet + footer, scroll behaviour
│   ├── Navbar.jsx              # sticky, 80px, menu mobile
│   ├── Footer.jsx
│   ├── PillButton.jsx          # 4 varian: primary | light | outline | gold
│   ├── PageHero.jsx            # hero halaman 2 & 3
│   └── FaqList.jsx             # accordion (dipakai 2 halaman)
├── hooks/
│   └── useScrollReveal.js
├── pages/                      # Home.jsx, FiturHarga.jsx, TentangKontak.jsx
├── sections/
│   ├── home/                   # 9 section
│   ├── fitur/                  # FeatureRows, ValueStrip, Pricing
│   └── tentang/                # Mission, Roadmap, Team, SurveyResults, ContactSection
└── assets/                     # brand/ home/ about/ icons/ marquee/
```

Rute: `/` → Home, `/fitur-harga`, `/tentang-kontak`.

---

## 5. Scroll reveal (efek muncul saat scroll)

Tiga bagian:

1. **`src/hooks/useScrollReveal.js`** — IntersectionObserver menambahkan class
   `is-revealed` saat elemen masuk layar.
2. **`src/index.css`** (bagian bawah) — keadaan awal `opacity: 0` +
   `translateY(18px)`, transisi 700ms, jeda bertingkat 70ms antar anak.
3. **Atribut penanda** di komponen.

### Cara memberi animasi ke elemen baru

```jsx
<div data-reveal>…</div>                  {/* satu blok */}
<ul data-reveal-children>…</ul>           {/* anak-anaknya muncul berurutan */}
```

Tidak perlu impor apa pun — hook di `Layout` memindai seluruh halaman.

### Aturan yang wajib dijaga

- Keadaan akhir selalu `opacity: 1; transform: none` → **desain asli tidak
  berubah**, animasi hanya di awal.
- Keadaan tersembunyi hanya aktif saat class `.reveal-ready` menempel di
  `<html>` (ditambahkan oleh JS). Jadi kalau JS mati, halaman tampil normal —
  jangan hapus mekanisme ini.
- Dinonaktifkan otomatis pada `prefers-reduced-motion`.
- **Jangan** menandai elemen yang punya transform sendiri (misalnya
  `PillButton` dengan `active:scale-98`) — `transform: none` akan menimpanya.
  Bungkus dengan div penanda, jangan tandai tombolnya langsung.
- **Jangan** menandai parent yang anak langsungnya adalah tombol.

### Cakupan saat ini

Home 20 blok · Fitur & Harga 14 · Tentang & Kontak 16.

> ⚠️ Pernah ada bug: fungsi cleanup sempat menandai semua elemen sebagai
> "sudah muncul". React StrictMode menjalankan effect dua kali
> (pasang → bersihkan → pasang), sehingga cleanup langsung mematikan efeknya
> dan semua konten muncul sekaligus. Cleanup sekarang **hanya** memutus
> observer — jangan tambahkan apa pun di situ.

---

## 6. Navigasi anchor

| Anchor | Section | Tombol pemicu |
|---|---|---|
| `#harga` | `Pricing.jsx` ("Harga Sederhana, Manfaat Maksimal") | "Lihat Harga" di hero Fitur & Harga |
| `#kontak` | `ContactSection.jsx` ("Kami Siap Mendengar…") | "Hubungi Kami" di hero Tentang & Kontak |

Pola untuk menambah anchor baru:

1. Beri `id="nama"` **dan** `scroll-mt-100` pada `<section>`.
   `scroll-mt-100` = 80px = tinggi navbar sticky, supaya judul tidak tertutup.
2. Arahkan tombol lewat prop `href="#nama"` pada `PageHero` / `PillButton`
   (`PillButton` merender `<a>` bila diberi `href`, `<Link>` bila diberi `to`).

Scroll halusnya memakai `scroll-behavior: smooth` di `<html>`.

> ⚠️ Jebakan yang memakan waktu: `scrollIntoView({ behavior: 'auto' })`
> **bukan** berarti "langsung lompat". `'auto'` artinya "ikuti nilai CSS" —
> dan nilai CSS di sini `smooth`, sehingga halaman malah beranimasi sejauh
> 3700px. Gunakan `'instant'` bila ingin lompat.

`Layout.jsx` menangani kasus halaman dibuka langsung dengan hash
(`/fitur-harga#harga` dari refresh atau link yang dibagikan): browser mencari
target sebelum React merender, jadi posisi diperbaiki setelah mount — **hanya
pada pemuatan pertama**, agar klik di dalam halaman tetap memakai scroll halus
bawaan browser.

---

## 7. Penyimpangan dari Figma yang disengaja

Dicatat agar tidak dikira bug:

| Hal | Figma | Implementasi | Alasan |
|---|---|---|---|
| Gradient hero halaman 2 & 3 | diagonal `#022D1D` 95%→60% | vertikal 35%→85% (sama dengan Home) | diminta agar seragam. Catatan: versi Figma memberi kontras lebih baik di halaman Tentang (11.7:1 vs 6.5:1) karena fotonya terang |
| Ikon `+` FAQ | teks `+` 19.2px | SVG dua garis | glyph teks meleset ~1.4px dari titik tengah lingkaran |
| Logo navbar | window 112×49 di atas PNG besar | PNG sudah dipangkas, `<img>` biasa | crop Figma jatuh tepat di tepi gambar → titik "i" pada "Nadi" terpotong |
| State interaktif (hover/focus/active) | tidak didefinisikan | buatan sendiri | Figma tidak punya |
| Ukuran teks layar kecil | hanya desktop | token `-sm` buatan sendiri | Figma tidak punya |
| Favicon | tidak ada | diturunkan dari logo halaman Tentang | dipangkas + dipusatkan |

---

## 8. Yang belum selesai

- **Placeholder abu-abu** pada kartu fitur (Home & Fitur) dan **4 dari 5 foto
  tim** masih kotak-kotak transparan — memang begitu di Figma, gambar asli
  belum ada. Ganti filenya di `src/assets/`.
- Nomor WhatsApp & email di halaman kontak masih teks contoh
  (`+62 8xx xxxx xxxx`, "Email perusahaan").
- Tombol "Coba Gratis" di navbar mengarah ke `/fitur-harga`; semua CTA WhatsApp
  mengarah ke `https://wa.me/` tanpa nomor.
- Belum ada meta description / Open Graph / sitemap.

---

## 9. Deploy

`vercel.json` berisi satu aturan SPA fallback:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Jangan dihapus.** Tanpa ini `/fitur-harga` dan `/tentang-kontak` menghasilkan
404 saat di-refresh atau dibuka dari link — Vercel mencari file dengan nama itu
dan tidak menemukannya.

Push ke `main` → Vercel build otomatis. Cara memastikan versi yang live benar:

```bash
# hash bundle lokal harus sama dengan yang live
basename $(ls dist/assets/index-*.js)
curl -s https://padi-nadi.vercel.app/ | grep -o 'index-[A-Za-z0-9_-]*\.js' | head -1
```

---

## 10. Cara verifikasi perubahan

Tiga pelajaran dari milestone ini:

**1. Jangan percaya screenshot headless pada halaman yang ter-scroll.**
`msedge --headless --screenshot` menghasilkan **putih polos** untuk halaman
yang posisinya ter-scroll. Ini keterbatasan alatnya, bukan halamannya.

**2. Ukur, jangan dikira-kira.** Pola yang terbukti andal — suntikkan probe ke
`dist/index.html` setelah build, lalu baca lewat `--dump-dom`:

```bash
npm run build
python - <<'PY'
p='dist/index.html'; s=open(p,encoding='utf-8').read()
probe = """<script>setTimeout(function(){document.title='scrollY='+Math.round(window.scrollY);},3000)</script>"""
open(p,'w',encoding='utf-8').write(s.replace('</body>', probe+'</body>'))
PY
npx vite preview --port 5200 &
msedge --headless=new --disable-gpu --virtual-time-budget=12000 \
  --window-size=1440,900 --dump-dom "http://localhost:5200/fitur-harga#harga" \
  | grep -o "<title>[^<]*</title>"
# build ulang untuk membuang probe
npm run build
```

Dipakai untuk mengukur posisi scroll, opacity, jumlah blok ber-animasi,
kontras, dan perataan piksel.

**3. Tab Chrome extension sering `visibility: hidden`** → scroll dan
IntersectionObserver tidak jalan di situ. Hasil "tidak bergerak" di tab itu
bukan bukti kode rusak.

**Regresi visual:** render halaman penuh sebelum & sesudah lalu bandingkan
piksel. Perlu diingat strip **marquee selalu berbeda** antar render karena
animasinya terus berjalan — abaikan baris ~834–855 di halaman Home.

---

## 11. Riwayat commit milestone

```
88f522a  Reveal section subtitles on the Fitur and Tentang pages
9ab5210  Scroll "Hubungi Kami" to the contact section
78cbba6  Scroll "Lihat Harga" to the pricing section
9219d43  Align roadmap timeline rule with the step badges
36dbef0  Fix 404 on direct navigation to client-side routes
e3555ad  Initial commit: Padi Nadi company profile website
```
