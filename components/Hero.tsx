"use client"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] bg-[#F5F5F5] overflow-hidden flex items-center">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-primary font-semibold tracking-widest text-sm uppercase">
            Simplify Your Journey, Achieve Dreams
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-[1.1]">
            Seu inglês pronto pra vida real em <span className="text-primary">2 semanas</span> na Inglaterra.
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Viva uma imersão em inglês no campus da Griggs International Academy, pratique o idioma todos os dias e visite Londres, em uma experiência pensada para adultos que querem destravar o inglês com segurança e suporte.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-primary hover:bg-[#be9549] text-white text-sm font-bold px-8 py-6 rounded uppercase tracking-wide shadow-lg hover:translate-y-[-2px] transition-all">
              FALE COM UM CONSULTOR
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary bg-transparent hover:bg-primary/5 text-sm font-bold px-8 py-6 rounded uppercase tracking-wide">
              Saiba Mais
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-full min-h-[400px] md:min-h-[600px]"
        >
            <div className="absolute inset-0 bg-primary/5 rounded-tl-[100px] rounded-br-[100px] transform rotate-3 scale-95 z-0"></div>
            <img 
              src="/images/london_university_campus_with_students.png"
              alt="Students in London" 
              className="relative z-10 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-xl"
            />
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 left-[-20px] z-20 bg-white p-6 rounded-lg shadow-xl max-w-[200px] border-l-4 border-primary hidden md:block">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-sm font-medium text-gray-600">Grupos de Imersão</p>
            </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 -skew-x-12 translate-x-1/4 z-0"></div>
    </section>
  );
}
