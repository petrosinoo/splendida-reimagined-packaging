import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-warehouse.jpg';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(33, 37, 41, 0.7), rgba(33, 37, 41, 0.7)), url(${heroImage})`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            https://www.linkedin.com/company/caixas-de-papel-o-splendida-embalagens/
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Qualidade, Agilidade e Sustentabilidade para Otimizar Sua
            Logística e Proteger Seus Produtos
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 text-base font-semibold w-full sm:w-auto"
            >
              <a 
                href="https://splendidaembalagens.com.br/orcamento/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2"
              >
                <span>Solicitar Orçamento Personalizado</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="default"
              className="border-white text-[#0d4172] bg-white hover:bg-[#e3e3e3] hover:text-[#0d4172] px-6 py-3 text-base w-full sm:w-auto"
            >
              <Link to="/quem-somos" className="flex items-center justify-center">
                Conheça Nossa Empresa
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;