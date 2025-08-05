import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Truck, CheckCircle, Package, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ABC = () => {
  const beneficios = [
    "Entrega rápida na região do ABC",
    "Atendimento especializado para o polo industrial",
    "Estoque regional estratégico",
    "Equipe técnica com expertise industrial",
    "Logística otimizada para empresas do ABC"
  ];

  const tiposEmbalagens = [
    "Embalagens de Papelão Ondulado",
    "Embalagens para Transporte Industrial",
    "Embalagens para Logística",
    "Embalagens para Autopeças",
    "Embalagens Personalizadas",
    "Embalagens Resistentes"
  ];

  const setores = [
    "Indústria Automobilística",
    "Indústria Metalúrgica",
    "Setor Petroquímico",
    "Indústria Química",
    "Setor de Autopeças",
    "Indústria Siderúrgica",
    "Setor de Máquinas",
    "Logística Industrial"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Grande ABC</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Embalagens de Papelão no ABC: Agilidade e Qualidade para Sua Empresa
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A Splendida atende o polo industrial do ABC com embalagens de papelão de alta qualidade. 
              Contamos com elevados padrões de qualidade, eficiência e desempenho para oferecer as 
              melhores soluções para as indústrias da região.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://splendidaembalagens.com.br/orcamento/" target="_blank" rel="noopener noreferrer">
                  Solicite um Orçamento para o ABC!
                </a>
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
                Vantagens de Trabalhar Conosco no ABC
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fornecemos embalagens de papelão no ABC para empresas dos mais diversos portes, 
                especialmente focadas no setor industrial. Trabalhamos com a missão de suprir 
                as necessidades específicas das indústrias da região.
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
                    Sistema otimizado para atender o polo industrial do ABC
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center pb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Foco Industrial</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <CardDescription>
                    Especialização em atender grandes indústrias
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
              Tipos de Embalagens Disponíveis no ABC
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A Splendida comercializa embalagens de papelão no ABC com qualquer especificação 
              técnica exigida pelos clientes industriais.
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
                    Soluções robustas para o setor industrial
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
              Setores Industriais Atendidos no ABC
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções especializadas para os principais setores industriais 
              da região do ABC Paulista.
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
              Especialização Industrial
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Resistência e Durabilidade
                </h3>
                <p className="text-muted-foreground mb-4">
                  Fabricamos caixas de papelão no ABC com especificações técnicas robustas, 
                  ideais para o transporte de produtos industriais pesados.
                </p>
                <p className="text-muted-foreground">
                  As embalagens de papelão no ABC são desenvolvidas para suportar as 
                  exigências do setor industrial e logística pesada.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Expertise Industrial
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nossa equipe possui conhecimento especializado nas necessidades das 
                  indústrias do ABC, garantindo soluções adequadas para cada setor.
                </p>
                <p className="text-muted-foreground">
                  Trabalhamos com foco na qualidade e resistência necessárias para 
                  o transporte de produtos industriais.
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
            Solicite um Orçamento para o ABC!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato com a Splendida para solicitar um orçamento especializado 
            para sua indústria no ABC, sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://splendidaembalagens.com.br/orcamento/" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/contato">
                Falar com Consultor Industrial
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ABC;