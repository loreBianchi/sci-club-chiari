import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toogleMobileMunu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${nav.offsetHeight}px`
      );
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(nav);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className="w-full sticky top-0 z-navbar text-gray-700 bg-white"
      >
        <div className="flex flex-col px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link
              href="/"
              className="flex title-font font-medium items-center text-gray-900 hover:text-blue-900"
            >
              <img src="/assets/sciclub-logo.png" alt="ski icon" width={64} height={64} />
              <span className="ml-3 font-bold text-xl">Sci Club Chiari</span>
            </Link>
            <button
              aria-label="mobile-menu"
              onClick={toogleMobileMunu}
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
            >
              {isMobileMenuOpen ? <FaTimes className="w-6 h-6 text-gray-900 hover:text-blue-900" /> : <FaBars className="w-6 h-6 text-gray-900 hover:text-blue-900" />}
            </button>
          </div>
          <nav
            className={`flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row`}
          >
            <Link className="md:mt-0 mt-3 px-3 py-2" href="/sci-club">
              Sci club
            </Link>
            <Link className="md:mt-0 mt-3 px-3 py-2" href="/tesseramento">
              Tesseramento
            </Link>
            <Link className="md:mt-0 mt-3 px-3 py-2" href="/attivita">
              Attività
            </Link>
            <Link className="md:mt-0 mt-3 px-3 py-2" href="/news">
              News
            </Link>
            <Link className="md:mt-0 mt-3 px-3 py-2" href="/contatti">
              Contatti
            </Link>
          </nav>
        </div>
      </div>
      <div
        className={`fixed inset-x-0 z-navbar transition-all duration-300 ease-in-out bg-white flex flex-col justify-center items-center py-5 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ top: "var(--navbar-height, 96px)" }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Link className="px-3 py-2" href="/sci-club">
          Sci club
        </Link>
        <Link className="px-3 py-2" href="/tesseramento">
          Tesseramento
        </Link>
        <Link className="px-3 py-2" href="/attivita">
          Attività
        </Link>
        <Link className="px-3 py-2" href="/news">
          News
        </Link>
        <Link className="px-3 py-2" href="/contatti">
          Contatti
        </Link>
      </div>
      <div
        className={`fixed inset-0 z-overlay bg-black transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
