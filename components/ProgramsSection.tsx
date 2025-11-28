"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  "Estudo & Trabalho",
  "Carreiras",
  "Idiomas",
  "High School",
  "Juventude Acumulada",
  "Universidade",
  "Férias",
  "Pais & Filhos",
  "Grupos"
];

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-widest">Nossas Ofertas</span>
            <h2 className="text-3xl font-bold mt-2 mb-4">Programas de intercâmbio</h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-gray-600">
            Oferecemos programas de intercâmbio completos para diferentes fases da vida, sempre com foco em segurança, suporte e experiência transformadora. Entre eles está a Imersão em Inglês para Adultos na Griggs International Academy, na Inglaterra, perfeita para quem quer evoluir o idioma em pouco tempo e com acompanhamento especializado. Escolha o programa que mais combina com você e conte com nossa equipe para organizar cada detalhe da sua viagem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-primary hover:shadow-md transition-all cursor-pointer flex justify-between items-center"
            >
              <span className="font-bold text-gray-800 group-hover:text-primary transition-colors">{program}</span>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transform group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
