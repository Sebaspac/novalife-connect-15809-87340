import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CLINavigation from "@/components/layout/CLINavigation";
import CLIFooter from "@/components/layout/CLIFooter";

import Inicio from "./pages/cli/Inicio";
import Servicios from "./pages/cli/Servicios";
import Mentorias from "./pages/cli/Mentorias";
import Conferencias from "./pages/cli/Conferencias";
import Coaching from "./pages/cli/Coaching";
import Consultoria from "./pages/cli/Consultoria";
import Nosotros from "./pages/cli/Nosotros";
import Revista from "./pages/cli/Revista";
import Academia from "./pages/cli/Academia";
import Blog from "./pages/cli/Blog";
import BlogPost from "./pages/cli/BlogPost";
import Contacto from "./pages/cli/Contacto";
import ProteccionDatos from "./pages/cli/ProteccionDatos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <CLINavigation />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/servicios/mentorias" element={<Mentorias />} />
          <Route path="/servicios/conferencias" element={<Conferencias />} />
          <Route path="/servicios/coaching" element={<Coaching />} />
          <Route path="/servicios/consultoria" element={<Consultoria />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/revista" element={<Revista />} />
          <Route path="/academia" element={<Academia />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/proteccion-datos" element={<ProteccionDatos />} />
          <Route path="/impressum" element={<ProteccionDatos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <CLIFooter />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <AppContent />
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
