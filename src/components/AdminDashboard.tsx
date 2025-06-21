
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Settings, Users, AlertTriangle, Shield, Eye, CheckCircle, X, Search, Filter } from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const pendingReports = [
    {
      id: "R-2024-001",
      type: "Excessive Force",
      location: "Downtown Metro",
      date: "2024-01-15",
      status: "pending",
      priority: "high",
      evidence: ["video", "photos", "witness"]
    },
    {
      id: "R-2024-002",
      type: "Unlawful Arrest",
      location: "Central District",
      date: "2024-01-14",
      status: "reviewing",
      priority: "medium",
      evidence: ["photos", "documents"]
    },
    {
      id: "R-2024-003",
      type: "Police Harassment",
      location: "North Side",
      date: "2024-01-13",
      status: "pending",
      priority: "low",
      evidence: ["witness", "audio"]
    }
  ];

  const users = [
    {
      id: 1,
      name: "Anonymous User #1247",
      joinDate: "2024-01-10",
      reports: 3,
      status: "active",
      trustScore: 95
    },
    {
      id: 2,
      name: "Sarah Johnson",
      joinDate: "2024-01-08",
      reports: 1,
      status: "verified",
      trustScore: 100
    },
    {
      id: 3,
      name: "Anonymous User #1248",
      joinDate: "2024-01-05",
      reports: 2,
      status: "flagged",
      trustScore: 60
    }
  ];

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Admin Dashboard</h1>
        <p className="text-xl text-slate-600">
          Content moderation, verification, and user safety management
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Pending Reports</p>
                <p className="text-3xl font-bold text-slate-900">23</p>
                <p className="text-sm text-orange-600">Needs review</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Active Users</p>
                <p className="text-3xl font-bold text-slate-900">1,247</p>
                <p className="text-sm text-green-600">+12% this week</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Verified Reports</p>
                <p className="text-3xl font-bold text-slate-900">189</p>
                <p className="text-sm text-green-600">High confidence</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">Security Alerts</p>
                <p className="text-3xl font-bold text-slate-900">5</p>
                <p className="text-sm text-red-600">Requires attention</p>
              </div>
              <Shield className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="reports">Report Management</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="verification">Content Verification</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Pending Reports</CardTitle>
                  <CardDescription>
                    Reports awaiting moderation and verification
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input
                      placeholder="Search reports..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{report.id}</h4>
                          <Badge variant={
                            report.priority === 'high' ? 'destructive' :
                            report.priority === 'medium' ? 'default' : 'secondary'
                          }>
                            {report.priority} priority
                          </Badge>
                          <Badge variant="outline">{report.status}</Badge>
                        </div>
                        <p className="text-sm text-slate-600">{report.type} • {report.location}</p>
                        <p className="text-xs text-slate-500">{report.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          <X className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-sm text-slate-600">Evidence:</span>
                      {report.evidence.map((type, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>
                Monitor user activity and manage account status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{user.name}</h4>
                          <Badge variant={
                            user.status === 'verified' ? 'default' :
                            user.status === 'flagged' ? 'destructive' : 'secondary'
                          }>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600">
                          Joined: {user.joinDate} • Reports: {user.reports} • Trust Score: {user.trustScore}%
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                        {user.status === 'flagged' && (
                          <Button size="sm" variant="destructive">
                            Review Flag
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Content Verification</CardTitle>
              <CardDescription>
                AI-assisted verification and fact-checking tools
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Verification Tools</h4>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Eye className="h-4 w-4 mr-2" />
                      Image Verification
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Shield className="h-4 w-4 mr-2" />
                      Location Verification
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Timestamp Verification
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">Quick Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Verified Reports</span>
                      <Badge variant="outline">89%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>False Positives</span>
                      <Badge variant="outline">3%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Pending Review</span>
                      <Badge variant="outline">8%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>
                Configure platform security and moderation settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Security Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Two-factor authentication required</span>
                      <Badge variant="default">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">End-to-end encryption</span>
                      <Badge variant="default">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Anonymous reporting</span>
                      <Badge variant="default">Enabled</Badge>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Moderation Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Auto-moderation</span>
                      <Badge variant="default">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Manual review threshold</span>
                      <Badge variant="outline">Medium</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Content expiration</span>
                      <Badge variant="outline">30 days</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
