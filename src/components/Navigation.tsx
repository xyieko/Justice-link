
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Menu, X, AlertTriangle, Globe, BarChart3, Heart, MessageCircle, Settings } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Nyumbani', icon: Shield },
    { id: 'report', label: 'Ripoti', icon: AlertTriangle },
    { id: 'news', label: 'Habari', icon: Globe },
    { id: 'data', label: 'Takwimu', icon: BarChart3 },
    { id: 'fundraising', label: 'Msaada', icon: Heart },
    { id: 'communication', label: 'Wasiliana', icon: MessageCircle },
    { id: 'admin', label: 'Msimamizi', icon: Settings }
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-red-600 to-green-700 shadow-lg sticky top-0 z-50 border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            <Shield className="h-8 w-8 text-white" />
            <div>
              <h1 className="text-2xl font-bold text-white">JUSTICE LINK KENYA 🇰🇪</h1>
              <p className="text-xs text-green-100">Sauti dhidi ya ukatili wa polisi Kenya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "secondary" : "ghost"}
                className={`flex items-center gap-2 text-white hover:bg-white/20 ${
                  activeSection === item.id ? 'bg-white text-black' : ''
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-white/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "secondary" : "ghost"}
                  className={`justify-start flex items-center gap-2 text-white hover:bg-white/20 ${
                    activeSection === item.id ? 'bg-white text-black' : ''
                  }`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
