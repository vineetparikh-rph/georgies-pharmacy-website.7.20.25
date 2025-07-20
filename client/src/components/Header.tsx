import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Pill, ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const locations = ['Family', 'Specialty', 'Parlin', 'Outpatient'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocationIndex((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-row layout for better mobile experience */}
        <div className="py-2">
          {/* Top row - Logo */}
          <div className="flex justify-center items-center mb-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <Pill className="text-white h-4 w-4" />
              </div>
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-slate-900">
                  Georgies
                </a>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="text-xl font-bold text-slate-900 px-2 py-1 h-auto hover:bg-slate-50 flex items-center min-w-[140px] justify-center"
                    >
                      <span className="transition-all duration-500 ease-in-out transform">
                        {locations[currentLocationIndex]}
                      </span>
                      <ChevronDown className="h-4 w-4 ml-1 flex-shrink-0" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 mt-2">
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">Georgies Family Pharmacy</span>
                        <span className="text-xs text-slate-500">
                          332 W. St. Georges Ave, Linden
                        </span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">
                          Georgies Specialty Pharmacy
                        </span>
                        <span className="text-xs text-slate-500">521 N Wood Ave, Linden</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">Georgies Parlin Pharmacy</span>
                        <span className="text-xs text-slate-500">499 Ernston Rd, Parlin</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900">
                          Georgies Outpatient Pharmacy
                        </span>
                        <span className="text-xs text-slate-500">6 Earlin Dr, Browns Mills</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <span className="text-xl font-bold text-slate-900">Pharmacy</span>
              </div>
            </div>
          </div>

          {/* Bottom row - Navigation */}
          <div className="flex justify-center items-center flex-wrap gap-2 px-2">
            <Button
              asChild
              className="bg-primary text-white hover:bg-red-900 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              <a href="/">Home</a>
            </Button>
            <Button
              onClick={() => window.open('/api/refill', '_blank')}
              className="bg-primary text-white hover:bg-red-900 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Refill Rx
            </Button>
            <Button
              onClick={() => window.open('/api/transfer', '_blank')}
              className="bg-primary text-white hover:bg-red-900 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Transfer Rx
            </Button>
            <Button
              onClick={() => window.open('/api/vaccine', '_blank')}
              className="bg-primary text-white hover:bg-red-900 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              Vaccination
            </Button>
            <Button
              asChild
              className="bg-primary text-white hover:bg-red-900 px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap"
            >
              <a href="/otc-products">Shop OTC</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
