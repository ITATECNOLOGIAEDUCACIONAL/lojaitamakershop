
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const AdminLink = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link to="/admin">
            <Button variant="ghost" size="icon" className="mr-2">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Área Administrativa</span>
            </Button>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Área Administrativa</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AdminLink;
