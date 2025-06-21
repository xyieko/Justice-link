
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Globe, Search, Filter, ExternalLink, Calendar, MapPin, Bookmark, Share2 } from 'lucide-react';

const NewsAggregation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: "International Human Rights Commission Calls for Police Reform",
      source: "UN Human Rights",
      country: "Global",
      date: "2024-01-15",
      type: "international",
      summary: "The UN Human Rights Commission released a comprehensive report calling for immediate police reform measures across 45 countries...",
      image: "/placeholder.svg",
      tags: ["Reform", "International", "Policy"]
    },
    {
      id: 2,
      title: "New Accountability Measures Introduced in Metropolitan Police",
      source: "Justice Today",
      country: "United States",
      date: "2024-01-14",
      type: "government",
      summary: "Local government announces new oversight committee and body camera requirements following community pressure...",
      image: "/placeholder.svg",
      tags: ["Accountability", "Body Cameras", "Reform"]
    },
    {
      id: 3,
      title: "Community Leaders Demand Justice in Recent Case",
      source: "Community Voice",
      country: "Canada",
      date: "2024-01-13",
      type: "news",
      summary: "Peaceful protests continue as community demands answers in case of alleged police misconduct...",
      image: "/placeholder.svg",
      tags: ["Community", "Protests", "Justice"]
    },
    {
      id: 4,
      title: "European Parliament Discusses Police Brutality Prevention",
      source: "EU Today",
      country: "European Union",
      date: "2024-01-12",
      type: "international",
      summary: "MEPs debate new framework for preventing police brutality and ensuring accountability across member states...",
      image: "/placeholder.svg",
      tags: ["EU", "Prevention", "Framework"]
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || item.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">News Aggregation</h1>
        <p className="text-xl text-slate-600">
          Real-time collection of news reports, government statements, and international reactions
        </p>
      </div>

      <div className="mb-8 grid md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search news, reports, statements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Sources</SelectItem>
            <SelectItem value="news">News Reports</SelectItem>
            <SelectItem value="government">Government Statements</SelectItem>
            <SelectItem value="international">International Reactions</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {filteredNews.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant={
                      item.type === 'international' ? 'default' :
                      item.type === 'government' ? 'secondary' : 'outline'
                    }>
                      {item.type === 'international' ? 'International' :
                       item.type === 'government' ? 'Government' : 'News'}
                    </Badge>
                    <span className="text-sm text-slate-500">{item.source}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl hover:text-blue-600 cursor-pointer">
                  {item.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {item.country}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{item.summary}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="link" className="text-blue-600 p-0">
                    Read More <ExternalLink className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                Global Coverage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">United States</span>
                  <Badge variant="outline">245 reports</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Brazil</span>
                  <Badge variant="outline">189 reports</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">India</span>
                  <Badge variant="outline">156 reports</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Nigeria</span>
                  <Badge variant="outline">134 reports</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Philippines</span>
                  <Badge variant="outline">98 reports</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trending Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {['Police Reform', 'Body Cameras', 'Community Oversight', 'Legal Accountability', 'Training Programs'].map((topic, index) => (
                  <Button key={index} variant="ghost" className="justify-start w-full text-left p-2">
                    #{topic}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full">
                Subscribe to Alerts
              </Button>
              <Button variant="outline" className="w-full">
                Export Data
              </Button>
              <Button variant="outline" className="w-full">
                Submit News Tip
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsAggregation;
