"use client"
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutSection() {
  const features = [
    "13+ Anos de Experiência",
    "Orientação Completa",
    "Parceria Griggs Academy",
    "Imersão para Adultos"
  ];

    const images = [
      "/images/new-about.jpg",
      "/images/new-about2.jpg"
    ];
  
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-lg overflow-hidden">
               <motion.img
                  key={index} // importante pro fade funcionar
                  src={images[index]}
                  alt="Student lifestyle in London"
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }} // fade suave
                />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <p className="text-sm font-bold tracking-wider uppercase mb-2 text-primary">Por que nos escolher</p>
                <h3 className="text-2xl font-bold">Destrave seu inglês na prática</h3>
              </div>
            </div>
            {/* Decorative square */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 -z-10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-primary/20 -z-10 rounded-full"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
              Sobre o Programa
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Seu INTERCÂMBIO começa aqui
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Há mais de 13 anos, a Exchange Travel Company – ETC Intercâmbio ajuda brasileiros a realizarem o sonho de estudar no exterior, com orientação em cada etapa e acompanhamento próximo antes, durante e depois da viagem.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Em parceria com a Griggs International Academy, criamos uma imersão em inglês de 2 semanas na Inglaterra, pensada para adultos que querem destravar o inglês na prática: em sala de aula, nos passeios, nas conversas com colegas e no dia a dia.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Avatar" />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-bold text-black">1,200+ Alunos</p>
                <p className="text-xs text-gray-500">Embarcados com sucesso</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
