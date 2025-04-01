import PropTypes from "prop-types";

import Navbar from "../components/Navbar";
import useDocumentTitle from "../libs/useDocumentTitle";

export default function Layout({ children, title }) {

  useDocumentTitle(` MG CellSolution | ${title}`);

  return (
    <main className=" public_gradient ">
      <Navbar />

      {children}
    </main>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Acepta cualquier elemento renderizable en React
  title: PropTypes.string.isRequired,  // Debe ser una cadena de texto obligatoria
};
