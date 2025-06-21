
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Eye, Heart, Scale } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const Hero = ({ setActiveSection }: HeroProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Kenyan flag-inspired gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-600 to-green-700"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-red-600 text-white border-white">
                <AlertTriangle className="h-4 w-4 mr-1" />
                URGENT - KENYA
              </Badge>
              <Badge variant="outline" className="border-white text-white bg-green-700">
                🇰🇪 NATIONAL INITIATIVE
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              JUSTICE LINK KENYA
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-green-100 font-medium">
              Sauti dhidi ya ukatili wa polisi Kenya
            </p>
            <p className="text-lg mb-8 text-gray-100 leading-relaxed">
              Jukwaa salama, linaloendeshwa na jamii ambapo wahanga na mashahidi wanaweza kuripoti matukio 
              bila kutambulika, kuunganisha na mashirika ya haki za binadamu, na kuchangisha msaada wa haki na mageuzi Kenya.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-3 border-2 border-white"
                onClick={() => setActiveSection('report')}
              >
                <AlertTriangle className="mr-2 h-5 w-5" />
                Ripoti Tukio
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
                onClick={() => setActiveSection('data')}
              >
                <Eye className="mr-2 h-5 w-5" />
                Tazama Data
              </Button>
            </div>

            <div className="flex items-center gap-6 text-green-100">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Salama & Bila Kutambulika</span>
              </div>
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-red-400" />
                <span>Athari ya Kikenia</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 border-2">
              <CardContent className="p-6 text-white text-center">
                <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold mb-2">1,500+</h3>
                <p className="text-green-100">Matukio Yaliyorekodiwa Kenya</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 border-2">
              <CardContent className="p-6 text-white text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-red-400" />
                <h3 className="text-2xl font-bold mb-2">KSh 115M</h3>
                <p className="text-green-100">Fedha Zilizokusanywa</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 border-2 col-span-2">
              <CardContent className="p-6 text-white text-center">
                <Scale className="h-12 w-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-bold mb-2">Kupigania Haki Kenya</h3>
                <p className="text-green-100">Kuunganisha jamii, kupaza sauti, kudai uwazi Kenya</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
