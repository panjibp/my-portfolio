# Walkthrough: Landing Page Portofolio Pribadi High-Tech & Elegant (React.js)

Landing page profil pribadi modern berkonsep **Simple, Elegant, dan High-Tech** telah selesai dibangun di folder `my-web` menggunakan **React 19**, **Vite**, dan **Custom Obsidian Cyber Design System**.

---

## Ringkasan Fitur & Desain yang Dibuat

### 1. Visual & Aesthetic Architecture
- **Obsidian Dark Luxury Base**: Menggunakan palet deep obsidian (`#050608`, `#080a10`, `#121624`) dengan frosted glassmorphism (`backdrop-filter: blur(16px)`).
- **Dynamic Accent Color Switcher**: Tersedia 3 mode aksen warna di Navbar:
  - **Cyber Cyan** (`#00f2fe`)
  - **Neon Purple** (`#b5179e`)
  - **Matrix Emerald** (`#10b981`)
- **Interactive Canvas Background**: Efek constellation particles & cyber grid dinamis yang merespons pergerakan kursor mouse secara halus (60 FPS).
- **Futuristic Typography**: Menggunakan kombinasi font *Space Grotesk*, *Inter*, dan *JetBrains Mono*.

---

### 2. Struktur Komponen Utama

| Komponen | Lokasi File | Deskripsi Fitur |
| :--- | :--- | :--- |
| **Navbar** | [`src/components/Navbar.jsx`](file:///d:/Project/Test/my-web/src/components/Navbar.jsx) | Frosted glass sticky header, logo monogram glowing, navigasi smooth-scroll, live indicator, accent switcher, tombol connect. |
| **BackgroundEffect** | [`src/components/BackgroundEffect.jsx`](file:///d:/Project/Test/my-web/src/components/BackgroundEffect.jsx) | Canvas particle system interaktif dengan ambient cursor glow dan cyber grid. |
| **Hero** | [`src/components/Hero.jsx`](file:///d:/Project/Test/my-web/src/components/Hero.jsx) | Status pill "Available for projects", dynamic typing roles, headline futuristik, CTA button, dan stats counter bar. |
| **TerminalWidget** | [`src/components/TerminalWidget.jsx`](file:///d:/Project/Test/my-web/src/components/TerminalWidget.jsx) | Interactive CLI emulator dengan auto-scroll, command history (Arrow Up/Down), command chips (`help`, `whoami`, `skills`, `projects`, `contact`, `stats`, `clear`, `date`, `matrix`). |
| **About** | [`src/components/About.jsx`](file:///d:/Project/Test/my-web/src/components/About.jsx) | Holographic profile avatar dengan rotating ring, bio ringkas, dan 4 pilar arsitektur engineering. |
| **Skills** | [`src/components/Skills.jsx`](file:///d:/Project/Test/my-web/src/components/Skills.jsx) | Tab kategori teknologi (Frontend, Backend, DevOps, AI & Tools) dengan glowing progress bars dan icon tech stack. |
| **Projects & Modal** | [`src/components/Projects.jsx`](file:///d:/Project/Test/my-web/src/components/Projects.jsx) & [`ProjectModal.jsx`](file:///d:/Project/Test/my-web/src/components/ProjectModal.jsx) | Showcase proyek dengan filter kategori, metrik performa, tautan GitHub/Demo, serta modal detail arsitektur sistem. |
| **Experience** | [`src/components/Experience.jsx`](file:///d:/Project/Test/my-web/src/components/Experience.jsx) | Timeline vertikal beraksen sirkuit sirkular glowing berisi pencapaian karir dan tag teknologi. |
| **Contact** | [`src/components/Contact.jsx`](file:///d:/Project/Test/my-web/src/components/Contact.jsx) | Telemetri kontak, tombol Copy Email dengan efek selebrasi `canvas-confetti`, encrypted social links, dan form transmisi pesan. |
| **Footer** | [`src/components/Footer.jsx`](file:///d:/Project/Test/my-web/src/components/Footer.jsx) | Status telemetri sistem real-time (99.99% Uptime) dan tombol Back-to-Top halus. |

---

## Verifikasi & Pengujian

1. **Build Verification**:
   - `npm run build` berhasil dijalankan tanpa error:
   ```bash
   ✓ built in 357ms
   dist/index.html                   1.32 kB
   dist/assets/index-B7uZoAP7.css   24.92 kB
   dist/assets/index-G9V9na9y.js   252.84 kB
   ```

2. **Dev Server Status**:
   - Server berjalan aktif di: `http://localhost:5173/`

---

## Cara Menjalankan & Menyesuaikan Data

1. **Menjalankan Proyek**:
   ```bash
   cd my-web
   npm run dev
   ```
2. **Kustomisasi Data Profil**:
   - Semua data teks, proyek, skills, riwayat karir, dan perintah terminal dapat disesuaikan dengan mudah di file:
     [`src/data/portfolioData.js`](file:///d:/Project/Test/my-web/src/data/portfolioData.js).
