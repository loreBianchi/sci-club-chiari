import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-50 text-gray-700 bg-white" style={{ zIndex: 10000 }}>
      <div className="flex flex-col px-2 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="p-4 flex flex-row items-center justify-between">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <img src="/assets/ski-64.png" alt="ski icon" />
            <span className="ml-3 font-bold text-xl">
              Sci Club Chiari
            </span>
          </Link>
          <div className="mt-1 ml-4">
            {/* <button
              type="button"
              aria-label="dark-mode-toggle"
              className="text-emerald-500 flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white  dark:bg-slate-800   focus:outline-none bg-gray-50 dark:bg-slate-700 "
            >
              <span>
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </button> */}
          </div>
          <button
            aria-label="mobile-menu"
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
          ></button>
        </div>
        <nav
          className={`flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row`}
        >
          <Link className="md:mt-0 mt-3 px-3 py-2" href="/sci-club">
            Sci club
          </Link>
          <Link className="md:mt-0 mt-3 px-3 py-2" href="/attivita">
            Attività
          </Link>
          <Link className="md:mt-0 mt-3 px-3 py-2" href="/tesseramento">
            Tesseramento
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
  );
};

export default Navbar;
