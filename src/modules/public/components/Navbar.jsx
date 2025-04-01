import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
import { useUiStore } from "../../ui/hooks/useUiStore"
import { useEffect, useRef } from "react";

export default function Navbar({ showCatalago }) {
  const { isNavbarOpen, toogleNavbar } = useUiStore();
  const sidebarRef = useRef(null);

  const location = useLocation();

  const handleNavbar = () => {
    toogleNavbar();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isNavbarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toogleNavbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavbarOpen, toogleNavbar]); // Añade isSidebarOpen y toogleSidebar al array de dependencias

  return (
    <>
      <nav className="absolute w-full  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center sm:text-2xl font-semibold whitespace-nowrap text-white">
              MG CellSolution
            </span>
          </a>
          <div className="flex items-center md:order-2 space-x-2 md:space-x-0 rtl:space-x-reverse">
            {showCatalago ? (
              <Link
                to={"/catalago"}
                className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2 px-3 h-fit sm:h-full text-sm sm:px-4 sm:py-2 text-center "
              >
                Ver Catalago
              </Link>
            ) : (
              ""
            )}
            <button
              onClick={() => handleNavbar()}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 rounded-lg md:hidden   "
              aria-controls="navbar-cta"
              ref={sidebarRef}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l16 0" />
                <path d="M4 18l16 0" />
              </svg>
            </button>
          </div>
          <div
            className={` items-center justify-between w-full md:flex md:w-auto md:order-1  ${
              isNavbarOpen ? "" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul
              ref={sidebarRef}
              className="backdrop-blur-sm z-10 relative flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 "
            >
              <li>
                <Link
                  to={"/"}
                  onClick={() => handleNavbar()}
                  className={`block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:hover:text-gray-300 ${
                    location.pathname === "/" ? "text-yellow-500" : ""
                  }`}
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to={"/catalago"}
                  onClick={() => handleNavbar()}
                  className={`block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:hover:text-gray-300 ${
                    location.pathname === "/catalago" ? "text-yellow-500" : ""
                  }`}
                >
                  Catalago
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => handleNavbar()}
                  className={`block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:hover:text-gray-300 ${
                    location.pathname === "/nosotros" ? "text-yellow-500" : ""
                  }`}
                >
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  showCatalago: PropTypes.bool
}