import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Printer, Palette, CheckCircle, Users, Clock, Award } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import customPackaging from '@/assets/custom-packaging.jpg';

const Impressas = () => {
  const printingOptions = [
    {
      title: 'Uma Cor',
      description: 'Impressão monocromática para soluções simples e eficazes'
    },
    {
      title: 'Duas Cores',
      description: 'Combinação de cores para maior destaque visual'
    },
    {
      title: 'Três Cores',
      description: 'A Splendida é uma fabricante que desenvolve caixas de papelão impressas em três diferentes cores'
    }
  ];

  const benefits = [
    'Identificação clara da marca',
    'Proteção superior durante transporte',
    'Diferenciação no ponto de venda',
    'Comunicação eficaz com o consumidor',
    'Resistência das tintas',
    'Cores vibrantes e duradouras',
    'Personalização total do design',
    'Conformidade com padrões de qualidade'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Embalagens de Papelão Impressas: <span className="text-secondary">Destaque e Personalização para Sua Marca</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A Splendida é uma empresa especializada no desenvolvimento de embalagens de papelão impressas. 
              Trabalhamos com a filosofia de buscar constantemente a excelência no atendimento aos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Impressão */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Especialistas em Impressão
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  A Splendida é uma empresa especializada no desenvolvimento de embalagens de papelão impressas. 
                  Trabalhamos com a filosofia de buscar constantemente a excelência no atendimento aos clientes que 
                  solicitam embalagens de papelão impressas.
                </p>
                <p>
                  Produzimos embalagens de papelão impressas em diferentes cores para atender as necessidades dos clientes 
                  de forma personalizada. A Splendida desenvolve modelos de embalagens de papelão impressas com qualquer 
                  especificação técnica.
                </p>
                <p>
                  A Splendida é uma fabricante que desenvolve caixas de papelão impressas em três diferentes cores.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={customPackaging} 
                alt="Embalagens impressas"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Opções de Impressão */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Opções de Impressão
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Diferentes configurações de cores para atender suas necessidades de comunicação visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {printingOptions.map((option, index) => (
              <Card key={index} className="bg-card border-0 shadow-card text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                    <Printer className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl text-primary">{option.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-text">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios e Aplicações */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={customPackaging} 
                alt="Benefícios das embalagens impressas"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
                Benefícios e Aplicações
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  As embalagens de papelão impressas são bastante indicadas para produtos que necessitam ser transportados. 
                  Com as embalagens de papelão impressas é possível transportar vários tipos de produtos com muito mais segurança.
                </p>
                <p>
                  Com as caixas de papelão impressas é possível transportar vários tipos de produtos com muito mais proteção e segurança.
                </p>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-gray-text text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualidade e Sustentabilidade */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Qualidade e Sustentabilidade
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Materiais de primeira linha com menor impacto ambiental para suas embalagens impressas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Materiais Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-text">
                  A Splendida utiliza papéis e tintas que apresentam menor impacto ambiental para fabricação de embalagens de papelão impressas. 
                  Utilizamos papéis e tintas de primeira linha.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">Equipe Especializada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-text">
                  Contamos com uma equipe de profissionais com grande experiência na produção de embalagens de papelão impressas. 
                  Garantimos excelência em cada projeto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agilidade na Entrega */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-light-blue p-8 rounded-lg text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary text-secondary-foreground rounded-full mb-4">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Agilidade Garantida</h3>
            <p className="text-gray-text text-lg max-w-2xl mx-auto">
              Realizamos um serviço avançado de gerenciamento de estoque para garantir aos clientes um menor prazo 
              de entrega das caixas de papelão impressas. Sua produção não para por falta de embalagens.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Personalize Sua Embalagem: Solicite um Orçamento!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Fale com a Splendida para solicitar as melhores embalagens de papelão impressas para seus produtos. 
            Nossa equipe está pronta para criar soluções personalizadas.
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
              <Link to="/embalagens/personalizadas/estampadas">
                Veja Exemplos de Estampagem
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressas;