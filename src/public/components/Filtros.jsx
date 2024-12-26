import { useState } from "react";
import { Marca, Categoria } from "../components";

export default function Filtros({ categoria, marca }) {
  const [selectCategoria, setSelectCategoria] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  // HANDLE CATEGORIA
  const handleCategoria = (categoriaSeleccionada) => {
    setSelectCategoria(categoriaSeleccionada);
  };

  // HANDLE MARCAS
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItems((prev) => [...prev, value]);
    } else {
      setSelectedItems((prev) => prev.filter((item) => item !== value));
    }
  };

  const isChecked = (nombre) => selectedItems.includes(nombre);

  console.log(selectedItems)

  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <ul
      role="list"
      className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium"
    >
      {categoria.map((item, i) => (
        <Categoria
          key={i}
          items={item}
          selectCategoria={selectCategoria}
          handleCategoria={handleCategoria}
        />
      ))}
    </ul>

      <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
          <span className="font-medium text-gray-100">Marca</span>
        </h3>
        {/* <!-- Filter section, show/hide based on section state. --> */}
        <div className="pt-6" id="filter-section-0">
          <div className="sm:space-y-2">
            {marca.map((items, i) => (
              <Marca
                handleCheckboxChange={handleCheckboxChange}
                checked={isChecked(items.nombre)}
                key={i}
                items={items}
              />
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
