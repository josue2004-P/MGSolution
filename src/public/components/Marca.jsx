import React from "react";

export default function Marca({ items, handleCheckboxChange, checked,sidebar }) {
  return (
    <div className="flex items-center">
    <input
      id={`filter-color-${items.nombre}`}
      name="color[]"
      value={items.nombre}
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-cyan-700 "
      onChange={handleCheckboxChange}
      checked={checked}
    />
    <label
      className={`ml-3 text-sm ${sidebar ? "text-gray-900" : "text-gray-100"}`}
    >
      {items.nombre}
    </label>
  </div>
  );
}
