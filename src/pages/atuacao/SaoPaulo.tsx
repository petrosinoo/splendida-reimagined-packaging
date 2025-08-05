import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Truck, CheckCircle, Package, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SaoPaulo = () => {
  const beneficios = [
    "Entrega rápida em toda a Grande São Paulo",
    "Atendimento especializado local",
    "Estoque estratégico na região",
    "Equipe técnica qualificada",
    "Logística otimizada para a capital"
  ];

  const tiposEmbalagens = [
    "Embalagens de Papelão Ondulado",
    "Embalagens para Transporte",
    "Embalagens para Logística",
    "Embalagens para Alimentos",
    "Embalagens Personalizadas",
    "Embalagens Impressas e Estampadas"
  ];

  const setores = [
    "Indústria Alimentícia",
    "Setor Automobilístico",
    "Comércio Eletrônico",
    "Indústria Farmacêutica",
    "Setor de Bebidas",
    "Indústria Têxtil",
    "Tecnologia e Informática",
    "Logística e Transporte"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold text-lg">São Paulo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Embalagens de Papelão em São Paulo: Agilidade e Qualidade para Sua Empresa
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A Splendida é uma empresa com grande experiência no desenvolvimento de embalagens 
              de papelão em SP. Contamos com elevados padrões de qualidade, eficiência e 
              desempenho para oferecer as melhores embalagens de papelão em SP.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/orcamento">
                  Solicite um Orçamento para São Paulo!
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contato">
                  Fale com Nossos Consultores
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Locais */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Vantagens de Trabalhar Conosco em São Paulo
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fornecemos embalagens de papelão em SP para empresas dos mais diversos portes e 
                segmentos do mercado. Trabalhamos com a missão de suprir as necessidades 
                mercadológicas de nossos clientes através de embalagens de papelão em SP.
              </p>
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Entrega Rápida</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription>
                    Sistema de gerenciamento que garante excelente prazo de entrega
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Logística Eficiente</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription>
                    Estrutura otimizada para prazos curtos em São Paulo
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Embalagens */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tipos de Embalagens Disponíveis em São Paulo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Splendida comercializa embalagens de papelão em SP com qualquer especificação 
              técnica exigida pelos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposEmbalagens.map((tipo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tipo}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription>
                    Soluções personalizadas para suas necessidades específicas
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link to="/embalagens">
                      Saiba Mais
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setores Atendidos */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Setores Atendidos em São Paulo
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos modelos de embalagens de papelão em SP personalizados, 
              com impressões em diferentes cores para diversos segmentos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setores.map((setor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-base">{setor}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualidade e Personalização */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Qualidade e Personalização
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Materiais Sustentáveis
                </h3>
                <p className="text-muted-foreground mb-4">
                  Fabricamos caixas de papelão em São Paulo, com a utilização de papéis e 
                  tintas que apresentam menor impacto ambiental.
                </p>
                <p className="text-muted-foreground">
                  As embalagens de papelão em SP são bastante recomendadas para a proteção 
                  de vários produtos, principalmente durante o transporte.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Equipe Especializada
                </h3>
                <p className="text-muted-foreground mb-4">
                  A Splendida conta com colaboradores altamente treinados e qualificados 
                  para a fabricação de embalagens de papelão em SP.
                </p>
                <p className="text-muted-foreground">
                  Trabalhamos com o objetivo de atender todas as necessidades dos clientes 
                  que solicitam caixas de papelão em São Paulo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Solicite um Orçamento para São Paulo!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato com a Splendida para solicitar um orçamento de embalagens 
            de papelão em SP, sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/orcamento">
                Solicitar Orçamento
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contato">
                Falar com Consultor
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SaoPaulo;