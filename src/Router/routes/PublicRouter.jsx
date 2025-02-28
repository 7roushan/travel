import React from "react";
import PublicAppBar from "../../Component/public/PublicAppBar";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer";


const PublicRouter = () => {
  return (
    <>
      <PublicAppBar />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default PublicRouter;
