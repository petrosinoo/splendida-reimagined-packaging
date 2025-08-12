import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Truck, Shield, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MinasGerais = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Entrega Ágil em Minas Gerais',
      description: 'Prazos reduzidos e logística otimizada para todo o estado de Minas Gerais.'
    },
    {
      icon: Shield,
      title: 'Qualidade Garantida',
      description: 'Embalagens com elevados padrões de qualidade e resistência.'
    },
    {
      icon: Package,
      title: 'Soluções Personalizadas',
      description: 'Embalagens desenvolvidas conforme suas necessidades específicas.'
    },
    {
      icon: Award,
      title: 'Excelência no Atendimento',
      description: 'Equipe qualificada e atendimento diferenciado no estado.'
    }
  ];

  const sectors = [
    'Mineração',
    'Indústria Siderúrgica',
    'Indústria Alimentícia',
    'E-commerce',
    'Logística e Distribuição',
    'Indústria Farmacêutica',
    'Agronegócios',
    'Indústria Têxtil'
  ];

  const packagingTypes = [
    'Caixas de Papelão Ondulado',
    'Embalagens para E-commerce',
    'Caixas para Transporte',
    'Embalagens Personalizadas',
    'Caixas com Impressão',
    'Embalagens para Alimentos',
    'Divisórias e Separadores',
    'Embalagens Industriais'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Caixas de Papelão em <span className="text-secondary">Minas Gerais</span>
            </h1>
             <p className="text-xl text-gray-200 leading-relaxed">
               A Splendida é uma fábrica de caixas de papelão e oferece soluções completas em embalagens de papelão para Minas Gerais, 
               garantindo agilidade na entrega e qualidade superior para sua empresa.
             </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Presença Estratégica em Minas Gerais
            </h2>
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                A Splendida é uma empresa com grande experiência no desenvolvimento de embalagens de papelão em Minas Gerais. 
                Contamos com elevados padrões de qualidade, eficiência e desempenho para oferecer as melhores embalagens 
                de papelão em MG.
              </p>
              <p>
                Trabalhamos com o objetivo de atender todas as necessidades dos clientes que solicitam caixas de papelão 
                em Minas Gerais, fornecendo soluções personalizadas e eficientes para diversos segmentos industriais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Locais */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Benefícios Locais e Agilidade
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Fornecemos embalagens de papelão em Minas Gerais para empresas dos mais diversos portes e segmentos do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-card border-0 shadow-card">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-text">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                A Splendida possui um sistema de gerenciamento de estoque que garante a entrega de caixas de papelão 
                em Minas Gerais, com um excelente prazo. Contamos com uma ótima estrutura para garantir prazos curtos 
                de entrega de embalagens de papelão no estado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Embalagens */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Tipos de Embalagens Disponíveis
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Oferecemos uma ampla variedade de embalagens de papelão em Minas Gerais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {packagingTypes.map((type, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-medium text-foreground">{type}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto text-center mt-12">
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                A Splendida comercializa embalagens de papelão em Minas Gerais com qualquer especificação técnica exigida 
                pelos clientes. Oferecemos modelos de embalagens de papelão personalizados, com impressões em diferentes cores.
              </p>
              <p>
                Fabricamos caixas de papelão em MG, com a utilização de papéis e tintas que apresentam menor 
                impacto ambiental, garantindo sustentabilidade em nossos processos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setores Atendidos */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Setores Atendidos em Minas Gerais
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Atendemos diversos segmentos industriais em todo o estado de Minas Gerais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-card p-4 rounded-lg border border-border text-center">
                <p className="font-medium text-foreground">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Qualificada */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
              Equipe Qualificada
            </h2>
            <div className="space-y-4 text-gray-text text-lg">
              <p>
                A Splendida conta com colaboradores altamente treinados e qualificados para a fabricação de embalagens 
                de papelão em Minas Gerais. Nossa equipe regional está preparada para oferecer o melhor atendimento e 
                suporte técnico especializado em todo o estado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Solicite um Orçamento para Minas Gerais!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato com a Splendida para solicitar um orçamento de embalagens de papelão em Minas Gerais, sem compromisso.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 px-8 py-4 text-lg"
            >
              <a 
                href="https://splendidaembalagens.com.br/orcamento/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-[#0d4172] border-[#0d4172] hover:bg-[#0d4172] hover:text-white px-8 py-4 text-lg"
            >
              <Link to="/contato">Fale com Nossos Consultores</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MinasGerais;