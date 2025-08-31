"use client";
import React from "react";
import Breadcrumb from "@/app/components/shared/BreadCrumb";
import { ValueProps, aboutDetailsProps } from "@/utils/types";
import { motion } from "framer-motion";
import EmptyState from "@/app/components/shared/EmptyState";

const AboutBody: React.FC<{
  about: aboutDetailsProps[];
  values: ValueProps[];
}> = ({ about, values }) => {
  return about.length < 1 ? (
    <EmptyState description="Page isnt ready yet. Please check back later" />
  ) : (
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
              <p className="text-gray-600">{about[0]?.story}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">{about[0]?.vision}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md mb-10 "
            >
              <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ">
                {values?.map((value) => (
                  <li key={value.id}>{value?.value}</li>
                ))}
                {/* <li>Quality and Excellence</li>
                <li>Customer Satisfaction</li>
                <li>Innovation and Technology</li>
                <li>Sustainable Practices</li>
                <li>Transparency and Trust</li> */}
              </ul>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutBody;
