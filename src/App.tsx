import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComingSoon from "./pages/ComingSoon";
import MaltaBitcoinMap from "./pages/MaltaBitcoinMap";
import NotFound from "./pages/NotFound";
import { OldPage } from "./pages/OldPage";
import { oldPages } from "./data/oldPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="/site" element={<Index />} />
          <Route path="/malta-bitcoin-map" element={<MaltaBitcoinMap />} />
          {/* Rebuilt pre-move (Lovable) pages, content recovered from
              Wayback snapshots, see src/data/oldPages.ts */}
          {oldPages.map((page) => (
            <Route key={page.path} path={page.path} element={<OldPage page={page} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
