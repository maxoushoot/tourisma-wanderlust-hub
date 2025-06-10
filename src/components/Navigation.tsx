
import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, Bell, User, Home, Compass, Users, UserCircle, List, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNotifications } from '@/hooks/use-notifications';

interface NavigationProps {
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ transparent = false }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { notifications, unreadCount, markAsRead } = useNotifications();

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
    { path: '/itineraries', label: 'Itinéraires', icon: List },
    { path: '/community', label: 'Communauté', icon: Users },
    { path: '/profile', label: 'Profil', icon: UserCircle }
    // Create Itinerary might be better as a separate CTA or in a dropdown menu for "Share"
  ];

  const mainNavItems = navItems.filter(item => item.path !== '/itineraries' || true); // Keep all for now
                                                                                      // but could filter some for mobile if needed

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
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{unreadCount}</span>
                  </div>
                )}
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
              {mainNavItems.map((item) => (
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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-100 rounded-xl">
                    <Bell className="w-5 h-5 text-gray-600" />
                    {unreadCount > 0 && (
                      <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center p-0 rounded-full">
                        {unreadCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {notifications.length === 0 ? (
                    <DropdownMenuItem>Aucune nouvelle notification</DropdownMenuItem>
                  ) : (
                    notifications.map((n) => (
                      <DropdownMenuItem key={n.id} asChild onSelect={() => markAsRead(n.id)}>
                        <Link to={n.link}>{n.message}</Link>
                      </DropdownMenuItem>
                    ))
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Profile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative p-2 hover:bg-gray-100 rounded-xl">
                    <User className="w-5 h-5 text-gray-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Mon profil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Paramètres</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/create-itinerary">Créer un itinéraire</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* CTA Buttons */}
              <Link to="/share" className="ml-2">
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 rounded-xl px-5 py-2.5 font-semibold">
                  <MapPin className="w-4 h-4 mr-2" />
                  Partager Lieu
                </Button>
              </Link>
              <Link to="/create-itinerary" className="ml-2">
                <Button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl px-5 py-2.5 font-semibold">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Créer Itinéraire
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
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative p-2 rounded-full">
                      <Bell className="w-5 h-5 text-gray-600" />
                      {unreadCount > 0 && (
                        <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center p-0 rounded-full">
                          {unreadCount}
                        </Badge>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    {notifications.length === 0 ? (
                      <DropdownMenuItem>Aucune notification</DropdownMenuItem>
                    ) : (
                      notifications.map((n) => (
                        <DropdownMenuItem key={n.id} asChild onSelect={() => markAsRead(n.id)}>
                          <Link to={n.link}>{n.message}</Link>
                        </DropdownMenuItem>
                      ))
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="p-2 rounded-full">
                      <User className="w-5 h-5 text-gray-600" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link to="/profile">Mon profil</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/settings">Paramètres</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
          {/* Adjusted grid-cols-5 for the new item */}
          <div className="max-w-md mx-auto grid grid-cols-5 h-16">
            {mainNavItems.map((item) => { // Use mainNavItems which includes Itinéraires
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

        {/* Floating Action Buttons for Mobile */}
        <div className="fixed bottom-20 right-4 z-40 space-y-3">
          <Link to="/create-itinerary">
            <Button title="Créer Itinéraire" className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
              <PlusCircle className="w-6 h-6 text-white" />
            </Button>
          </Link>
          <Link to="/share">
            <Button title="Partager un Lieu" className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
