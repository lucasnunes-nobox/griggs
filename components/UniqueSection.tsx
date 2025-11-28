"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function UniqueSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Seu intercâmbio é <span className="text-primary">único</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Cada pessoa tem uma história, um nível de inglês e um objetivo diferente. Por isso, a imersão em inglês da Griggs é focada em adultos que querem usar o idioma na vida real: pedir comida, se virar no transporte, fazer amizades internacionais, participar de grupos de estudo e ganhar confiança para falar sem medo.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Você escolhe o melhor momento em 2026 para viajar, e nós cuidamos dos detalhes para que a experiência seja inesquecível.
            </p>
            <Button className="bg-primary hover:bg-[#A01F24] text-white px-8 py-6 text-sm font-bold uppercase rounded shadow-lg mt-4">
              Comece Sua Jornada
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/images/student_lifestyle_in_london.png"
              alt="Student lifestyle in London" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
