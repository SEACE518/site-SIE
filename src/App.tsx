import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import siteIcon from "@/assets/projects/IMG_6657.JPG";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Remplace l'icône (favicon) affichée dans l'onglet du navigateur.
    const existing = document.querySelector<HTMLLinkElement>("link[rel='icon']");
    const link =
      existing ??
      document.createElement("link");

    link.rel = "icon";
    link.href = siteIcon;
    link.type = "image/jpeg";

    if (!existing) document.head.appendChild(link);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
