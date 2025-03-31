import React from "react";

export default function CardRefaccion() {
  return (
    <a className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg  xl:aspect-h-8 xl:aspect-w-7">
        <img
          src="https://vikingotek.com/wp-content/uploads/2023/10/Captura-de-pantalla-2023-10-07-150330.png"
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-300">
        Flex Centro De Carga Para IPhone 12/12 Pro ORIGINAL
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-100">$48</p>
    </a>
  );
}
