import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

const CardNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#000',
  menuColor = '#fff',
  buttonBgColor = '#111',
  buttonTextColor = '#fff',
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const cardsRef = useRef([]);
  const tlRef = useRef(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const contentEl = navEl.querySelector('.card-nav-content');
    if (!contentEl) return 260;

    const wasVisible = contentEl.style.visibility;
    const wasPointerEvents = contentEl.style.pointerEvents;
    const wasPosition = contentEl.style.position;
    const wasHeight = contentEl.style.height;

    contentEl.style.visibility = 'visible';
    contentEl.style.pointerEvents = 'auto';
    contentEl.style.position = 'static';
    contentEl.style.height = 'auto';

    // force reflow
    // eslint-disable-next-line no-unused-expressions
    contentEl.offsetHeight;

    const topBar = 60;
    const padding = 16;
    const contentHeight = contentEl.scrollHeight;

    contentEl.style.visibility = wasVisible;
    contentEl.style.pointerEvents = wasPointerEvents;
    contentEl.style.position = wasPosition;
    contentEl.style.height = wasHeight;

    return topBar + contentHeight + padding;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
      '-=0.1'
    );

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-3 md:px-4 z-[99] top-[0.8em] md:top-[1.2em] lg:top-[2em] ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] transition-[background-color,backdrop-filter,border-color] duration-300 ${
          (isScrolled || isExpanded) ? 'backdrop-blur-md border border-white/10 bg-clip-padding' : 'border border-transparent'
        }`}
        style={{
          backgroundColor: (isScrolled || isExpanded)
            ? 'rgba(17,17,17,0.35)'
            : 'transparent',
        }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[0.8rem] md:pl-[1.1rem] z-[2]">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[4px] md:gap-[6px] order-2 md:order-none`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[24px] md:w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[3px] md:translate-y-[4px] rotate-45' : ''} group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[24px] md:w-[30px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[3px] md:-translate-y-[4px] -rotate-45' : ''} group-hover:opacity-75`}
            />
          </div>

          <div className="logo-container flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
            {logo ? (
              <img src={logo} alt={logoAlt} className="logo h-[24px] md:h-[28px]" />
            ) : (
              <span className="text-white font-semibold font-poppins text-sm md:text-base">RyphTech</span>
            )}
          </div>

          <Link
            to="/contact"
            className="card-nav-cta-button hidden md:inline-flex items-center justify-center border-0 rounded-[calc(0.75rem-0.2rem)] px-4 md:px-5 h-8 md:h-9 lg:h-10 font-medium cursor-pointer transition-colors duration-300 hover:opacity-90 text-sm md:text-base"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            Get Started
          </Link>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 md:p-2 grid grid-cols-1 gap-2 items-stretch justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:grid-cols-3 md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[10px_12px] md:p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[50px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[16px] md:text-[18px] lg:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[4px] md:gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[13px] md:text-[15px] lg:text-[16px]"
                    to={lnk.to}
                    aria-label={lnk.ariaLabel}
                    onClick={() => {
                      // collapse after navigation on mobile
                      if (isExpanded) toggleMenu();
                    }}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0 w-3 h-3 md:w-4 md:h-4" aria-hidden="true" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

const Navbar = () => {
  const items = [
    {
      label: 'Home',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Go Home', ariaLabel: 'Return to home page', to: '/' },
      ],
    },
    {
      label: 'About',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Company', ariaLabel: 'About Company', to: '/about' },
        { label: 'Careers', ariaLabel: 'About Careers', to: '/about' },
      ],
    },
    {
      label: 'Projects',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Featured', ariaLabel: 'Featured Projects', to: '/projects' },
        { label: 'Case Studies', ariaLabel: 'Project Case Studies', to: '/projects' },
      ],
    },
    {
      label: 'Contact',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Contact Us', ariaLabel: 'Contact us page', to: '/contact' },
      ],
    },
    {
      label: 'Services & Pricing',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Our Services & Pricing', ariaLabel: 'View services', to: '/services' },
      ],
    },
    {
      label: 'Blog',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Latest Posts', ariaLabel: 'View blog', to: '/blog' },
      ],
    },
    {
      label: 'Team',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'Meet the Team', ariaLabel: 'View team', to: '/team' },
      ],
    },
    {
      label: 'Testimonials',
      bgColor: '#0E0E0E',
      textColor: '#fff',
      links: [
        { label: 'What Clients Say', ariaLabel: 'View testimonials', to: '/testimonials' },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      baseColor="#000"
      menuColor="#fff"
      buttonBgColor="#2563eb"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};

export default Navbar;
