import React from 'react';
import Layout from '@/components/Layout';
import SEOHead from '@/components/SEOHead';

const PoliticaPrivacidade = () => {
  return (
    <Layout>
      <SEOHead
        title="Política de Privacidade | Splendida Embalagens"
        description="Política de privacidade da Splendida Embalagens. Saiba como coletamos, usamos e protegemos seus dados pessoais."
        keywords="política de privacidade, proteção de dados, LGPD, splendida embalagens"
        canonical="https://splendidaembalagens.com.br/politica-de-privacidade"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground mb-8">
            Última atualização: 16 de março de 2026
          </p>

          <div className="space-y-8 text-foreground/90 leading-relaxed">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introdução</h2>
              <p>
                A Splendida Embalagens ("nós", "nosso" ou "empresa") está comprometida com a proteção da sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais que você nos fornece ao utilizar nosso site e serviços.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Informações que coletamos</h2>
              <p className="mb-3">Podemos coletar os seguintes tipos de informações pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nome completo e razão social</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone e WhatsApp</li>
                <li>Endereço comercial</li>
                <li>CNPJ/CPF</li>
                <li>Informações sobre pedidos e orçamentos solicitados</li>
                <li>Dados de navegação no site (cookies e tecnologias similares)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Como utilizamos suas informações</h2>
              <p className="mb-3">Utilizamos suas informações pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Processar solicitações de orçamento e pedidos</li>
                <li>Entrar em contato para atendimento comercial</li>
                <li>Enviar informações sobre nossos produtos e serviços</li>
                <li>Melhorar nosso site e a experiência do usuário</li>
                <li>Cumprir obrigações legais e regulatórias</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Compartilhamento de dados</h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar seus dados apenas com prestadores de serviço que nos auxiliam na operação do site e no atendimento, sempre sob obrigações de confidencialidade.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
              <p>
                Nosso site utiliza cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, porém isso pode afetar a funcionalidade do site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Segurança dos dados</h2>
              <p>
                Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet é 100% seguro.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Seus direitos (LGPD)</h2>
              <p className="mb-3">
                De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), você tem direito a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existência de tratamento de dados pessoais</li>
                <li>Acessar seus dados pessoais</li>
                <li>Solicitar a correção de dados incompletos ou desatualizados</li>
                <li>Solicitar a eliminação de dados desnecessários</li>
                <li>Revogar o consentimento para o tratamento de dados</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">8. Retenção de dados</h2>
              <p>
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram coletadas, inclusive para atender requisitos legais, contábeis ou de relatórios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">9. Alterações nesta política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. Quaisquer alterações serão publicadas nesta página com a data de atualização revisada. Recomendamos que você revise esta política regularmente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-foreground mb-3">10. Contato</h2>
              <p className="mb-3">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato conosco:
              </p>
              <ul className="space-y-2">
                <li><strong>E-mail:</strong> vendas2@splendidaembalagens.com.br</li>
                <li><strong>Telefone:</strong> (11) 2815-1023</li>
                <li><strong>WhatsApp:</strong> (11) 94519-0641</li>
                <li><strong>Endereço:</strong> Rua São Roque 1135, Vila Japão, Itaquaquecetuba-SP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticaPrivacidade;
