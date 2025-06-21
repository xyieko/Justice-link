
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MessageCircle, Shield, Users, Phone, Mail, Globe, Send, Paperclip, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CommunicationHub = () => {
  const { toast } = useToast();
  const [selectedChannel, setSelectedChannel] = useState('legal-aid');
  const [message, setMessage] = useState('');

  const channels = [
    {
      id: 'legal-aid',
      name: 'Legal Aid Network',
      description: 'Connect with lawyers and legal advocates',
      members: 156,
      status: 'verified',
      icon: Shield
    },
    {
      id: 'human-rights',
      name: 'Human Rights Organizations',
      description: 'International human rights groups',
      members: 89,
      status: 'verified',
      icon: Globe
    },
    {
      id: 'community',
      name: 'Community Support',
      description: 'Local community advocates and activists',
      members: 234,
      status: 'active',
      icon: Users
    },
    {
      id: 'emergency',
      name: 'Emergency Response',
      description: '24/7 crisis support and intervention',
      members: 45,
      status: 'urgent',
      icon: Phone
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'Legal Aid Kenya',
      message: 'We have received your case file and will assign a lawyer within 24 hours.',
      timestamp: '10 minutes ago',
      type: 'legal',
      verified: true
    },
    {
      id: 2,
      sender: 'Human Rights Watch',
      message: 'Thank you for your report. We are documenting this incident for our upcoming report.',
      timestamp: '1 hour ago',
      type: 'organization',
      verified: true
    },
    {
      id: 3,
      sender: 'Community Advocate',
      message: 'A peaceful vigil is being organized for this weekend. Would you like to participate?',
      timestamp: '3 hours ago',
      type: 'community',
      verified: false
    }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    toast({
      title: "Message Sent Securely",
      description: "Your encrypted message has been delivered to the organization.",
    });
    
    setMessage('');
  };

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Secure Communication</h1>
        <p className="text-xl text-slate-600">
          Connect safely with human rights organizations and legal advocates
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Channels</p>
                <p className="text-3xl font-bold text-slate-900">12</p>
                <p className="text-sm text-green-600">All verified</p>
              </div>
              <MessageCircle className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Response Time</p>
                <p className="text-3xl font-bold text-slate-900">2.4h</p>
                <p className="text-sm text-blue-600">Average</p>
              </div>
              <Shield className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Cases Helped</p>
                <p className="text-3xl font-bold text-slate-900">89</p>
                <p className="text-sm text-purple-600">This month</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Encryption</p>
                <p className="text-3xl font-bold text-slate-900">E2E</p>
                <p className="text-sm text-green-600">Secured</p>
              </div>
              <Lock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Communication Channels</CardTitle>
              <CardDescription>
                Select a verified organization to connect with
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {channels.map((channel) => (
                <div
                  key={channel.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    selectedChannel === channel.id 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                  onClick={() => setSelectedChannel(channel.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <channel.icon className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-medium text-slate-900">{channel.name}</h4>
                        <p className="text-sm text-slate-600 mb-2">{channel.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={channel.status === 'verified' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {channel.status}
                          </Badge>
                          <span className="text-xs text-slate-500">
                            {channel.members} members
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-green-600" />
                Secure Messages
              </CardTitle>
              <CardDescription>
                End-to-end encrypted communication
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-6">
                {messages.map((msg) => (
                  <div key={msg.id} className="flex gap-3 p-4 bg-slate-50 rounded-lg">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {msg.sender.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{msg.sender}</span>
                        {msg.verified && (
                          <Shield className="h-4 w-4 text-green-600" />
                        )}
                        <span className="text-xs text-slate-500">{msg.timestamp}</span>
                      </div>
                      <p className="text-sm text-slate-700">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Textarea
                  placeholder="Type your secure message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[100px]"
                />
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    <Paperclip className="h-4 w-4 mr-2" />
                    Attach File
                  </Button>
                  <Button onClick={handleSendMessage}>
                    <Send className="h-4 w-4 mr-2" />
                    Send Securely
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Contacts</CardTitle>
              <CardDescription>
                24/7 crisis support and immediate assistance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="h-5 w-5 text-red-600" />
                    <h4 className="font-medium">Crisis Hotline</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Immediate support for urgent situations
                  </p>
                  <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                    Call Now
                  </Button>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium">Emergency Email</h4>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Secure emergency reporting channel
                  </p>
                  <Button size="sm" variant="outline" className="w-full">
                    Send Email
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunicationHub;
