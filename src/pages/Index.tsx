import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Recycle, Users, Lightbulb, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';
import teamWorking from '@/assets/team-working.jpg';
import customPackaging from '@/assets/custom-packaging.jpg';

const Index = () => {
  const services = [
    {
      icon: '📦',
      title: 'Caixas Onduladas',
      description: 'Embalagens de papelão ondulado com alta qualidade, eficiência e desempenho para diversas aplicações.',
      link: '/embalagens/ondulado'
    },
    {
      icon: '🚚',
      title: 'Caixas para Transporte',
      description: 'Embalagens de papelão para transporte com proteção e eficiência durante o processo logístico.',
      link: '/embalagens/transporte'
    },
    {
      icon: '🎨',
      title: 'Caixas Personalizadas',
      description: 'Embalagens de papelão impressas e estampadas para destacar sua marca.',
      link: '/embalagens/personalizadas'
    },
    {
      icon: '🍎',
      title: 'Caixas para Alimentos',
      description: 'Embalagens de papelão para alimentos com segurança, qualidade e sustentabilidade.',
      link: '/embalagens/alimentos'
    }
  ];

  const differentials = [
    {
      icon: Star,
      title: 'Qualidade Superior',
      description: 'Utilizamos matéria-prima de alta qualidade e processos rigorosos para garantir embalagens duráveis e eficientes.'
    },
    {
      icon: Clock,
      title: 'Prazos Reduzidos',
      description: 'Com gerenciamento de estoque eficiente e produção otimizada, garantimos agilidade na entrega dos seus pedidos.'
    },
    {
      icon: Recycle,
      title: 'Sustentabilidade',
      description: 'Compromisso com o meio ambiente, utilizando papéis e tintas com menor impacto ambiental em nossos processos.'
    },
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e dedicados, prontos para oferecer as melhores soluções e atendimento personalizado.'
    },
    {
      icon: Lightbulb,
      title: 'Soluções Personalizadas',
      description: 'Desenvolvemos embalagens sob medida para atender às especificações técnicas e necessidades exclusivas de cada cliente.'
    }
  ];

  const regions = [
    {
      title: 'São Paulo e Grande SP',
      description: 'Atendimento rápido e eficiente para a capital e toda a região metropolitana.'
    },
    {
      title: 'Alto Tietê e Vale do Paraíba',
      description: 'Soluções personalizadas para as indústrias e comércios dessas importantes regiões.'
    },
    {
      title: 'ABC Paulista',
      description: 'Presença forte no ABC, oferecendo agilidade e qualidade para sua empresa.'
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="Splendida - Distribuidor de Embalagens de Papelão | Caixas de Papelão Ondulado"
        description="Distribuidor de embalagens de papelão especializado em caixas de papelão ondulado, embalagens para transporte, alimentos e logística. Splendida embalagens de papelão com qualidade e preço competitivo."
        keywords="distribuidor de embalagens de papelão, caixas de papelão, embalagens de papelão ondulado, embalagens para transporte, embalagens para alimentos, splendida embalagens"
        canonical="https://splendidaembalagens.com.br/"
      />
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Distribuidor de Embalagens de Papelão - Splendida
              </h2>
              <div className="space-y-4 text-gray-text">
                <p className="text-lg">
                  A Splendida é um distribuidor de embalagens de papelão que
                  trabalha com o objetivo de atender todas as necessidades dos
                  clientes, desenvolvendo caixas de papelão ondulado e soluções inteligentes para atender todas
                  as expectativas. Como distribuidor de embalagens de papelão, contamos com uma excelente estrutura para
                  atender todos os tipos de demandas com muita agilidade e
                  precisão.
                </p>
                <p className="text-lg">
                  Com grande experiência no mercado, somos um distribuidor de embalagens de papelão
                  especializada no desenvolvimento de caixas de papelão ondulado, embalagens de papelão para transporte,
                  embalagens de papelão para alimentos e embalagens de papelão para logística, com elevados padrões de qualidade, eficiência e
                  desempenho na produção.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" variant="outline" className="bg-[#0d4172] text-white border-[#0d4172] hover:bg-white hover:text-[#0d4172] hover:border-[#0d4172]">
                  <Link to="/quem-somos" className="flex items-center space-x-2">
                    <span>Conheça Nossa Empresa</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/7d8a2b85-45dc-402f-a64f-52f54a409fe0.png" 
                alt="Profissional da Splendida trabalhando com equipamentos industriais"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Nossas Caixas de Papelão
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Distribuidor de embalagens de papelão com soluções completas para otimizar sua logística e proteger seus produtos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 border-0">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4 text-gray-text">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link} className="flex items-center justify-center space-x-2">
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

      {/* Differentials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Por Que Escolher a Splendida?
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Nossos diferenciais que garantem a melhor solução para sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <differential.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {differential.title}
                </h3>
                <p className="text-gray-text">
                  {differential.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">E muito mais!</h3>
            <p className="text-lg text-gray-text mb-6">
              Fale com um especialista e descubra tudo que podemos oferecer.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
              <Link to="/contato">Fale com Nossa Equipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Nossa Atuação Regional
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Proximidade e agilidade com atendimento especializado em diversas regiões do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {region.title}
                </h3>
                <p className="text-gray-text">
                  {region.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/atuacao">Veja Nossas Soluções por Região</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para Encontrar a Solução Ideal?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Fale com nossa equipe de especialistas e descubra como podemos
            ajudar sua empresa com embalagens personalizadas e atendimento de
            excelência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <a 
                href="https://api.whatsapp.com/send/?phone=5511945190641&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+embalagens+de+papel%C3%A3o.&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale Conosco pelo WhatsApp
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-[#0d4172] border-[#0d4172] hover:bg-[#0d4172] hover:text-[#e3e3e3] px-8 py-4 text-lg"
            >
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
      </section>
    </Layout>
  );
};

export default Index;