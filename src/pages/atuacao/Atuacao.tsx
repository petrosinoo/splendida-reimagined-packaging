import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Clock, Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Atuacao = () => {
  const regioes = [
    { nome: 'São Paulo', slug: 'sao-paulo', descricao: 'Capital e Grande São Paulo' },
    { nome: 'Alto Tietê', slug: 'alto-tiete', descricao: 'Região do Alto Tietê' },
    { nome: 'Vale do Paraíba', slug: 'vale-paraiba', descricao: 'Vale do Paraíba Paulista' },
    { nome: 'ABC', slug: 'abc', descricao: 'Grande ABC Paulista' },
    { nome: 'Minas Gerais', slug: 'minas-gerais', descricao: 'Estado de Minas Gerais' },
    { nome: 'Rio de Janeiro', slug: 'rio-janeiro', descricao: 'Estado do Rio de Janeiro' },
    { nome: 'Bahia', slug: 'bahia', descricao: 'Estado da Bahia' },
    { nome: 'Maranhão', slug: 'maranhao', descricao: 'Estado do Maranhão' },
    { nome: 'Pernambuco', slug: 'pernambuco', descricao: 'Estado de Pernambuco' },
    { nome: 'Rio Grande do Norte', slug: 'rio-grande-norte', descricao: 'Estado do Rio Grande do Norte' },
    { nome: 'Mato Grosso', slug: 'mato-grosso', descricao: 'Estado do Mato Grosso' },
    { nome: 'Pará', slug: 'para', descricao: 'Estado do Pará' },
    { nome: 'Ceará', slug: 'ceara', descricao: 'Estado do Ceará' },
    { nome: 'Espírito Santo', slug: 'espirito-santo', descricao: 'Estado do Espírito Santo' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa Atuação Nacional
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Presença estratégica em todo o Brasil para garantir agilidade na entrega 
              e atendimento personalizado para sua empresa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/contato">
                  Fale com Nossos Consultores Regionais
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://splendidaembalagens.com.br/orcamento/" target="_blank" rel="noopener noreferrer">
                  Solicitar Orçamento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens da Cobertura Nacional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Vantagens da Nossa Cobertura Nacional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proximidade, agilidade e qualidade em todo o território brasileiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Entrega Ágil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Prazos reduzidos através da nossa rede de distribuição estratégica
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Proximidade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Atendimento local com conhecimento das necessidades regionais
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Logística Eficiente</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Rede logística otimizada para redução de custos e tempo
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Suporte Regional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Equipe especializada para atendimento personalizado em cada região
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regiões de Atuação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Regiões de Atuação
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Selecione sua região para conhecer nossas soluções específicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regioes.map((regiao) => (
              <Card key={regiao.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {regiao.nome}
                  </CardTitle>
                  <CardDescription>{regiao.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link to={`/atuacao/${regiao.slug}`}>
                      Ver Soluções para {regiao.nome}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Sua Região Não Está Listada?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e descubra como podemos atender sua empresa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contato">
                Fale Conosco
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="https://splendidaembalagens.com.br/orcamento/" target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Atuacao;