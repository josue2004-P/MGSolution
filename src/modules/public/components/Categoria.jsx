import PropTypes from "prop-types";

export default function Categoria({ items, selectCategoria, handleCategoria }) {
  return (
    <li className="space-y-4 sm:space-x-0">
      <a
        className={`${items.nombre === selectCategoria ? "text-yellow-500" : ""} cursor-pointer`}
        onClick={() => handleCategoria(items.nombre)}
      >
        {items.nombre}
      </a>
    </li>
  );
}

Categoria.propTypes = {

  items: PropTypes.object,
  handleCategoria : PropTypes.func,
  selectCategoria: PropTypes.any
}