import { SocialLink, ProjectCard, ProfileDetails, ExperienceItem, SkillBarItem, EducationCardItem, EducationDetailItem, AchievementItem } from "./types";

export const INITIAL_PROFILE: ProfileDetails = {
  username: "dejavi08",
  fullName: "Javier Ahmad Arivery",
  avatarUrl: "https://lh3.googleusercontent.com/d/159naiMfdihNbIN9_MKA7eHGgan7FiTFV=w1000?authuser=1", // Using user's custom avatar link
  bio: "Saya membangun media pembelajaran digital interaktif, mengemas UI berbasis web, dan merakit skrip cerdas Python untuk mengotomatisasi pekerjaan kompleks. Berdomisili di Surabaya — merangkai estetika modern dalam pemrograman.",
  location: "Surabaya, Indonesia"
};

export const INITIAL_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "portfolio",
    name: "My Portfolio",
    icon: "ExternalLink",
    url: "https://javiahmad.netlify.app",
    description: "Situs web portofolio utama saya",
    badge: "Official",
    color: "#daa520"
  },
  {
    id: "youtube",
    name: "YouTube Channel",
    icon: "Youtube",
    url: "https://www.youtube.com/@javi_gaming",
    description: "Kanal gaming & pemrograman",
    badge: "Gaming",
    color: "#ff0000"
  },
  {
    id: "roblox",
    name: "Roblox Profile",
    icon: "Gamepad2",
    url: "https://www.roblox.com/users/2813134371/profile",
    description: "Akun Roblox pribadi & aktivitas game",
    badge: "Active",
    color: "#00e5ff"
  },
  {
    id: "minecraft",
    name: "Minecraft Profile",
    icon: "Sword",
    url: "https://namemc.com/profile/dejavi08",
    description: "Profil premium Minecraft di NameMC",
    badge: "Premium",
    color: "#2ecc71"
  },
  {
    id: "gmaps",
    name: "GMaps Profile",
    icon: "MapPin",
    url: "https://www.google.com/maps/contrib/104593466185859187313",
    description: "Kontribusi ulasan & ulasan lokal di Google Maps",
    badge: "Local Guide",
    color: "#4285f4"
  },
  {
    id: "strava",
    name: "Strava Profile",
    icon: "Heart",
    url: "https://www.strava.com/athletes/dejavi08",
    description: "Metrik aktivitas bersepeda & lari",
    badge: "Sport",
    color: "#fc4c02"
  },
  {
    id: "relive",
    name: "Relive Profile",
    icon: "Milestone",
    url: "https://www.relive.cc/profile/dejavi08",
    description: "Visualisasi 3D petualangan bersepeda luar ruangan",
    badge: "Cyclist",
    color: "#ffd700"
  }
];

export const INITIAL_PROJECTS: ProjectCard[] = [
  {
    id: "utbk-dashboard",
    name: "📊 UTBK Dashboard",
    description: "Dashboard Statistik untuk pantau progress 58 topik materi UTBK SNBT esensial, kelola target harian, dan analisis grafik skor Tryout kamu dalam satu dashboard privat.",
    emoji: "📊",
    status: "Live Web",
    liveUrl: "https://utbk-reactjs.vercel.app/",
    tags: ["React", "Vite", "Recharts", "JSON"]
  },
  {
    id: "tryout-snbt-cpns",
    name: "📝 TryOut SNBT CPNS",
    description: "Platform simulasi interaktif untuk tryout seleksi CPNS (SKD) dan SNBT (UTBK). Dirancang presisi menyerupai sistem seleksi CAT orisinal dengan evaluasi sub-materi terpadu dan persentase kelulusan yang diperbarui.",
    emoji: "📝",
    status: "Live Web",
    liveUrl: "https://snbtskd-reactjs.vercel.app/",
    tags: ["React", "Quiz Engine", "Interaktif", "CAT System"]
  },
  {
    id: "lyrics-audio-search",
    name: "🎵 Lyrics Audio Search",
    description: "Pembuat berkas sinkronisasi lirik lagu terdepan bertenaga rangkaian Multi-Model Gemini (9Router). Unggah berkas audio Anda dan pilih metode penyelarasan untuk menghasilkan berkas .lrc presisi tinggi secara instan.",
    emoji: "🎵",
    status: "Live Web",
    liveUrl: "https://lrcgen-dejavi08.vercel.app/",
    tags: ["React", "Gemini AI", "Audio Sync", "LRC Generator"]
  },
  {
    id: "lbb-mashar",
    name: "🎓 LBB MASHAR",
    description: "Lembaga bimbingan belajar terpercaya jenjang SD, SMP, dan SMA di daerah Surabaya dengan antarmuka web interaktif yang modern.",
    emoji: "🎓",
    status: "Live Web",
    liveUrl: "https://lbbmashar.netlify.app/",
    githubUrl: "https://github.com/dejavi08/lbb-mashar",
    tags: ["JavaScript", "HTML5", "CSS3", "Hosting"]
  },
  {
    id: "kirtass",
    name: "🧪 KIRTASS Portal",
    description: "Situs portal resmi Kelompok Ilmiah Remaja SMAN 17 Surabaya, wadah kreativitas penelitian dan publikasi karya ilmiah remaja.",
    emoji: "🧪",
    status: "Live Web",
    liveUrl: "https://kirtass.netlify.app",
    githubUrl: "https://github.com/dejavi08/kirtass",
    tags: ["HTML", "Tailwind CSS", "JavaScript"]
  },
  {
    id: "english-lesson",
    name: "🗣️ English Lesson",
    description: "Media pembelajaran interaktif inovatif yang membantu siswa-siswi SMAN 17 Surabaya menyerap materi Bahasa Inggris secara interaktif.",
    emoji: "🗣️",
    status: "Live Web",
    liveUrl: "https://english-lesson.netlify.app/",
    githubUrl: "https://github.com/dejavi08/english-lesson",
    tags: ["CSS", "Web App", "Responsive"]
  },
  {
    id: "yt-flash-converter",
    name: "⚡ YT Flash Converter",
    description: "Alat pengunduh playlist video/audio YouTube super cepat bertenaga yt-dlp dan integrasi ffmpeg di latar belakang.",
    emoji: "⚡",
    status: "Tool Web",
    liveUrl: "https://yt2down.netlify.app/",
    githubUrl: "https://github.com/dejavi08/yt-flash-converter",
    tags: ["Python", "Flask", "yt-dlp", "ffmpeg"]
  },
  {
    id: "metatimechanger",
    name: "⚙️ MetaTimeChanger",
    description: "Program Python pintar untuk menyelaraskan secara otomatis tanggal modifikasi berkas media berdasarkan format penamaannya.",
    emoji: "⚙️",
    status: "Repository",
    githubUrl: "https://github.com/dejavi08/MetaTimeChanger",
    tags: ["Python Script", "CLI", "Metadata"]
  },
  {
    id: "sosis-gulung-ninja",
    name: "🌭 Sosis Gulung Ninja",
    description: "Situs promosi kuliner sederhana yang saya bangun sejak masa sekolah menengah pertama (SMP) untuk mempromosikan jualan sosis gulung.",
    emoji: "🌭",
    status: "Archive",
    liveUrl: "https://dejavi08.github.io/NinjaStore/",
    githubUrl: "https://github.com/DeJavi08/NinjaStore",
    tags: ["HTML/CSS", "Nostalgia", "School Projects"]
  }
];

export const INITIAL_EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-1",
    date: "2025 - Sekarang",
    role: "Pelatihan Koding dan Kecerdasan Artifisial",
    company: "Puspresnas Bina Talenta Indonesia",
    badge: "Intensif",
    body: "Mengikuti program bina talenta di bawah naungan Pusat Prestasi Nasional untuk mempelajari algoritma, analisis komputasi, pengembangan logika pemrograman tingkat lanjut, serta integrasi teknologi AI berbasis multi-model."
  },
  {
    id: "exp-2",
    date: "2025",
    role: "Workshop Personal Branding & Web Hosting",
    company: "PANDI & RTIK Sumbar",
    badge: "Sertifikasi",
    body: "Pelatihan pengembangan jati diri digital profesional berbasis domain Indonesia (.id). Mempelajari manajemen konten, teknik hosting web terstruktur, dan implementasi personal branding di internet."
  },
  {
    id: "exp-3",
    date: "2025",
    role: "Pelatihan Pembuatan Game & Edukasi Virtual Reality",
    company: "HMTC Goes To School (ITS Surabaya)",
    badge: "Kreatif",
    body: "Mengembangkan purwarupa game interaktif berbasis event-driven logic menggunakan Construct serta eksplorasi pemanfaatan teknologi Virtual Reality (VR) untuk visualisasi konten media edukasi interaktif."
  },
  {
    id: "exp-4",
    date: "2023 - Sekarang",
    role: "Independent Web Creator & Automation Developer",
    company: "Proyek & Riset Mandiri",
    badge: "Self-taught",
    body: "Merajut situs web modern berbasis React, otomatisasi skrip pengolahan media menggunakan Python, pembuatan bot asisten Discord/WhatsApp untuk mempermudah kegiatan komunitas, dan pengelolaan administrasi server."
  }
];

export const INITIAL_SKILL_BARS: SkillBarItem[] = [
  { id: "sb-1", name: "HTML / CSS / Web Layout", percentage: 85 },
  { id: "sb-2", name: "Vanilla JavaScript (Interactive)", percentage: 70 },
  { id: "sb-3", name: "Python Automation Scripts", percentage: 80 },
  { id: "sb-4", name: "Interface & Responsive Design", percentage: 78 },
  { id: "sb-5", name: "Hosting & Version Control (Git)", percentage: 75 }
];

export const INITIAL_EDUCATION_CARDS: EducationCardItem[] = [
  {
    id: "ec-1",
    emoji: "💻",
    title: "Pengembangan Front-End",
    subtitle: "HTML · CSS · JavaScript Interaktif",
    tag: "Utama"
  },
  {
    id: "ec-2",
    emoji: "🐍",
    title: "Otomatisasi Skrip Python",
    subtitle: "Pemrosesan data berkas, metadata, & parser",
    tag: "Spesialisasi"
  },
  {
    id: "ec-3",
    emoji: "🎮",
    title: "Platform Kreatif & Komunitas",
    subtitle: "Roblox, Minecraft, & Kontributor Maps",
    tag: "Eksplorasi Hobi"
  }
];

export const INITIAL_EDUCATION_DETAILS: EducationDetailItem[] = [
  {
    id: "edu-sd",
    school: "SDIT Al Uswah Surabaya",
    period: "2014 - 2020",
    description: "Saya menempuh pendidikan dasar di SDIT Al Uswah Surabaya, sebuah sekolah Islam yang berfokus pada pembentukan karakter, prestasi akademik, dan pendidikan Al-Qur'an.",
    highlights: [
      "Lulus dengan peringkat lima besar terbaik",
      "Menyelesaikan hafalan Al-Qur'an sebanyak tiga juz",
      "Memulai perjalanan sebagai kreator konten YouTube seputar game Minecraft dan Roblox",
      "Melakukan eksperimen pengelolaan server Minecraft terstruktur menggunakan Aternos",
      "Mempelajari dasar-dasar grafis digital menggunakan PixelLab dan Ibis Paint"
    ]
  },
  {
    id: "edu-smp",
    school: "SMPIT Al Uswah Surabaya",
    period: "2020 - 2023",
    description: "Selama menempuh pendidikan di SMPIT Al Uswah Surabaya, saya aktif dalam kegiatan organisasi kepemimpinan serta dipercaya mengemban amanah sebagai Sekretaris OSIS I.",
    highlights: [
      "Lulus sebagai peringkat pertama angkatan",
      "Menjabat Sekretaris OSIS I dan memimpin program Community Development kemasyarakatan",
      "Meraih penghargaan program COMDEV Terbaik untuk kegiatan donor donasi Al-Qur'an",
      "Eksplorasi server Minecraft lanjutan, bot Discord, dan bot fungsional WhatsApp",
      "Memasuki wirausaha kreatif digital (pembuatan animasi Mine-imator & pixel art Minecraft)"
    ]
  },
  {
    id: "edu-sma",
    school: "SMA Negeri 17 Surabaya",
    period: "2023 - 2026",
    description: "Memasuki SMA Negeri 17 Surabaya melalui jalur prestasi rapor, saya aktif dalam berbagai kegiatan organisasi penelitian ilmiah, teknologi, dan kepengurusan sekolah.",
    highlights: [
      "Meraih peringkat pertama di kelas serta peringkat enam paralel satu sekolah",
      "Menjabat sebagai Ketua Kelompok Ilmiah Remaja SMANTASS (KIRTASS)",
      "Dipercaya oleh guru mengembangkan media pembelajaran berbasis teknologi interaktif kelas XI dan XII",
      "Aktif berkontribusi di organisasi OSIS dan komunitas fotografi sekolah 7TEENITY"
    ]
  }
];

export const INITIAL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Puspresnas Bina Talenta Indonesia 2025",
    organizerOrType: "Koding & Kecerdasan Artifisial (Pusat Prestasi Nasional)",
    year: "2025",
    description: "Mengikuti program pelatihan Koding dan Kecerdasan Artifisial yang diselenggarakan oleh Pusat Prestasi Nasional (Puspresnas) selama beberapa bulan sebagai sarana pengembangan kemampuan di bidang teknologi dan AI.",
    certificateUrl: "https://drive.google.com/file/d/1OHwWALFMNDp1r2Ya9gZMVw1dSonfDKEA/view?usp=sharing"
  },
  {
    id: "ach-2",
    title: "Semi Finalist - Jagoan Hosting Infra Competition 2025",
    organizerOrType: "Infrastruktur & Rekayasa Website Sekolah",
    year: "2025",
    description: "Menjadi semifinalis dengan membawa rancangan website sekolah yang lebih interaktif, modern, dan informatif untuk meningkatkan kualitas penyampaian informasi kepada warga sekolah.",
    certificateUrl: "https://drive.google.com/file/d/1mHl-eR9y1I1IwD6z1v3jsV9I0IaeCVG6/view?usp=sharing"
  },
  {
    id: "ach-3",
    title: "Gold Medal - World Youth Invention and Innovation Award (WYIIA) 2023",
    organizerOrType: "Kategori Teknologi (Science Book Augmented Reality - SEBAR)",
    year: "2023",
    description: "Meraih medali emas pada kategori teknologi melalui penelitian berjudul: SEBAR (Science Book Augmented Reality). Penelitian ini bertujuan mendigitalisasikan materi tata surya pada buku pelajaran SMP sehingga objek planet dapat divisualisasikan dalam bentuk tiga dimensi menggunakan teknologi Augmented Reality (AR).",
    certificateUrl: "https://drive.google.com/drive/u/1/folders/1SrU7N7Z2KkORjEPObFWGiH7UV5zeVebw"
  },
  {
    id: "ach-4",
    title: "Workshop PANDI RTIK Sumbar 2025",
    organizerOrType: "Personal Branding, Website & Domain Indonesia (.id)",
    year: "2025",
    description: "Mengikuti pelatihan personal branding berbasis website dan domain Indonesia (.id). Dalam kegiatan ini, saya mempelajari pengembangan identitas digital serta memperoleh hadiah berupa domain dan hosting gratis selama satu tahun.",
    certificateUrl: "https://drive.google.com/file/d/1qXKONXQgljM-RZG9uO14fFx7-Ha7zt_z/view?usp=sharing"
  },
  {
    id: "ach-5",
    title: "HMTC Goes To School 2025 - Institut Teknologi Sepuluh Nopember",
    organizerOrType: "Game Development (HMTC & Laboratorium GIGA ITS)",
    year: "2025",
    description: "Mengikuti pelatihan pembuatan game sederhana yang diselenggarakan oleh Himpunan Mahasiswa Teknik Computer-Informatika (HMTC) dan Laboratorium GIGA ITS. Pada pelatihan ini saya mempelajari Construct serta mengembangkan permainan sederhana bergaya Flappy Bird. Saya juga mendapatkan pengalaman mengenal pengembangan game edukasi berbasis Virtual Reality (VR).",
    certificateUrl: "https://drive.google.com/file/d/1rpetlzQuwZwuWlvmNCsiEwUy6F9zWinW/view?usp=sharing"
  },
  {
    id: "ach-6",
    title: "Semi Finalist - National Innovation Project (NIPRO) ICHEVO 2025",
    organizerOrType: "Kompetisi Inovasi Nasional (Teknik Kimia Industri ITS)",
    year: "2025",
    description: "Menjadi semifinalis kompetisi inovasi nasional yang diselenggarakan oleh Departemen Teknik Kimia Industri Institut Teknologi Sepuluh Nopember. Bersama tim, saya mengembangkan penelitian mengenai pemanfaatan singkong sebagai bahan baku bioplastik yang ramah lingkungan.",
    certificateUrl: "https://drive.google.com/file/d/18UDCbst9rhwzmf90qjNaM79cJxDFcSVP/view?usp=sharing"
  }
];

