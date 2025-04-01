import Layout from "../layouts/Layout";
import {
  CardProducto,
  Filtros,
  HeaderCatalago,
  SidebarFiltros,
} from "../components";

import { useMarcaStore,useCategoriaStore,useProductoStore } from "../hooks";


export default function CatalagoPage() {
  
  const { marcas } = useMarcaStore();
  const { categorias } = useCategoriaStore();
  const { productos,isLoading,error } = useProductoStore();



  if (isLoading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <Layout title="Catalago">
      <div className=" text-white"> 
        <div>
          <SidebarFiltros marca={marcas} categoria={categorias} />

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HeaderCatalago />

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <Filtros marca={marcas} categoria={categorias} />

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3">
                  <div className="">
                    <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                      {productos.map((items, i) => (
                        <CardProducto items={items} key={i} />
                      ))}                                    

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
