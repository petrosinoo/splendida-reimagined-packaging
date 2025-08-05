import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
                <Link to="/orcamento" className="text-gray-300 hover:text-secondary transition-colors">
                  Orçamento
                </Link>
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
              <Button asChild variant="outline" className="w-full text-white border-white hover:bg-white hover:text-primary">
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
          <p>&copy; 2024 Splendida Embalagens. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;