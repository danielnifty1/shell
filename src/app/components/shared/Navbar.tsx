"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {categories} from '@/utils/static'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
  
     <nav className="border-b border-gray-100 bg-white/98 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/">
              <Image src={"/images/shell.png"} width={50} height={50} alt="logo" />
              {/* <h1 className="text-xl font-semibold text-gray-900">Shell</h1> */}

              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {
                categories.map((navItems)=>(
                  <Link
                    key={navItems.url}
                    href={navItems.url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      {navItems.label}
                    </Link>
                ))
              }
             
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
               
                 {
                categories.map((navItems)=>(
                  <Link
                    key={navItems.url}
                    href={navItems.url}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                     onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {navItems.label}
                    </Link>
                ))
              }
              </div>
            </div>
          )}
        </div>
      </nav>
   
  
  );
}
