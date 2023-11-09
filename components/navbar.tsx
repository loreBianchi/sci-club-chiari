import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toogleMobileMunu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className="w-full sticky top-0 text-gray-700 bg-white"
        style={{ zIndex: 10000 }}
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
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed w-full transition-opacity ease-linear duration-300 bg-white opacity-100 flex flex-col justify-center items-center py-5"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ zIndex: 10000 }}
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
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ zIndex: 1500 }}
          />
        </>
      )}
    </>
  );
};

export default Navbar;
