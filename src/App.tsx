
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LaserCutProducts from "./pages/LaserCutProducts";
import ThreeDPrintProducts from "./pages/3DPrintProducts";
import Admin from "./pages/Admin";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartSidebar from "./components/cart/CartSidebar";
import CustomerRegistration from "./pages/CustomerRegistration";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <CartSidebar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/corte-a-laser" element={<LaserCutProducts />} />
            <Route path="/impressao-3d" element={<ThreeDPrintProducts />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/cadastro" element={<CustomerRegistration />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
