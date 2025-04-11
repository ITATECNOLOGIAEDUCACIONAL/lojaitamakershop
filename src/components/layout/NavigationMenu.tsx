
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavigationMenuDemoProps {
  currentPath: string;
}

const NavigationMenuDemo = ({ currentPath }: NavigationMenuDemoProps) => {
  const isActive = (path: string) => {
    return currentPath === path;
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink 
              className={cn(navigationMenuTriggerStyle(), isActive('/') ? 'bg-accent text-accent-foreground' : '')}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
              <li>
                <Link to="/impressao-3d">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/impressao-3d') ? 'bg-accent text-accent-foreground' : ''
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Impressão 3D</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Produtos personalizados impressos em 3D
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/corte-a-laser">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/corte-a-laser') ? 'bg-accent text-accent-foreground' : ''
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Corte a Laser</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Produtos precisos cortados a laser
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/produtos/robotica">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/produtos/robotica') ? 'bg-accent text-accent-foreground' : ''
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Robótica</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Kits educacionais e componentes para robótica
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  <NavigationMenuLink 
                    className={cn(
                      "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                      isActive('/categories') ? 'bg-accent text-accent-foreground' : ''
                    )}
                  >
                    <div className="text-sm font-medium leading-none">Todas Categorias</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Veja todas as categorias de produtos
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/cadastro">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isActive('/cadastro') ? 'bg-accent text-accent-foreground' : '')}>
              Cadastre-se
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/checkout">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isActive('/checkout') ? 'bg-accent text-accent-foreground' : '')}>
              Checkout
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link to="/categories">
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isActive('/categories') ? 'bg-accent text-accent-foreground' : '')}>
              Categorias
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
