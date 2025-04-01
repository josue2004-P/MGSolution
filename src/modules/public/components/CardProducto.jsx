import PropTypes from "prop-types";

import enviarMensajeWhatsApp from "../libs/enviarMensajeWhatsApp";

export default function CardRefaccion({items}) {
  const {urlImg,titulo,precio} = items
  
  return (
    <a className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
        <img
          src={urlImg}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-300">
        {titulo}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-100">{precio}</p>
      <div className="flex flex-col gap-2 mt-3">
      
        <button onClick={()=>{enviarMensajeWhatsApp(titulo,precio)}}  className="bg-purple-600 text-purple-300 font-semibold rounded-md py-1">
          Comprar
        </button>
        <button className="bg-purple-300 text-purple-600 font-semibold rounded-md py-1">
          Agregar al carrito
        </button>
      </div>

    </a>
  );
}

// Agregar la validación de props
CardRefaccion.propTypes = {
  items: PropTypes.object // Asegura que `items` es un array y es obligatorio
};

