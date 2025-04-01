import PropTypes from "prop-types";
import { Categoria, Marca } from "../components";
import { useUiStore } from "../../ui/hooks/useUiStore";
import { useEffect, useRef, useState } from "react";

export default function SidebarFiltros({ categoria, marca }) {
  const { isFilterOpen, toogleFilter } = useUiStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const sidebarRef = useRef(null);


  const handleCheckboxChange = (e) => {

    const { value, checked } = e.target;

    if (checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
    
  };
  const isChecked = (nombre) => selectedItems.includes(nombre);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isFilterOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        toogleFilter();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen, toogleFilter]); // Añade isSidebarOpen y toogleSidebar al array de dependencias

  return (
    <aside
      className={` relative z-40 ${isFilterOpen ? "" : "hidden"}  lg:hidden`}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        aria-hidden="true"
      ></div>

      <div

       className="fixed inset-0 z-40 flex">
        <div 
      ref={sidebarRef}
        
        className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
            <button
              type="button"
              onClick={toogleFilter}
              className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* <!-- Filters --> */}
          <form className="mt-4 border-t border-gray-200">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="px-2 py-3 font-medium text-gray-900">
              {categoria.map((items, i) => (
                <Categoria key={i} items={items} />
              ))}
            </ul>

            <div className="border-t border-gray-200 px-4 py-6">
              <h3 className="-mx-2 -my-3 flow-root">
                <span className="font-medium text-gray-900">Marca</span>
              </h3>
              {/* <!-- Filter section, show/hide based on section state. --> */}
              <div className="pt-6" id="filter-section-mobile-0">
                <div className="space-y-3">
                  {marca.map((items, i) => (
                    <Marca
                      handleCheckboxChange={handleCheckboxChange}
                      checked={isChecked(items.nombre)}
                      key={i}
                      sidebar={true}
                      items={items}
                    />
                  ))}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
}

SidebarFiltros.propTypes = {
    categoria: PropTypes.array,
    marca: PropTypes.array
}