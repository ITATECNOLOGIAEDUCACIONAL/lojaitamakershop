
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LaserCutProducts from "./pages/LaserCutProducts";
import ThreeDPrintProducts from "./pages/3DPrintProducts";
import RoboticProducts from "./pages/RoboticProducts";
import Admin from "./pages/Admin";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartSidebar from "./components/cart/CartSidebar";
import CustomerRegistration from "./pages/CustomerRegistration";
import Checkout from "./pages/Checkout";
import Categories from "./pages/Categories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <HelmetProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <CartSidebar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/corte-a-laser" element={<LaserCutProducts />} />
              <Route path="/impressao-3d" element={<ThreeDPrintProducts />} />
              <Route path="/produtos/robotica" element={<RoboticProducts />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cadastro" element={<CustomerRegistration />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/categories" element={<Categories />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </HelmetProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
