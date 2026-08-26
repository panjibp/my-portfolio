# Rencana Implementasi: High-Tech & Elegant Personal Portfolio Landing Page (React.js)

Landing page profil pribadi modern berkonsep **"Simple, Elegant, & High-Tech"** yang memadukan estetika dark luxury obsidian, aksen glowing cyber (cyan & violet neon), glassmorphism, efek partikel/grid interaktif, serta fitur interaktif seperti terminal emulator, filter proyek, dynamic stats counter, dan contact form responsif.

---

## Fitur Utama & Konsep Desain

1. **Aesthetic & Visual Style**:
   - **Palet Warna**: Deep Obsidian Dark (`#08090d`, `#0f111a`), Frosted Glass (`rgba(255,255,255,0.03)` dengan blur), Aksen Neon Cyan (`#00f2fe`) dan Electric Violet (`#9d4edd`).
   - **Tipografi**: *Space Grotesk* (futuristic header), *Inter* (clean UI text), dan *JetBrains Mono* (high-tech code & status tags).
   - **Latar Belakang Interaktif**: Canvas grid & floating particle system responsif dengan interaksi kursor.
   - **Micro-Interactions**: Card tilt effect, glowing hover borders, smooth animations, status badge "Available for Projects" berkedip hidup.

2. **Komponen & Bagian Halaman**:
   - **Navbar**: Glassmorphic sticky header, status indicator real-time, navigasi smooth-scroll, tombol Download CV, dan Theme Accent Switcher (Cyan, Purple, Emerald).
   - **Hero Section**:
     - Headline futuristik dinamis dengan efek typing/glitch.
     - **Interactive Live Terminal Widget**: Pengunjung bisa mengetik command (`help`, `skills`, `projects`, `contact`, `whoami`, `clear`) atau klik quick chips untuk melihat info langsung.
     - Call-to-action buttons (Explore Work, Contact Me, Copy Email).
     - Live Stats Counter (Pengalaman, Proyek Selesai, Kepuasan/Uptime, Tech Stack Mastered).
   - **About & Philosophy**:
     - Kartu profil futuristik dengan holographic avatar frame.
     - Pilar filosofi kerja (High-Performance Engineering, Clean Architecture, Pixel-Perfect UX, AI & Scalable Systems).
   - **Interactive Skills & Tech Radar**:
     - Tab kategori: Frontend, Backend, Cloud & DevOps, AI & Architecture.
     - Level indikator, radar tech tags, dan tooltips interaktif.
   - **Featured Projects Showcase**:
     - Filter proyek (All, Full Stack, AI & Cloud, Web Apps).
     - Kartu proyek dengan mockup visual, detail teknologi, impact metrics, link Live Demo & Source Code, serta modal preview detail.
   - **Experience & Milestones**:
     - High-tech vertical timeline bercahaya dengan detail pencapaian dan tech stack yang digunakan.
   - **Contact & Connect**:
     - Form kontak interaktif dengan validasi real-time, tombol "Copy Email" dengan feedback toast notification, dan quick social links.
   - **Footer**:
     - Status sistem ("All Systems Operational 99.99%"), copyright, dan Back-to-top button.

---

## User Review Required

> [!NOTE]
> Proyek akan diinisialisasi menggunakan **Vite + React.js** dengan Vanilla CSS custom design system (tanpa dependency berat Tailwind, sehingga performa ultra cepat dan kontrol visual 100% presisi). Ikon akan menggunakan `lucide-react`.

---

## Proposed Changes

### Setup & Inisialisasi Proyek

#### [NEW] Inisialisasi Vite React App di workspace root (`d:\Project\Test`)
- Inisialisasi template React menggunakan `create-vite`.
- Install dependencies: `lucide-react`, `canvas-confetti`.

---

### Core Design System & Styling

#### [NEW] [src/index.css](file:///d:/Project/Test/src/index.css)
- CSS variables untuk warna obsidian, neon glows, glass gradients, typographies, dan animations.
- Keyframes untuk pulse, glow shimmer, scanlines, floating particles, dan smooth transitions.

#### [NEW] [src/styles/components.css](file:///d:/Project/Test/src/styles/components.css)
- Styling modular untuk Navbar, Hero, Terminal, Cards, Timeline, Project Grid, Buttons, Badges, dan Modals.

---

### Data & State

#### [NEW] [src/data/portfolioData.js](file:///d:/Project/Test/src/data/portfolioData.js)
- Data profil terstruktur: personal info, skills matrix, projects, work experience, metrics, dan quick terminal commands.

---

### Komponen Aplikasi

#### [NEW] [src/components/Navbar.jsx](file:///d:/Project/Test/src/components/Navbar.jsx)
- Sticky frosted glass bar dengan navigation links, live indicator, accent color picker, dan CTA.

#### [NEW] [src/components/BackgroundEffect.jsx](file:///d:/Project/Test/src/components/BackgroundEffect.jsx)
- Background canvas interaktif dengan partikel dan cyber grid yang bereaksi secara halus terhadap gerakan kursor.

#### [NEW] [src/components/Hero.jsx](file:///d:/Project/Test/src/components/Hero.jsx)
- Hero banner dengan title dinamis, high-tech stats bar, dan interactive command terminal.

#### [NEW] [src/components/TerminalWidget.jsx](file:///d:/Project/Test/src/components/TerminalWidget.jsx)
- CLI emulator interaktif di dalam hero dengan output high-tech bergaya hacker/terminal.

#### [NEW] [src/components/About.jsx](file:///d:/Project/Test/src/components/About.jsx)
- Holographic profile badge, bio intro, dan 4 pilar filosofi (Performance, Clean Code, Cloud/AI, UI/UX).

#### [NEW] [src/components/Skills.jsx](file:///d:/Project/Test/src/components/Skills.jsx)
- Categorized tech stack tabs dengan glowing progress & tags.

#### [NEW] [src/components/Projects.jsx](file:///d:/Project/Test/src/components/Projects.jsx)
- Project showcase dengan filter tabs, glowing cards, modal preview detail proyek, dan live demo links.

#### [NEW] [src/components/Experience.jsx](file:///d:/Project/Test/src/components/Experience.jsx)
- High-tech vertical milestone & career timeline.

#### [NEW] [src/components/Contact.jsx](file:///d:/Project/Test/src/components/Contact.jsx)
- Contact form dengan validation, copy-to-clipboard toast, dan social links.

#### [NEW] [src/components/ProjectModal.jsx](file:///d:/Project/Test/src/components/ProjectModal.jsx)
- Modal detail proyek dengan breakdown arsitektur, key metrics, dan live links.

#### [NEW] [src/components/Footer.jsx](file:///d:/Project/Test/src/components/Footer.jsx)
- Status sistem real-time, social shortcuts, dan quick scroll to top.

#### [MODIFY] [src/App.jsx](file:///d:/Project/Test/src/App.jsx)
- Integrasi semua komponen, theme state (Cyan, Violet, Emerald), dan modal state.

---

## Verification Plan

### Automated / Build Verification
- Jalankan `npm run build` untuk memverifikasi tidak ada error sintaks atau build issue.

### Manual & Interactive Verification
- Jalankan `npm run dev` dan buka browser menggunakan tool subagent untuk:
  - Memverifikasi tampilan visual (estetika dark luxury, high-tech glow, tipografi, glassmorphism).
  - Menguji interaktivitas Terminal emulator (mengetik command, klik preset chip).
  - Menguji filter proyek dan membuka modal detail proyek.
  - Menguji filter kategori skills.
  - Menguji copy-to-clipboard email dan pengiriman pesan contact form.
  - Menguji accent color switcher (Cyan / Purple / Emerald).
  - Memverifikasi responsivitas pada tampilan desktop dan mobile.
