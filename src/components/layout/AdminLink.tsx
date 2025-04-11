
import React from 'react';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const AdminLink = () => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon" className="mr-2" asChild>
          <Link to="/admin">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Área Administrativa</span>
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Área Administrativa</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default AdminLink;
