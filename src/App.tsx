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
import Contato from "./pages/Contato";
import Orcamento from "./pages/Orcamento";
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
