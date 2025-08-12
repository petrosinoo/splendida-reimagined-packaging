import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Truck, Utensils, Pill, Shirt } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const Segmento = () => {
  const segments = [
    {
      icon: Utensils,
      title: 'Indústria alimentícia',
      description: 'Embalagens especializadas para alimentos, respeitando normas sanitárias e garantindo a qualidade dos produtos.',
      features: ['Segurança alimentar', 'Resistência à umidade', 'Proteção contra contaminação'],
      link: '/embalagens/alimentos'
    },
    {
      icon: Pill,
      title: 'Farmacêutica',
      description: 'Soluções seguras para medicamentos e produtos farmacêuticos, com proteção contra luz e umidade.',
      features: ['Proteção UV', 'Controle de umidade', 'Rastreabilidade'],
      link: '/contato'
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Embalagens robustas para equipamentos e produtos industriais, suportando grandes pesos.',
      features: ['Alta resistência', 'Proteção mecânica', 'Facilidade de manuseio'],
      link: '/embalagens/transporte'
    },
    {
      icon: Shirt,
      title: 'Têxtil e vestuário',
      description: 'Embalagens personalizadas para roupas, calçados e acessórios, preservando a qualidade dos produtos.',
      features: ['Proteção contra umidade', 'Design atrativo', 'Facilidade de abertura'],
      link: '/embalagens/personalizadas'
    },
    {
      icon: Building2,
      title: 'Construção civil',
      description: 'Soluções para materiais de construção, ferramentas e equipamentos, com alta durabilidade.',
      features: ['Resistência estrutural', 'Proteção contra intempéries', 'Empilhamento seguro'],
      link: '/contato'
    },
    {
      icon: Truck,
      title: 'Logística e e-commerce',
      description: 'Embalagens otimizadas para transporte e entrega, garantindo produtos íntegros na chegada.',
      features: ['Otimização de espaço', 'Proteção no transporte', 'Fácil identificação'],
      link: '/embalagens/logistica'
    }
  ];

  const benefits = [
    'Soluções customizadas para cada segmento',
    'Conformidade com normas específicas',
    'Otimização de custos logísticos',
    'Melhoria na apresentação dos produtos',
    'Redução de perdas e avarias',
    'Sustentabilidade ambiental'
  ];

  return (
    <Layout>
      <SEOHead 
        title="Embalagens por Segmento - Splendida Embalagens"
        description="Embalagens de papelão especializadas por segmento industrial. Soluções personalizadas para alimentícia, farmacêutica, têxtil, construção e mais."
        keywords="embalagens por segmento, embalagens industriais, embalagens alimentícias, embalagens farmacêuticas, embalagens têxtil"
        canonical="https://splendidaembalagens.com.br/embalagens/segmento"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens por segmento: <span className="text-secondary">soluções especializadas</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A Splendida desenvolve embalagens de papelão especializadas para cada segmento industrial, 
              garantindo que suas necessidades específicas sejam atendidas com qualidade e eficiência.
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
                Especialização que faz a diferença
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Cada segmento industrial possui características e necessidades únicas. Por isso, 
                  a Splendida desenvolveu expertise em diferentes setores, oferecendo soluções 
                  personalizadas que atendem às exigências específicas de cada área.
                </p>
                <p>
                  Nossa experiência nos permite criar embalagens que não apenas protegem seus produtos, 
                  mas também agregam valor, melhoram a apresentação e otimizam processos logísticos.
                </p>
                <p>
                  Trabalhamos em conformidade com as normas e regulamentações de cada segmento, 
                  garantindo que suas embalagens atendam a todos os requisitos necessários.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens especializadas por segmento"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos Atendidos */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Segmentos atendidos
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Oferecemos soluções especializadas para diversos setores da economia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <Card key={index} className="bg-card border-0 shadow-card group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                    <segment.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-text mb-4">
                    {segment.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {segment.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-text">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to={segment.link} className="flex items-center justify-center space-x-2">
                      <span>Saiba mais</span>
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
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Benefícios das soluções por segmento
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Vantagens de escolher embalagens especializadas para seu setor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-current rounded-full"></div>
                </div>
                <p className="text-gray-text">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Desenvolvimento */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Nosso processo de desenvolvimento
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Como desenvolvemos soluções específicas para cada segmento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">01</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Análise</h3>
              <p className="text-gray-text text-sm">Estudamos as especificidades do seu segmento</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">02</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Desenvolvimento</h3>
              <p className="text-gray-text text-sm">Criamos soluções customizadas para suas necessidades</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">03</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Testes</h3>
              <p className="text-gray-text text-sm">Validamos a solução com testes rigorosos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">04</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Implementação</h3>
              <p className="text-gray-text text-sm">Produzimos e entregamos com qualidade garantida</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Encontre a solução ideal para seu segmento!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco para descobrir como podemos desenvolver embalagens 
            especializadas para seu segmento industrial.
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
              <Link to="/contato">
                Falar com especialista
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Segmento;