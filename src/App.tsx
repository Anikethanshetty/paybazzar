import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";
import Services from "./pages/Services";
import UtilityPayments from "./pages/UtilityServices";
import AePS from "./pages/Aeps";
import AepsKyc from "./pages/Aeps2";
import DigiKatha from "./pages/Digikhata";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="paybazaar-ui-theme">
      <TooltipProvider>
        <SidebarProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/update" element={<ProfileUpdate />} />
              <Route path="/services" element={<Services />} />
              <Route path="/utility-payments" element={<UtilityPayments />} />
              <Route path="/aeps" element={<AePS />} />
              <Route path="/aeps2" element={<AepsKyc />} />
              <Route path="/digikatha" element={<DigiKatha />} />
              


              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </SidebarProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
