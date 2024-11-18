
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar"

export default function About() {
  return (
    <section className="min-h-screen dark:bg-gray-900">
      <Navbar />
      
      <div className="container px-6 py-10 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center pt-16"
        >
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            About Us
          </h1>
          
          <div className="mt-8 space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              Our success is driven by our promise to deliver quality projects safely on time and within budget. We are
              known for building the most advanced facilities for our individual, corporate, institutional and
              government clients.
            </p>

            <p>
              More and more of clients are turning to us for our distinctive ability to implement
              innovative project management techniques and to serve as a reliable provider of knowledge-driven
              solutions for their complex construction projects.
            </p>

            <p>
              Our team of construction professionals offers a single-source solution for all of your construction-related needs.
              Whether its restoration, site preparation, a new facility or facility renovation, we have the experience
              and personnel to provide the highest quality construction on schedule and within budget.
            </p>

            <p>
              We support our clients from project inception, to the commissioning of the fully operational facility.
              And our network of local offices enables us to offer our clients the dual advantage of a strong local
              presence and broad geographic reach.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-6xl mx-auto mt-16 px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p>Committed to delivering excellence in every project with uncompromising standards.</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 text-white">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p>Leveraging cutting-edge technology and methods to stay ahead of industry trends.</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <h3 className="text-xl font-bold mb-3">Experience</h3>
              <p>Decades of expertise in handling complex construction projects across sectors.</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p>Committed to eco-friendly practices and sustainable construction methods.</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p>Dedicated to understanding and exceeding client expectations at every step.</p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
              <h3 className="text-xl font-bold mb-3">Global Reach</h3>
              <p>Strong local presence combined with extensive geographic coverage.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}