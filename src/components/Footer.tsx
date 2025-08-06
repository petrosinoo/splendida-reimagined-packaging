import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-hero-bg text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded font-bold text-lg">
                SPLENDIDA
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Soluções completas em embalagens de papelão para sua indústria. 
              Qualidade, agilidade e sustentabilidade.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Rua São Roque 1135, Vila Japão<br />Itaquaquecetuba-SP</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Siga nossas redes</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/splendidaembalagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                  title="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@splendidalp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                  title="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/splendida_embalagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition-colors"
                  title="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.tiktok.com/@splendidaembalage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-black transition-colors"
                  title="TikTok"
                >
                  <img 
                    src="/lovable-uploads/a108eea1-b4e5-4a4e-a1bd-1e6cc2aa4112.png" 
                    alt="TikTok" 
                    className="h-5 w-5 filter brightness-0 invert opacity-75 hover:opacity-100 transition-opacity"
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/company/caixas-de-papel-o-splendida-embalagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quem-somos" className="text-gray-300 hover:text-secondary transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/embalagens" className="text-gray-300 hover:text-secondary transition-colors">
                  Embalagens de Papelão
                </Link>
              </li>
              <li>
                <Link to="/atuacao" className="text-gray-300 hover:text-secondary transition-colors">
                  Atuação
                </Link>
              </li>
              <li>
                <a href="https://splendidaembalagens.com.br/orcamento/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">
                  Orçamento
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/embalagens/ondulado" className="text-gray-300 hover:text-secondary transition-colors">
                  Embalagens Onduladas
                </Link>
              </li>
              <li>
                <Link to="/embalagens/transporte" className="text-gray-300 hover:text-secondary transition-colors">
                  Para Transporte
                </Link>
              </li>
              <li>
                <Link to="/embalagens/alimentos" className="text-gray-300 hover:text-secondary transition-colors">
                  Para Alimentos
                </Link>
              </li>
              <li>
                <Link to="/embalagens/personalizadas" className="text-gray-300 hover:text-secondary transition-colors">
                  Personalizadas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span>(11) 2815-1023</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span>(11) 94519-0641</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span>vendas2@splendidaembalagens.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-secondary" />
                <span>Seg-Sex: 9h às 18h</span>
              </div>
            </div>
            
            <div className="mt-6 space-y-2">
              <Button 
                asChild
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href="https://api.whatsapp.com/send/?phone=5511945190641&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+embalagens+de+papel%C3%A3o.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fale no WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full text-[#0d4172] border-[#0d4172] hover:bg-[#0d4172] hover:text-[#e3e3e3]">
                <a 
                  href="https://splendidaembalagens.com.br/orcamento/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Splendida Embalagens. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido por <a href="https://www.dynamodigital.com.br" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-yellow-400 transition-colors">Dynamo Digital</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;