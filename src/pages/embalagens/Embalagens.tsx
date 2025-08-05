import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Utensils, Palette, Target, Building } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';
import customPackaging from '@/assets/custom-packaging.jpg';

const Embalagens = () => {
  const packagingTypes = [
    {
      icon: Package,
      title: 'Embalagens de Papelão Ondulado',
      description: 'Soluções versáteis e resistentes para diversas aplicações industriais e comerciais.',
      link: '/embalagens/ondulado',
      image: cardboardBoxes
    },
    {
      icon: Truck,
      title: 'Embalagens para Transporte',
      description: 'Proteção máxima durante o processo logístico, garantindo integridade dos produtos.',
      link: '/embalagens/transporte',
      image: cardboardBoxes
    },
    {
      icon: Building,
      title: 'Embalagens para Logística',
      description: 'Otimização de espaço e eficiência operacional para centros de distribuição.',
      link: '/embalagens/logistica',
      image: cardboardBoxes
    },
    {
      icon: Utensils,
      title: 'Embalagens para Alimentos',
      description: 'Segurança alimentar e sustentabilidade para produtos alimentícios.',
      link: '/embalagens/alimentos',
      image: cardboardBoxes
    },
    {
      icon: Palette,
      title: 'Embalagens Personalizadas',
      description: 'Designs exclusivos e impressão de alta qualidade para destacar sua marca.',
      link: '/embalagens/personalizadas',
      image: customPackaging
    },
    {
      icon: Target,
      title: 'Embalagens por Segmento',
      description: 'Soluções específicas para diferentes setores da economia.',
      link: '/embalagens/segmento',
      image: cardboardBoxes
    }
  ];

  const benefits = [
    {
      title: 'Sustentabilidade',
      description: 'Todas as nossas embalagens são 100% recicláveis e produzidas com materiais sustentáveis.'
    },
    {
      title: 'Qualidade Garantida',
      description: 'Rigoroso controle de qualidade em todas as etapas da produção.'
    },
    {
      title: 'Customização Total',
      description: 'Desenvolvemos soluções sob medida para cada necessidade específica.'
    },
    {
      title: 'Entrega Rápida',
      description: 'Prazos otimizados e logística eficiente para atender suas demandas.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-secondary">Embalagens de Papelão</span> da Splendida
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Soluções completas e sustentáveis para todas as suas necessidades de embalagem. 
              Qualidade, resistência e versatilidade em cada produto.
            </p>
          </div>
        </div>
      </section>

      {/* Tipos de Embalagens */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Nossos Tipos de Embalagens
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Explore nossa linha completa de embalagens de papelão, desenvolvidas para atender 
              diferentes necessidades e segmentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagingTypes.map((type, index) => (
              <Card key={index} className="group bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="aspect-video bg-light-blue flex items-center justify-center">
                  <type.icon className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-text mb-4">
                    {type.description}
                  </CardDescription>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to={type.link} className="flex items-center justify-center space-x-2">
                      <span>Saiba Mais</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Por Que Escolher Nossas Embalagens?
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Vantagens que fazem a diferença na proteção e apresentação dos seus produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-card text-center">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-gray-text text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Especificações Técnicas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Especificações Técnicas
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Nossas embalagens de papelão são produzidas com os mais altos padrões 
                  de qualidade, utilizando materiais selecionados e processos rigorosamente 
                  controlados.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Resistência:</strong> BCT até 8000N</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Gramatura:</strong> 125g/m² a 200g/m²</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Ondulação:</strong> Onda simples, dupla e tripla</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Sustentabilidade:</strong> 100% reciclável</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens de papelão da Splendida"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Precisa de uma Solução Específica?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Nossa equipe está pronta para desenvolver a embalagem ideal para o seu produto. 
            Entre em contato e receba um orçamento personalizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 px-8 py-4 text-lg"
            >
              <Link to="/orcamento" className="flex items-center space-x-2">
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              <Link to="/contato">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Embalagens;