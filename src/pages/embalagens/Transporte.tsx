import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Package, Globe, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import cardboardBoxes from '@/assets/cardboard-boxes.jpg';

const Transporte = () => {
  const transportSolutions = [
    {
      title: 'Embalagens para E-commerce',
      description: 'Proteção especial para envios postais e entregas diretas ao consumidor.',
      features: ['Resistência a impactos', 'Fácil abertura', 'Tamanhos padronizados', 'Impressão personalizada']
    },
    {
      title: 'Embalagens Industriais',
      description: 'Soluções robustas para transporte de produtos industriais e maquinários.',
      features: ['Alta resistência', 'Proteção contra umidade', 'Empilhamento seguro', 'Identificação clara']
    },
    {
      title: 'Embalagens de Exportação',
      description: 'Conformidade internacional para transporte marítimo, aéreo e terrestre.',
      features: ['Normas ISPM-15', 'Resistência a intempéries', 'Etiquetagem internacional', 'Rastreabilidade']
    }
  ];

  const transportMethods = [
    {
      icon: Truck,
      title: 'Transporte Rodoviário',
      description: 'Proteção contra vibrações, empilhamento e variações de temperatura durante o transporte terrestre.'
    },
    {
      icon: Globe,
      title: 'Transporte Marítimo',
      description: 'Resistência à umidade e condições adversas em container durante travessias oceânicas.'
    },
    {
      icon: Package,
      title: 'Entrega Expressa',
      description: 'Agilidade e proteção para entregas rápidas e serviços de courier.'
    }
  ];

  const benefits = [
    'Redução de avarias durante o transporte',
    'Otimização do espaço de carga',
    'Facilidade de manuseio e empilhamento',
    'Identificação clara do conteúdo',
    'Sustentabilidade e reciclabilidade',
    'Custo-benefício superior',
    'Conformidade com normas de transporte',
    'Proteção contra intempéries'
  ];

  return (
    <Layout>
      <SEOHead 
        title="Caixas de Papelão para Transporte - Embalagens de Papelão para Transporte"
        description="A Splendida oferece as melhores caixas de papelão para transporte. Fabricamos caixas de papelão para transporte de extrema qualidade para proteger produtos em viagens."
        keywords="caixas de papelão para transporte, embalagens de papelão para transporte, caixas transporte, embalagens transporte"
        canonical="https://splendidaembalagens.com.br/embalagens/transporte"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Caixas de Papelão para Transporte: <span className="text-secondary">Fabricante Especializado</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              A Splendida oferece as melhores soluções do mercado para quem procura caixas de papelão para transporte. 
              Trabalhamos para atender de forma eficiente todas as expectativas dos clientes que solicitam caixas de papelão para transporte.
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
                Detalhes sobre Embalagens de Papelão para Transporte
              </h2>
              <div className="space-y-4 text-gray-text text-lg">
                <p>
                  A Splendida desenvolve embalagens de papelão para transporte, de qualquer especificação técnica, de acordo com as exigências dos clientes. 
                  As embalagens de papelão para transporte protegem o seu produto de forma bastante eficiente em vários tipos de viagens.
                </p>
                <p>
                  Comercializamos as melhores embalagens de papelão para transporte, para clientes dos mais diversos portes e segmentos. 
                  Fabricamos modelos personalizados de embalagens de papelão para transporte, com impressões em diferentes cores.
                </p>
                <p>
                  A Splendida desenvolve embalagens de papelão para transporte, de qualquer especificação técnica, de acordo com as 
                  exigências dos clientes. As embalagens de papelão para transporte protegem o seu produto de forma bastante eficiente 
                  em vários tipos de viagens.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cardboardBoxes} 
                alt="Embalagens para transporte"
                className="rounded-lg shadow-card w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soluções por Tipo */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Soluções por Modalidade
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Embalagens especializadas para diferentes tipos de transporte e necessidades logísticas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transportSolutions.map((solution, index) => (
              <Card key={index} className="bg-card border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-text">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground mb-3">Características:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-text">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
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

      {/* Modais de Transporte */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Adaptadas para Cada Modal
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Soluções específicas para diferentes meios de transporte e suas particularidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {method.title}
                </h3>
                <p className="text-gray-text">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Vantagens das Nossas Embalagens
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Benefícios que garantem a integridade dos seus produtos e otimizam seus custos logísticos.
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

      {/* Especificações */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-light-blue p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">
              Especificações para Transporte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">IP54</div>
                <div className="text-gray-text">Proteção contra umidade</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">-20°C a +60°C</div>
                <div className="text-gray-text">Resistência térmica</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5G</div>
                <div className="text-gray-text">Resistência a vibrações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">ISPM-15</div>
                <div className="text-gray-text">Conformidade internacional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Garanta a Segurança do Seu Produto: Solicite um Orçamento!
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Fale com a Splendida para saber mais informações sobre as embalagens de papelão para transporte. 
            Nossa equipe desenvolve soluções personalizadas para suas necessidades logísticas.
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
              <Link to="/embalagens/logistica">
                Conheça Nossas Soluções para Logística
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transporte;