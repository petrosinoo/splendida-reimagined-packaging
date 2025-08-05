import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Shield, Layers, Recycle, Users, Cog } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const Ondulado = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Qualidade Superior',
      description: 'Elevados padrões de qualidade, eficiência e desempenho na produção de embalagens de papelão ondulado.'
    },
    {
      icon: Package,
      title: 'Versatilidade Total',
      description: 'Desenvolvemos embalagens de papelão ondulado de qualquer especificação técnica, conforme as necessidades dos clientes.'
    },
    {
      icon: Shield,
      title: 'Proteção Eficiente',
      description: 'As caixas de papelão ondulado são materiais apropriados para proteger vários tipos de produtos, principalmente em transportes.'
    },
    {
      icon: Recycle,
      title: 'Sustentabilidade',
      description: 'Utilizamos matéria-prima de qualidade e com impacto ambiental reduzido para o desenvolvimento de embalagens de papelão ondulado.'
    }
  ];

  const industries = [
    'E-commerce e varejo',
    'Indústria alimentícia', 
    'Setor automotivo',
    'Eletroeletrônicos',
    'Produtos farmacêuticos',
    'Têxtil e confecção',
    'Mudanças e armazenamento',
    'Exportação e importação'
  ];

  const fabricationProcess = [
    {
      step: '01',
      title: 'Seleção de Matéria-Prima',
      description: 'Utilizamos materiais de primeira linha e que causam menor impacto ambiental.'
    },
    {
      step: '02', 
      title: 'Ondulação',
      description: 'Processo de criação da estrutura ondulada que confere resistência às embalagens.'
    },
    {
      step: '03',
      title: 'Colagem',
      description: 'União das camadas através de cola de alta qualidade e secagem controlada.'
    },
    {
      step: '04',
      title: 'Acabamento',
      description: 'Corte, vinco e personalização conforme especificações técnicas do cliente.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens de Papelão Ondulado: <span className="text-secondary">Qualidade, Eficiência e Desempenho</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Com grande experiência no mercado, a Splendida é uma empresa especializada no desenvolvimento 
              de embalagens de papelão ondulado com elevados padrões de qualidade, eficiência e desempenho.
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
                Soluções Completas em Embalagens Onduladas
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Com grande experiência no mercado, a Splendida é uma empresa especializada no desenvolvimento 
                  de embalagens de papelão ondulado. Contamos com elevados padrões de qualidade, eficiência e 
                  desempenho na produção de embalagens de papelão ondulado.
                </p>
                <p>
                  A Splendida oferece soluções em embalagens de papelão ondulado com o objetivo de suprir 
                  diversos tipos de necessidades mercadológicas. Desenvolvemos embalagens de papelão ondulado 
                  de qualquer especificação técnica, conforme as necessidades dos clientes.
                </p>
                <p>
                  As caixas de papelão ondulado são materiais apropriados para proteger vários tipos de produtos, 
                  principalmente em transportes. Disponibilizamos embalagens de papelão ondulado para empresas 
                  dos mais variados portes e segmentos do mercado.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens de papelão ondulado"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios e Características */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Benefícios e Características
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Atendemos as mais exigentes normas de gerenciamento e padronização de processos 
              dos nossos clientes com as embalagens de papelão ondulado.
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

      {/* Matéria-Prima e Sustentabilidade */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Matéria-Prima e Sustentabilidade
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  Utilizamos matéria-prima de qualidade e com impacto ambiental reduzido para o 
                  desenvolvimento de embalagens de papelão ondulado. Utilizamos materiais de primeira 
                  linha e que causam menor impacto ambiental na fabricação de caixas de papelão ondulado.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Materiais 100% recicláveis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Baixo impacto ambiental</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Matéria-prima de primeira qualidade</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Matéria-prima sustentável"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Especificações Técnicas */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="bg-card p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
              Especificações Técnicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">125-200g/m²</div>
                <div className="text-gray-text">Gramatura</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8000N</div>
                <div className="text-gray-text">Resistência BCT</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-text">Reciclável</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">3-15mm</div>
                <div className="text-gray-text">Espessura</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicações por Indústria */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Aplicações por Indústria
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Nossos produtos atendem uma ampla gama de setores e necessidades industriais.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-light-blue p-4 rounded-lg text-center">
                <span className="text-gray-text font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Fabricação */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Processo de Fabricação
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Conheça nosso processo produtivo que garante a qualidade e eficiência de nossas embalagens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricationProcess.map((process, index) => (
              <Card key={index} className="bg-card border-0 shadow-card text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Solicite um Orçamento para Embalagens Onduladas
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Entre em contato conosco para solicitar um orçamento de embalagens de papelão ondulado. 
            Nossa equipe está pronta para desenvolver a solução perfeita para suas necessidades.
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
              <Link to="/embalagens/personalizadas">
                Conheça Nossas Soluções Personalizadas
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ondulado;