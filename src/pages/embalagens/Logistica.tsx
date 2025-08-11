import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Truck, TrendingUp, Clock, Zap, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const Logistica = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Aumento de Lucros',
      description: 'Proporcionamos excelentes resultados e aumento do lucro de nossos clientes com a venda de embalagens de papelão para logística.'
    },
    {
      icon: Package,
      title: 'Transporte Seguro',
      description: 'As embalagens de papelão para logística são ideais para o transporte de produtos por diferentes meios.'
    },
    {
      icon: Truck,
      title: 'Proteção Completa',
      description: 'Com as embalagens de papelão para logística, os produtos chegam até o seu destino com muita segurança e proteção.'
    },
    {
      icon: Zap,
      title: 'Soluções Inteligentes',
      description: 'O fabricante de caixas de papelão disponibiliza soluções inteligentes e práticas para o setor de logística das empresas.'
    }
  ];

  const features = [
    'Redução de custos operacionais',
    'Otimização do espaço de armazenamento',
    'Facilidade de manuseio e empilhamento',
    'Resistência durante o transporte',
    'Identificação clara dos produtos',
    'Compatibilidade com equipamentos logísticos',
    'Sustentabilidade e reciclabilidade',
    'Customização para diferentes produtos'
  ];

  const specifications = [
    {
      title: 'Personalização Total',
      description: 'A Splendida desenvolve modelos de embalagens de papelão para logística em diferentes especificações técnicas, conforme as necessidades.'
    },
    {
      title: 'Impressão Colorida',
      description: 'Desenvolvemos modelos personalizados de embalagens de papelão para logística, com impressões em diferentes cores.'
    },
    {
      title: 'Entrega Rápida',
      description: 'A Splendida possui mecanismos de gerenciamento de estoque que garantem um prazo de entrega reduzido das embalagens de papelão para logística.'
    },
    {
      title: 'Qualidade Superior',
      description: 'A Splendida utiliza papéis e tintas de extrema qualidade e que causam menor impacto ambiental para a fabricação de caixas de papelão para logística.'
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Caixas de Papelão para Logística - Embalagens de Papelão para Logística"
        description="A Splendida disponibiliza as melhores caixas de papelão para logística. Fabricamos caixas de papelão para logística ideais para transporte de produtos por diferentes meios."
        keywords="caixas de papelão para logística, embalagens de papelão para logística, caixas logística, embalagens logística"
        canonical="https://splendidaembalagens.com.br/embalagens/logistica"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Caixas de Papelão para Logística: <span className="text-secondary">Fabricante Especializado</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A Splendida é uma empresa com grande experiência na fabricação de caixas de papelão para logística. 
              Contamos com uma excelente estrutura para atender todas as demandas por caixas de papelão para logística, com muita rapidez e precisão.
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
                Soluções Inteligentes para Logística
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  A Splendida disponibiliza as melhores soluções para quem procura embalagens de papelão para logística. 
                  Trabalhamos com o objetivo de alcançar a excelência para atender todas as expectativas dos clientes que 
                  solicitam embalagens de papelão para logística.
                </p>
                <p>
                  Visamos suprir as necessidades mercadológicas dos clientes com as melhores embalagens de papelão para logística. 
                  As embalagens de papelão para logística são ideais para o transporte de produtos por diferentes meios.
                </p>
                <p>
                  Com as embalagens de papelão para logística, os produtos chegam até o seu destino com muita segurança e proteção. 
                  O fabricante de caixas de papelão disponibiliza soluções inteligentes e práticas para o setor de logística das empresas.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens para logística"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios para Logística */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Benefícios para Sua Logística
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Proporcionamos excelentes resultados e aumento do lucro de nossos clientes com a venda de embalagens de papelão para logística.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-gray-text">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Características e Vantagens */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Vantagens Operacionais
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Características que otimizam seus processos logísticos e aumentam a eficiência operacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="bg-light-blue p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-gray-text text-sm font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personalização e Especificações */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Personalização e Agilidade
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Soluções sob medida com rapidez na entrega para otimizar sua operação logística.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="bg-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{spec.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gerenciamento de Estoque */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Gerenciamento de estoque"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Gerenciamento de Estoque da Splendida
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  A Splendida possui mecanismos de gerenciamento de estoque que garantem um prazo de entrega 
                  reduzido das embalagens de papelão para logística. Comercializamos embalagens de papelão para 
                  logística de empresas dos mais variados portes e segmentos.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Prazos de entrega reduzidos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Package className="h-5 w-5 text-primary" />
                    <span>Estoque otimizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span>Atendimento a todos os segmentos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transforme Sua Logística: Peça um Orçamento Agora!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato com a Splendida para solicitar um orçamento de embalagens de papelão para logística. 
            Otimize seus processos e aumente seus lucros.
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
              <Link to="/embalagens/transporte">
                Descubra Nossas Soluções para Transporte
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Logistica;