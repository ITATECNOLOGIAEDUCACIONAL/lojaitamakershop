
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4">
      <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Página não encontrada</p>
        <p className="text-gray-500 mb-8">
          A página <span className="font-medium">{location.pathname}</span> não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild variant="default">
            <Link to="/" className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              Página Inicial
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="#" onClick={() => window.history.back()} className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
