import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Embalagens from "./pages/embalagens/Embalagens";
import Ondulado from "./pages/embalagens/Ondulado";
import Transporte from "./pages/embalagens/Transporte";
import Logistica from "./pages/embalagens/Logistica";
import Alimentos from "./pages/embalagens/Alimentos";
import Personalizadas from "./pages/embalagens/Personalizadas";
import Impressas from "./pages/embalagens/personalizadas/Impressas";
import Estampadas from "./pages/embalagens/personalizadas/Estampadas";
import Segmento from "./pages/embalagens/Segmento";
import Contato from "./pages/Contato";
import Orcamento from "./pages/Orcamento";
import Atuacao from "./pages/atuacao/Atuacao";
import SaoPaulo from "./pages/atuacao/SaoPaulo";
import ABC from "./pages/atuacao/ABC";
import AltoTiete from "./pages/atuacao/AltoTiete";
import ValeParaiba from "./pages/atuacao/ValeParaiba";
import MinasGerais from "./pages/atuacao/MinasGerais";
import RioJaneiro from "./pages/atuacao/RioJaneiro";
import Bahia from "./pages/atuacao/Bahia";
import Maranhao from "./pages/atuacao/Maranhao";
import Pernambuco from "./pages/atuacao/Pernambuco";
import RioGrandeNorte from "./pages/atuacao/RioGrandeNorte";
import MatoGrosso from "./pages/atuacao/MatoGrosso";
import Para from "./pages/atuacao/Para";
import Ceara from "./pages/atuacao/Ceara";
import EspiritoSanto from "./pages/atuacao/EspiritoSanto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/embalagens" element={<Embalagens />} />
          <Route path="/embalagens/ondulado" element={<Ondulado />} />
          <Route path="/embalagens/transporte" element={<Transporte />} />
          <Route path="/embalagens/logistica" element={<Logistica />} />
          <Route path="/embalagens/alimentos" element={<Alimentos />} />
          <Route path="/embalagens/personalizadas" element={<Personalizadas />} />
          <Route path="/embalagens/personalizadas/impressas" element={<Impressas />} />
          <Route path="/embalagens/personalizadas/estampadas" element={<Estampadas />} />
          <Route path="/embalagens/segmento" element={<Segmento />} />
          <Route path="/atuacao" element={<Atuacao />} />
          <Route path="/atuacao/sao-paulo" element={<SaoPaulo />} />
          <Route path="/atuacao/abc" element={<ABC />} />
          <Route path="/atuacao/alto-tiete" element={<AltoTiete />} />
          <Route path="/atuacao/vale-paraiba" element={<ValeParaiba />} />
          <Route path="/atuacao/minas-gerais" element={<MinasGerais />} />
          <Route path="/atuacao/rio-janeiro" element={<RioJaneiro />} />
          <Route path="/atuacao/bahia" element={<Bahia />} />
          <Route path="/atuacao/maranhao" element={<Maranhao />} />
          <Route path="/atuacao/pernambuco" element={<Pernambuco />} />
          <Route path="/atuacao/rio-grande-norte" element={<RioGrandeNorte />} />
          <Route path="/atuacao/mato-grosso" element={<MatoGrosso />} />
          <Route path="/atuacao/para" element={<Para />} />
          <Route path="/atuacao/ceara" element={<Ceara />} />
          <Route path="/atuacao/espirito-santo" element={<EspiritoSanto />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/orcamento" element={<Orcamento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
