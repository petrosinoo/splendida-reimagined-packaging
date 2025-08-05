import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, Truck } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import teamWorking from '@/assets/team-working.jpg';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const QuemSomos = () => {
  const values = [
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos constantemente a excelência em todos os nossos processos e produtos.'
    },
    {
      icon: Heart,
      title: 'Atenção ao Cliente',
      description: 'Priorizamos o atendimento personalizado e as necessidades específicas de cada cliente.'
    },
    {
      icon: Users,
      title: 'Envolvimento dos Colaboradores',
      description: 'Valorizamos nossa equipe e promovemos um ambiente colaborativo e motivador.'
    },
    {
      icon: Truck,
      title: 'Agilidade',
      description: 'Garantimos rapidez e eficiência em todas as etapas do nosso trabalho diário.'
    }
  ];

  const achievements = [
    {
      number: '15+',
      title: 'Anos de Experiência',
      description: 'No mercado de embalagens'
    },
    {
      number: '500+',
      title: 'Clientes Atendidos',
      description: 'Em diversas regiões'
    },
    {
      number: '100%',
      title: 'Sustentabilidade',
      description: 'Materiais recicláveis'
    },
    {
      number: '24h',
      title: 'Agilidade',
      description: 'Resposta aos orçamentos'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Conheça a <span className="text-secondary">Splendida</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Uma empresa jovem que nasceu com um conceito inovador, 
              dedicada a revolucionar o mercado de embalagens de papelão.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  A Splendida é uma empresa jovem que nasceu com um conceito inovador,
                  tendo como filosofia a busca constante pela excelência, atenção com
                  o cliente, envolvimento dos colaboradores e agilidade que faz parte
                  do nosso trabalho diário.
                </p>
                <p>
                  Somos um distribuidor de embalagens de papelão que trabalha com o 
                  objetivo de atender todas as necessidades dos clientes, desenvolvendo 
                  soluções inteligentes para atender todas as expectativas. Contamos 
                  com uma excelente estrutura para atender todos os tipos de demandas 
                  com muita agilidade e precisão.
                </p>
                <p>
                  Com grande experiência no mercado, somos uma empresa especializada 
                  no desenvolvimento de embalagens de papelão ondulado, com elevados 
                  padrões de qualidade, eficiência e desempenho na produção.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={teamWorking} 
                alt="Equipe da Splendida"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-card border-0 shadow-card">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-text text-base">
                  Fornecer soluções completas em embalagens de papelão, 
                  garantindo qualidade, sustentabilidade e excelência no 
                  atendimento para otimizar a logística de nossos clientes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-0 shadow-card">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-text text-base">
                  Ser reconhecida como referência no mercado de embalagens de 
                  papelão, destacando-se pela inovação, qualidade e 
                  compromisso com a sustentabilidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-0 shadow-card">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mx-auto mb-4">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-text text-base">
                  Excelência, integridade, inovação, sustentabilidade, 
                  compromisso com o cliente e valorização dos 
                  colaboradores.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Nossos Valores Detalhados */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Nossos Princípios
            </h3>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Os valores que norteiam todas as nossas ações e decisões.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground rounded-full mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {value.title}
                </h4>
                <p className="text-gray-text text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números e Conquistas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Nossos Números
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Resultados que comprovam nossa dedicação e qualidade.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <span className="text-4xl lg:text-5xl font-bold text-primary">
                    {achievement.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {achievement.title}
                </h3>
                <p className="text-gray-text text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa Estrutura */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Estrutura da Splendida"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Nossa Estrutura
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Contamos com uma excelente estrutura para atender todos os tipos 
                  de demandas com muita agilidade e precisão. Nossa empresa está 
                  equipada com tecnologia moderna e processos otimizados.
                </p>
                <p>
                  Nosso parque produtivo é estrategicamente localizado para 
                  atender com eficiência toda a região de São Paulo e adjacências, 
                  garantindo prazos reduzidos e qualidade superior.
                </p>
              </div>
              
              <div className="space-y-3 mt-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Certificação ISO 9001</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Processos sustentáveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Controle de qualidade rigoroso</span>
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
            Pronto para Conhecer Nossas Soluções?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            com as melhores soluções em embalagens de papelão.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 px-8 py-4 text-lg"
            >
              <Link to="/embalagens" className="flex items-center space-x-2">
                <span>Conheça Nossas Embalagens</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuemSomos;