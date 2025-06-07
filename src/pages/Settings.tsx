import Navigation from '@/components/Navigation';
import ThemeToggle from '@/components/ThemeToggle';

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-xl">
        <h1 className="text-2xl font-bold mb-4">Paramètres</h1>
        <p className="mb-6">Cette page est un exemple de panneau de paramètres.</p>
        <div className="py-4">
          <h2 className="text-xl font-semibold mb-2">Thème</h2>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Settings;
