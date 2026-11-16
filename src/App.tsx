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
  heroHeight: number;
  cardHeightDesktop: number;
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
    category: 'Astrology / Guidance',
    description: 'A modern Vedic astrology and spiritual guidance platform offering insightful readings and cosmic direction.',
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

  // ================= ANIMATION CHOREOGRAPHY =================
  // Step 0: "Mahi Madaan" typing in middle of hero area
  // Step 1: "Mahi Madaan" glides up to top of hero
  // Step 2: Left content ("Building Businesses. Creating Impact.") slides in from LEFT
  //         Right content ("An entrepreneur..." + Buttons) slides in from RIGHT
  // Step 3: The 7 venture bars rise from the bottom edge
  // Step 4: Fully settled
  const [animStep, setAnimStep] = useState<number>(0);
  const [typedTitle, setTypedTitle] = useState<string>('');
  const [titleCursor, setTitleCursor] = useState<boolean>(true);
  const [barsRaised, setBarsRaised] = useState<boolean>(false);

  const FULL_TITLE = 'Mahi Madaan';

  useEffect(() => {
    let isCancelled = false;

    const startAnimation = async () => {
      // 1. Initial short pause
      await new Promise((r) => setTimeout(r, 350));
      if (isCancelled) return;

      // 2. Typewriter for "Mahi Madaan" in middle of hero
      for (let i = 1; i <= FULL_TITLE.length; i++) {
        if (isCancelled) return;
        setTypedTitle(FULL_TITLE.slice(0, i));
        await new Promise((r) => setTimeout(r, 70));
      }

      // Blink cursor briefly in middle
      await new Promise((r) => setTimeout(r, 350));
      if (isCancelled) return;
      setTitleCursor(false);

      // 3. Move "Mahi Madaan" to top of hero
      setAnimStep(1);
      await new Promise((r) => setTimeout(r, 800));
      if (isCancelled) return;

      // 4. Slide in from LEFT (Tagline) and from RIGHT (Intro + Buttons)
      setAnimStep(2);
      await new Promise((r) => setTimeout(r, 650));
      if (isCancelled) return;

      // 5. The 7 bars rise up from the bottom
      setAnimStep(3);
      setBarsRaised(true);

      // 6. Complete
      await new Promise((r) => setTimeout(r, 800));
      if (isCancelled) return;
      setAnimStep(4);
    };

    startAnimation();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Scroll listener for active section
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

  // Helper for rendering typed title with "Mahi " upright and "Madaan" italic
  const renderTypedTitle = (text: string, showCursor: boolean) => {
    const mahiPart = text.slice(0, 5);
    const madaanPart = text.slice(5);

    return (
      <span className="inline-block relative">
        <span>{mahiPart}</span>
        {madaanPart && <span className="font-serif italic">{madaanPart}</span>}
        {showCursor && (
          <span className="inline-block w-[3px] md:w-[5px] h-[0.75em] bg-[#141312] ml-1 md:ml-2 align-baseline animate-pulse" />
        )}
      </span>
    );
  };

  return (
    <div className="bg-[#f2eee6] min-h-screen text-[#141312] selection:bg-[#a08052] selection:text-[#f2eee6] relative overflow-x-hidden">
      {/* ================= HEADER (ALWAYS VISIBLE, NEVER HIDDEN, NO REPLAY) ================= */}
      <header
        className="sticky top-0 z-40 bg-[#f2eee6] border-b border-[#d9d3c7] h-[68px] md:h-[76px]"
        data-node-id="18:21"
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-16 h-full flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={scrollToTop}
            className="text-left font-serif font-medium text-[26px] md:text-[28px] text-[#141312] tracking-[-0.3px] hover:text-[#a08052] transition-colors cursor-pointer"
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
                className="group flex flex-col items-start gap-[5px] text-[14px] text-[#141312] transition-colors cursor-pointer"
              >
                <span className="group-hover:text-[#a08052] transition-colors">{item.label}</span>
                <span
                  className={`h-[1.5px] w-full bg-[#a08052] transition-all duration-300 ${activeSection === item.id
                      ? 'opacity-100 scale-x-100'
                      : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                />
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('businesses')}
              className="bg-[#141312] text-[#f2eee6] text-[13px] font-medium px-6 py-[14px] hover:bg-[#a08052] focus:ring-2 focus:ring-[#a08052] focus:ring-offset-2 active:opacity-80 transition-all cursor-pointer"
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
          className="fixed inset-0 z-50 bg-[#f2eee6] flex flex-col justify-between"
          data-node-id="20:297"
        >
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

      {/* ================= HERO SECTION (FIGMA 1440x640 COMPOSITION) ================= */}
      <section
        id="home"
        className="relative bg-[#f2eee6] w-full border-b border-[#d9d3c7] overflow-hidden"
        style={{ height: 'calc(100vh - 76px)', minHeight: '560px', maxHeight: '680px' }}
        data-node-id="23:178"
      >
        <div className="relative w-full h-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[66px]">
          {/* ================= GIANT TITLE: "Mahi Madaan" ================= */}
          {/* In Step 0: types in middle of hero area */}
          {/* In Step 1+: glides up to top of hero area below navbar, remaining centrally aligned */}
          <div
            className={`absolute left-0 right-0 z-20 select-none flex justify-center text-center transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${animStep === 0
                ? 'top-1/2 -translate-y-1/2'
                : 'top-1 sm:top-2 lg:top-0 translate-y-0'
              }`}
          >
            <h1
              className="font-serif font-light text-[#141312] text-[64px] sm:text-[108px] md:text-[155px] lg:text-[205px] xl:text-[242px] 2xl:text-[260px] leading-[0.86] tracking-[-2px] sm:tracking-[-4px] md:tracking-[-6px] xl:tracking-[-7.86px] whitespace-nowrap text-center"
              data-node-id="23:179"
            >
              {animStep === 0 ? (
                renderTypedTitle(typedTitle, titleCursor)
              ) : (
                <>
                  <span>Mahi </span>
                  <span className="italic">Madaan</span>
                </>
              )}
            </h1>
          </div>

          {/* ================= MIDDLE LEFT: TAGLINE (SLIDES IN FROM LEFT) ================= */}
          <div
            className={`absolute top-[195px] sm:top-[220px] lg:top-[235px] left-4 sm:left-8 lg:left-[64px] z-30 max-w-[320px] transition-all duration-800 ease-out ${animStep >= 2
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12 pointer-events-none'
              }`}
            data-node-id="23:180"
          >
            <h2 className="font-serif font-normal text-[24px] sm:text-[28px] md:text-[34px] lg:text-[36px] text-[#141312] leading-[1.08] tracking-[-0.2px]">
              Building Businesses.<br />
              Creating Impact.
            </h2>
          </div>

          {/* ================= MIDDLE RIGHT: INTRO & CTAs (CLOSER TO ARCH, REDUCED GAP) ================= */}
          <div
            className={`absolute top-[195px] sm:top-[220px] lg:top-[235px] right-4 sm:right-8 lg:right-auto lg:left-[calc(50%+180px)] z-30 max-w-[420px] flex flex-col gap-3 transition-all duration-800 ease-out ${animStep >= 2
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12 pointer-events-none'
              }`}
            data-node-id="23:181"
          >
            <p
              className="text-[#77736b] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6]"
              data-node-id="18:49"
            >
              An entrepreneur and business professional associated with diverse ventures across multiple industries.
            </p>

            {/* Explore Businesses & About Mahi buttons */}
            <div
              className="flex flex-wrap items-center gap-5 pt-1"
              data-node-id="18:50"
            >
              <button
                onClick={() => scrollToSection('businesses')}
                className="bg-[#141312] text-[#f2eee6] px-[24px] py-[13px] text-[13px] font-medium hover:bg-[#a08052] focus:ring-2 focus:ring-[#a08052] focus:ring-offset-2 active:opacity-85 transition-all shadow-sm cursor-pointer"
                data-node-id="18:51"
              >
                Explore Businesses
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="border-b border-[#141312] pb-[5px] text-[#141312] text-[13px] font-medium hover:text-[#a08052] hover:border-[#a08052] transition-colors cursor-pointer"
                data-node-id="18:55"
              >
                About Mahi
              </button>
            </div>
          </div>

          {/* ================= 7 BARS ROW (RESTING AT BOTTOM BASELINE, LARGER ARCH) ================= */}
          {/* overflow-hidden ensures NO internal scrollbar ever appears! */}
          <div
            className="absolute bottom-0 left-4 sm:left-8 lg:left-[66px] right-4 sm:right-8 lg:right-[66px] h-[340px] flex items-end justify-between gap-2.5 sm:gap-3 lg:gap-3.5 z-10 overflow-hidden"
            data-node-id="23:182"
          >
            {/* 1. The Velvet Veils */}
            <div
              className={`flex-1 max-w-[154px] bg-[#4b3038] text-[#f2eee6] p-3 sm:p-4 lg:p-[16px] flex flex-col justify-between shadow-md transition-all duration-700 ease-out hover:-translate-y-1 ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '145px', transitionDelay: '0ms' }}
              data-node-id="23:183"
            >
              <span className="font-serif font-light text-[32px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.56px]">
                VV
              </span>
              <span className="text-[11px] sm:text-[12px] lg:text-[12px] leading-[1.35] font-normal">
                The Velvet Veils
              </span>
            </div>

            {/* 2. Ayurvedic Magic */}
            <div
              className={`flex-1 max-w-[154px] bg-[#3e4a3c] text-[#f2eee6] p-3 sm:p-4 lg:p-[16px] flex flex-col justify-between shadow-md transition-all duration-700 ease-out hover:-translate-y-1 ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '200px', transitionDelay: '70ms' }}
              data-node-id="23:186"
            >
              <span className="font-serif font-light text-[32px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.56px]">
                AM
              </span>
              <span className="text-[11px] sm:text-[12px] lg:text-[12px] leading-[1.35] font-normal">
                Ayurvedic Magic
              </span>
            </div>

            {/* 3. Mahi Records */}
            <div
              className={`flex-1 max-w-[154px] bg-[#0d0d0c] text-[#a08052] p-3 sm:p-4 lg:p-[16px] flex flex-col justify-between shadow-md transition-all duration-700 ease-out hover:-translate-y-1 ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '135px', transitionDelay: '140ms' }}
              data-node-id="23:189"
            >
              <span className="font-serif font-light text-[32px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.56px]">
                MR
              </span>
              <span className="text-[11px] sm:text-[12px] lg:text-[12px] leading-[1.35] font-normal text-[#f2eee6]">
                Mahi Records
              </span>
            </div>

            {/* 4. Centerpiece: Portrait Arch (INCREASED SIZE, STANDS TALLER & WIDER) */}
            <div
              className={`flex-[2.2] max-w-[310px] lg:max-w-[340px] bg-[#dcd3c3] rounded-t-[120px] sm:rounded-t-[145px] lg:rounded-t-[170px] overflow-hidden relative shadow-lg flex flex-col justify-end p-4 sm:p-6 group transition-all duration-700 ease-out ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '340px', transitionDelay: '210ms' }}
              data-node-id="23:192"
            >
              <div
                className="absolute inset-[10px] sm:inset-[12px] lg:inset-[14px] border border-[#a08052] rounded-t-[108px] sm:rounded-t-[133px] lg:rounded-t-[156px] pointer-events-none"
                data-node-id="23:193"
              />
              <div className="relative z-10 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#a08052]" />
                <span className="text-[11px] sm:text-[12px] lg:text-[13px] text-[#77736b] font-normal">
                  Portrait placeholder
                </span>
              </div>
            </div>

            {/* 5. The Bebo Studio */}
            <div
              className={`flex-1 max-w-[154px] bg-[#c2b299] text-[#141312] p-3 sm:p-4 lg:p-[16px] flex flex-col justify-between shadow-md transition-all duration-700 ease-out hover:-translate-y-1 ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '165px', transitionDelay: '280ms' }}
              data-node-id="23:195"
            >
              <span className="font-serif font-light text-[32px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.56px]">
                BS
              </span>
              <span className="text-[11px] sm:text-[12px] lg:text-[12px] leading-[1.35] font-normal">
                The Bebo Studio
              </span>
            </div>

            {/* 6. King International */}
            <div
              className={`flex-1 max-w-[154px] bg-[#2b2a28] text-[#f2eee6] p-3 sm:p-4 lg:p-[16px] flex flex-col justify-between shadow-md transition-all duration-700 ease-out hover:-translate-y-1 ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '135px', transitionDelay: '350ms' }}
              data-node-id="23:198"
            >
              <span className="font-serif font-light text-[32px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.56px]">
                KI
              </span>
              <span className="text-[11px] sm:text-[12px] lg:text-[12px] leading-[1.35] font-normal">
                King International
              </span>
            </div>

            {/* 7. Vaanipath */}
            <div
              className={`flex-1 max-w-[154px] bg-[#2e3a45] text-[#f2eee6] p-3 sm:p-4 lg:p-[16px] flex flex-col justify-between shadow-md transition-all duration-700 ease-out hover:-translate-y-1 ${barsRaised ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'
                }`}
              style={{ height: '210px', transitionDelay: '420ms' }}
              data-node-id="23:201"
            >
              <span className="font-serif font-light text-[32px] sm:text-[40px] lg:text-[50px] leading-none tracking-[-0.56px]">
                VP
              </span>
              <span className="text-[11px] sm:text-[12px] lg:text-[12px] leading-[1.35] font-normal">
                Vaanipath
              </span>
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
          <div className="border-b border-[#d9d3c7] pb-[22px]" data-node-id="29:184">
            <h2 className="font-serif text-[28px] md:text-[30px] font-normal text-[#141312] tracking-[-0.15px]">
              About Mahi Madaan
            </h2>
          </div>

          <div data-node-id="29:186">
            <p className="font-serif font-light text-[38px] sm:text-[54px] md:text-[68px] lg:text-[78px] text-[#141312] leading-[1.08] lg:leading-[1.06] tracking-[-0.8px] md:tracking-[-1.17px] max-w-[1200px]">
              An entrepreneur and business professional associated with{' '}
              <span className="italic">diverse ventures</span> across multiple industries.
            </p>
          </div>

          <div
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-12 pt-4"
            data-node-id="29:187"
          >
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start" data-node-id="29:217">
            <div className="flex flex-col gap-8">
              <VentureCard venture={ventures[0]} heightClass="lg:h-[600px]" />
              <VentureCard venture={ventures[4]} heightClass="lg:h-[440px]" />
            </div>

            <div className="flex flex-col gap-8 lg:pt-24">
              <VentureCard venture={ventures[1]} heightClass="lg:h-[480px]" />
              <VentureCard venture={ventures[5]} heightClass="lg:h-[560px]" />
            </div>

            <div className="flex flex-col gap-8 lg:pt-10">
              <VentureCard venture={ventures[2]} heightClass="lg:h-[540px]" />
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

          <div className="w-full lg:w-[420px] flex flex-col gap-8" data-node-id="19:132">
            <p className="text-[#77736b] text-[15px] md:text-[16px] leading-[1.6]" data-node-id="19:133">
              Interested in a collaboration, a partnership, or simply to know more about the businesses? Get in touch directly.
            </p>

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

            <div>
              <a
                href="mailto:contact@mahimadaan.com"
                className="inline-block bg-[#141312] text-[#f2eee6] px-[26px] py-[17px] text-[14px] font-medium hover:bg-[#a08052] focus:ring-2 focus:ring-[#a08052] focus:ring-offset-2 active:opacity-85 transition-all cursor-pointer shadow-sm"
                data-node-id="19:138"
              >
                Get in Touch
              </a>
            </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start" data-node-id="19:147">
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

function VentureCard({ venture, heightClass }: { venture: Venture; heightClass: string }) {
  const isLightCard = venture.textColor === '#141312';

  return (
    <div
      className={`group relative flex flex-col p-3 transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-[#f2eee6] ${heightClass}`}
      style={{ backgroundColor: venture.bgColor, color: venture.textColor }}
    >
      <div className="relative flex-1 min-h-[220px] overflow-hidden">
        <img
          src={venture.image}
          alt={venture.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-3 px-4 pt-[22px] pb-4">
        <span className="text-[13px] opacity-70 font-normal">
          {venture.category}
        </span>

        <h3 className="font-serif text-[38px] sm:text-[44px] leading-[0.98] tracking-[-0.44px] font-normal">
          {venture.name}
        </h3>

        <p className="text-[14px] leading-[1.5] opacity-75 font-normal">
          {venture.description}
        </p>

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
