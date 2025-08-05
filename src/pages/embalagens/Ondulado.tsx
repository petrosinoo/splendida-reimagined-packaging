import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Shield, Layers } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const Ondulado = () => {
  const ondulationTypes = [
    {
      title: 'Onda Simples',
      description: 'Ideal para produtos leves e embalagens secundárias',
      thickness: '3-4mm',
      applications: ['Caixas de correio', 'Embalagens de eletrônicos', 'Separadores']
    },
    {
      title: 'Onda Dupla',
      description: 'Resistência superior para produtos de peso médio',
      thickness: '6-7mm',
      applications: ['Caixas de mudança', 'Embalagens industriais', 'Proteção de móveis']
    },
    {
      title: 'Onda Tripla',
      description: 'Máxima resistência para produtos pesados',
      thickness: '15mm',
      applications: ['Embalagens de maquinário', 'Produtos pesados', 'Exportação']
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Resistência Superior',
      description: 'Estrutura ondulada proporciona excelente resistência ao empilhamento e impactos.'
    },
    {
      icon: Package,
      title: 'Versatilidade',
      description: 'Adequado para diversos tipos de produtos e aplicações industriais.'
    },
    {
      icon: Layers,
      title: 'Estrutura Multicamada',
      description: 'Combinação de camadas externas e miolo ondulado para máxima eficiência.'
    }
  ];

  const applications = [
    'E-commerce e varejo',
    'Indústria alimentícia',
    'Setor automotivo',
    'Eletroeletrônicos',
    'Produtos farmacêuticos',
    'Têxtil e confecção',
    'Mudanças e armazenamento',
    'Exportação e importação'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens de <span className="text-secondary">Papelão Ondulado</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Resistência, versatilidade e sustentabilidade em uma solução completa 
              para proteção e transporte dos seus produtos.
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
                O Que é Papelão Ondulado?
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  O papelão ondulado é composto por uma ou mais folhas de papel 
                  ondulado (miolo) coladas entre camadas de papel liso (capas), 
                  formando uma estrutura extremamente resistente e versátil.
                </p>
                <p>
                  Esta configuração única proporciona excelente resistência ao 
                  empilhamento, proteção contra impactos e leveza para otimizar 
                  custos de transporte.
                </p>
                <p>
                  Na Splendida, utilizamos apenas materiais de primeira qualidade 
                  e processos certificados para garantir a máxima performance de 
                  nossas embalagens.
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

      {/* Tipos de Ondulação */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Tipos de Ondulação
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Diferentes configurações para atender necessidades específicas de resistência e aplicação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ondulationTypes.map((type, index) => (
              <Card key={index} className="bg-card border-0 shadow-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-primary">{type.title}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-secondary">
                    {type.thickness}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text mb-4">{type.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Aplicações:</h4>
                    <ul className="space-y-1">
                      {type.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center space-x-2 text-sm text-gray-text">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Características Principais
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Vantagens que fazem do papelão ondulado a escolha ideal para suas embalagens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-gray-text">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Especificações Técnicas */}
          <div className="bg-light-blue p-8 rounded-lg">
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

      {/* Aplicações */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Segmentos de Aplicação
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Nossos produtos atendem uma ampla gama de setores e necessidades.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {applications.map((application, index) => (
              <div key={index} className="bg-card p-4 rounded-lg shadow-card text-center">
                <span className="text-gray-text font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Precisa de Embalagens de Papelão Ondulado?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Nossa equipe está pronta para desenvolver a solução perfeita para suas necessidades. 
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
              <a 
                href="https://wa.me/5511945190641?text=Olá! Gostaria de saber mais sobre embalagens de papelão ondulado."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ondulado;