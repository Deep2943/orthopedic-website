import React, { useEffect } from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import {seo} from '../js/seo';

export default function Layout( {children, pageTitle} ) {

  // Dynamic page title change 
  useEffect(() => {
    seo({
        title: pageTitle + " | Orthopedic Website"
    });
  }, [pageTitle]);

  return (
    <>
    <Header / >
    <main>{children}</main>
    <Footer / >
    </>
  );
}