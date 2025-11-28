"use client"
import { motion } from "framer-motion";
import { ShieldCheck, Wallet, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Segurança e suporte dedicado",
    text: "Cuidamos da sua experiência do início ao fim. Você viaja com transfers entre aeroporto e campus, alojamento em ambiente seguro, acompanhamento durante o programa e orientação em todas as etapas, para aproveitar cada momento com tranquilidade."
  },
  {
    icon: Wallet,
    title: "O sonho que cabe no seu orçamento",
    text: "A imersão tem duração de 2 semanas e inclui aulas, visitas a Londres, hospedagem em campus e 2 refeições por dia. Nossa equipe ajuda você a planejar o investimento e organizar os demais custos da viagem, com condições especiais para 2026."
  },
  {
    icon: Users,
    title: "Consultores que já foram intercambistas",
    text: "Nossos consultores já viveram experiências de intercâmbio e sabem, na prática, quais são as dúvidas e inseguranças de quem vai estudar fora. Eles compartilham vivências reais, explicam o dia a dia no campus da Griggs e te ajudam a entender se essa imersão é o programa certo para o seu momento."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Por que escolher a Vegira</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">Tudo que você precisa para uma jornada perfeita</h2>
          <p className="text-gray-600">Oferecemos suporte completo para garantir que sua jornada educacional seja tranquila, segura e bem-sucedida.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border-b-4 border-transparent hover:border-primary"
            >
              <div className="w-16 h-16 bg-[#FFF5F5] rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
