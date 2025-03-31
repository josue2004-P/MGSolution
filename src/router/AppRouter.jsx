import { Route, Routes } from "react-router-dom";

import {
  HomeAdmin,
} from "../admin";

import { CatalagoPage, PublicPage } from "../public";




export const AppRouter = () => {
  return (
    <Routes>
      <>
        {/* PUBLICAS */}
        <Route path="/" element={<PublicPage />} />
        <Route path="/catalago" element={<CatalagoPage />} />

        {/* ADMIN */}
        <Route path="/dashboard" element={<HomeAdmin />} />

        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </>
    </Routes>
  );
};
