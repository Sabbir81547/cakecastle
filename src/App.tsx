import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import CakesPage from "./pages/CakesPage";
import CakeDetailPage from "./pages/CakeDetailPage";
import GalleryPage from "./pages/GalleryPage";
import CustomOrderPage from "./pages/CustomOrderPage";
import TermsPage from "./pages/TermsPage";
import NotFound from "./pages/NotFound";
import FloatingButtons from "./components/FloatingButtons";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/cakes" element={<CakesPage />} />
        <Route path="/cake/:slug" element={<CakeDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/custom-order" element={<CustomOrderPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
          <FloatingButtons />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
