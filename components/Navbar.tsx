"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["INÍCIO", "PÁGINAS", "VISTOS", "PAÍSES", "SERVIÇOS", "BLOG"];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 h-[120px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-[120px]">
            <img width="100%"  src="./logo-griggs-2.png" alt="Logo Griggs" className="w-[80px] md:w-full"/>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-black hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-primary hover:bg-[#be9549] text-white font-semibold text-xs tracking-wider px-6 py-6 rounded uppercase">
            Fazer Cotação
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 md:hidden shadow-lg">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-semibold text-black hover:text-primary py-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-primary hover:bg-[#be9549] text-white font-semibold">
            FAZER COTAÇÃO
          </Button>
        </div>
      )}
    </nav>
  );
}
