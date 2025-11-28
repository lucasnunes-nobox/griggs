"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["INÍCIO", "PÁGINAS", "VISTOS", "PAÍSES", "SERVIÇOS", "BLOG"];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 h-[80px] flex items-center">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              V
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tight">Vegira</span>
              <span className="text-[10px] text-gray-500 font-medium tracking-widest">WE ARE PROFESSIONAL</span>
            </div>
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
          <Button className="bg-primary hover:bg-[#A01F24] text-white font-semibold text-xs tracking-wider px-6 py-6 rounded uppercase">
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
          <Button className="w-full bg-primary hover:bg-[#A01F24] text-white font-semibold">
            FAZER COTAÇÃO
          </Button>
        </div>
      )}
    </nav>
  );
}
