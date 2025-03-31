import Layout from "../layouts/Layout";
import {
  CardRefaccion,
  Filtros,
  HeaderCatalago,
  SidebarFiltros,
} from "../components";

const categoria = [
  {
    nombre: "Pantalla",
  },
  {
    nombre: "Baterias",
  },
  {
    nombre: "Placas de carga",
  },
  {
    nombre: "Bandejas",
  },
  {
    nombre: "Flex de carga",
  },
];

const marca = [
  {
    nombre: "Samsung",
  },
  {
    nombre: "Motorola",
  },
  {
    nombre: "iPhone",
  },
  {
    nombre: "LG",
  },
  {
    nombre: "ZTE",
  },
  {
    nombre: "Huawei",
  },
  {
    nombre: "POCO",
  },

  {
    nombre: "Xiaomi",
  },
];
export default function CatalagoPage() {

  
  return (
    <Layout title="Catalago">
      <div className=" text-white"> 
        <div>
          <SidebarFiltros marca={marca} categoria={categoria} />

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <HeaderCatalago />

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <Filtros marca={marca} categoria={categoria} />

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3">
                  <div className="">
                    <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        <CardRefaccion />
                        <CardRefaccion />
                        <CardRefaccion />
                        <CardRefaccion />
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
