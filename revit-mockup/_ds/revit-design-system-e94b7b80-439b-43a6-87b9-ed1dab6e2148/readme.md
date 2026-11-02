# Revit Design System

**Revit** adalah satu pintu bantuan revitalisasi sekolah milik Setpres (Kementerian Sekretariat Negara RI): pengajuan proposal sekolah → verifikasi administrasi → survei & penilaian RAB → PKS (kontrak) → persetujuan akhir → pencairan dana → pengawasan pembangunan. Dipakai **8 peran**, dari panitia sekolah di daerah sampai pimpinan nasional, jadi tampilannya harus tepercaya, tenang, dan bisa dipahami tanpa pelatihan.

Gaya visual mengacu ke Sekolah Kita (sekolah.data.kemendikdasmen.go.id): satu biru `--primary` #0B5FEF, banyak ruang putih, kartu sederhana. Logo Sekolah Kita / Tut Wuri / Pusdatin **tidak** dipakai.

## Produk / permukaan
- **Portal Sekolah** — panitia sekolah: wizard proposal 5 langkah, revisi, pelaksanaan. Bahasa sehari-hari, "Anda", teks 16 px.
- **Portal internal** — Setpres (ADM, KPR, PPK, APV, KPL, SA), Konsultan: antrian kerja, verifikasi, pagu. Administratif, teks 14 px.
- **Dashboard pimpinan / Approver** — KPI, peta choropleth, grafik.

## Sumber
- Codebase lokal `revit-design-system/` (README.md, CLAUDE.md, tokens.css, tokens.json, tokens.dtcg.json, `components/*/README.md + preview.html`, `assets/Logos`, `assets/Maps`). Sumber tidak berisi layar produk lengkap; hanya komponen HTML statis dan aturan.
- Salinan token mentah: `source/tokens.json`, `source/tokens.dtcg.json`.

## Index
- `styles.css` — entry global (hanya @import): `tokens/fonts.css`, `tokens/base.css` (warna light/dark, spasi, radius, font), `tokens/semantic.css` (skala tipe + alias), `tokens/text-styles.css` (`.display .h1 .h2 .h3 .body-lg .body .caption .tabular`), `tokens/interaction.css` (focus ring, hover baris, link).
- `guidelines/` — kartu fondasi (Colors, Type, Spacing, Brand).
- `components/` — primitif React (lihat daftar).
- `ui_kits/portal/` — click-through Portal Sekolah, Setpres, Pimpinan.
- `assets/logo-setneg-ri.svg` — emblem Setneg RI; `assets/maps/indonesia-provinsi-contoh.json` — GeoJSON contoh.
- `SKILL.md` — pembungkus Agent Skill.

## Components
Inventaris = 14 komponen sumber.
- `components/aksi/` — **Button**
- `components/form/` — **TextField**, **OtpInput**
- `components/status/` — **StatusBadge** (S01–S14, label internal/sekolah; juga mengekspor `STATUS`), **SlaChip**
- `components/data/` — **QueueTable** (juga `formatRupiah`), **PaguCard**
- `components/navigasi/` — **WizardStepper**
- `components/umpan-balik/` — **ReviewerNote**
- `components/identitas/` — **BrandLockup**
- `components/grafik/` — **GrafikBatang**, **GrafikGaris**, **GrafikPai** (+ helper `chartUtil.js`: memuat Chart.js 4.4.1 dari CDN, tema dari token, frame kartu + "Lihat tabel")
- `components/peta/` — **PetaWilayah** (Leaflet 1.9.4 + OSM dari CDN)

"Cover" di sumber adalah sampul brand, bukan komponen → `guidelines/brand-cover.html`.

### Intentional additions
- `tokens/semantic.css` alias (`--surface-card`, `--text-body`, `--font-size-*`, `--layout-*`) — diturunkan dari nilai sumber agar konsumen punya nama semantik.
- `tokens/interaction.css` — `:focus-visible` dan hover tidak bisa ditulis inline.
- Hover Button secondary/ghost = latar `--primary-subtle` (sumber hanya mendefinisikan `--primary-hover` untuk primary).
- Dalam UI kit: Icon (Lucide), Sidebar, TopBar, Card lokal.

## CONTENT FUNDAMENTALS
- **Bahasa Indonesia** di semua UI. Kalimat pendek, kalimat lengkap dengan titik untuk pesan.
- **Dua suara.** Portal Sekolah: sehari-hari, sapaan **"Anda"**, menjelaskan langkah berikutnya — "Proposal berhasil diajukan. Setpres akan memeriksa dokumen Anda dalam 3 hari kerja." Portal internal: administratif, ringkas, angka dulu — "6 sesuai, 1 tidak sesuai."
- **Istilah baku:** Proposal, Ajukan, Perlu perbaikan, Nilai final, Pagu, Kode autentikasi. Hindari serapan Inggris: *submit, reject, budget, OTP*.
- **Casing:** sentence case di tombol, judul, label ("Simpan draft", "Lihat tabel", "Pakai kode cadangan"). Label status internal memakai Title Case ("Verifikasi Administrasi"); label sekolah sentence case ("Sedang diperiksa").
- **Status ganda:** setiap status punya label internal dan label sekolah yang lebih manusiawi (S05 "Perlu Revisi RAB" ↔ "Perlu perbaikan RAB"; S14 "Ditolak" ↔ "Tidak dapat dilanjutkan").
- **Error** menyebut aturannya: "NIK harus 16 angka." Catatan reviewer menyebut siapa, kapan, bagian mana: "Rina Kartikasari, Setpres Kelengkapan · 7 Okt 2026 · Buka bagian SK Panitia".
- **Angka:** `Rp 658.277.000` (spasi setelah Rp, titik ribuan), ringkasan `Rp 13,2 T`; tanggal "7 Okt 2026"; jam "10.42" (titik). Tabel: rata kanan, total tebal; kontrak menulis terbilang.
- **SLA** selalu dalam kata: "Sisa 3 hari", "Lewat 2 hari".
- **Pemisah** titik tengah " · " untuk metadata.
- **Tanpa emoji.** Unicode hanya ✓ (langkah selesai), › (breadcrumb), – (rentang), ≥.

## VISUAL FOUNDATIONS
- **Warna — tiga lapis.** (1) Aksi: `--primary` #0B5FEF hanya untuk aksi utama, tautan, dan status yang sedang diproses. (2) Identitas instansi: `--brand-navy` #13294B dan `--emblem-gold` #855400 — hanya identitas, tidak pernah untuk status/tombol/peringatan. (3) Status: success/warning/danger/neutral, selalu pasangan `*-subtle` latar + `*-text` teks; fill status tidak untuk teks kecil. Teks: `--text-primary` #1A2B4C (navy tua, bukan hitam), `--text-secondary` #5A6270.
- **Tema:** light default; `data-theme="dark"` pada `<html>`. (Sumber juga memetakan dark ke `prefers-color-scheme`; di sini dihilangkan — set atribut eksplisit.)
- **Tipe:** satu keluarga, Plus Jakarta Sans 400/500/600/700 (fallback Inter, system-ui). Display 32/40 700 · H1 24/32 700 · H2 20/28 600 · H3 16/24 600 · body-lg 16/24 · body 14/22 · caption 12/16 500. Tombol 600 14/20. Wordmark "Revit" 700, letter-spacing −0.02em. Angka `tabular-nums`.
- **Spasi:** kelipatan 4 — 4, 8, 12, 16, 24, 32, 48. Padding kartu 16 (KPI) / 16×20 (grafik); sel tabel 10×12; tombol 10×16.
- **Radius:** 8 px (`--radius-md`) kontrol, kartu, tabel, tooltip; 12 px (`--radius-lg`) modal, panel; 999 px badge/chip. Ujung batang grafik 4 px.
- **Kartu:** latar `--surface` putih, border 1 px `--border`, `--shadow-card` (0 1px 2px rgba(26,43,76,.08)), radius 8. Tidak ada border-kiri berwarna, tidak ada gradien.
- **Bayangan:** hanya dua — card dan overlay (0 8px 24px rgba(26,43,76,.16)) untuk modal, dropdown, tooltip. Tanpa inner shadow.
- **Latar:** halaman `--background` #F5F7FB abu-biru sangat muda; header tabel `--surface-muted`. Tanpa foto full-bleed, tekstur, pola, atau gradien. Ilustrasi hanya untuk state kosong dan halaman sukses (sumber belum menyertakan ilustrasi).
- **Motif brand:** sampul memakai blok persegi modular (biru, tint, navy, aksen emas, tile pil putih) — "dashboard kartu" yang diabstraksi. Lihat `guidelines/brand-cover.html`.
- **Border:** 1 px. `--border` untuk kartu dan pemisah baris, `--border-strong` untuk input dan tombol secondary. Input error → border `--danger`.
- **Hover:** primary → `--primary-hover` (lebih gelap). Baris tabel → `--surface-muted`. Tautan → underline. **Press:** tidak ada efek khusus di sumber (tanpa shrink).
- **Fokus:** outline 2 px `--focus-ring`, offset 2 px (input offset 1 px).
- **Animasi:** sumber tidak mendefinisikan; gunakan transisi warna pendek (≈120 ms ease) saja. Tanpa bounce.
- **Transparansi/blur:** tidak dipakai, kecuali fill choropleth 0.85.
- **Layout:** desktop-first 1280 px — sidebar 248 px, 12 kolom, gutter 24, margin 32. Tablet 768. Ponsel 360 — 4 kolom, margin 16, target sentuh ≥ 44 px. Form & wizard maks. 720 px. Satu tombol primary per layar.
- **Data viz:** seri `--chart-1…6` urutan tetap (seri ke-7 → "Lainnya"); peta `--chart-seq-1…5`. Satu sumbu Y; legenda untuk ≥2 seri; tooltip + "Lihat tabel" di setiap grafik; warna status tidak dipakai sebagai seri. Atribusi "© OpenStreetMap contributors" wajib.
- **Aksesibilitas:** kontras ≥ 4,5:1 di kedua tema; status tidak pernah hanya warna (badge punya titik + label); setiap input punya label tertulis.

## ICONOGRAPHY
- **Lucide** (outline, stroke 2), ukuran 16/20/24 px, warna mengikuti teks (`currentColor`). Sumber tidak menyertakan file ikon; UI kit memuat `lucide@0.460.0` UMD dari unpkg dan membuat SVG lewat `lucide.createElement(lucide.icons.Name)`. Untuk produksi pakai `lucide-react`.
- Tidak ada icon font atau sprite khusus. Tidak ada emoji. Unicode: ✓ di stepper, › breadcrumb.
- **Logo:** belum ada logo grafis Revit. Identitas = lockup: emblem Setneg RI (`assets/logo-setneg-ri.svg`, emas #855400, jangan diwarnai ulang/diberi bayangan/diputar/dipotong) → garis 1 px `--border-strong` setinggi 60% emblem → wordmark teks "Revit". Jarak `--space-3`. Emblem min. 32 px (header 36, login 48, kop A4 64). Di atas panel biru/navy, lockup masuk keping putih (radius 8, padding 8×12) karena emas di atas biru kontrasnya ≈1,2:1.
- **Peta:** `assets/maps/indonesia-provinsi-contoh.json` hanya DATA CONTOH (32 provinsi lama, angka fiktif). Produksi: BIG/Kemendagri, 38 provinsi.
