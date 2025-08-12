import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Star, Shield, CheckCircle, Eye, Brush } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import customPackaging from '@/assets/custom-packaging.jpg';

const Estampadas = () => {
  const advantages = [
    {
      icon: Star,
      title: 'Destaque visual',
      description: 'Embalagens estampadas garantem que seus produtos se destaquem no mercado.'
    },
    {
      icon: Shield,
      title: 'Proteção superior',
      description: 'Além da estética, oferecemos máxima proteção para seus produtos durante o transporte.'
    },
    {
      icon: Eye,
      title: 'Identificação fácil',
      description: 'Estampas facilitam a identificação rápida dos produtos em estoque e prateleiras.'
    }
  ];

  const applications = [
    'Indústria alimentícia',
    'Produtos farmacêuticos',
    'Cosméticos e perfumaria',
    'Eletroeletrônicos',
    'Vestuário e calçados',
    'Produtos de limpeza'
  ];

  return (
    <Layout>
      <SEOHead 
        title="Embalagens de Papelão Estampadas - Splendida Embalagens"
        description="Embalagens de papelão estampadas personalizadas. A Splendida oferece caixas estampadas com designs únicos para destacar sua marca no mercado."
        keywords="embalagens de papelão estampadas, caixas estampadas, embalagens personalizadas, papelão estampado"
        canonical="https://splendidaembalagens.com.br/embalagens/personalizadas/estampadas"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens de papelão estampadas: <span className="text-secondary">soluções personalizadas</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A Splendida é especializada na fabricação de embalagens de papelão estampadas e personalizadas. 
              Desenvolvemos soluções únicas que destacam sua marca e protegem seus produtos.
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Estampagem que agrega valor
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Com grande experiência no mercado, a Splendida é especializada na fabricação de 
                  embalagens de papelão estampadas e personalizadas. Oferecemos soluções completas 
                  que combinam funcionalidade e design exclusivo.
                </p>
                <p>
                  Nossas embalagens estampadas são desenvolvidas com tecnologia avançada, garantindo 
                  cores vibrantes e durabilidade. Cada projeto é único e criado especialmente para 
                  destacar sua marca no mercado.
                </p>
                <p>
                  Utilizamos materiais de alta qualidade e processos sustentáveis para criar 
                  embalagens que protegem seus produtos e valorizam sua marca.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={customPackaging} 
                alt="Embalagens estampadas personalizadas"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Vantagens das embalagens estampadas
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Descubra os benefícios que as embalagens estampadas podem oferecer para seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-gray-text">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aplicações */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Aplicações das embalagens estampadas
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Nossas embalagens estampadas atendem diversos segmentos industriais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((application, index) => (
              <Card key={index} className="bg-card border-0 shadow-card text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {application}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Desenvolvimento */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Processo de desenvolvimento
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Do conceito à entrega, acompanhe como criamos sua embalagem estampada personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">01</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Consulta</h3>
              <p className="text-gray-text text-sm">Analisamos suas necessidades e objetivos de marca</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">02</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Criação</h3>
              <p className="text-gray-text text-sm">Desenvolvemos o design e padrão de estampagem</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">03</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Aprovação</h3>
              <p className="text-gray-text text-sm">Você aprova o protótipo antes da produção final</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">04</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Entrega</h3>
              <p className="text-gray-text text-sm">Produzimos e entregamos com qualidade garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transforme sua marca com embalagens estampadas únicas!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco para criar embalagens estampadas que destacam sua marca. 
            Nossa equipe está pronta para desenvolver a solução perfeita para seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 px-8 py-4 text-lg"
            >
              <Link to="/orcamento" className="flex items-center space-x-2">
                <span>Solicitar orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              <Link to="/embalagens/personalizadas/impressas">
                Ver embalagens impressas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Estampadas;