import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Shield, Utensils, Recycle, Users, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const Alimentos = () => {
  const characteristics = [
    {
      icon: Shield,
      title: 'Proteção Durante Transporte',
      description: 'A Splendida produz embalagens de papelão para alimentos com o objetivo de proteger os produtos durante o transporte.'
    },
    {
      icon: Package,
      title: 'Especificações Técnicas',
      description: 'Disponibilizamos modelos de embalagens de papelão para alimentos com diferentes especificações técnicas.'
    },
    {
      icon: Utensils,
      title: 'Segurança Alimentar',
      description: 'Embalagens desenvolvidas especificamente para atender as normas de segurança da indústria alimentícia.'
    },
    {
      icon: Recycle,
      title: 'Sustentabilidade',
      description: 'As embalagens de papelão para alimentos são fabricadas com matéria-prima de alta qualidade e que causam menor impacto ambiental.'
    }
  ];

  const benefits = [
    'Proteção contra contaminação',
    'Resistência à umidade',
    'Conservação das propriedades dos alimentos',
    'Facilidade de manuseio e armazenamento',
    'Identificação clara do produto',
    'Conformidade com normas sanitárias',
    'Sustentabilidade ambiental',
    'Customização com impressão'
  ];

  const sectors = [
    {
      title: 'Indústria Alimentícia',
      description: 'Comercializamos produtos para empresas das áreas: alimentícia. A Splendida disponibiliza as melhores caixas de papelão para indústrias do ramo alimentício.'
    },
    {
      title: 'Setor de Bebidas',
      description: 'A Splendida é uma fábrica de caixas de papelão para os setores: alimentícios, de bebidas.'
    },
    {
      title: 'Agroindústria',
      description: 'Soluções especializadas para produtos agroindustriais com requisitos específicos de proteção e conservação.'
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Embalagens de Papelão para Alimentos - Distribuidor Splendida | Caixas de Papelão"
        description="Embalagens de papelão para alimentos com segurança e qualidade. A Splendida, fábrica de caixas de papelão, oferece caixas específicas para a indústria alimentícia."
        keywords="embalagens de papelão para alimentos, caixas de papelão para alimentos, embalagens alimentos, distribuidor embalagens papelão"
        canonical="https://splendidaembalagens.com.br/embalagens/alimentos"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens de Papelão para Alimentos: <span className="text-secondary">Distribuidor Especializado</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Procurando embalagens de papelão para alimentos? A Splendida, fábrica de caixas de papelão, oferece as melhores caixas de papelão para alimentos do mercado. 
              A empresa possui grande experiência no desenvolvimento de embalagens de papelão para alimentos dos mais variados tipos.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre o Produto */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Soluções Especializadas para Alimentos
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Procurando embalagens de papelão para alimentos? A Splendida oferece as melhores soluções do mercado. 
                  A empresa possui grande experiência no desenvolvimento de embalagens de papelão para alimentos dos mais variados tipos.
                </p>
                <p>
                  Possuímos uma ótima estrutura para atender todas as solicitações por embalagens de papelão para alimentos, 
                  com muita agilidade e precisão. Proporcionamos melhores resultados e maiores lucros para os clientes com 
                  a comercialização de embalagens de papelão para alimentos.
                </p>
                <p>
                  A Splendida trabalha para suprir as necessidades mercadológicas de seus clientes através de embalagens 
                  de papelão para alimentos. Disponibilizamos modelos de embalagens de papelão para alimentos com diferentes 
                  especificações técnicas.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens para alimentos"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características Essenciais */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Características Essenciais
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Desenvolvidas especificamente para atender os requisitos únicos da indústria alimentícia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characteristics.map((characteristic, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <characteristic.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {characteristic.title}
                </h3>
                <p className="text-gray-text">
                  {characteristic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matéria-Prima e Sustentabilidade */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Matéria-prima sustentável"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Matéria-Prima e Sustentabilidade
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  As embalagens de papelão para alimentos são fabricadas com matéria-prima de alta qualidade e que 
                  causam menor impacto ambiental. O fabricante de caixas de papelão comercializa produtos para empresas 
                  das áreas: alimentícia.
                </p>
                <p>
                  A Splendida é uma fábrica de caixas de papelão para os setores: alimentícios, de bebidas. 
                  Utilizamos materiais de primeira linha que garantem a segurança dos alimentos e a sustentabilidade ambiental.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Materiais atóxicos e seguros</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Baixo impacto ambiental</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>100% reciclável</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Benefícios para a Indústria Alimentícia
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Vantagens específicas que garantem a qualidade e segurança dos seus produtos alimentícios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-card">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-text text-sm font-medium">{benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setores Atendidos */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Setores Atendidos
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Soluções especializadas para diferentes segmentos da indústria alimentícia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="bg-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{sector.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalização */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Personalização Completa
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Desenvolvemos modelos personalizados de embalagens de papelão para alimentos com impressão de uma 
                  ou mais cores. Cada solução é desenvolvida considerando as especificidades do produto alimentício 
                  e as necessidades do cliente.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-primary" />
                    <span>Formatos personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Impressão com logo da marca</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Prazos otimizados</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens personalizadas para alimentos"
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
            Garanta a Qualidade do Seu Produto: Solicite um Orçamento!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Fale conosco para saber mais sobre os benefícios que a sua empresa pode obter com as embalagens de papelão para alimentos. 
            Nossa equipe está pronta para desenvolver a solução ideal.
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
              <Link to="/embalagens/segmento/alimenticia">
                Veja Nossas Soluções para a Indústria Alimentícia
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Alimentos;