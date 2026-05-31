// ===== GIFARI BOOK STORE — MAIN.JS =====

// ===== DATA =====
const booksData = [
  {
    id: 1, category: "Novel",
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    price: "Rp 95.000",
    badge: "Bestseller",
    desc: "Kisah cinta Minke dan Annelies yang berlatar belakang masa kolonial Belanda di Indonesia, menyentuh nilai kemanusiaan dan perlawanan.",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=530&fit=crop"
  },
  {
    id: 2, category: "Teknologi",
    title: "Clean Code",
    author: "Robert C. Martin",
    price: "Rp 189.000",
    badge: "Populer",
    desc: "Panduan praktis menulis kode yang bersih, mudah dibaca, dan dapat dipelihara. Wajib bagi setiap developer profesional.",
    cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=530&fit=crop"
  },
  {
    id: 3, category: "Bisnis",
    title: "Zero to One",
    author: "Peter Thiel",
    price: "Rp 145.000",
    badge: "Rekomendasi",
    desc: "Peter Thiel berbagi wawasan tentang cara membangun startup yang benar-benar inovatif dan menciptakan sesuatu yang baru.",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=530&fit=crop"
  },
  {
    id: 4, category: "Pendidikan",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: "Rp 165.000",
    badge: "Terlaris",
    desc: "Sejarah singkat umat manusia dari manusia purba hingga era modern. Buku yang mengubah cara kita memahami peradaban.",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=530&fit=crop"
  },
  {
    id: 5, category: "Novel",
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    price: "Rp 89.000",
    badge: "Klasik",
    desc: "Kisah inspiratif anak-anak Belitung yang berjuang keras meraih pendidikan meski dalam keterbatasan. Mengharukan dan memotivasi.",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=530&fit=crop"
  },
  {
    id: 6, category: "Komik",
    title: "Garudayana",
    author: "Is Yuniarto",
    price: "Rp 75.000",
    badge: "Baru",
    desc: "Komik epik Indonesia yang mengadaptasi kisah Mahabharata dengan sentuhan modern dan visual yang memukau.",
    cover: "https://images.unsplash.com/photo-1612036781124-0b6a5b2e3b42?w=400&h=530&fit=crop"
  },
  {
    id: 7, category: "Teknologi",
    title: "Atomic Habits",
    author: "James Clear",
    price: "Rp 139.000",
    badge: "Trending",
    desc: "Metode terbukti untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk melalui perubahan kecil yang konsisten.",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=530&fit=crop"
  },
  {
    id: 8, category: "Bisnis",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    price: "Rp 119.000",
    badge: "Populer",
    desc: "Pelajaran tentang keuangan dan investasi yang mengubah pola pikir jutaan orang di seluruh dunia tentang uang dan kebebasan finansial.",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=530&fit=crop"
  }
];

const blogData = [
  {
    id: 1,
    category: "Rekomendasi",
    title: "10 Buku Terbaik yang Wajib Kamu Baca Tahun Ini",
    excerpt: "Dari novel hingga non-fiksi, kami kurasi daftar buku terbaik yang akan mengubah perspektifmu tentang dunia.",
    date: "15 Mei 2026",
    readTime: "5 menit",
    cover: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=340&fit=crop",
    content: `
      <p>Membaca adalah investasi terbaik yang bisa kamu lakukan untuk diri sendiri. Berikut adalah daftar 10 buku terbaik yang telah kami kurasi dengan cermat dari berbagai genre dan tema.</p>
      <h3>1. Buku Fiksi Terbaik</h3>
      <p>Novel-novel berikut tidak hanya menghibur tetapi juga memperluas wawasan dan empati kita. Dari kisah-kisah epik hingga cerita kontemporer yang menyentuh hati.</p>
      <h3>2. Buku Non-Fiksi Pilihan</h3>
      <p>Buku non-fiksi terpilih tahun ini mencakup biografi inspiratif, buku pengembangan diri, hingga eksplorasi ilmu pengetahuan yang mengagumkan.</p>
      <h3>Kenapa Penting Membaca Buku Berkualitas?</h3>
      <p>Buku berkualitas tidak hanya memberikan pengetahuan, tetapi juga melatih kemampuan berpikir kritis, memperluas kosakata, dan meningkatkan kemampuan konsentrasi.</p>
      <ul>
        <li>Meningkatkan kecerdasan emosional</li>
        <li>Memperluas perspektif dunia</li>
        <li>Mengurangi stres hingga 68%</li>
        <li>Membantu mencegah penurunan kognitif</li>
      </ul>
      <p>Segera kunjungi toko kami dan temukan koleksi lengkap buku-buku pilihan yang siap menemani hari-harimu!</p>
    `
  },
  {
    id: 2,
    category: "Tips Membaca",
    title: "7 Tips Jitu Meningkatkan Minat Baca Anak dan Remaja",
    excerpt: "Membangun kebiasaan membaca sejak dini adalah investasi terbaik untuk masa depan. Simak tips praktis dari para ahli.",
    date: "10 Mei 2026",
    readTime: "6 menit",
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=340&fit=crop",
    content: `
      <p>Minat baca yang rendah adalah tantangan yang banyak dihadapi orang tua dan pendidik. Namun, dengan pendekatan yang tepat, membaca bisa menjadi aktivitas yang menyenangkan dan dinantikan.</p>
      <h3>Tip #1: Mulai dari Buku yang Disukai</h3>
      <p>Jangan paksa anak membaca buku "berat". Biarkan mereka memilih genre yang mereka sukai, baik itu komik, fantasi, atau buku petualangan.</p>
      <h3>Tip #2: Ciptakan Suasana Membaca yang Nyaman</h3>
      <p>Sediakan sudut baca yang nyaman dengan pencahayaan yang baik, bantal yang empuk, dan suasana tenang. Lingkungan yang mendukung sangat mempengaruhi kebiasaan membaca.</p>
      <h3>Tip #3: Jadikan Membaca Rutinitas Harian</h3>
      <p>Tentukan waktu khusus untuk membaca setiap hari, misalnya 30 menit sebelum tidur. Konsistensi adalah kunci membangun kebiasaan.</p>
      <ul>
        <li>Bacakan cerita sebelum tidur untuk anak kecil</li>
        <li>Kunjungi toko buku atau perpustakaan secara rutin</li>
        <li>Jadilah contoh—biarkan anak melihat kamu membaca</li>
        <li>Diskusikan buku yang sedang dibaca bersama keluarga</li>
      </ul>
      <p>Ingat, tidak ada kata terlambat untuk memulai. Setiap langkah kecil menuju kebiasaan membaca adalah pencapaian yang patut diapresiasi.</p>
    `
  },
  {
    id: 3,
    category: "Review Buku",
    title: "Review: 'Bumi Manusia' — Karya Agung Pramoedya",
    excerpt: "Novel masterpiece yang menggambarkan perjuangan, cinta, dan kebangkitan nasionalisme Indonesia di era kolonial.",
    date: "5 Mei 2026",
    readTime: "8 menit",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=340&fit=crop",
    content: `
      <p>Bumi Manusia adalah mahakarya sastra Indonesia yang ditulis Pramoedya Ananta Toer saat dipenjara di Pulau Buru. Buku ini telah diterjemahkan ke lebih dari 30 bahasa dan menjadi bacaan wajib di berbagai universitas dunia.</p>
      <h3>Sinopsis</h3>
      <p>Minke, seorang pribumi terpelajar, jatuh cinta pada Annelies Mellema, gadis blasteran Indo-Belanda. Kisah cinta mereka menjadi metafora perlawanan terhadap sistem kolonial yang membelenggu.</p>
      <h3>Kelebihan Buku Ini</h3>
      <ul>
        <li>Penggambaran sejarah yang akurat dan mendalam</li>
        <li>Karakter yang kompleks dan multidimensional</li>
        <li>Bahasa yang puitis namun tetap mudah dipahami</li>
        <li>Kritik sosial yang tajam namun elegan</li>
      </ul>
      <h3>Nilai & Pesan</h3>
      <p>Bumi Manusia mengajarkan bahwa kemanusiaan adalah nilai universal yang melampaui batas ras, agama, dan status sosial. Buku ini adalah pengingat betapa pentingnya pendidikan sebagai alat pembebasan.</p>
      <p>Rating: ⭐⭐⭐⭐⭐ (5/5) — Wajib dibaca oleh setiap orang Indonesia yang mencintai sastra dan sejarah bangsanya.</p>
    `
  },
  {
    id: 4,
    category: "Teknologi",
    title: "Buku Teknologi & AI Terbaik yang Trending 2026",
    excerpt: "Era kecerdasan buatan telah tiba. Pelajari konsep AI, machine learning, dan masa depan teknologi melalui buku-buku pilihan ini.",
    date: "1 Mei 2026",
    readTime: "7 menit",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop",
    content: `
      <p>Di tengah revolusi kecerdasan buatan yang mengubah semua aspek kehidupan, memahami teknologi AI bukan lagi pilihan—melainkan kebutuhan. Berikut buku-buku teknologi terbaik tahun 2026.</p>
      <h3>Kategori AI & Machine Learning</h3>
      <p>Buku-buku ini membahas konsep dasar hingga advanced dalam kecerdasan buatan, cocok untuk pemula maupun profesional yang ingin memperdalam pemahaman mereka.</p>
      <h3>Kategori Pemrograman Modern</h3>
      <p>Dari Clean Code hingga Design Patterns, buku pemrograman terbaik membantu developer menulis kode yang lebih efisien, bersih, dan mudah dipelihara.</p>
      <ul>
        <li>"AI Superpowers" — Kai-Fu Lee</li>
        <li>"The Alignment Problem" — Brian Christian</li>
        <li>"Designing Machine Learning Systems" — Chip Huyen</li>
        <li>"Software Engineering at Google" — Titus Winters</li>
      </ul>
      <h3>Tips Membaca Buku Teknis</h3>
      <p>Buku teknis membutuhkan pendekatan berbeda dari novel. Baca secara aktif: buat catatan, praktikkan contoh kode, dan diskusikan dengan komunitas untuk pemahaman yang lebih dalam.</p>
    `
  },
  {
    id: 5,
    category: "Motivasi",
    title: "Manfaat Luar Biasa Membaca 30 Menit Setiap Hari",
    excerpt: "Penelitian ilmiah membuktikan membaca rutin memberikan manfaat kognitif, emosional, dan kesehatan yang mengejutkan.",
    date: "25 April 2026",
    readTime: "4 menit",
    cover: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&h=340&fit=crop",
    content: `
      <p>Hanya dengan meluangkan 30 menit sehari untuk membaca, kamu bisa merasakan perubahan signifikan dalam kualitas hidup. Berbagai penelitian ilmiah telah membuktikan manfaat luar biasa dari kebiasaan sederhana ini.</p>
      <h3>Manfaat Kognitif</h3>
      <p>Membaca secara rutin terbukti meningkatkan konektivitas neural di otak, khususnya di area yang bertanggung jawab untuk bahasa dan pemahaman. Ini setara dengan "olahraga" untuk otak kita.</p>
      <h3>Manfaat Emosional & Mental</h3>
      <ul>
        <li>Mengurangi stres hingga 68% (University of Sussex)</li>
        <li>Meningkatkan empati dan kecerdasan emosional</li>
        <li>Membantu mengatasi insomnia jika membaca sebelum tidur</li>
        <li>Mencegah depresi dan kecemasan</li>
      </ul>
      <h3>Manfaat Jangka Panjang</h3>
      <p>Penelitian menunjukkan bahwa pembaca aktif memiliki risiko 32% lebih rendah mengalami penurunan kognitif seiring bertambahnya usia. Membaca adalah investasi kesehatan otak jangka panjang.</p>
      <p>Mulailah hari ini. Pilih satu buku yang menarik minatmu, sediakan 30 menit setiap hari, dan rasakan transformasinya dalam 30 hari pertama!</p>
    `
  }
];

const faqData = [
  {
    q: "Bagaimana cara memesan buku di Gifari Book Store?",
    a: "Anda dapat memesan buku melalui website kami, menghubungi WhatsApp di +62 812-3456-7890, atau datang langsung ke toko kami di Tebo, Jambi. Untuk pemesanan online, cukup pilih buku yang diinginkan, isi formulir pemesanan, dan kami akan segera memproses pesanan Anda."
  },
  {
    q: "Berapa lama waktu pengiriman buku?",
    a: "Untuk wilayah Jambi dan sekitarnya, pengiriman membutuhkan 1-2 hari kerja. Untuk wilayah Sumatra, 2-4 hari kerja. Untuk Jawa dan Bali, 3-5 hari kerja. Wilayah Indonesia Timur 5-7 hari kerja. Kami bekerja sama dengan JNE, J&T, dan SiCepat untuk menjamin keamanan paket."
  },
  {
    q: "Apakah buku yang dijual adalah buku original?",
    a: "Absolutely! Kami hanya menjual buku-buku original berlisensi resmi dari penerbit terpercaya. Setiap buku dilengkapi dengan hologram keaslian dan faktur pembelian. Kami berkomitmen untuk mendukung para penulis dan industri penerbitan Indonesia."
  },
  {
    q: "Apakah ada diskon atau promo untuk pembelian buku?",
    a: "Ya! Kami secara rutin mengadakan promo menarik. Diskon 10% untuk pembelian pertama, diskon 15% untuk pembelian di atas Rp 500.000, gratis ongkir untuk pembelian di atas Rp 300.000 (khusus Jambi), dan program loyalty member yang memberikan poin reward untuk setiap pembelian."
  },
  {
    q: "Bagaimana kebijakan pengembalian buku?",
    a: "Kami menerima pengembalian buku dalam 7 hari setelah penerimaan jika terdapat kerusakan fisik pada buku (sobek, halaman kosong, cetakan buram) yang bukan disebabkan oleh pembeli. Pengembalian harus disertai foto kondisi buku dan faktur pembelian. Proses refund atau penukaran dilakukan dalam 3-5 hari kerja."
  },
  {
    q: "Apakah tersedia layanan pre-order buku?",
    a: "Tentu! Kami menerima pre-order untuk buku-buku yang belum tersedia atau sedang dalam proses cetak. Hubungi kami melalui WhatsApp atau email untuk informasi lebih lanjut tentang jadwal rilis buku yang Anda inginkan. Pre-order akan mendapatkan harga spesial dan prioritas pengiriman."
  }
];

// ===== UTILITY =====
function formatDate(d) { return d; }

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });

  // Set active nav link
  function setActive(page) {
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });
  }

  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      navigateTo(page);
    });
  });
}

// ===== ROUTER =====
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
  const target = document.getElementById('page-' + page);
  if (target) {
    target.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  // Re-init reveals
  setTimeout(initReveal, 100);
  // Page-specific inits
  if (page === 'books') initBooks();
  if (page === 'faq')   initFAQ();
  if (page === 'blog')  initBlog();
}

// ===== HERO BOOKSHELF =====
function initHeroBookshelf() {
  const colors = [
    '#8B4513','#D2691E','#CD853F','#A0522D','#6B4423',
    '#2E4057','#436E4F','#7B3F00','#5C4033','#8B6914',
    '#1A3A4A','#4A1942','#2D4739','#3D2B1F','#5B4A3F',
    '#C9972B','#E8B84B','#A67C52','#8B7355','#6E5A4E',
    '#2C3E50','#34495E','#7F8C8D','#95A5A6','#BDC3C7'
  ];
  const shelf = document.getElementById('heroBookshelf');
  if (!shelf) return;
  const count = 24;
  for (let i = 0; i < count; i++) {
    const spine = document.createElement('div');
    spine.className = 'book-spine';
    const h = 55 + Math.random() * 45;
    spine.style.cssText = `background:${colors[i % colors.length]};height:${h}%;align-self:flex-end;`;
    shelf.appendChild(spine);
  }
}

// ===== BOOKS PAGE =====
function initBooks() {
  const grid = document.getElementById('booksGrid');
  const searchInput = document.getElementById('bookSearch');
  const catFilter = document.getElementById('catFilter');
  if (!grid) return;

  function renderBooks(filtered) {
    grid.innerHTML = filtered.length === 0
      ? `<div class="no-results"><div class="icon">📚</div><h3>Buku tidak ditemukan</h3><p>Coba kata kunci atau kategori lain.</p></div>`
      : filtered.map(b => `
        <div class="book-card reveal">
          <div class="book-cover">
            <img src="${b.cover}" alt="${b.title}" class="book-cover-img" loading="lazy">
            <span class="book-badge">${b.badge}</span>
          </div>
          <div class="book-info">
            <div class="book-category">${b.category}</div>
            <div class="book-title">${b.title}</div>
            <div class="book-author">✍️ ${b.author}</div>
            <div class="book-desc">${b.desc}</div>
            <div class="book-footer">
              <span class="book-price">${b.price}</span>
              <button class="book-btn" onclick="showToast('📚 ${b.title} ditambahkan ke keranjang!')">Beli</button>
            </div>
          </div>
        </div>`).join('');
    initReveal();
  }

  function filterBooks() {
    const q   = searchInput.value.toLowerCase().trim();
    const cat = catFilter.value;
    renderBooks(booksData.filter(b =>
      (cat === '' || b.category === cat) &&
      (q === '' || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.category.toLowerCase().includes(q))
    ));
  }

  searchInput.addEventListener('input', filterBooks);
  catFilter.addEventListener('change', filterBooks);
  renderBooks(booksData);
}

// ===== BLOG PAGE =====
function initBlog() {
  const listEl   = document.getElementById('blogList');
  const detailEl = document.getElementById('articleDetail');
  if (!listEl) return;

  listEl.innerHTML = blogData.map(b => `
    <div class="blog-card reveal" onclick="showArticle(${b.id})">
      <div class="blog-cover">
        <img src="${b.cover}" alt="${b.title}" class="blog-cover-img" loading="lazy">
        <span class="blog-category">${b.category}</span>
      </div>
      <div class="blog-body">
        <div class="blog-meta"><span>📅 ${b.date}</span><span>⏱ ${b.readTime}</span></div>
        <div class="blog-title">${b.title}</div>
        <p class="blog-excerpt">${b.excerpt}</p>
        <span class="blog-read-more">Baca Selengkapnya →</span>
      </div>
    </div>`).join('');
  initReveal();
}

window.showArticle = function(id) {
  const art = blogData.find(b => b.id === id);
  if (!art) return;
  const listEl   = document.getElementById('blogList');
  const headerEl = document.getElementById('blogPageHeader');
  const detailEl = document.getElementById('articleDetail');
  listEl.style.display   = 'none';
  headerEl.style.display = 'none';
  detailEl.classList.add('active');
  detailEl.innerHTML = `
    <div class="container section">
      <button class="btn btn-outline article-back" onclick="hideBlogDetail()">← Kembali ke Blog</button>
      <div class="article-content">
        <div class="article-header">
          <div class="section-label">${art.category}</div>
          <h1>${art.title}</h1>
          <div class="article-meta">
            <span>📅 ${art.date}</span>
            <span>⏱ ${art.readTime} baca</span>
            <span>✍️ Gifari Qutbi</span>
          </div>
          <img src="${art.cover}" alt="${art.title}" style="width:100%;border-radius:14px;margin-bottom:32px;">
        </div>
        <div class="article-body">${art.content}</div>
      </div>
    </div>`;
};

window.hideBlogDetail = function() {
  document.getElementById('blogList').style.display = 'grid';
  document.getElementById('blogPageHeader').style.display = 'block';
  document.getElementById('articleDetail').classList.remove('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ===== FAQ =====
function initFAQ() {
  const list = document.getElementById('faqList');
  if (!list || list.dataset.initialized) return;
  list.dataset.initialized = '1';
  list.innerHTML = faqData.map((f, i) => `
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFAQ(this)">
        <span>${f.q}</span>
        <span class="faq-arrow">▼</span>
      </button>
      <div class="faq-answer"><p>${f.a}</p></div>
    </div>`).join('');
}

window.toggleFAQ = function(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
};

// ===== CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    // Validate each required field
    ['contactName','contactEmail','contactSubject','contactMessage'].forEach(id => {
      const el = document.getElementById(id);
      const group = el.closest('.form-group');
      group.classList.remove('error');
      if (!el.value.trim()) {
        group.classList.add('error');
        valid = false;
      }
    });

    // Email format check
    const emailEl = document.getElementById('contactEmail');
    if (emailEl.value && !/\S+@\S+\.\S+/.test(emailEl.value)) {
      emailEl.closest('.form-group').classList.add('error');
      valid = false;
    }

    if (valid) {
      document.getElementById('formSuccess').style.display = 'block';
      form.reset();
      showToast('✉️ Pesan berhasil dikirim!');
      setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
      }, 5000);
    }
  });
}

// ===== TOAST =====
window.showToast = function(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
};

// ===== SCROLL REVEAL =====
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ===== BACK TO TOP =====
function initBackToTop() {
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== HERO SCROLL CTA =====
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  else navigateTo('books');
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroBookshelf();
  initBackToTop();
  initContactForm();
  initReveal();
  // Default page
  navigateTo('home');
});
