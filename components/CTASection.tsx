"use client"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src="/images/professional_travel_consultation.png" alt="Background" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-4">
            <Plane className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Já pensou no seu próximo destino? ✈️
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Quer entender se a imersão em inglês na Inglaterra é ideal para você? Entre em contato com nossos consultores e tire suas dúvidas e ajude a planejar cada etapa da sua viagem de forma segura e organizada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-primary hover:bg-[#be9549] text-white px-10 py-7 text-base font-bold uppercase rounded shadow-lg">
              Fale Conosco Agora
            </Button>
            <Button variant="outline" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black px-10 py-7 text-base font-bold uppercase rounded">
              Baixar Brochura
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
