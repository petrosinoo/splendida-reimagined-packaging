import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contato = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefones',
      details: [
        '(11) 2815-1023',
        '(11) 94519-0641 (WhatsApp)'
      ]
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: [
        'contato@splendida.com.br',
        'vendas@splendida.com.br'
      ]
    },
    {
      icon: MapPin,
      title: 'Endereço',
      details: [
        'Rua São Roque 1135',
        'Vila Japão - Itaquaquecetuba-SP'
      ]
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      details: [
        'Segunda a Sexta: 8h às 18h',
        'Sábado: 8h às 12h'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Entre em <span className="text-secondary">Contato</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Nossa equipe está pronta para atender suas necessidades. 
              Fale conosco e receba um atendimento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-0 shadow-card text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4">
                    <info.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-text">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Envie sua Mensagem
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome *</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input 
                      id="company" 
                      placeholder="Nome da empresa"
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="seu@email.com"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone" 
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input 
                    id="subject" 
                    placeholder="Sobre o que você gostaria de falar?"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva suas necessidades, quantidade, especificações técnicas, prazos..."
                    className="mt-1 min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Enviar Mensagem
                </Button>
                
                <p className="text-sm text-gray-text text-center">
                  Ou entre em contato diretamente pelo WhatsApp
                </p>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                >
                  <a 
                    href="https://wa.me/5511945190641?text=Olá! Gostaria de saber mais sobre embalagens de papelão."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>Falar no WhatsApp</span>
                  </a>
                </Button>
              </form>
            </div>

            {/* Map and Location Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Nossa Localização
              </h2>
              
              {/* Map placeholder - in a real implementation, you'd use Google Maps or similar */}
              <div className="bg-light-blue rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-text">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-semibold">Mapa Interativo</p>
                  <p>Rua São Roque 1135, Vila Japão</p>
                  <p>Itaquaquecetuba-SP</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Como Chegar
                </h3>
                <div className="space-y-3 text-gray-text">
                  <p>
                    <strong>De carro:</strong> Acesso pela Rodovia Ayrton Senna, 
                    saída Itaquaquecetuba. Localização estratégica com fácil acesso 
                    a toda Grande São Paulo.
                  </p>
                  <p>
                    <strong>Transporte público:</strong> Linha de ônibus municipal 
                    com parada próxima. Estação de trem mais próxima: 
                    Itaquaquecetuba (CPTM).
                  </p>
                </div>

                <div className="bg-light-blue p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">
                    Área de Atendimento
                  </h4>
                  <ul className="text-sm text-gray-text space-y-1">
                    <li>• São Paulo e Grande São Paulo</li>
                    <li>• Alto Tietê e Vale do Paraíba</li>
                    <li>• ABC Paulista</li>
                    <li>• Interior de São Paulo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Respostas para as dúvidas mais comuns sobre nossos produtos e serviços.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Qual o prazo para entrega?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nossos prazos variam de 3 a 10 dias úteis, dependendo da complexidade 
                  e quantidade do pedido. Para produtos em estoque, entregamos em até 48h.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Fazem embalagens personalizadas?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sim! Desenvolvemos embalagens sob medida com impressão personalizada, 
                  formatos específicos e especificações técnicas de acordo com sua necessidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Qual a quantidade mínima?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Para produtos padrão, não temos quantidade mínima. Para produtos 
                  personalizados, a quantidade mínima varia conforme a especificação.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Atendem todo o Brasil?</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nosso foco é a região de São Paulo e adjacências, mas podemos atender 
                  outras regiões mediante consulta de viabilidade logística.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;