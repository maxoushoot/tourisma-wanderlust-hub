
import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, Link } from 'react-router-dom';

interface NavigationProps {
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ transparent = false }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`border-b sticky top-0 z-50 ${
      transparent 
        ? 'bg-white/80 backdrop-blur-md border-blue-100' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Tourisma
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/discover"
              className={`font-medium transition-colors ${
                isActive('/discover')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Découvrir
            </Link>
            <Link
              to="/community"
              className={`font-medium transition-colors ${
                isActive('/community')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Communauté
            </Link>
            <Link
              to="/profile"
              className={`font-medium transition-colors ${
                isActive('/profile')
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Profil
            </Link>
            <Link to="/share">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Partager un lieu
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
