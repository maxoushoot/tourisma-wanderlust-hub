import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Clair</span>
      <Switch checked={isDark} onCheckedChange={(val) => setTheme(val ? "dark" : "light")} />
      <span className="text-sm text-gray-600">Sombre</span>
    </div>
  );
};

export default ThemeToggle;
