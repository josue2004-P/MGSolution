import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function PublicPage() {
  return (
    <main className=" bg-gray-100">
      <Navbar showCatalago={true} />

      <section className="flex flex-col justify-center items-center  public_gradient h-screen">
        <article className="p-4 sm:p-0  md:w-[80%] xl:w-[50%] text-center">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-100">
            Refacciones de Calidad para Dispositivos Móviles
          </h1>
          <p className="mt-4 font-medium text-lg md:text-xl xl:text-2xl text-gray-300">
            Las mejores piezas para reparar tu teléfono o tablet, disponibles al
            mejor precio y con envío rápido.
          </p>
          <div className="mt-5 flex gap-3 justify-center">
            <button className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2 px-3 h-fit sm:h-full text-sm sm:px-4 sm:py-2 text-center ">
              Explorar Catálogo
            </button>
            <button className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2 px-3 h-fit sm:h-full text-sm sm:px-4 sm:py-2 text-center ">
              Contáctanos
            </button>
          </div>
        </article>
      </section>

      <section className=" py-20">
        <header className="mx-4 md:mx-auto flex  flex-col text-center  sm:m-0 md:w-[80%] xl:w-[65%]">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Nuestros Servicios
          </h2>
          <p className="text-sm sm:text-base font-medium mt-5 text-gray-600">
            En MG CellSolution, nos dedicamos a ofrecer soluciones completas
            para la reparación y mantenimiento de dispositivos móviles. Nuestro
            catálogo está diseñado para cubrir todas las necesidades de técnicos
            y usuarios que buscan productos de calidad, fiabilidad y
            durabilidad.
          </p>
        </header>
        <article className="mx-4 mt-14 sm:grid-cols-2 md:w-[80%] grid lg:grid-cols-3 md:mx-auto gap-5">
          <div className="relative p-5 shadow-md shadow-gray-300 rounded-md pb-20">
            <h3 className="md:text-xl xl:text-2xl font-semibold">
              Refacciones:
            </h3>
            <p className="text-sm xl:text-base">
              Contamos con una amplia selección de refacciones para teléfonos y
              tablets de diferentes marcas y modelos.
            </p>
            <div className="absolute left-0 bottom-0 w-full p-5 ">
              <button className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2 px-3 h-fit sm:h-full text-sm sm:px-4 sm:py-2 text-center ">
                Ver mas ...
              </button>
            </div>
          </div>
          <div className="p-5 shadow-md shadow-gray-300 rounded-md relative pb-20">
            <h3 className="md:text-xl xl:text-2xl font-semibold">
              {" "}
              Accesorios:
            </h3>
            <p className="text-sm xl:text-base">
              Ofrecemos una variedad de accesorios para dispositivos móviles,
              incluyendo fundas, cargadores, protectores de pantalla, audífonos
              y mucho más.
            </p>
            <div className="absolute left-0 bottom-0 w-full p-5 ">
              <button className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2 px-3 h-fit sm:h-full text-sm sm:px-4 sm:py-2 text-center ">
                Ver mas ...
              </button>
            </div>
          </div>
          <div className="p-5 shadow-md shadow-gray-300 rounded-md relative pb-20">
            <h3 className="md:text-xl xl:text-2xl font-semibold">
              Accesorios para Reparaciones:
            </h3>
            <p className="text-sm xl:text-base">
              Además, ponemos a disposición herramientas y equipos
              especializados para la reparación de dispositivos.
            </p>
            <div className="absolute left-0 bottom-0 w-full p-5 ">
              <button className="w-full text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-2 px-3 h-fit sm:h-full text-sm sm:px-4 sm:py-2 text-center ">
                Ver mas ...
              </button>
            </div>
          </div>
        </article>
      </section>

      <section className=" grid lg:grid-cols-2 gap-10  px-4 md:mx-auto md:w-[90%] xl:w-[85%] lg:py-10 pb-20">
        <article className="">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Sobre Nosotros
          </h2>
          <p className="text-sm sm:text-base font-medium mt-5 text-gray-600">
            En MG CellSolution, contamos con más de 2 años de experiencia en el
            mercado, dedicados a ofrecer productos de calidad para la reparación
            y mantenimiento de dispositivos móviles.
          </p>

          <p className="text-sm sm:text-base font-medium mt-5 text-gray-600">
            Nos enorgullece brindar soluciones confiables a nuestros clientes,
            desde refacciones hasta herramientas y accesorios, siempre con un
            enfoque en la satisfacción y confianza de quienes nos eligen.
          </p>
          <p className="text-sm sm:text-base font-medium mt-5 text-gray-600">
            Gracias a nuestro compromiso con la excelencia, hemos logrado
            consolidarnos como una opción de confianza para técnicos y usuarios
            que buscan productos de alto rendimiento y durabilidad.
          </p>
        </article>
        <div className="flex items-center ">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/01/09/07/mobile-2563782_1280.jpg"
            alt="phone-mgcellsolution"
            className="rounded-md"
          />
        </div>
      </section>

      {/* PORQUE ELEGIRNOS */}
      <section className="porque_elegirnos_gradient py-20">
        <header className="text-center py-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-100">
            ¿Por Qué Elegirnos?
          </h2>
        </header>
        <article className="p-4 lg:p-0 sm:w-[90%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
          <div className="flex items-center flex-col text-center">
            <div className="flex justify-center items-center p-2 w-[3rem] h-[3rem] rounded-full border ">
              <span className="font-semibold text-xl text-white">1</span>
            </div>
            <h3 className="text-gray-100 mt-8 text-lg font-semibold">
              Productos de Calidad Garantizada
            </h3>
            <p className="text-sm text-gray-300 font-medium mt-3">
              Todas nuestras refacciones, accesorios y herramientas están
              seleccionadas cuidadosamente para garantizar que cumplan con los
              más altos estándares de calidad.
            </p>
          </div>
          <div className="flex items-center flex-col text-center">
            <div className="flex justify-center items-center p-2 w-[3rem] h-[3rem] rounded-full border ">
              <span className="font-semibold text-xl text-white">2</span>
            </div>
            <h3 className="text-gray-100 mt-8 text-lg font-semibold">
              Experiencia y Confiabilidad
            </h3>
            <p className="text-sm text-gray-300 font-medium mt-3">
              Con más de 2 años en el mercado, hemos ganado la confianza de
              nuestros clientes gracias a nuestra experiencia y conocimiento en
              el sector.
            </p>
          </div>
          <div className="flex items-center flex-col text-center md:col-span-2 md:w-[50%] md:mx-auto lg:mx-0 lg:w-full lg:col-span-1">
            <div className="flex justify-center items-center p-2 w-[3rem] h-[3rem] rounded-full border ">
              <span className="font-semibold text-xl text-white">3</span>
            </div>
            <h3 className="text-gray-100 mt-8 text-lg font-semibold">
              Atención y Soporte Especializado
            </h3>
            <p className="text-sm text-gray-300 font-medium mt-3">
              Nos comprometemos a brindarte la mejor experiencia de compra, con
              un equipo disponible para asesorarte en cualquier duda que tengas
              sobre nuestros productos.
            </p>
          </div>
        </article>
      </section>

      {/* TESTIMONIOS */}
      <section className=" sm:pt-20">
        <header className="text-center py-10 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            Testimonios / Reseñas
          </h2>
        </header>

        <article className="h-[25rem] p-4 sm:p-6">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // Puedes agregar otros breakpoints si es necesario
            }}
          >
            <SwiperSlide className=" flex flex-col justify-between">
              <div className="">
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam minus dolorem et facilis reprehenderit, laudantium
                  architecto nobis voluptatibus pariatur nesciunt recusandae qui
                  aut excepturi illum dolore modi ea sed! Magni.
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <div className="w-10 h-10 rounded-full bg-gray-900"></div>
                  <p className="text-sm font-medium">Nombre</p>
                  <p className="text-xs font-medium">Descripcion</p>
                </div>

                <div className="flex">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col justify-between">
              <div className="">
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam minus dolorem et facilis reprehenderit, laudantium
                  architecto nobis voluptatibus pariatur nesciunt recusandae qui
                  aut excepturi illum dolore modi ea sed! Magni.
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <div className="w-10 h-10 rounded-full bg-gray-900"></div>
                  <p className="text-sm font-medium">Nombre</p>
                  <p className="text-xs font-medium">Descripcion</p>
                </div>

                <div className="flex">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className=" flex flex-col justify-between">
              <div className="">
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam minus dolorem et facilis reprehenderit, laudantium
                  architecto nobis voluptatibus pariatur nesciunt recusandae qui
                  aut excepturi illum dolore modi ea sed! Magni.
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <div className="w-10 h-10 rounded-full bg-gray-900"></div>
                  <p className="text-sm font-medium">Nombre</p>
                  <p className="text-xs font-medium">Descripcion</p>
                </div>

                <div className="flex">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>{" "}
            <SwiperSlide className=" flex flex-col justify-between">
              <div className="">
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam minus dolorem et facilis reprehenderit, laudantium
                  architecto nobis voluptatibus pariatur nesciunt recusandae qui
                  aut excepturi illum dolore modi ea sed! Magni.
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <div className="w-10 h-10 rounded-full bg-gray-900"></div>
                  <p className="text-sm font-medium">Nombre</p>
                  <p className="text-xs font-medium">Descripcion</p>
                </div>

                <div className="flex">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" flex flex-col justify-between">
              <div className="">
                <p className="">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Magnam minus dolorem et facilis reprehenderit, laudantium
                  architecto nobis voluptatibus pariatur nesciunt recusandae qui
                  aut excepturi illum dolore modi ea sed! Magni.
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div className="">
                  <div className="w-10 h-10 rounded-full bg-gray-900"></div>
                  <p className="text-sm font-medium">Nombre</p>
                  <p className="text-xs font-medium">Descripcion</p>
                </div>

                <div className="flex">
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                    <path d="M8 11l0 5" />
                    <path d="M8 8l0 .01" />
                    <path d="M12 16l0 -5" />
                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>

      {/* CONTACTANOS */}
      <section className="w-full">

        <div>
          <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Contacto
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Aute magna irure deserunt veniam aliqua magna enim voluptate.
              </p>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Apellidos
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Correo Electronico
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Telefono
                  </label>
                  <div className="relative mt-2.5">
   
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Mensaje
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>

              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Enviar 
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
