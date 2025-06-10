
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationsProvider } from "@/hooks/use-notifications";
import Index from "./pages/Index";
import Discover from "./pages/Discover";
import PlaceDetail from "./pages/PlaceDetail";
import SharePlace from "./pages/SharePlace";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import CreateEvent from "./pages/CreateEvent";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import CreateItineraryPage from "./pages/CreateItineraryPage";
import ItinerariesListPage from "./pages/ItinerariesListPage";
import ItineraryDetailPage from "./pages/ItineraryDetailPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <NotificationsProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/place/:id" element={<PlaceDetail />} />
              <Route path="/share" element={<SharePlace />} />
              <Route path="/create-event" element={<CreateEvent />} />
              <Route path="/community" element={<Community />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />

              {/* Itinerary Routes */}
              <Route path="/itineraries" element={<ItinerariesListPage />} />
              <Route path="/itinerary/:itineraryId" element={<ItineraryDetailPage />} />
              <Route path="/create-itinerary" element={<CreateItineraryPage />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </NotificationsProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
