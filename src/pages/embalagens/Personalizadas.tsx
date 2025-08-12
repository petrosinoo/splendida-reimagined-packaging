import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Printer, Image, CheckCircle, Sparkles, Brush } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import customPackaging from '@/assets/custom-packaging.jpg';

const Personalizadas = () => {
  const personalizationOptions = [
    {
      icon: Printer,
      title: 'Embalagens Impressas',
      description: 'A Splendida é uma empresa especializada no desenvolvimento de embalagens de papelão impressas. Produzimos em diferentes cores para atender as necessidades dos clientes.',
      link: '/embalagens/personalizadas/impressas'
    },
    {
      icon: Image,
      title: 'Embalagens Estampadas', 
      description: 'Com grande experiência no mercado, a Splendida é especializada na fabricação de embalagens de papelão estampadas e personalizadas.',
      link: '/embalagens/personalizadas/estampadas'
    }
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Destaque da Marca',
      description: 'Realizamos impressões nas embalagens de papelão ondulado em diferentes cores para garantir um serviço personalizado.'
    },
    {
      icon: CheckCircle,
      title: 'Transporte Seguro',
      description: 'Com as embalagens de papelão impressas é possível transportar vários tipos de produtos com muito mais segurança.'
    },
    {
      icon: Brush,
      title: 'Múltiplas Cores',
      description: 'Desenvolvemos modelos personalizados de embalagens com impressão de uma ou mais cores.'
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Embalagens de Papelão Impressas e Estampadas - Distribuidor Splendida"
        description="Embalagens de papelão impressas e estampadas personalizadas. A Splendida oferece caixas de papelão personalizadas com impressão em diferentes cores."
        keywords="embalagens de papelão impressas, embalagens de papelão estampadas, caixas personalizadas, embalagens personalizadas"
        canonical="https://splendidaembalagens.com.br/embalagens/personalizadas"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens de Papelão Impressas e Estampadas: <span className="text-secondary">Distribuidor Especializado</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A Splendida, fábrica de caixas de papelão, oferece soluções inteligentes em embalagens de papelão estampadas e embalagens de papelão impressas. 
              Produzimos caixas de papelão personalizadas para empresas com impressões em diferentes cores.
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
                Personalização que faz a diferença
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  A Splendida oferece soluções inteligentes e práticas que resultam em benefícios para os clientes que 
                  solicitam embalagens de papelão estampadas. Produzimos embalagens de papelão para empresas com impressões 
                  em diferentes cores.
                </p>
                <p>
                  Desenvolvemos modelos personalizados de embalagens com impressão de uma ou mais cores. 
                  Realizamos impressões nas embalagens de papelão ondulado em diferentes cores para garantir um serviço personalizado.
                </p>
                <p>
                  Com as embalagens de papelão impressas é possível transportar vários tipos de produtos com muito mais segurança.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={customPackaging} 
                alt="Embalagens personalizadas"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opções de Personalização */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Opções de personalização
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Escolha entre nossas diferentes opções de personalização para destacar sua marca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalizationOptions.map((option, index) => (
              <Card key={index} className="bg-card border-0 shadow-card group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                    <option.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-text mb-6">
                    {option.description}
                  </CardDescription>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to={option.link} className="flex items-center justify-center space-x-2">
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

      {/* Benefícios da Personalização */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Benefícios da personalização
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Vantagens que a personalização oferece para destacar sua marca e proteger seus produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mb-4">
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

      {/* Processo de Criação */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Processo de criação
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Do conceito até a entrega, conheça como desenvolvemos sua embalagem personalizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">01</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Briefing</h3>
              <p className="text-gray-text text-sm">Entendemos suas necessidades e objetivos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">02</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Design</h3>
              <p className="text-gray-text text-sm">Criamos o projeto visual da embalagem</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">03</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Aprovação</h3>
              <p className="text-gray-text text-sm">Você aprova o protótipo antes da produção</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">04</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Produção</h3>
              <p className="text-gray-text text-sm">Produzimos com qualidade e agilidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Crie sua embalagem única: solicite um orçamento!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco para obter mais informações sobre as embalagens de papelão estampadas. 
            Nossa equipe está pronta para criar a solução perfeita para sua marca.
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
              <Link to="/embalagens/personalizadas/impressas">
                Saiba Mais sobre Embalagens Impressas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Personalizadas;