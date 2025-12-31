# 📺 YoruTV - Streaming TV Indonesia

[![GitHub stars](https://img.shields.io/github/stars/username/yorutv.svg?style=social&label=Star)](https://github.com/username/yorutv)
[![GitHub forks](https://img.shields.io/github/forks/username/yorutv.svg?style=social&label=Fork)](https://github.com/username/yorutv)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

YoruTV adalah aplikasi web streaming untuk menonton berbagai saluran TV Indonesia secara gratis. Aplikasi ini dibangun menggunakan teknologi web modern (HTML5, CSS3, Vanilla JavaScript) dan diperkuat dengan **Shaka Player** untuk memastikan pengalaman streaming DASH yang lancar dan berkualitas tinggi.

Dengan antarmuka yang intuitif dan mendukung navigasi remote control, YoruTV sempurna untuk dinikmati tidak hanya di browser desktop, tetapi juga di perangkat Smart TV atau yang mendukung web browser.

> **Catatan:** Proyek ini bertujuan untuk pembelajaran dan demonstrasi. Penggunaan harus mematuhi syarat dan ketentuan dari penyedia layanan streaming asli.

## 📸 Tampilan Aplikasi

**Tampilan Daftar Channel:**
![Tampilan Daftar Channel](https://files.catbox.moe/558v8d.png)

**Tampilan Pemutar Video:**
![Tampilan Pemutar Video](https://files.catbox.moe/53do5u.png)

**Result:**
![Result](https://files.catbox.moe/87ga1d.png)

## ✨ Fitur Utama

-   📡 **Streaming TV Nasional**: Akses berbagai channel TV Indonesia populer dari RCTI, SCTV, hingga HBO.
-   🎬 **Pemutaran Video DASH**: Menggunakan Shaka Player untuk streaming adaptif yang mengoptimalkan kualitas video berdasarkan kecepatan internet.
-   🎛️ **Kontrol Pemutara Lengkap**: Kontrol video khusus (play/pause, progress bar, fullscreen) yang responsif dan mudah digunakan.
-   🎚️ **Pemilihan Kualitas Video**: Bebas memilih kualitas streaming (Auto, 360p, 720p, 1080p, dll.) sesuai kebutuhan.
-   🔍 **Pencarian Channel**: Cepat temukan channel favorit Anda dengan fitur pencarian.
-   📂 **Kategori Channel**: Kelompokkan channel berdasarkan kategori untuk memudahkan navigasi.
-   🎮 **Dukungan Navigasi Penuh**: Navigasi penuh menggunakan keyboard (Arrow Keys, Enter, Esc) yang sangat ideal untuk penggunaan di Smart TV atau dengan remote control.
-   📱 **Desain Responsif**: Tampilan yang optimal di berbagai perangkat, dari desktop, tablet, hingga ponsel.
-   🌙 **Tema Gelap (Dark Mode)**: Desain yang nyaman di mata untuk menonton dalam durasi lama.

## 🛠️ Teknologi yang Digunakan

-   **HTML5**: Struktur konten aplikasi.
-   **CSS3**: Desain dan tata letak, dengan fitur-fitur seperti CSS Grid, Flexbox, dan CSS Variables untuk tema.
-   **Vanilla JavaScript (ES6+)**: Logika aplikasi tanpa dependensi framework.
-   **Shaka Player**: Pustaka open-source dari Google untuk memutar video DASH, HLS, dan lainnya.
-   **Font Awesome**: Ikon untuk antarmuka pengguna.

## ⚙️ Konfigurasi & Sumber Data

Sumber data channel saat ini disimpan langsung di dalam file `script.js` pada variabel `m3uData`. Data ini menggunakan format M3U yang dimodifikasi.

Untuk **menambah, menghapus, atau mengubah channel**, Anda dapat mengedit variabel `m3uData` tersebut.

**Format Data:**

```javascript
#EXTINF:-1 group-title="NAMA_KATEGORI" tvg-logo="URL_LOGO",NAMA_CHANNEL
URL_STREAM_MANIFEST_MPD
```

-   `group-title`: Kategori channel (contoh: "DAFTAR").
-   `tvg-logo`: URL menuju gambar logo channel.
-   `NAMA_CHANNEL`: Nama tampilan channel.
-   `URL_STREAM_MANIFEST_MPD`: URL langsung ke file manifest DASH (`.mpd`).

## 🎮 Navigasi & Kontrol

Aplikasi ini dirancang untuk dapat dikontrol dengan mouse dan keyboard/remote.

### Mouse / Sentuh
-   **Klik channel** untuk memulai streaming.
-   Gunakan **kontrol video** di bawah pemutar untuk play/pause, mengatur progress, fullscreen, dll.
-   Klik **tombol kualitas (⚙️)** untuk memilih resolusi video.

### Keyboard / Remote Control
-   **Arrow Keys (↑ ↓ ← →)**: Navigasi antar channel dan elemen UI.
-   **Enter**: Memilih channel atau mengaktifkan tombol.
-   **Spasi**: Play/Pause video (saat pemutar terbuka).
-   **F**: Toggle mode layar penuh (Fullscreen).
-   **Esc**: Menutup pemutar video atau popup.

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detailnya.
