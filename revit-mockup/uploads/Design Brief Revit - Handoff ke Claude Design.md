# Design Brief Revit — Handoff ke Claude Design

Oct 4, 2026 · @User

Dokumen ini menerjemahkan PRD Revit v2.0 menjadi brief desain untuk 8 peran dan 64 layar, siap diberikan ke Claude Design per batch. Setiap layar punya ID (L01–L64) yang sama dengan PRD, sehingga desain, requirement, dan alur bisa dilacak satu sama lain.

## 0. Cara memakai dokumen ini

1. Kerjakan berurutan: fondasi (bagian 1–4) dulu, lalu layar per peran (bagian 5–9).
2. Untuk setiap batch, salin prompt di bagian 12 ke Claude Design, lalu lampirkan atau tautkan bagian yang dirujuk.
3. Review hasil setiap batch dengan checklist di akhir bagian 12 sebelum lanjut.
4. Bila desain menemukan kebutuhan baru, catat sebagai komentar di sini dan di PRD agar keduanya tetap sinkron.

**Keputusan yang mengikat desain**

| Keputusan | Nilai | Dampak ke desain |
| --- | --- | --- |
| Nama aplikasi | Revit | Wordmark di header, login, judul tab browser |
| Pemilik | Kementerian Sekretariat Negara / Setpres (kop final masih dikonfirmasi) | Kop PKS dan kuitansi memakai placeholder instansi |
| Gaya visual | Mengacu ke Sekolah Kita (sekolah.data.kemendikdasmen.go.id), warna utama #0B5FEF | Token warna, tipografi, pola daftar, peta, profil |
| Identitas | Logo Sekolah Kita, Tut Wuri, dan Pusdatin tidak dipakai | Pakai wordmark Revit sementara |
| Prioritas perangkat | Desktop-first 1280 px, responsif sampai 360 px | Setiap layar didesain desktop + satu versi ponsel untuk layar Sekolah dan Konsultan |
| Autentikasi | Eksternal (Sekolah, Konsultan): email + kata sandi + TOTP. Internal: captcha, akses hanya lewat VPN, tanpa SSO | Login dua varian, layar daftar TOTP, banner VPN |
| Urutan persetujuan | PPK menyiapkan PKS dulu, lalu Approver Dana menyetujui | Antrian PPK sebelum antrian Approver |
| Isi proposal | Informasi Sekolah (otomatis), SK Panitia, Pendahuluan, Maksud, Tujuan, Dasar, Manfaat, Penutup, RAB | Struktur wizard proposal |
| Bahasa | Bahasa Indonesia, sederhana di portal Sekolah | Microcopy terpisah per peran (bagian 11) |

**Peran dan singkatan yang dipakai di seluruh dokumen**

| Kode | Peran | Portal | Fase |
| --- | --- | --- | --- |
| SKL | Panitia Sekolah | Eksternal | 1 |
| ADM | Setpres Kelengkapan Administrasi | Internal | 1 |
| KPR | Konsultan Agrinas Perencanaan | Eksternal | 1 |
| PPK | Setpres Bendahara / PPK | Internal | 1 |
| APV | Setpres Approver Dana | Internal | 1 |
| KPL | Konsultan Agrinas Pelaksanaan | Eksternal | 2 |
| SA | Setpres Super Admin | Internal | 2 |
| PIM | Menteri / Presiden | Internal, read-only | 2 |

## 1. Design foundations

Warna utama #0B5FEF diambil dari theme color Sekolah Kita; nilai token lain di bawah adalah usulan turunan yang perlu dicocokkan dengan tangkapan layar Sekolah Kita saat Batch 1. Semua warna dipakai lewat token, bukan hex langsung, agar mode gelap dan perubahan brand cukup diubah di satu tempat.

**Token warna**

| Token | Light | Pemakaian |
| --- | --- | --- |
| color.primary | #0B5FEF | Tombol utama, tautan, tab aktif, fokus |
| color.primary.hover | #0A4FCC | Hover dan pressed tombol utama |
| color.primary.subtle | #E7EFFE | Latar baris terpilih, chip filter aktif, banner info |
| color.text.primary | #1A2B4C | Judul dan isi utama |
| color.text.secondary | #5A6270 | Label, keterangan, metadata |
| color.border | #DDE2EA | Garis tabel, kartu, input |
| color.surface | #FFFFFF | Kartu, tabel, modal |
| color.background | #F5F7FB | Latar halaman |
| color.success | #1E8E5A | Sesuai, disetujui, deviasi hijau |
| color.warning | #C77A00 | Mendekati SLA, perlu revisi, deviasi kuning |
| color.danger | #D23A3A | Ditolak, lewat SLA, deviasi merah, error |
| color.neutral | #8A93A3 | Draft, nonaktif, status akhir netral |

**Tipografi** (usulan; samakan dengan font Sekolah Kita bila berbeda)

| Gaya | Ukuran / tinggi baris | Berat | Pemakaian |
| --- | --- | --- | --- |
| Display | 32 / 40 px | 700 | Judul dashboard pimpinan, angka KPI |
| H1 | 24 / 32 px | 700 | Judul halaman |
| H2 | 20 / 28 px | 600 | Judul bagian, judul kartu besar |
| H3 | 16 / 24 px | 600 | Judul kartu, judul langkah wizard |
| Body | 14 / 22 px | 400 | Isi umum, sel tabel |
| Body large | 16 / 24 px | 400 | Teks portal Sekolah, input form |
| Caption | 12 / 16 px | 400–500 | Metadata, label badge, helper text |
| Angka | Tabular figures | 600 | Nilai rupiah, persen, jumlah |

Font keluarga: Plus Jakarta Sans atau Inter (sans-serif), fallback system-ui. Nilai rupiah selalu memakai format `Rp 658.277.000` dengan pemisah titik.

**Grid, spasi, dan breakpoint**

| Item | Nilai |
| --- | --- |
| Skala spasi | 4, 8, 12, 16, 24, 32, 48 px |
| Radius | 8 px (input, tombol, kartu), 12 px (modal), penuh (badge, chip) |
| Bayangan | Satu tingkat untuk kartu, satu tingkat lebih tebal untuk modal dan dropdown |
| Desktop | 1280 px, sidebar 248 px, konten 12 kolom, gutter 24 px, margin 32 px |
| Tablet | 768 px, sidebar menjadi drawer, 8 kolom, margin 24 px |
| Ponsel | 360 px, navigasi bawah atau drawer, 4 kolom, margin 16 px |
| Lebar baca form | Maksimal 720 px untuk form dan wizard |

**Ikon dan ilustrasi**: satu set ikon outline (mis. Lucide atau Material Symbols Outlined), ukuran 16 / 20 / 24 px. Ilustrasi hanya untuk state kosong dan halaman sukses, gaya garis sederhana searah Sekolah Kita.

**Tone visual**: bersih, tepercaya, dan administratif; banyak ruang putih, satu warna aksen, tanpa gradien berat. Informasi status selalu memakai warna plus label teks, tidak pernah warna saja.

**Aksesibilitas**: kontras teks minimal 4,5:1, target sentuh minimal 44 × 44 px di ponsel, fokus keyboard terlihat (outline 2 px color.primary), setiap input punya label tertulis.

## 2. App shell dan navigasi per peran

Semua peran memakai satu kerangka yang sama: header atas, sidebar kiri, area konten. Yang berbeda per peran hanya isi sidebar dan halaman beranda, sehingga Claude Design cukup membuat satu shell lalu mengganti menunya.

**Struktur shell (desktop 1280 px)**

- **Header (64 px)**: wordmark Revit di kiri, label portal ("Portal Sekolah", "Portal Konsultan", "Portal Setpres"), lalu di kanan: lonceng notifikasi dengan badge jumlah, pengalih peran (hanya bila pengguna punya lebih dari satu peran), avatar + nama + menu (Profil saya, Ganti kata sandi, Keluar).
- **Sidebar (248 px)**: menu per peran, item aktif berlatar color.primary.subtle, badge angka antrian di kanan item.
- **Konten**: breadcrumb, judul halaman (H1), aksi utama di kanan judul, lalu isi.
- **Banner sistem** di bawah header bila perlu: sesi akan berakhir, offline, pemeliharaan terjadwal.
- **Ponsel (360 px)**: header ringkas (wordmark, lonceng, menu), sidebar menjadi drawer; untuk Sekolah dan Konsultan, 4 menu utama juga tampil sebagai navigasi bawah.

**Menu sidebar per peran**

| Peran | Beranda | Menu (urut) | Badge angka |
| --- | --- | --- | --- |
| SKL | Beranda sekolah (checklist + status) | Beranda · Proposal saya · Profil sekolah · Panitia · Rekening · Pelaksanaan (F2) · Perpanjangan (F2) · Dokumen saya | Revisi yang diminta |
| ADM | Antrian verifikasi | Antrian verifikasi · Riwayat keputusan · Daftar sekolah · Peta sekolah | Antrian S02 |
| KPR | Tugas saya | Tugas saya · Riwayat penilaian · Daftar sekolah (yang ditugaskan) · Peta | Tugas S04 |
| PPK | Dashboard pagu | Dashboard pagu · Persiapan PKS · Menunggu pencairan · Penyaluran CSV (F2) · Addendum (F2) · Kelola pagu · Daftar sekolah · Peta | Antrian S06, S11 |
| APV | Dashboard approver | Dashboard · Antrian persetujuan · Riwayat keputusan · Daftar sekolah · Peta | Antrian S07 |
| KPL (F2) | Sekolah diawasi | Sekolah diawasi · Laporan masuk · Riwayat reviu · Peta | Laporan belum direview |
| SA (F2) | Pengguna | Pengguna · Kode registrasi · Antrian pendaftaran · Hak akses · Parameter sistem · Log audit | Antrian pendaftaran |
| PIM (F2) | Dashboard nasional | Dashboard nasional · Wilayah · Daftar sekolah (read-only) | Tidak ada |

**Aturan navigasi**

- Menu Fase 2 tidak ditampilkan di Fase 1 (bukan dinonaktifkan), agar pengguna tidak melihat fitur yang belum ada.
- Setiap notifikasi membuka objek terkait langsung, bukan halaman daftar.
- Detail proposal (L20) adalah satu halaman yang sama untuk semua peran; tab dan aksi yang tampil mengikuti peran dan status.
- Portal internal menampilkan banner kecil "Terhubung via VPN Setpres" di halaman login; tanpa VPN, halaman tidak dapat diakses sama sekali (layar error jaringan standar browser, bukan desain Revit).

## 3. Library komponen

Dua puluh tiga komponen menutupi seluruh 64 layar; buat semuanya di Batch 1 sebelum layar apa pun. Badge status adalah komponen terpenting karena muncul di hampir setiap layar.

**Badge status proposal (S01–S14)**

Label internal dipakai di portal Setpres dan Konsultan; label sekolah dipakai di portal Sekolah.

| Kode | Label internal | Label sekolah | Warna |
| --- | --- | --- | --- |
| S01 | Draft | Belum diajukan | Neutral |
| S02 | Verifikasi Administrasi | Sedang diperiksa | Primary |
| S03 | Perlu Revisi Administrasi | Perlu perbaikan dokumen | Warning |
| S04 | Penilaian RAB | Survei & penilaian RAB | Primary |
| S05 | Perlu Revisi RAB | Perlu perbaikan RAB | Warning |
| S06 | Persiapan PKS | Penyiapan kontrak | Primary |
| S07 | Persetujuan Akhir | Menunggu persetujuan | Primary |
| S08 | Menunggu Pencairan | Disetujui, menunggu dana | Success (subtle) |
| S09 | Dana Tersalurkan | Dana sudah ditransfer | Success |
| S10 | Pelaksanaan | Pelaksanaan pembangunan | Primary |
| S11 | Addendum Diajukan | Perpanjangan diproses | Warning |
| S12 | Sanksi / Dihentikan | Pekerjaan dihentikan | Danger |
| S13 | Selesai | Selesai 100% | Success |
| S14 | Ditolak | Tidak dapat dilanjutkan | Danger |

**Komponen**

| No | Komponen | Varian dan state yang wajib | Dipakai di |
| --- | --- | --- | --- |
| C01 | Tombol | Primary, secondary, ghost, danger; default, hover, disabled, loading | Semua |
| C02 | Input teks & textarea | Default, fokus, error + pesan, disabled, dengan counter karakter | Form, wizard |
| C03 | Select & dropdown bertingkat | Wilayah provinsi → kab/kota → kecamatan → desa | M1, filter |
| C04 | Input OTP 6 digit | Kosong, terisi, error, kode cadangan | Login, aktivasi |
| C05 | Badge status | 14 status × 2 label (internal, sekolah) | Semua daftar dan detail |
| C06 | Chip SLA | Aman (sisa > 1 hari), mendekati (H-1, kuning), lewat (merah) + teks sisa waktu | Semua antrian |
| C07 | Tabel antrian | Kolom bisa diurutkan, baris terpilih, checkbox massal, paginasi 25 baris, kosong, memuat | ADM, KPR, PPK, APV, KPL, SA |
| C08 | Panel filter | Cari, dropdown wilayah, status, rentang tanggal, chip filter aktif, reset | Daftar dan antrian |
| C09 | Kartu sekolah | Nama, NPSN, wilayah, badge status, nilai | Daftar, peta, dashboard |
| C10 | Penampil dokumen | PDF dan gambar, zoom, rotasi, halaman, unduh | ADM, KPR, APV |
| C11 | Uploader file | Drag-drop, progres per file, gagal + coba lagi, batas ukuran, jenis file | Semua unggahan |
| C12 | Uploader foto geotag | Kamera/galeri, pratinjau dengan watermark waktu + koordinat, penanda "lokasi saat unggah", ditolak tanpa lokasi | M2, M4, M8 |
| C13 | Tabel RAB | Mode edit (sekolah), mode nilai (konsultan: usulan vs rekomendasi + selisih), baca saja; subtotal per kategori, total + terbilang sticky | M2, M4, M6 |
| C14 | Stepper wizard | 5 langkah, selesai / aktif / belum / error | M2 |
| C15 | Indikator simpan otomatis | Menyimpan..., Tersimpan pukul HH:MM, Gagal tersimpan | Wizard, form panjang |
| C16 | Checklist verifikasi | Per item: Sesuai / Tidak sesuai + catatan, item berubah sejak pengajuan sebelumnya | M3 |
| C17 | Banner catatan reviewer | Peran pemberi, tanggal, isi catatan, tautan ke bagian | Mode revisi, detail |
| C18 | Timeline riwayat | Status lama → baru, pelaku, waktu, catatan | Detail proposal |
| C19 | Modal konfirmasi keputusan | Ringkasan objek + nilai, catatan wajib (untuk tolak), tombol konfirmasi | M3, M4, M6, M9 |
| C20 | Kartu pagu & KPI | Angka besar, label, perubahan, keterangan waktu | PPK, APV, PIM |
| C21 | Peta | Marker cluster, warna per status, kartu ringkas saat klik, legenda, drill-down wilayah | L19, L62 |
| C22 | Grafik Kurva S | Rencana vs realisasi kumulatif per minggu, area deviasi berwarna | M8 |
| C23 | Toast & state halaman | Sukses, error, info; kosong, memuat (skeleton), error jaringan, offline | Semua |

## 4. Pola layar dan state UI

Enam pola layar dipakai berulang di semua peran. Desain setiap pola sekali dengan benar, lalu layar per peran tinggal mengisi kontennya.

| Pola | Struktur | Contoh layar |
| --- | --- | --- |
| P1 Antrian | Judul + ringkasan jumlah (kartu kecil per status/SLA) → panel filter → tabel antrian (C07) dengan chip SLA → klik baris membuka detail | L21, L24, L30, L33, L35, L45, L53, L58 |
| P2 Detail split view | Kiri 60%: penampil dokumen / konten. Kanan 40%: panel keputusan (checklist, form, tombol keputusan) yang tetap terlihat saat menggulir | L22, L26, L36, L47 |
| P3 Wizard | Stepper (C14) di atas, satu langkah per layar, lebar baca 720 px, tombol Kembali / Lanjut di bawah, indikator simpan otomatis di kanan atas | L08–L12, L39 |
| P4 Form & profil | Bagian berjudul dalam kartu, indikator kelengkapan di samping, tombol Simpan per bagian | L05–L07, L25, L29, L31, L32, L40, L43 |
| P5 Dashboard | Baris kartu KPI (C20) → grafik/funnel → peta atau tabel peringkat; filter periode dan wilayah di kanan atas | L28, L34, L62, L63 |
| P6 Daftar & peta | Satu halaman dengan toggle Daftar / Peta, filter dipakai bersama | L18, L19 |

**State yang wajib digambar untuk setiap layar** (minimal yang relevan)

| State | Tampilan |
| --- | --- |
| Normal | Data realistis dari bagian 10 |
| Memuat | Skeleton sesuai bentuk konten, bukan spinner penuh layar |
| Kosong | Ilustrasi kecil + kalimat penjelas + satu aksi (mis. "Belum ada proposal. Buat proposal") |
| Hasil filter kosong | Kalimat + tombol "Reset filter" |
| Error validasi | Field merah + pesan di bawah field + ringkasan error di atas form bila lebih dari satu |
| Error jaringan | Banner + tombol "Coba lagi"; isian form tidak hilang |
| Offline (ponsel) | Banner abu "Anda sedang offline. Isian disimpan di perangkat." |
| Tanpa akses | Halaman "Anda tidak punya akses ke halaman ini" + tombol ke beranda |
| Sukses | Toast untuk aksi kecil; halaman sukses untuk aksi besar (proposal diajukan, aktivasi selesai) |
| Konfirmasi keputusan | Modal C19 sebelum setiap keputusan yang tidak bisa dibatalkan |

**Aturan interaksi**

- Setiap keputusan tolak / revisi wajib catatan minimal 20 karakter; tombol kirim nonaktif sampai syarat terpenuhi, dengan alasan tertulis di bawah tombol.
- Aksi utama per layar hanya satu tombol primary; aksi lain secondary atau ghost.
- Data pribadi (NIK, KTP) tampil tersamar `3201********0001` dengan tombol "Tampilkan" hanya untuk ADM dan PPK.
- Nilai rupiah rata kanan di tabel, angka tabular, total selalu tebal.

## 5. Layar fitur umum (semua peran)

Lima layar dipakai semua peran. Setiap spesifikasi layar di bagian 5–9 memakai format yang sama: tujuan, layout, konten, aksi, dan state khusus; rujukan requirement dan alur mengikuti PRD v2.0.

### L01 · Login, lupa & reset kata sandi

- **Tujuan**: masuk dengan aman; varian eksternal (TOTP) dan internal (captcha, via VPN). Rujukan U-01–U-04, alur A1–A2.
- **Layout**: dua kolom di desktop: kiri panel brand (wordmark Revit, satu kalimat "Satu pintu bantuan revitalisasi sekolah", ilustrasi sekolah), kanan kartu form 400 px. Ponsel: kartu form saja.
- **Konten**: email, kata sandi (tampilkan/sembunyikan), tautan "Lupa kata sandi", tombol Masuk. Internal: captcha di bawah kata sandi + catatan kecil "Akses portal internal hanya melalui VPN Setpres". Eksternal: layar kedua "Masukkan kode dari aplikasi authenticator" dengan input OTP 6 digit (C04) dan tautan "Pakai kode cadangan".
- **Layar turunan**: Lupa kata sandi (email → pesan netral), Buat kata sandi baru (aturan kata sandi tampil sebagai checklist hidup), konfirmasi TOTP sebelum simpan (eksternal).
- **State khusus**: kredensial salah (pesan netral), terkunci 15 menit dengan hitung mundur, kode TOTP salah, tautan reset kedaluwarsa.

### L17 · Pusat notifikasi

- **Tujuan**: tidak ada tugas terlewat. Rujukan U-05, alur A3, matriks N01–N20.
- **Layout**: dropdown panel 400 px dari ikon lonceng (10 terbaru) + halaman penuh "Semua notifikasi" dengan tab Semua / Belum dibaca.
- **Konten per item**: ikon jenis, judul tebal bila belum dibaca, nama sekolah, ringkasan satu baris, waktu relatif ("2 jam lalu").
- **Aksi**: klik item → objek terkait; "Tandai semua dibaca".
- **Contoh isi**: "Perlu perbaikan dokumen — SK Panitia belum ditandatangani" (SKL), "Proposal baru masuk — SD Negeri ... (Kab. Bogor)" (ADM).

### L18 · Daftar sekolah

- **Tujuan**: mencari sekolah dan proposal dengan cepat. Rujukan U-06, alur A4. Pola P6.
- **Layout**: toggle Daftar / Peta di kanan judul; panel filter di atas tabel.
- **Kolom**: NPSN, nama sekolah, jenjang, kab/kota, provinsi, status proposal (badge), nilai final, tanggal update. Konsultan hanya melihat sekolah yang ditugaskan.
- **Aksi**: cari nama/NPSN, filter provinsi → kab/kota → kecamatan, status; ekspor CSV (internal); klik baris → L20.

### L19 · Peta sekolah

- **Tujuan**: melihat sebaran dan wilayah yang tertinggal. Rujukan U-07. Komponen C21.
- **Layout**: peta memenuhi konten; panel filter mengambang kiri atas; legenda warna status kanan bawah; jumlah sekolah tampil di panel.
- **Interaksi**: marker cluster berangka, klik marker → kartu ringkas (C09) dengan tombol "Lihat detail".

### L20 · Detail proposal

- **Tujuan**: satu sumber kebenaran untuk satu proposal, dipakai semua peran. Rujukan U-08.
- **Header**: nama sekolah (H1), NPSN, wilayah, badge status, nilai usulan dan nilai final, chip SLA tahap aktif, aksi sesuai peran di kanan (mis. "Verifikasi" untuk ADM).
- **Tab**: Ringkasan · Dokumen · RAB · Penilaian · Kontrak · Progres (F2) · Riwayat. Tab tampil sesuai status dan hak akses; tab yang belum relevan disembunyikan.
- **Ringkasan**: profil sekolah, ketua panitia (NIK tersamar), narasi proposal ringkas, peta lokasi kecil, banner catatan reviewer terakhir (C17).
- **Riwayat**: timeline C18 dari S01 sampai status saat ini.

## 6. Layar peran Sekolah (SKL)

Portal Sekolah adalah yang paling banyak dipakai (±20.000 akun) oleh pengguna dengan kemampuan digital beragam, jadi setiap layar harus bisa dipahami tanpa pelatihan. Desain desktop 1280 px dan versi ponsel 360 px untuk setiap layar di bagian ini.

### L02 · Aktivasi akun

- **Tujuan**: mengaktifkan akun sekolah dengan NPSN + kode registrasi. Rujukan M1-01–M1-03, alur M1 langkah 1–3.
- **Layout**: kartu tengah 480 px, stepper 3 titik di atas (Verifikasi sekolah → Buat akun → Amankan akun).
- **Langkah 1**: input NPSN (8 digit) + kode registrasi (10 karakter) → "Periksa". Hasil: kartu data sekolah hasil migrasi (nama, alamat, kab/kota) dengan pertanyaan "Apakah ini sekolah Anda?" (Ya, lanjutkan / Bukan, hubungi Setpres).
- **Error**: kode tidak cocok, kode sudah dipakai, NPSN sudah punya akun; masing-masing dengan kontak Setpres.

### L03 · Buat akun, verifikasi email, daftar TOTP

- **Langkah 2**: email, no. HP, kata sandi + konfirmasi (checklist aturan hidup) → layar "Cek email Anda" dengan tombol kirim ulang (hitung mundur 60 detik).
- **Langkah 3**: "Amankan akun Anda": 3 langkah bergambar (unduh aplikasi authenticator, pindai QR, masukkan 6 digit) + QR besar + kode manual. Lalu layar 8 kode cadangan dengan tombol Unduh dan Salin, dan centang "Saya sudah menyimpan kode cadangan".
- **Sukses**: halaman "Akun sekolah aktif" → tombol "Mulai lengkapi profil".

### L04 · Beranda sekolah

- **Tujuan**: panitia selalu tahu langkah berikutnya. Rujukan M1-07, alur M1 langkah 6.
- **Layout**: sapaan + nama sekolah; kartu "Langkah Anda" berisi checklist 4 item (Profil sekolah, Panitia, Rekening BNI, Proposal) dengan persentase dan tombol per item; kartu status proposal (badge, timeline mini, aksi); kartu notifikasi terbaru; kartu bantuan (kontak, panduan).
- **Variasi**: belum mulai, profil sebagian, proposal sedang diperiksa, perlu revisi (kartu warning paling atas), disetujui (tautan unduh PKS), pelaksanaan (F2: progres minggu ini).

### L05 · Profil sekolah

- **Konten**: NPSN (terkunci), nama, jenjang, status negeri/swasta, alamat, wilayah bertingkat (C03), kontak sekolah; peta dengan pin lokasi yang bisa digeser + tombol "Gunakan lokasi saya". Rujukan M1-03–M1-05.
- **Penanda**: field hasil migrasi diberi ikon kecil "dari data Kemendikdasmen"; peringatan bila pin di luar kab/kota terpilih.

### L06 · Susunan panitia

- **Konten**: kartu Ketua Panitia (nama, NIK, no. HP, email, foto KTP, foto diri); daftar anggota (nama, jabatan, no. HP) dengan tambah/hapus baris; unggah SK Panitia (PDF) + nomor SK + tanggal SK. Rujukan M1-06.
- **Validasi**: NIK 16 angka; foto KTP terbaca (pratinjau); SK wajib PDF ≤ 10 MB.

### L07 · Rekening BNI

- **Konten**: langkah 1 "Unduh surat permohonan buka rekening" (tombol PDF terisi data sekolah); langkah 2 "Buka rekening di kantor BNI terdekat"; langkah 3 input no. rekening + nama pemilik + unggah foto buku tabungan (**Asumsi**). Rujukan M1-08.

### L08–L12 · Wizard proposal (5 langkah)

Rujukan M2-01–M2-08, alur M2a. Pola P3. Indikator simpan otomatis (C15) selalu terlihat; total RAB sticky di langkah 3.

| Layar | Langkah | Isi | Validasi |
| --- | --- | --- | --- |
| L08 | 1. Informasi & SK Panitia | Kartu Informasi Sekolah terisi otomatis dari profil (baca saja + tautan "Ubah di profil"); kartu SK Panitia dari data panitia (bisa diganti versi terbaru) | Profil 100% |
| L09 | 2. Narasi proposal | Enam textarea berurutan: Pendahuluan, Maksud, Tujuan, Dasar, Manfaat, Penutup; masing-masing dengan petunjuk singkat dan contoh yang bisa dibuka, counter 100–2.000 karakter | Semua terisi ≥ 100 karakter |
| L10 | 3. Foto kondisi eksisting | Uploader geotag (C12), grid foto 4–20, keterangan per foto (mis. "Atap ruang kelas 3 bocor") | Minimal 4 foto berlokasi |
| L11 | 4. RAB | Tabel RAB (C13) per kategori: Biaya Konstruksi (Persiapan, Penataan Halaman, Rehabilitasi), Biaya Lain-lain (Perencana, Pengawas); kolom uraian, volume, satuan, harga satuan, jumlah; unggah file RAB (PDF/XLSX) di bawah tabel | Minimal 1 item, tidak ada sel kosong; peringatan bila melewati plafon |
| L12 | 5. Tinjau & ajukan | Ringkasan semua langkah dengan tautan "Ubah", total RAB + terbilang, centang pernyataan kebenaran data, tombol "Ajukan proposal" | Semua langkah valid |

- **Setelah ajukan**: modal konfirmasi → halaman sukses "Proposal terkirim" dengan nomor proposal dan perkiraan waktu pemeriksaan (SLA 3 hari kerja).
- **Fase 2 (L37)**: di L09 dan L11 ada tombol "Isi otomatis dari dokumen" → unggah → layar konfirmasi hasil OCR dengan field bertanda kuning "hasil OCR, periksa kembali".

### L13 · Status proposal

- **Konten**: badge status dengan label sekolah, timeline vertikal (C18) dengan bahasa sederhana ("Dokumen Anda sedang diperiksa oleh Setpres, perkiraan selesai 9 Okt"), tombol "Lihat proposal" (baca saja). Ponsel: timeline penuh lebar.

### L14 · Mode revisi

- **Tujuan**: memperbaiki hanya yang diminta. Rujukan M2-06, alur M2b.
- **Layout**: wizard yang sama, banner catatan reviewer (C17) di atas; langkah yang perlu revisi bertanda warning di stepper; field yang diminta revisi berbingkai kuning dengan catatan di bawahnya; field lain terkunci (ikon gembok, abu).
- **Aksi**: "Ajukan ulang" aktif setelah semua bagian bertanda diubah.

### L15 · Lapor realisasi (Fase 1, sederhana)

- **Konten**: uraian realisasi, unggah foto (geotag), unggah dokumen LPJ, riwayat laporan sebelumnya. Rujukan M8-01.

### L16 · Unduh PKS & kuitansi

- **Konten**: kartu dokumen PKS dan kuitansi (nomor, tanggal, nilai) dengan tombol Unduh PDF dan petunjuk "Cetak, tandatangani, dan bubuhkan meterai". Muncul setelah S08.

## 7. Layar Setpres Kelengkapan (ADM) dan Konsultan Perencanaan (KPR)

Kedua peran ini adalah gerbang mutu pertama: ADM menyaring ribuan berkas di desktop, KPR menilai RAB setelah survei lapangan, sering dari ponsel. Desain ADM desktop saja; KPR desktop + ponsel.

### L21 · Antrian verifikasi (ADM)

- **Tujuan**: membagi dan menyelesaikan ribuan berkas tepat SLA. Rujukan M3-01, M3-07, M3-08, alur M3 langkah 1–2. Pola P1.
- **Ringkasan atas**: 4 kartu kecil: Total antrian, Lewat SLA (merah), Mendekati SLA (kuning), Pengajuan ulang.
- **Kolom tabel**: checkbox, NPSN, nama sekolah, kab/kota, provinsi, tanggal masuk, pengajuan ke-n (chip "Ulang" bila > 1), sisa SLA (C06), diklaim oleh (P1).
- **Aksi**: urut default sisa SLA terkecil; klik baris → L22; pilih banyak → bar aksi "Tugaskan konsultan" (hanya untuk berkas yang sudah Sesuai).

### L22 · Detail verifikasi (split view)

- **Tujuan**: memeriksa dokumen dan memutuskan dalam satu layar. Rujukan M3-02–M3-06, alur M3 langkah 3–5. Pola P2.
- **Kiri (60%)**: penampil dokumen (C10) dengan daftar dokumen sebagai tab kecil: SK Panitia, KTP Ketua, Foto ketua, Narasi proposal, Foto eksisting, RAB.
- **Kanan (40%)**: header sekolah ringkas; checklist (C16) 7 item: SK Panitia, KTP ketua, data panitia, profil & lokasi, narasi (Pendahuluan–Penutup), foto eksisting, lampiran RAB. Setiap item: Sesuai / Tidak sesuai + kolom catatan; klik item membuka dokumennya di kiri. Item yang berubah sejak pengajuan sebelumnya diberi chip "Berubah".
- **Bawah panel**: ringkasan ("6 sesuai, 1 tidak sesuai") + tombol "Kirim keputusan".
- **State**: semua sesuai (tombol berubah jadi "Lanjut: tugaskan konsultan"), ada tidak sesuai tanpa catatan (tombol nonaktif + alasan), pengajuan ulang.

### L23 · Modal penugasan konsultan

- **Konten**: pencarian konsultan; daftar dengan nama, lembaga (Agrinas), wilayah kerja, jumlah tugas aktif, rata-rata hari penilaian; rekomendasi teratas = wilayah sama dan beban terendah; tenggat penilaian otomatis (10 hari kerja).
- **Aksi**: pilih → "Tugaskan & kirim" → toast sukses → kembali ke antrian.

### L24 · Tugas saya (KPR)

- **Tujuan**: merencanakan kunjungan lapangan. Rujukan M4-01, alur M4 langkah 1.
- **Desktop**: tabel (nama sekolah, kab/kota, tanggal ditugaskan, tenggat + chip SLA, status: Belum survei / Sudah survei / Revisi masuk) + toggle peta kecil untuk melihat sebaran tugas.
- **Ponsel**: daftar kartu per sekolah, urut tenggat, tombol "Navigasi" (buka peta) dan "Mulai survei".

### L25 · Form survei lapangan

- **Konten**: info sekolah + alamat + peta; uploader foto geotag (C12) min 4, keterangan per foto; unggah dokumen hasil survei; catatan kondisi lapangan. Rujukan M4-02.
- **State**: foto tanpa lokasi ditolak dengan instruksi menyalakan GPS; unggah antrian saat sinyal lemah.

### L26 · Tabel penilaian RAB

- **Tujuan**: menetapkan nilai wajar per item. Rujukan M4-03–M4-07, alur M4 langkah 4–5. Pola P2.
- **Kiri**: tabel RAB mode nilai (C13): per item uraian, volume × harga usulan, jumlah usulan, jumlah rekomendasi (dapat diedit, default = usulan), selisih (merah bila turun), catatan item. Subtotal per kategori.
- **Kanan (sticky)**: kartu ringkas Total usulan, Total rekomendasi, Selisih (Rp dan %), label otomatis "Layak penuh" / "Layak sebagian"; foto survei sebagai thumbnail; riwayat penilaian sebelumnya (bila pengajuan ulang).
- **Bawah**: pertimbangan umum (wajib), unggah RAB final PDF, pilihan keputusan: Layak / Perlu revisi / Tidak layak.

### L27 · Konfirmasi keputusan penilaian

- **Modal C19**: nama sekolah, keputusan, nilai final dalam angka dan terbilang, selisih dari usulan, pesan "Nilai final terkunci setelah dikirim". Untuk Perlu revisi: daftar item yang ditandai. Untuk Tidak layak: catatan wajib.

## 8. Layar Bendahara/PPK dan Approver Dana (APV)

PPK menjaga pagu dan menyiapkan dokumen hukum, lalu Approver memberi keputusan akhir. Kartu pagu harus terlihat di setiap layar PPK dan di layar ringkasan Approver, karena setiap keputusan mengurangi anggaran negara. Desktop saja; APV juga tablet 768 px.

### L28 · Dashboard pagu (PPK)

- **Tujuan**: tahu kondisi anggaran setiap saat. Rujukan M5-01–M5-03, alur M5a. Pola P5.
- **Atas**: 4 kartu pagu (C20): Pagu total, Dicadangkan (S06–S07), Terikat (S08–S13), Sisa; plus bar horizontal bertumpuk yang membagi total menjadi tiga bagian tersebut.
- **Tengah**: kartu antrian kerja (Persiapan PKS, Menunggu pencairan, Addendum F2) dengan jumlah dan tombol buka.
- **Bawah**: tabel 10 PKS terakhir (nomor, sekolah, nilai, status).

### L29 · Kelola pagu

- **Konten**: pagu per tahun anggaran; form ubah nilai + alasan wajib; tabel riwayat perubahan (tanggal, nilai lama → baru, alasan, oleh). Modal konfirmasi bila nilai baru lebih kecil dari yang sudah terikat (ditolak).

### L30 · Antrian persiapan PKS

- **Kolom**: sekolah, kab/kota, nilai final, tanggal masuk, sisa SLA, indikator "Pagu cukup" / "Pagu tidak cukup", status draft PKS (Belum / Draft / Ditolak APV). Rujukan alur M5b langkah 1–2. Pola P1.
- **Baris ditolak APV** diberi chip merah dan muncul paling atas.

### L31 · Form & pratinjau PKS

- **Tujuan**: menghasilkan PKS tanpa salah ketik. Rujukan M5-04–M5-08. Pola P2.
- **Kiri (form)**: bagian "Data otomatis" (baca saja, bertanda ikon database): sekolah, NPSN, alamat, ketua panitia, NIK, nilai + terbilang, no. rekening, nama/jabatan PPK. Bagian "Diisi PPK": nomor PKS (saran otomatis, bisa diedit), tanggal PKS (date picker, boleh mundur), jangka waktu pelaksanaan (hari), tanggal selesai (dihitung).
- **Kanan**: pratinjau PDF A4 hidup, area tanda tangan dan meterai ditandai kotak putus-putus.
- **Bawah**: kartu pagu (sisa sebelum dan sesudah), tombol "Simpan draft" (mencadangkan pagu) dan "Teruskan ke Approver". Bila APV menolak: banner catatan APV di atas form.
- **State**: pagu tidak cukup (tombol teruskan nonaktif + pesan + tautan Kelola pagu).

### L32 · Form & pratinjau kuitansi

- **Konten**: sama dengan L31 dalam skala lebih kecil: nomor kuitansi, tanggal (boleh mundur), penerima, nilai + terbilang, pratinjau A4 dengan ruang meterai.

### L33 · Antrian menunggu pencairan

- **Kolom**: sekolah, nilai, tanggal disetujui, nomor PKS, status unduh/arsip (P1), penanda "transfer gagal" (F2). Aksi: unduh PKS + kuitansi (satu atau massal ZIP), unggah scan bertanda tangan (P1).

### L34 · Dashboard Approver

- **Tujuan**: melihat di mana proses menumpuk. Rujukan M6-04, alur M6 langkah 1. Pola P5.
- **Konten**: kartu KPI (Masuk, Dalam proses, Disetujui, Ditolak, Total nilai disetujui); funnel jumlah proposal per tahap S02 → S08; tabel per provinsi (jumlah, nilai, rata-rata hari proses); filter periode dan wilayah.

### L35 · Antrian persetujuan

- **Kolom**: sekolah, kab/kota, nilai usulan, nilai final, selisih, konsultan, tanggal masuk, sisa SLA. Pola P1. Rujukan M6-01.

### L36 · Ringkasan keputusan + modal konfirmasi

- **Tujuan**: memutuskan tanpa membuka banyak dokumen. Rujukan M6-02, M6-03, alur M6 langkah 3–4. Pola P2.
- **Kiri**: identitas sekolah & panitia; perbandingan nilai usulan vs final per kategori (gaya "Sandingkan" Sekolah Kita); catatan dan 4 foto survei konsultan; hasil verifikasi ADM (7 item sesuai); timeline singkat.
- **Kanan (sticky)**: kartu nilai final besar + terbilang; kartu pagu "Sisa setelah persetujuan"; pratinjau PKS (thumbnail, klik untuk perbesar); tombol "Setujui" (primary) dan "Tolak" (danger secondary).
- **Modal setujui**: nama sekolah + nilai final + "PKS akan terkunci". **Modal tolak**: catatan wajib, info "Dikembalikan ke PPK".
- **Setelah keputusan**: toast + opsi "Lanjut ke proposal berikutnya".

## 9. Layar Fase 2 (L37–L64)

Fase 2 menambah 28 layar untuk pengawasan pelaksanaan, rekonsiliasi dana, administrasi sistem, dan dashboard pimpinan. Desain setelah Batch 1–4 disetujui; pola dan komponennya sama dengan Fase 1.

### Sekolah lanjutan (L37–L44)

| Layar | Isi utama | Rujukan |
| --- | --- | --- |
| L37 Konfirmasi hasil OCR | Dokumen di kiri, field terisi di kanan; field hasil OCR berlatar kuning + "periksa kembali"; tombol "Pakai hasil ini" | M2-09 |
| L38 Beranda pelaksanaan | Progres fisik kumulatif besar (%), deviasi berwarna, tenggat proyek, kewajiban lapor minggu ini, mini Kurva S | M8, alur M8a |
| L39 Jadwal rencana | Tabel minggu × target progres kumulatif (%), grafik rencana terbentuk otomatis, kirim ke KPL | M8-02 |
| L40 Laporan mingguan | Minggu ke-n; realisasi biaya per kategori RAB; progres fisik kumulatif; kendala; foto progres min 3 dengan watermark paksa | M8-03, M8-04 |
| L41 Riwayat & Kurva S | Grafik C22 rencana vs realisasi, tabel laporan per minggu dengan status review KPL | M8-05, M8-06 |
| L42 Unggah LPJ akhir | Unggah LPJ, foto akhir, ringkasan realisasi vs nilai PKS | M8-09 |
| L43 Pengajuan perpanjangan | Unduh template surat terisi; unggah surat bertanda tangan; alasan (pilihan + uraian); tanggal selesai usulan; foto bukti | M9-01, M9-02, alur M9a |
| L44 Status addendum | Timeline pengajuan; hasil keputusan; unduh SK perpanjangan bila disetujui | M9-03 |

### Konsultan Pelaksanaan (L45–L48)

| Layar | Isi utama | Rujukan |
| --- | --- | --- |
| L45 Sekolah diawasi | Tabel/kartu: sekolah, progres %, deviasi (warna), minggu tidak lapor, laporan belum direview; urut deviasi terburuk; toggle peta | M8, alur M8b |
| L46 Detail pengawasan | Kurva S, daftar laporan mingguan, galeri foto berwatermark, jadwal rencana (setujui / minta ubah) | M8-05, M8-07 |
| L47 Review laporan | Split view: laporan + foto di kiri; rating 1–5, komentar, status Sesuai / Perlu perbaikan / Tidak sesuai di kanan | M8-07 |
| L48 Hasil reviu lapangan & sanksi | Unggah foto + dokumen kunjungan; rekomendasi sanksi dengan alasan; persetujuan penyelesaian (S13) | M8-08, M8-09 |

### PPK lanjutan (L49–L54)

| Layar | Isi utama | Rujukan |
| --- | --- | --- |
| L49 Unggah CSV BNI | Unduh template; drag-drop CSV (maks 10 MB / 10.000 baris); petunjuk kolom wajib | M7-01, alur M7 |
| L50 Pratinjau validasi | Kartu Valid / Error; tabel baris error (nomor baris, NPSN, alasan); tombol "Proses baris valid" | M7-02, M7-03 |
| L51 Hasil proses | Progres latar belakang; jumlah Sukses → S09, Gagal tetap S08; unduh laporan error | M7-04, M7-05 |
| L52 Riwayat unggahan | Tabel: file, pengunggah, waktu, jumlah diproses/gagal | M7-06 |
| L53 Antrian addendum | Sekolah, alasan, tanggal lama → usulan, sisa SLA | M9-03 |
| L54 Keputusan addendum | Split view: surat + bukti di kiri; Setujui (tanggal baru, SK otomatis) / Tolak (catatan) di kanan | M9-03 |

### Super Admin (L55–L61)

| Layar | Isi utama | Rujukan |
| --- | --- | --- |
| L55 Daftar pengguna | Tabel: nama, email, peran (chip), instansi, status aktif, login terakhir; filter peran | M10-01 |
| L56 Undang / edit pengguna | Form nama, email, instansi, peran (multi), wilayah kerja (konsultan); aksi nonaktifkan, reset kata sandi, reset TOTP | M10-01, M10-06 |
| L57 Kode registrasi | Impor NPSN; generate massal; tabel kode + status; ekspor CSV; terbitkan ulang | M10-02, alur M10b |
| L58 Antrian pendaftaran | Pendaftar tanpa kode; cocokkan dengan data migrasi; Setujui / Tolak + alasan | M10-03, alur M10c |
| L59 Hak akses per peran | Matriks peran × kapabilitas dengan toggle; perubahan memerlukan konfirmasi | M10-04 |
| L60 Parameter & reminder | SLA per tahap (hari), H-X per jenis pengingat, plafon RAB, ambang deviasi, N minggu sebelum surat peringatan | M10-05, M9-04 |
| L61 Log audit | Tabel: waktu, pengguna, aksi, objek, nilai sebelum/sesudah; filter | M10-07 |

### Menteri / Presiden (L62–L64)

| Layar | Isi utama | Rujukan |
| --- | --- | --- |
| L62 Dashboard nasional | 7 kartu KPI (sekolah terdaftar, proposal masuk, disetujui, dana teralokasi, dana tersalurkan, rata-rata progres fisik, sekolah selesai); funnel S02 → S13; peta nasional dengan pilihan metrik; waktu pembaruan data | M11-01–M11-06 |
| L63 Drill-down wilayah | Breadcrumb Nasional › Provinsi › Kab/Kota › Kecamatan; peta wilayah; tabel peringkat (jumlah sekolah, dana, progres rata-rata, deviasi merah) | M11-03, M11-04 |
| L64 Detail sekolah read-only | Status, nilai, progres, foto terakhir, Kurva S; tanpa tombol aksi apa pun | M11-05 |

Dashboard pimpinan memakai huruf dan angka lebih besar (Display 32 px untuk KPI) dan nol tombol transaksional, karena dibaca cepat di tablet.

## 10. Data contoh untuk mockup

Data di bawah ini fiktif dengan format asli, karena data Sekolah Kita belum berhasil diambil (halaman dimuat lewat JavaScript dan browser di komputer Anda sedang tidak terhubung). NPSN sengaja diawali 9999 agar tidak tertukar dengan sekolah nyata; ganti dengan 10–12 SD asli dari Sekolah Kita sebelum desain direview bersama Setpres.

**Sekolah**

| NPSN | Nama sekolah | Status | Kecamatan | Kab/Kota | Provinsi | Status proposal | Nilai usulan | Nilai final |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 99990101 | SD Negeri Sukamaju 01 | Negeri | Cibinong | Kab. Bogor | Jawa Barat | S02 Verifikasi Administrasi | Rp 658.277.000 | – |
| 99990102 | SD Negeri Margahayu 03 | Negeri | Margahayu | Kab. Bandung | Jawa Barat | S03 Perlu Revisi Administrasi | Rp 512.400.000 | – |
| 99990103 | SD Negeri Tegalrejo 2 | Negeri | Tegalrejo | Kota Yogyakarta | DI Yogyakarta | S04 Penilaian RAB | Rp 734.950.000 | – |
| 99990104 | SD Muhammadiyah Kauman | Swasta | Ngampilan | Kota Yogyakarta | DI Yogyakarta | S05 Perlu Revisi RAB | Rp 689.120.000 | – |
| 99990105 | SD Negeri Banyumanik 04 | Negeri | Banyumanik | Kota Semarang | Jawa Tengah | S06 Persiapan PKS | Rp 640.000.000 | Rp 598.750.000 |
| 99990106 | SD Negeri Wonokromo 1 | Negeri | Wonokromo | Kota Surabaya | Jawa Timur | S07 Persetujuan Akhir | Rp 702.300.000 | Rp 702.300.000 |
| 99990107 | SD Negeri Medan Johor 060 | Negeri | Medan Johor | Kota Medan | Sumatera Utara | S08 Menunggu Pencairan | Rp 615.880.000 | Rp 600.000.000 |
| 99990108 | SD Negeri Bontoala 3 | Negeri | Bontoala | Kota Makassar | Sulawesi Selatan | S10 Pelaksanaan | Rp 658.277.000 | Rp 658.277.000 |
| 99990109 | SD Inpres Kayu Putih | Negeri | Oebobo | Kota Kupang | Nusa Tenggara Timur | S10 Pelaksanaan (deviasi −12%) | Rp 590.500.000 | Rp 575.000.000 |
| 99990110 | SD Negeri Entrop | Negeri | Jayapura Selatan | Kota Jayapura | Papua | S13 Selesai | Rp 745.000.000 | Rp 720.400.000 |
| 99990111 | SD Kristen Petra 5 | Swasta | Wiyung | Kota Surabaya | Jawa Timur | S14 Ditolak | Rp 810.000.000 | – |
| 99990112 | SD Negeri Pontianak Kota 15 | Negeri | Pontianak Kota | Kota Pontianak | Kalimantan Barat | S01 Draft | – | – |

**Contoh RAB (SD Negeri Sukamaju 01, total Rp 658.277.000)**

| Kategori | Uraian | Volume | Satuan | Harga satuan | Jumlah |
| --- | --- | --- | --- | --- | --- |
| Persiapan | Pembersihan lokasi & bongkar atap lama | 1 | ls | Rp 18.500.000 | Rp 18.500.000 |
| Rehabilitasi | Penggantian rangka atap baja ringan 3 ruang kelas | 216 | m² | Rp 485.000 | Rp 104.760.000 |
| Rehabilitasi | Penutup atap genteng metal | 216 | m² | Rp 165.000 | Rp 35.640.000 |
| Rehabilitasi | Plafon gipsum + rangka | 189 | m² | Rp 210.000 | Rp 39.690.000 |
| Rehabilitasi | Lantai keramik 40×40 | 189 | m² | Rp 245.000 | Rp 46.305.000 |
| Rehabilitasi | Rehab toilet siswa (4 unit) | 4 | unit | Rp 42.000.000 | Rp 168.000.000 |
| Rehabilitasi | Pengecatan dinding dalam & luar | 980 | m² | Rp 48.000 | Rp 47.040.000 |
| Rehabilitasi | Instalasi listrik 3 ruang kelas | 3 | ruang | Rp 12.500.000 | Rp 37.500.000 |
| Penataan Halaman | Paving block halaman | 320 | m² | Rp 185.000 | Rp 59.200.000 |
| Penataan Halaman | Saluran drainase | 85 | m' | Rp 360.000 | Rp 30.600.000 |
| Biaya lain-lain | Jasa perencana | 1 | ls | Rp 32.900.000 | Rp 32.900.000 |
| Biaya lain-lain | Jasa pengawas | 1 | ls | Rp 38.142.000 | Rp 38.142.000 |

**Orang dan peran untuk mockup** (semua fiktif)

| Peran | Nama | Keterangan |
| --- | --- | --- |
| Ketua Panitia (SKL) | Drs. Bambang Suryadi | SD Negeri Sukamaju 01, NIK tampil `3201********0001` |
| Verifikator (ADM) | Rina Kartikasari | Setpres Kelengkapan Administrasi |
| Konsultan Perencanaan (KPR) | Ir. Dedi Hermawan | Agrinas, wilayah Jawa Barat, 14 tugas aktif |
| PPK | Agus Prasetyo, S.E. | Pejabat Pembuat Komitmen |
| Approver Dana (APV) | Dr. Hendra Wijaya | Setpres |
| Konsultan Pelaksanaan (KPL) | Siti Nurhaliza, S.T. | Agrinas, 22 sekolah diawasi |

**Angka agregat untuk dashboard**: pagu total Rp 13,2 T; dicadangkan Rp 1,1 T; terikat Rp 4,2 T; sisa Rp 7,9 T; 12.450 proposal masuk; 20.000 sekolah terdaftar (angka 12.450 dan Rp 4,2 T mengikuti purwarupa di deck proposal; sisanya usulan).

## 11. Microcopy dan label

Portal Sekolah memakai bahasa sehari-hari dengan sapaan "Anda"; portal internal memakai bahasa administratif ringkas. Satu istilah dipakai konsisten di seluruh aplikasi.

**Istilah baku**

| Pakai | Jangan pakai |
| --- | --- |
| Proposal | Usulan, pengajuan, berkas (untuk sekolah) |
| Ajukan / Ajukan ulang | Submit, kirim ulang |
| Perlu perbaikan | Reject, ditolak sementara |
| Nilai final | Nilai akhir, nilai rekomendasi akhir |
| Pagu | Plafon anggaran, budget |
| Kode autentikasi | OTP, token (di portal Sekolah) |
| Konsultan | Reviewer, verifikator (untuk Agrinas) |

**Tombol utama per konteks**

| Konteks | Label |
| --- | --- |
| Aktivasi | Periksa · Ya, ini sekolah saya · Buat akun · Selesai |
| Wizard proposal | Simpan & lanjut · Kembali · Ajukan proposal |
| Revisi | Ajukan ulang |
| Verifikasi ADM | Kirim keputusan · Tugaskan konsultan |
| Penilaian KPR | Kirim penilaian |
| PPK | Simpan draft · Teruskan ke Approver · Unduh PKS |
| Approver | Setujui · Tolak |

**Contoh pesan**

| Situasi | Teks |
| --- | --- |
| Proposal terkirim | Proposal berhasil diajukan. Setpres akan memeriksa dokumen Anda dalam 3 hari kerja. |
| Perlu perbaikan | Ada 1 dokumen yang perlu diperbaiki. Lihat catatan dari Setpres lalu ajukan ulang. |
| Simpan otomatis | Tersimpan pukul 10.42 |
| Gagal simpan | Belum tersimpan. Periksa koneksi internet Anda; isian tetap aman di perangkat. |
| NIK salah | NIK harus 16 angka. |
| Foto tanpa lokasi | Foto ini tidak memiliki lokasi. Nyalakan GPS lalu ambil foto langsung dari kamera. |
| Kode TOTP salah | Kode tidak sesuai. Pastikan jam di ponsel Anda tepat, lalu coba kode terbaru. |
| Login terkunci | Terlalu banyak percobaan. Coba lagi dalam 14:32. |
| Pagu tidak cukup | Sisa pagu Rp 500.000.000 tidak cukup untuk nilai final Rp 658.277.000. |
| Konfirmasi setujui | Setujui bantuan untuk SD Negeri Sukamaju 01 senilai Rp 658.277.000? PKS akan dikunci. |
| Antrian kosong (ADM) | Semua proposal sudah diperiksa. Proposal baru akan muncul di sini. |
| Belum ada proposal (SKL) | Anda belum membuat proposal. Lengkapi profil sekolah dulu, lalu buat proposal. |

## 12. Prompt Claude Design per batch

Tujuh batch menutup seluruh 64 layar; Batch 1–4 adalah Fase 1 dan wajib selesai sebelum 31 Oktober 2026. Salin satu prompt per sesi, lampirkan dokumen ini, dan review dengan checklist di bawah sebelum lanjut.

| Batch | Cakupan | Layar | Fase |
| --- | --- | --- | --- |
| 1 | Design system + app shell + login | Bagian 1–4, L01, L17 | 1 |
| 2 | Portal Sekolah | L02–L16 | 1 |
| 3 | Setpres Kelengkapan + fitur umum | L18–L23 | 1 |
| 4 | Konsultan Perencanaan, PPK, Approver | L24–L36 | 1 |
| 5 | Sekolah lanjutan + Konsultan Pelaksanaan | L37–L48 | 2 |
| 6 | PPK lanjutan + Super Admin | L49–L61 | 2 |
| 7 | Dashboard pimpinan | L62–L64 | 2 |

**Batch 1 — Design system**

```markdown
Buat design system untuk aplikasi Revit (sistem bantuan revitalisasi sekolah milik Setpres) dengan gaya visual mengacu ke Sekolah Kita (sekolah.data.kemendikdasmen.go.id), warna utama #0B5FEF. Jangan pakai logo Sekolah Kita, Tut Wuri, atau Pusdatin; pakai wordmark teks "Revit".
Ikuti Design Brief Revit bagian 1 (token warna, tipografi, grid, breakpoint), bagian 2 (app shell + sidebar per peran), bagian 3 (23 komponen + badge status S01–S14), dan bagian 4 (6 pola layar + state).
Lalu desain L01 Login (varian eksternal dengan TOTP dan varian internal dengan captcha + catatan VPN) dan L17 Pusat notifikasi. Desktop 1280 px, sertakan versi ponsel 360 px untuk login eksternal.
```

**Batch 2 — Portal Sekolah**

```markdown
Pakai design system Revit dari Batch 1. Desain layar peran Sekolah L02–L16 sesuai Design Brief Revit bagian 6, desktop 1280 px dan versi ponsel 360 px.
Prioritas: L02–L03 aktivasi + daftar TOTP, L04 beranda dengan checklist, L08–L12 wizard proposal 5 langkah (Informasi & SK Panitia → Pendahuluan, Maksud, Tujuan, Dasar, Manfaat, Penutup → Foto eksisting → RAB → Tinjau & ajukan), L14 mode revisi.
Tampilkan state: draft tersimpan, validasi gagal, total RAB melebihi plafon, perlu perbaikan. Pakai data contoh SD Negeri Sukamaju 01 dan RAB Rp 658.277.000 dari bagian 10, bahasa dari bagian 11.
```

**Batch 3 — Setpres Kelengkapan**

```markdown
Pakai design system Revit. Desain L18 Daftar sekolah, L19 Peta sekolah, L20 Detail proposal (semua tab), L21 Antrian verifikasi, L22 Detail verifikasi split view, L23 Modal penugasan konsultan sesuai Design Brief Revit bagian 5 dan 7. Desktop 1280 px.
Tampilkan antrian dengan 12 sekolah dari bagian 10, chip SLA aman/mendekati/lewat, checklist 7 item dengan satu item tidak sesuai, dan pengajuan ulang dengan item berubah.
```

**Batch 4 — Konsultan Perencanaan, PPK, Approver**

```markdown
Pakai design system Revit. Desain L24–L27 (Konsultan Perencanaan, desktop + ponsel), L28–L33 (PPK, desktop), L34–L36 (Approver Dana, desktop + tablet 768 px) sesuai Design Brief Revit bagian 7 dan 8.
Wajib: tabel penilaian RAB usulan vs rekomendasi dengan label Layak sebagian, form + pratinjau PKS A4 dengan ruang tanda tangan dan meterai, kartu pagu di setiap layar PPK, layar ringkasan Approver dengan modal Setujui dan Tolak. State pagu tidak cukup dan PKS ditolak Approver.
```

**Batch 5–7 — Fase 2**

```markdown
Pakai design system Revit. Desain layar [L37–L48 | L49–L61 | L62–L64] sesuai tabel di Design Brief Revit bagian 9, dengan pola dan komponen yang sama seperti Fase 1. Untuk L62–L64 gunakan angka KPI besar, peta drill-down wilayah, dan tanpa tombol transaksional.
```

**Checklist review setiap batch**

- [ ] Semua warna, teks, dan spasi memakai token bagian 1, tidak ada hex baru
- [ ] Setiap status tampil dengan badge C05 (warna + label), label sekolah di portal Sekolah
- [ ] Satu tombol primary per layar; keputusan tak bisa dibatalkan memakai modal C19
- [ ] State kosong, memuat, error, dan state khusus layar ada
- [ ] Versi ponsel 360 px ada untuk layar Sekolah dan Konsultan, tanpa scroll horizontal
- [ ] Kontras teks ≥ 4,5:1, target sentuh ≥ 44 px, label pada setiap input
- [ ] NIK tersamar kecuali untuk ADM dan PPK
- [ ] Nilai rupiah berformat `Rp 658.277.000`, rata kanan di tabel, terbilang di dokumen kontrak
- [ ] Tidak ada logo instansi lain; wordmark Revit konsisten
- [ ] Setiap layar mencantumkan ID L-xx agar bisa dilacak ke PRD
