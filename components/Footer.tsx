"use client"
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 w-[120px]">
               <img width="100%"  src="./logo-griggs.png" alt="Logo Griggs" className="w-[80px] md:w-full"/>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Simplify Your Journey, Achieve Dreams. Somos consultores profissionais dedicados a tornar seus sonhos de educação internacional uma realidade.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Nossos Serviços</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Consultoria de Vistos", "Orientação de Carreira", "Admissões Universitárias", "Serviços de Imigração", "Programas de Idiomas"].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}
                </a></li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Links Úteis</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["Sobre Nós", "Nossa Equipe", "Depoimentos", "Blog & Notícias", "Suporte"].map(item => (
                <li key={item}><a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> {item}
                </a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-primary pl-3">Fale Conosco</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(+230) 459-7922</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>suporte@vegira.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Education Ave, London, UK</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 Vegira. Todos os direitos reservados.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
