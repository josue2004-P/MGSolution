import Navbar from "../components/Navbar";
import useDocumentTitle from "../../helpers/useDocumentTitle";

export default function Layout({ children, title }) {
  useDocumentTitle(` MG CellSolution | ${title}`);

  return (
    <main className=" public_gradient ">
      <Navbar />

      {children}
    </main>
  );
}
