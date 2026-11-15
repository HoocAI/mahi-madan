import { useState, useEffect } from 'react';

interface Venture {
  id: string;
  name: string;
  monogram: string;
  category: string;
  description: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  image: string;
  ctaText: string;
  isAvailable: boolean;
  arrowIcon: string;
  heroHeight: number; // in px for hero preview
  cardHeightDesktop: number; // in px for desktop grid
}

const ventures: Venture[] = [
  {
    id: 'velvet-veils',
    name: 'The Velvet Veils',
    monogram: 'VV',
    category: 'Beauty / Skincare',
    description: 'Skincare and beauty rituals shaped around gentle formulas, soft textures and everyday self-care.',
    bgColor: '#4b3038',
    textColor: '#f2eee6',
    accentColor: '#f2eee6',
    image: '/assets/velvet-veils.png',
    ctaText: 'Visit Website',
    isAvailable: true,
    arrowIcon: '/assets/arrow-up-right-light.svg',
    heroHeight: 150,
    cardHeightDesktop: 600,
  },
  {
    id: 'ayurvedic-magic',
    name: 'Ayurvedic Magic',
    monogram: 'AM',
    category: 'Ayurveda / Wellness',
    description: 'Ayurveda-inspired wellness that brings time-honoured herbs and natural care into modern routines.',
    bgColor: '#3e4a3c',
    textColor: '#f2eee6',
    accentColor: '#f2eee6',
    image: '/assets/ayurvedic-magic.png',
    ctaText: 'Visit Website',
    isAvailable: true,
    arrowIcon: '/assets/arrow-up-right-light.svg',
    heroHeight: 210,
    cardHeightDesktop: 480,
  },
  {
    id: 'mahi-records',
    name: 'Mahi Records',
    monogram: 'MR',
    category: 'Music / Entertainment',
    description: 'A music label and creative space for artists, original releases and a sound of its own.',
    bgColor: '#0d0d0c',
    textColor: '#f2eee6',
    accentColor: '#a08052',
    image: '/assets/mahi-records.png',
    ctaText: 'Visit Website',
    isAvailable: true,
    arrowIcon: '/assets/arrow-up-right-light.svg',
    heroHeight: 140,
    cardHeightDesktop: 540,
  },
  {
    id: 'bebo-studio',
    name: 'The Bebo Studio',
    monogram: 'BS',
    category: 'Fashion / Lifestyle',
    description: 'A fashion and lifestyle studio built around considered design, fine fabrics and everyday style.',
    bgColor: '#c2b299',
    textColor: '#141312',
    accentColor: '#141312',
    image: '/assets/bebo-studio.png',
    ctaText: 'Visit Website',
    isAvailable: true,
    arrowIcon: '/assets/arrow-up-right-dark.svg',
    heroHeight: 170,
    cardHeightDesktop: 500,
  },
  {
    id: 'king-international',
    name: 'King International',
    monogram: 'KI',
    category: 'Venture',
    description: 'A venture within the Mahi Madaan portfolio. Full details and the website will be shared soon.',
    bgColor: '#2b2a28',
    textColor: '#f2eee6',
    accentColor: '#f2eee6',
    image: '/assets/king-international.png',
    ctaText: 'Website coming soon',
    isAvailable: false,
    arrowIcon: '/assets/arrow-up-right-light.svg',
    heroHeight: 140,
    cardHeightDesktop: 440,
  },
  {
    id: 'vaanipath',
    name: 'Vaanipath',
    monogram: 'VP',
    category: 'Venture',
    description: 'A venture with its own voice and direction, part of the Mahi Madaan portfolio.',
    bgColor: '#2e3a45',
    textColor: '#f2eee6',
    accentColor: '#f2eee6',
    image: '/assets/vaanipath.png',
    ctaText: 'Visit Website',
    isAvailable: true,
    arrowIcon: '/assets/arrow-up-right-light.svg',
    heroHeight: 220,
    cardHeightDesktop: 560,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'businesses' | 'contact'>('home');
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutElem = document.getElementById('about');
      const businessesElem = document.getElementById('businesses');
      const contactElem = document.getElementById('contact');

      if (contactElem && scrollY >= contactElem.offsetTop - 300) {
        setActiveSection('contact');
      } else if (businessesElem && scrollY >= businessesElem.offsetTop - 300) {
        setActiveSection('businesses');
      } else if (aboutElem && scrollY >= aboutElem.offsetTop - 300) {
        setActiveSection('about');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    const email = 'contact@mahimadaan.com';
    navigator.clipboard?.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2500);
  };

  return (
    <div className="bg-[#f2eee6] min-h-screen text-[#141312] selection:bg-[#a08052] selection:text-[#f2eee6] relative">
      {/* ================= HEADER ================= */}
      <header
        className="sticky top-0 z-40 bg-[#f2eee6]/95 backdrop-blur-md border-b border-[#d9d3c7] transition-all duration-300"
        data-node-id="18:21"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 h-[68px] md:h-[92px] flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={scrollToTop}
            className="text-left font-serif font-medium text-[26px] md:text-[30px] text-[#141312] tracking-[-0.3px] hover:text-[#a08052] transition-colors"
            data-node-id="18:22"
          >
            Mahi Madaan
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12" data-node-id="18:23">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'businesses', label: 'Businesses' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => (item.id === 'home' ? scrollToTop() : scrollToSection(item.id))}
                className="group flex flex-col items-start gap-[6px] text-[14px] text-[#141312] transition-colors cursor-pointer"
              >
                <span className="group-hover:text-[#a08052] transition-colors">{item.label}</span>
                <span
                  className={`h-[1.5px] w-full bg-[#a08052] transition-all duration-300 ${activeSection === item.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                />
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('businesses')}
              className="bg-[#141312] text-[#f2eee6] text-[13px] font-medium px-6 py-[15px] hover:bg-[#a08052] focus:ring-2 focus:ring-[#a08052] focus:ring-offset-2 active:opacity-80 transition-all cursor-pointer"
              data-node-id="18:36"
            >
              Explore Businesses
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-[#141312] hover:text-[#a08052] transition-colors"
            aria-label="Open navigation menu"
            data-node-id="20:95"
          >
            <img src="/assets/icon-menu.svg" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU OVERLAY ================= */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#f2eee6] flex flex-col justify-between animate-fadeIn"
          data-node-id="20:297"
        >
          {/* Mobile Header */}
          <div className="px-5 h-[68px] flex items-center justify-between border-b border-[#d9d3c7]">
            <span className="font-serif font-medium text-[26px] text-[#141312] tracking-[-0.26px]">
              Mahi Madaan
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#141312] hover:text-[#a08052] transition-colors"
              aria-label="Close navigation menu"
              data-node-id="20:300"
            >
              <img src="/assets/icon-close.svg" alt="Close" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="px-6 py-8 flex flex-col gap-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'businesses', label: 'Businesses' },
              { id: 'contact', label: 'Contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => (item.id === 'home' ? scrollToTop() : scrollToSection(item.id))}
                className="text-left font-serif text-[42px] font-light text-[#141312] hover:text-[#a08052] transition-colors border-b border-[#d9d3c7]/60 pb-3"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-[#d9d3c7] flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('businesses')}
              className="w-full bg-[#141312] text-[#f2eee6] py-4 text-[14px] font-medium text-center hover:bg-[#a08052] transition-colors"
            >
              Explore Businesses
            </button>
            <p className="text-[13px] text-[#77736b] text-center">
              © 2026 Mahi Madaan
            </p>
          </div>
        </div>
      )}

      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#f2eee6] pt-6 md:pt-10 pb-16 md:pb-24 border-b border-[#d9d3c7]"
        data-node-id="23:178"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16">
          {/* Main Giant Display Title */}
          <div className="relative select-none pointer-events-none mb-6 md:mb-10">
            <h1
              className="font-serif font-light text-[#141312] text-[80px] sm:text-[130px] md:text-[200px] lg:text-[252px] leading-[0.88] tracking-[-3px] md:tracking-[-7.86px] transition-all"
              data-node-id="23:179"
            >
              <span>Mahi </span>
              <span className="italic">Madaan</span>
            </h1>
          </div>

          {/* Subheader Grid: Tagline (Left) & Intro with CTAs (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
            {/* Tagline */}
            <div className="lg:col-span-6" data-node-id="23:180">
              <h2 className="font-serif font-normal text-[32px] sm:text-[38px] md:text-[40px] text-[#141312] leading-[1.08] tracking-[-0.2px]">
                Building Businesses.<br />
                Creating Impact.
              </h2>
            </div>

            {/* Intro text & CTAs */}
            <div className="lg:col-span-6 lg:pl-12 flex flex-col gap-6" data-node-id="23:181">
              <p
                className="text-[#77736b] text-[15px] md:text-[16px] leading-[1.6] max-w-[440px]"
                data-node-id="18:49"
              >
                An entrepreneur and business professional associated with diverse ventures across multiple industries.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2" data-node-id="18:50">
                <button
                  onClick={() => scrollToSection('businesses')}
                  className="bg-[#141312] text-[#f2eee6] px-[26px] py-[17px] text-[14px] font-medium hover:bg-[#a08052] focus:ring-2 focus:ring-[#a08052] focus:ring-offset-2 active:opacity-85 transition-all shadow-sm cursor-pointer"
                  data-node-id="18:51"
                >
                  Explore Businesses
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-b border-[#141312] pb-[6px] text-[#141312] text-[14px] font-medium hover:text-[#a08052] hover:border-[#a08052] transition-colors cursor-pointer"
                  data-node-id="18:55"
                >
                  About Mahi
                </button>
              </div>
            </div>
          </div>

          {/* Hero Ventures Row & Staggered Arch */}
          <div className="relative pt-6 overflow-x-auto pb-4 scrollbar-none" data-node-id="23:182">
            <div className="min-w-[900px] lg:min-w-0 flex items-end justify-between gap-3 lg:gap-4 h-[350px]">
              {/* 1. The Velvet Veils */}
              <div
                className="w-[140px] lg:w-[154px] h-[150px] bg-[#4b3038] text-[#f2eee6] p-[18px] flex flex-col justify-between shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1"
                data-node-id="23:183"
              >
                <span className="font-serif font-light text-[52px] lg:text-[56px] leading-none tracking-[-0.56px]">
                  VV
                </span>
                <span className="text-[13px] leading-[1.4] font-normal">
                  The Velvet Veils
                </span>
              </div>

              {/* 2. Ayurvedic Magic */}
              <div
                className="w-[140px] lg:w-[154px] h-[210px] bg-[#3e4a3c] text-[#f2eee6] p-[18px] flex flex-col justify-between shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1"
                data-node-id="23:186"
              >
                <span className="font-serif font-light text-[52px] lg:text-[56px] leading-none tracking-[-0.56px]">
                  AM
                </span>
                <span className="text-[13px] leading-[1.4] font-normal">
                  Ayurvedic Magic
                </span>
              </div>

              {/* 3. Mahi Records */}
              <div
                className="w-[140px] lg:w-[154px] h-[140px] bg-[#0d0d0c] text-[#a08052] p-[18px] flex flex-col justify-between shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1"
                data-node-id="23:189"
              >
                <span className="font-serif font-light text-[52px] lg:text-[56px] leading-none tracking-[-0.56px]">
                  MR
                </span>
                <span className="text-[13px] leading-[1.4] font-normal text-[#f2eee6]">
                  Mahi Records
                </span>
              </div>

              {/* Centerpiece: Portrait Arch */}
              <div
                className="w-[260px] lg:w-[300px] h-[340px] bg-[#dcd3c3] rounded-t-[130px] lg:rounded-t-[150px] overflow-hidden relative shadow-lg shrink-0 flex flex-col justify-end p-6 group"
                data-node-id="23:192"
              >
                <div
                  className="absolute inset-[14px] border border-[#a08052] rounded-t-[116px] lg:rounded-t-[136px] pointer-events-none"
                  data-node-id="23:193"
                />
                <div className="relative z-10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#a08052] animate-pulse" />
                  <span className="text-[13px] text-[#77736b] font-normal">
                    Portrait placeholder
                  </span>
                </div>
              </div>

              {/* 4. The Bebo Studio */}
              <div
                className="w-[140px] lg:w-[154px] h-[170px] bg-[#c2b299] text-[#141312] p-[18px] flex flex-col justify-between shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1"
                data-node-id="23:195"
              >
                <span className="font-serif font-light text-[52px] lg:text-[56px] leading-none tracking-[-0.56px]">
                  BS
                </span>
                <span className="text-[13px] leading-[1.4] font-normal">
                  The Bebo Studio
                </span>
              </div>

              {/* 5. King International */}
              <div
                className="w-[140px] lg:w-[154px] h-[140px] bg-[#2b2a28] text-[#f2eee6] p-[18px] flex flex-col justify-between shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1"
                data-node-id="23:198"
              >
                <span className="font-serif font-light text-[52px] lg:text-[56px] leading-none tracking-[-0.56px]">
                  KI
                </span>
                <span className="text-[13px] leading-[1.4] font-normal">
                  King International
                </span>
              </div>

              {/* 6. Vaanipath */}
              <div
                className="w-[140px] lg:w-[154px] h-[220px] bg-[#2e3a45] text-[#f2eee6] p-[18px] flex flex-col justify-between shadow-md shrink-0 transition-transform duration-300 hover:-translate-y-1"
                data-node-id="23:201"
              >
                <span className="font-serif font-light text-[52px] lg:text-[56px] leading-none tracking-[-0.56px]">
                  VP
                </span>
                <span className="text-[13px] leading-[1.4] font-normal">
                  Vaanipath
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section
        id="about"
        className="bg-[#f2eee6] py-16 md:py-28 border-b border-[#d9d3c7]"
        data-node-id="18:69"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 flex flex-col gap-12 md:gap-16">
          {/* Section Header */}
          <div className="border-b border-[#d9d3c7] pb-[22px]" data-node-id="29:184">
            <h2 className="font-serif text-[28px] md:text-[30px] font-normal text-[#141312] tracking-[-0.15px]">
              About Mahi Madaan
            </h2>
          </div>

          {/* Statement Headline */}
          <div data-node-id="29:186">
            <p className="font-serif font-light text-[38px] sm:text-[54px] md:text-[68px] lg:text-[78px] text-[#141312] leading-[1.08] lg:leading-[1.06] tracking-[-0.8px] md:tracking-[-1.17px] max-w-[1200px]">
              An entrepreneur and business professional associated with{' '}
              <span className="italic">diverse ventures</span> across multiple industries.
            </p>
          </div>

          {/* Details Row: Arch Portrait + Biography + Link */}
          <div
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-12 pt-4"
            data-node-id="29:187"
          >
            {/* Portrait Arch */}
            <div
              className="w-[220px] sm:w-[260px] h-[300px] sm:h-[340px] bg-[#dcd3c3] rounded-t-[110px] sm:rounded-t-[130px] relative overflow-hidden shadow-md shrink-0 flex flex-col justify-end p-6"
              data-node-id="29:188"
            >
              <div
                className="absolute inset-[14px] border border-[#a08052] rounded-t-[96px] sm:rounded-t-[116px] pointer-events-none"
                data-node-id="29:189"
              />
              <span className="relative z-10 text-[13px] text-[#77736b] font-normal">
                Portrait placeholder
              </span>
            </div>

            {/* Biography Paragraphs */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#77736b] text-[15px] leading-[1.65] max-w-[660px]"
              data-node-id="29:191"
            >
              <p data-node-id="29:192">
                Mahi Madaan builds and leads ventures across beauty, wellness, music and fashion. His approach is simple: start with a clear idea, give every business its own identity, and build it with care.
              </p>
              <p data-node-id="29:193">
                Each venture has its own character and audience, yet all of them share the same commitment to quality, thoughtful design and the people they serve.
              </p>
            </div>

            {/* Link */}
            <div className="shrink-0 pt-2 lg:pt-0" data-node-id="29:194">
              <button
                onClick={() => scrollToSection('businesses')}
                className="border-b border-[#141312] pb-[6px] text-[#141312] text-[14px] font-medium hover:text-[#a08052] hover:border-[#a08052] transition-colors cursor-pointer"
              >
                Explore His Businesses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BUSINESSES SECTION (DARK) ================= */}
      <section
        id="businesses"
        className="bg-[#141312] text-[#f2eee6] py-20 md:py-32"
        data-node-id="19:19"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 flex flex-col gap-16 md:gap-20">
          {/* Header */}
          <div
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#34322e]"
            data-node-id="19:20"
          >
            <div>
              <h2
                className="font-serif font-light text-[48px] sm:text-[68px] md:text-[84px] lg:text-[92px] leading-[0.96] tracking-[-1.38px] text-[#f2eee6]"
                data-node-id="19:25"
              >
                Businesses &amp; Ventures
              </h2>
            </div>
            <p
              className="text-[#a39e94] text-[15px] md:text-[16px] leading-[1.6] max-w-[340px]"
              data-node-id="19:26"
            >
              Explore the businesses and ventures that form part of Mahi Madaan’s portfolio.
            </p>
          </div>

          {/* 3-Column Asymmetric Staggered Grid (Desktop) / Vertical Stack (Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start" data-node-id="29:217">
            {/* Column 1 */}
            <div className="flex flex-col gap-8">
              {/* The Velvet Veils */}
              <VentureCard venture={ventures[0]} heightClass="lg:h-[600px]" />
              {/* King International */}
              <VentureCard venture={ventures[4]} heightClass="lg:h-[440px]" />
            </div>

            {/* Column 2 (Offset by pt-0 lg:pt-24) */}
            <div className="flex flex-col gap-8 lg:pt-24">
              {/* Ayurvedic Magic */}
              <VentureCard venture={ventures[1]} heightClass="lg:h-[480px]" />
              {/* Vaanipath */}
              <VentureCard venture={ventures[5]} heightClass="lg:h-[560px]" />
            </div>

            {/* Column 3 (Offset by pt-0 lg:pt-10) */}
            <div className="flex flex-col gap-8 lg:pt-10">
              {/* Mahi Records */}
              <VentureCard venture={ventures[2]} heightClass="lg:h-[540px]" />
              {/* The Bebo Studio */}
              <VentureCard venture={ventures[3]} heightClass="lg:h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section
        id="contact"
        className="bg-[#f2eee6] py-20 md:py-32 border-b border-[#d9d3c7]"
        data-node-id="19:126"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16">
          {/* Title */}
          <div data-node-id="19:127">
            <h2
              className="font-serif font-light text-[84px] sm:text-[120px] md:text-[150px] lg:text-[176px] leading-[0.88] tracking-[-2px] md:tracking-[-3.52px] text-[#141312]"
              data-node-id="19:131"
            >
              <span>Let’s </span>
              <br className="hidden sm:inline" />
              <span className="italic">Connect.</span>
            </h2>
          </div>

          {/* Details & Interactive Form */}
          <div className="w-full lg:w-[420px] flex flex-col gap-8" data-node-id="19:132">
            <p className="text-[#77736b] text-[15px] md:text-[16px] leading-[1.6]" data-node-id="19:133">
              Interested in a collaboration, a partnership, or simply to know more about the businesses? Get in touch directly.
            </p>

            {/* Email field */}
            <div className="flex flex-col gap-3" data-node-id="19:134">
              <span className="text-[13px] font-medium text-[#77736b]" data-node-id="19:135">
                Email
              </span>
              <div
                onClick={handleCopyEmail}
                className="group border-b border-[#a08052] pb-2 flex items-center justify-between cursor-pointer"
                title="Click to copy email address"
                data-node-id="19:136"
              >
                <span
                  className="font-serif text-[28px] sm:text-[36px] text-[#141312] tracking-[-0.2px] group-hover:text-[#a08052] transition-colors"
                  data-node-id="19:137"
                >
                  contact@mahimadaan.com
                </span>
                <span className="text-[12px] font-medium text-[#a08052] opacity-0 group-hover:opacity-100 transition-opacity">
                  {emailCopied ? 'Copied!' : 'Copy'}
                </span>
              </div>
            </div>

            {/* Get in Touch CTA */}
            <div>
              <a
                href="mailto:contact@mahimadaan.com"
                className="inline-block bg-[#141312] text-[#f2eee6] px-[26px] py-[17px] text-[14px] font-medium hover:bg-[#a08052] focus:ring-2 focus:ring-[#a08052] focus:ring-offset-2 active:opacity-85 transition-all cursor-pointer shadow-sm"
                data-node-id="19:138"
              >
                Get in Touch
              </a>
            </div>

            {/* Social links */}
            <div
              className="border-t border-[#d9d3c7] pt-6 flex items-center gap-7 text-[13px] text-[#77736b]"
              data-node-id="19:142"
            >
              {[
                { name: 'Instagram', url: 'https://instagram.com' },
                { name: 'LinkedIn', url: 'https://linkedin.com' },
                { name: 'YouTube', url: 'https://youtube.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a08052] transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER (DARK) ================= */}
      <footer
        className="bg-[#141312] text-[#f2eee6] pt-20 pb-10"
        data-node-id="19:146"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 flex flex-col gap-16 md:gap-20">
          {/* Top Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start" data-node-id="19:147">
            {/* Brand */}
            <div className="lg:col-span-5 flex flex-col gap-5" data-node-id="19:148">
              <span
                className="font-serif font-medium text-[40px] md:text-[46px] text-[#f2eee6] tracking-[-0.46px] leading-tight"
                data-node-id="19:149"
              >
                Mahi Madaan
              </span>
              <p
                className="text-[#a39e94] text-[14px] leading-[1.6] max-w-[330px]"
                data-node-id="19:150"
              >
                A central portfolio of the businesses and ventures associated with Mahi Madaan.
              </p>
            </div>

            {/* Navigate Column */}
            <div className="lg:col-span-2 flex flex-col gap-4 text-[14px]" data-node-id="19:151">
              <span className="text-[13px] font-medium text-[#a39e94]" data-node-id="19:152">
                Navigate
              </span>
              <button onClick={scrollToTop} className="text-left text-[#f2eee6] hover:text-[#a08052] transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-[#f2eee6] hover:text-[#a08052] transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('businesses')} className="text-left text-[#f2eee6] hover:text-[#a08052] transition-colors">
                Businesses
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-[#f2eee6] hover:text-[#a08052] transition-colors">
                Contact
              </button>
            </div>

            {/* Businesses Column */}
            <div className="lg:col-span-3 flex flex-col gap-4 text-[14px]" data-node-id="19:157">
              <span className="text-[13px] font-medium text-[#a39e94]" data-node-id="19:158">
                Businesses
              </span>
              <span className="text-[#f2eee6]">The Velvet Veils</span>
              <span className="text-[#f2eee6]">Ayurvedic Magic</span>
              <span className="text-[#f2eee6]">Mahi Records</span>
              <span className="text-[#f2eee6]">The Bebo Studio</span>
              <span className="text-[#a39e94]">King International — soon</span>
              <span className="text-[#f2eee6]">Vaanipath</span>
            </div>

            {/* Connect Column */}
            <div className="lg:col-span-2 flex flex-col gap-4 text-[14px]" data-node-id="19:165">
              <span className="text-[13px] font-medium text-[#a39e94]" data-node-id="19:166">
                Connect
              </span>
              <a href="mailto:contact@mahimadaan.com" className="text-[#f2eee6] hover:text-[#a08052] transition-colors truncate">
                contact@mahimadaan.com
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[#f2eee6] hover:text-[#a08052] transition-colors">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#f2eee6] hover:text-[#a08052] transition-colors">
                LinkedIn
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-[#f2eee6] hover:text-[#a08052] transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="border-t border-[#34322e] pt-7 flex items-center justify-between text-[13px] text-[#a39e94]"
            data-node-id="19:171"
          >
            <p data-node-id="19:172">
              © 2026 Mahi Madaan. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-[#f2eee6] font-medium hover:text-[#a08052] transition-colors cursor-pointer"
              data-node-id="19:173"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ================= VENTURE CARD COMPONENT =================
function VentureCard({ venture, heightClass }: { venture: Venture; heightClass: string }) {
  const isLightCard = venture.textColor === '#141312';

  return (
    <div
      className={`group relative flex flex-col p-3 transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#f2eee6] ${heightClass}`}
      style={{ backgroundColor: venture.bgColor, color: venture.textColor }}
    >
      {/* Top Image Banner */}
      <div className="relative flex-1 min-h-[220px] overflow-hidden">
        <img
          src={venture.image}
          alt={venture.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Details Footer */}
      <div className="flex flex-col gap-3 px-4 pt-[22px] pb-4">
        {/* Category */}
        <span
          className="text-[13px] opacity-70 font-normal"
        >
          {venture.category}
        </span>

        {/* Name */}
        <h3 className="font-serif text-[38px] sm:text-[44px] leading-[0.98] tracking-[-0.44px] font-normal">
          {venture.name}
        </h3>

        {/* Description */}
        <p className="text-[14px] leading-[1.5] opacity-75 font-normal">
          {venture.description}
        </p>

        {/* CTA */}
        <div
          className={`pt-[18px] mt-1 border-t flex items-center justify-between transition-opacity ${venture.isAvailable ? 'opacity-100' : 'opacity-50'
            }`}
          style={{ borderColor: isLightCard ? '#141312' : '#f2eee6' }}
        >
          <span className="text-[14px] font-medium group-hover:underline underline-offset-4">
            {venture.ctaText}
          </span>
          <img
            src={venture.arrowIcon}
            alt=""
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </div>
  );
}