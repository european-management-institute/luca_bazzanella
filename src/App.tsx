
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OutsourcedManagement from "./pages/OutsourcedManagement";
import AllConferences from "./pages/AllConferences";
import NotFound from "./pages/NotFound";
import PublicPolicy from "./pages/PublicPolicy";
import SocialImpact from "./pages/SocialImpact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/luca_bazzanella">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/outsourced-management" element={<OutsourcedManagement />} />
          <Route path="/public-policy" element={<PublicPolicy />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/all-conferences" element={<AllConferences />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
