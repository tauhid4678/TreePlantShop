import React from "react";
import { Leaf, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center">
            <div className="bg-green-700 p-2 rounded-full text-white">
              <Leaf size={24} />
            </div>
            <h1 className="font-bold ml-3 text-2xl delius-swash-caps-regular">
              <a href="/" className="hover:text-green-400 transition-colors">
                GreenNest
              </a>
            </h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 font-medium text-gray-300">
          <a className="hover:text-green-500 transition-colors" href="#">
            About
          </a>
          <a className="hover:text-green-500 transition-colors" href="#">
            Contact
          </a>
          <a className="hover:text-green-500 transition-colors" href="#">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-green-500 transition-transform hover:-translate-y-1"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-transform hover:-translate-y-1"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-green-500 transition-transform hover:-translate-y-1"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-center items-center">
          <p className="text-gray-400 text-xs md:text-sm text-center">
            © 2025 GreenNest — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
