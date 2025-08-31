// This page is a server rendered page
"use client"

// import AboutTemplate from "../../modules/about/page";
import Breadcrumb from "../components/shared/BreadCrumb";
import Context from "../components/shared/Context";
// import Loader from "../components/shared/Loader";
// import { Suspense } from "react";
export default function AboutPage() {
  return (
   <>
    <Breadcrumb featuredImage="/images/breadcrumb.avif" />
    <h4 className="text-center bg-white text-black text-lg p-10 font-bold">About Us</h4>
     <Context />
   </>
     
  );
}
