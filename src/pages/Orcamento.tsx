import React, { useState } from 'react';
import { Calculator, FileText, Clock, CheckCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const Orcamento = () => {
  const [formData, setFormData] = useState({
    tipo: '',
    quantidade: '',
    dimensoes: '',
    personalizacao: false,
  });

  const packagingTypes = [
    'Embalagens de Papelão Ondulado',
    'Embalagens para Transporte',
    'Embalagens para Logística',
    'Embalagens para Alimentos',
    'Embalagens Personalizadas - Impressas',
    'Embalagens Personalizadas - Estampadas',
    'Embalagens por Segmento',
    'Outro (especificar na descrição)'
  ];

  const advantages = [
    {
      icon: Clock,
      title: 'Resposta Rápida',
      description: 'Orçamento em até 24 horas úteis'
    },
    {
      icon: Calculator,
      title: 'Sem Compromisso',
      description: 'Orçamento gratuito e sem obrigações'
    },
    {
      icon: FileText,
      title: 'Detalhado',
      description: 'Especificações técnicas completas'
    },
    {
      icon: CheckCircle,
      title: 'Personalizado',
      description: 'Solução sob medida para sua necessidade'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Preencha o Formulário',
      description: 'Informe suas necessidades e especificações'
    },
    {
      number: '02',
      title: 'Análise Técnica',
      description: 'Nossa equipe analisa e desenvolve a solução'
    },
    {
      number: '03',
      title: 'Receba o Orçamento',
      description: 'Proposta detalhada em até 24h úteis'
    },
    {
      number: '04',
      title: 'Aprovação e Produção',
      description: 'Aprovando, iniciamos a produção imediatamente'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Solicite seu <span className="text-secondary">Orçamento</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Receba uma proposta personalizada para suas necessidades de embalagem. 
              Resposta garantida em até 24 horas úteis.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Por Que Solicitar um Orçamento?
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Vantagens de solicitar seu orçamento conosco.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-4">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {advantage.title}
                </h3>
                <p className="text-gray-text text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Formulário de Orçamento
              </h2>
              
              <form className="space-y-6">
                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome completo"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa *</Label>
                    <Input 
                      id="company" 
                      placeholder="Nome da empresa"
                      className="mt-1"
                      required
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
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input 
                      id="phone" 
                      placeholder="(11) 99999-9999"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                {/* Product Specifications */}
                <div>
                  <Label htmlFor="tipo">Tipo de Embalagem *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Selecione o tipo de embalagem" />
                    </SelectTrigger>
                    <SelectContent>
                      {packagingTypes.map((type, index) => (
                        <SelectItem key={index} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantidade">Quantidade Estimada *</Label>
                    <Input 
                      id="quantidade" 
                      placeholder="Ex: 1000 unidades"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="prazo">Prazo Desejado</Label>
                    <Input 
                      id="prazo" 
                      placeholder="Ex: 15 dias"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dimensoes">Dimensões (C x L x A em cm)</Label>
                  <Input 
                    id="dimensoes" 
                    placeholder="Ex: 30 x 20 x 15 cm"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="uso">Finalidade de Uso *</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Para que será utilizada?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="transporte">Transporte de produtos</SelectItem>
                      <SelectItem value="estoque">Armazenamento/Estoque</SelectItem>
                      <SelectItem value="ecommerce">E-commerce/Envios</SelectItem>
                      <SelectItem value="exportacao">Exportação</SelectItem>
                      <SelectItem value="promocional">Material promocional</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Customization Options */}
                <div className="space-y-3">
                  <Label>Opções de Personalização</Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="impressao" />
                      <Label htmlFor="impressao" className="text-sm">
                        Impressão personalizada (logo, cores)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="formato" />
                      <Label htmlFor="formato" className="text-sm">
                        Formato especial/sob medida
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="resistencia" />
                      <Label htmlFor="resistencia" className="text-sm">
                        Resistência especial (umidade, temperatura)
                      </Label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="observacoes">Observações e Especificações Técnicas</Label>
                  <Textarea 
                    id="observacoes" 
                    placeholder="Descreva detalhes específicos: peso do produto, condições de uso, requisitos especiais, etc."
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Solicitar Orçamento
                </Button>
                
                <p className="text-xs text-gray-text text-center">
                  Ao enviar, você concorda em receber contato da nossa equipe comercial. 
                  Resposta garantida em até 24 horas úteis.
                </p>
              </form>
            </div>

            {/* Process Steps */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Como Funciona
              </h2>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card key={index} className="bg-card border-0 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {step.number}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold mb-2 text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-gray-text">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Additional Info */}
              <Card className="mt-8 bg-light-blue border-0">
                <CardHeader>
                  <CardTitle className="text-xl">Informações Importantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-text">
                    <li>• Orçamentos válidos por 30 dias</li>
                    <li>• Prazos podem variar conforme complexidade</li>
                    <li>• Amostras disponíveis para aprovação</li>
                    <li>• Descontos para grandes quantidades</li>
                    <li>• Assessoria técnica incluída</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Precisa de Atendimento Imediato?
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Para dúvidas rápidas ou orçamentos urgentes, fale diretamente com nossa equipe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            >
              <a 
                href="https://wa.me/5511945190641?text=Olá! Preciso de um orçamento para embalagens de papelão."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: (11) 94519-0641
              </a>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
            >
              <a href="tel:1128151023">
                Telefone: (11) 2815-1023
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orcamento;