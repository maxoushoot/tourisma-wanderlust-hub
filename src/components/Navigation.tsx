
import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, Bell, User, Home, Compass, Users, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

interface NavigationProps {
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ transparent = false }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/discover', label: 'Découvrir', icon: Compass },
    { path: '/community', label: 'Communauté', icon: Users },
    { path: '/profile', label: 'Profil', icon: UserCircle }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`hidden md:block border-b sticky top-0 z-50 transition-all duration-300 ${
        transparent && !scrolled
          ? 'bg-white/70 backdrop-blur-lg border-white/20 shadow-lg' 
          : 'bg-white/95 backdrop-blur-md border-gray-200/50 shadow-md'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo Enhanced */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-bold">3</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-green-700 transition-all duration-300">
                  Tourisma
                </span>
                <span className="text-xs text-gray-500 font-medium">Explorez le monde</span>
              </div>
            </Link>
            
            {/* Desktop Navigation Enhanced */}
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive(item.path) 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                  )}
                </Link>
              ))}
              
              {/* Notifications */}
              <div className="relative mx-2">
                <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-100 rounded-xl">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center p-0 rounded-full">
                    2
                  </Badge>
                </Button>
              </div>

              {/* Profile */}
              <div className="relative mx-2">
                <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-100 rounded-xl">
                  <User className="w-5 h-5 text-gray-600" />
                </Button>
              </div>

              {/* CTA Button Enhanced */}
              <Link to="/share" className="ml-4">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl px-6 py-2.5 font-semibold">
                  <MapPin className="w-4 h-4 mr-2" />
                  Partager un lieu
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - App-like bottom navigation */}
      <div className="md:hidden">
        {/* Mobile Top Bar */}
        <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50">
          <div className="px-4 py-3 max-w-md mx-auto">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Tourisma
                </span>
              </Link>
              
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="relative p-2 rounded-full">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center p-0 rounded-full">
                    2
                  </Badge>
                </Button>
                <Link to="/profile">
                  <Button variant="ghost" size="sm" className="p-2 rounded-full">
                    <User className="w-5 h-5 text-gray-600" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-md mx-auto grid grid-cols-4 h-16">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs font-medium">{item.label}</span>
                  {isActive(item.path) && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-b-full"></div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Floating Action Button for Mobile */}
        <Link to="/share" className="fixed bottom-20 right-4 z-40">
          <Button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
            <MapPin className="w-6 h-6 text-white" />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
