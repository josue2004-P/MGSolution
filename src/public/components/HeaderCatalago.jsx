import { useState } from "react";
import { useUiStore } from "../../hooks";


export default function HeaderCatalago() {
  const [search, setSearch] = useState("");
  const { isFilterOpen, toogleFilter } = useUiStore();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search)


  const handleFilter = () => {
    toogleFilter();
  };


  return (
    <header className=" flex flex-col sm:flex-row items-baseline justify-between border-b border-gray-200 pb-6 pt-20 lg:pt-24">
      <h1 className="text-4xl font-bold tracking-tight ">
        {/* <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-500 from-sky-500"> */}
          Catalago
        {/* </span> */}
      </h1>

      <div className="mt-5 sm:mt-0 flex w-full sm:w-fit">
        <form className="flex items-center w-full mx-auto ">

          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar refacción"
              value={search || ""}
              onChange={handleChange}
            />
          </div>
          
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-cyan-700 rounded-lg  hover:bg-cyan-800 "
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>

        <button
          type="button"
          onClick={handleFilter}
          className=" ml-2 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        >
          <span className="sr-only">Filters</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
