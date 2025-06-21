
import { useState } from 'react';
import { Shield, MapPin, Clock, Camera, Users, Heart, MessageCircle, BarChart3, Globe, FileText, AlertTriangle, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import IncidentReporting from '@/components/IncidentReporting';
import NewsAggregation from '@/components/NewsAggregation';
import DataVisualization from '@/components/DataVisualization';
import Fundraising from '@/components/Fundraising';
import CommunicationHub from '@/components/CommunicationHub';
import AdminDashboard from '@/components/AdminDashboard';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'report':
        return <IncidentReporting />;
      case 'news':
        return <NewsAggregation />;
      case 'data':
        return <DataVisualization />;
      case 'fundraising':
        return <Fundraising />;
      case 'communication':
        return <CommunicationHub />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return (
          <>
            <Hero setActiveSection={setActiveSection} />
            <FeaturesSection setActiveSection={setActiveSection} />
            <StatsSection />
            <CallToAction setActiveSection={setActiveSection} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderActiveSection()}
    </div>
  );
};

const FeaturesSection = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  const features = [
    {
      icon: AlertTriangle,
      title: "Ripoti za Matukio",
      description: "Uripotiaji salama, bila kutambulika ukiwa na GPS tagging, timestamp, na upakiaji wa ushahidi wa multimedia.",
      section: "report",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Mkusanyiko wa Habari",
      description: "Ukusanyaji wa wakati halisi wa ripoti za habari, taarifa za serikali, na majibu ya kimataifa.",
      section: "news",
      color: "text-green-700"
    },
    {
      icon: BarChart3,
      title: "Uoneshaji wa Data",
      description: "Ramani za maingiliano, grafu, na uchanganuzi wa kufuatilia matukio na kutambua mifumo.",
      section: "data",
      color: "text-black"
    },
    {
      icon: Heart,
      title: "Jukwaa la Ukusanyaji Fedha",
      description: "Msaada wa moja kwa moja kwa familia za wahanga kupitia njia salama za michango.",
      section: "fundraising",
      color: "text-red-600"
    },
    {
      icon: MessageCircle,
      title: "Mawasiliano Salama",
      description: "Njia za kusimba kwa mawasiliano ya siri na mashirika ya haki za binadamu.",
      section: "communication",
      color: "text-green-700"
    },
    {
      icon: Shield,
      title: "Dashibodi ya Msimamizi",
      description: "Udhibiti wa maudhui, uhalalishaji, na zana za usimamizi wa usalama wa watumiaji.",
      section: "admin",
      color: "text-black"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Jukwaa Kamili la Haki Kenya</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Kuwezesha jamii na zana za uwazi, uwazi, na haki nchini Kenya
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-l-4 border-l-red-600 bg-white/90 backdrop-blur-sm"
              onClick={() => setActiveSection(feature.section)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <CardTitle className="text-xl text-black">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-700">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { number: "1,500+", label: "Matukio Yaliyorekodiwa Kenya", icon: AlertTriangle },
    { number: "47", label: "Kaunti Zilizoshiriki", icon: Globe },
    { number: "KSh 115M", label: "Fedha Zilizokusanywa", icon: Heart },
    { number: "200+", label: "Mashirika Makuu", icon: Users }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-black via-red-600 to-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Kutengeneza Athari Kenya</h2>
          <p className="text-xl text-green-100">Pamoja, tunajenga ulimwengu wenye uwazi zaidi Kenya</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 p-6 rounded-lg border-2 border-white/20">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <div className="text-4xl font-bold text-red-300 mb-2">{stat.number}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = ({ setActiveSection }: { setActiveSection: (section: string) => void }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 via-black to-red-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Jiunge na Mapambano ya Haki Kenya</h2>
        <p className="text-xl mb-8 opacity-90">
          Kila sauti ni muhimu. Kila ripoti inahesabiwa. Pamoja, tunaweza kumaliza ukatili wa polisi na kuhakikisha uwazi Kenya.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-green-100 text-lg px-8 py-3 border-2 border-white"
            onClick={() => setActiveSection('report')}
          >
            <Megaphone className="mr-2 h-5 w-5" />
            Ripoti Tukio
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3"
            onClick={() => setActiveSection('fundraising')}
          >
            <Heart className="mr-2 h-5 w-5" />
            Msaada wa Familia
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Index;
