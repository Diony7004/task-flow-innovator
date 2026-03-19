import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad.tsx";
import CondicionesServicio from "./pages/CondicionesServicio.tsx";
import EliminacionDatos from "./pages/EliminacionDatos.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/condiciones-servicio" element={<CondicionesServicio />} />
          <Route path="/eliminacion-datos" element={<EliminacionDatos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
