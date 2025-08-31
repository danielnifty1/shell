// "use client"
// import { useState } from "react";
// import { use } from "react";
import Breadcrumb from "@/app/components/shared/BreadCrumb";
import { motion } from "framer-motion";
// import AboutBody from "./AboutBody";
import { About, Value } from "@/utils/static";
export default function AboutPage() {
   
//   const [about, setAbout] = useState("");
//   const [value, setValue] = useState("");


// About.map((about_value)=>(
//     setAbout(about_value.about),
//     setValue(about_value.value)

// ))

  // const values = use(About);
  // const about = use(fetchAbout());

  return (
    <>
    <div>
      <Breadcrumb featuredImage="/images/about.jpeg" />
      <div className="container mx-auto px-4 py-8 mt-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold  mt-6 mb-6">About Us</h1>

          <div className="space-y-6">
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600">{About}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">{About}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md mb-10 "
            >
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <p className="text-gray-600">{Value}</p>
              
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
