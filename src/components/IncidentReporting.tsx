
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Clock, Shield, Upload, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const IncidentReporting = () => {
  const { toast } = useToast();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [location, setLocation] = useState('');
  const [incidentType, setIncidentType] = useState('');
  const [description, setDescription] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Incident Report Submitted",
      description: "Your report has been securely submitted and assigned a tracking ID.",
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        toast({
          title: "Location Captured",
          description: "GPS coordinates have been automatically added to your report.",
        });
      });
    }
  };

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Report an Incident</h1>
        <p className="text-xl text-slate-600">
          Secure, anonymous reporting with GPS tagging and evidence upload
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="text-lg font-semibold mb-2">Secure & Encrypted</h3>
            <p className="text-sm text-slate-600">All reports are encrypted and stored securely</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Eye className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2">Anonymous Option</h3>
            <p className="text-sm text-slate-600">Report anonymously to protect your identity</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-lg font-semibold mb-2">Immediate Processing</h3>
            <p className="text-sm text-slate-600">Reports are processed and verified quickly</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-red-600" />
            Incident Report Form
          </CardTitle>
          <CardDescription>
            Provide as much detail as possible. All fields marked with * are required.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(checked === true)}
              />
              <Label htmlFor="anonymous" className="flex items-center gap-2">
                <EyeOff className="h-4 w-4" />
                Submit this report anonymously
              </Label>
            </div>

            {!isAnonymous && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div>
                  <Label htmlFor="contact">Contact Information</Label>
                  <Input id="contact" placeholder="Email or phone number" />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="incident-type">Incident Type *</Label>
              <Select value={incidentType} onValueChange={setIncidentType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excessive-force">Excessive Force</SelectItem>
                  <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                  <SelectItem value="unlawful-arrest">Unlawful Arrest</SelectItem>
                  <SelectItem value="harassment">Harassment</SelectItem>
                  <SelectItem value="corruption">Corruption</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="location">Location *</Label>
              <div className="flex gap-2">
                <Input
                  id="location"
                  placeholder="Enter location or address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
                <Button type="button" variant="outline" onClick={getLocation}>
                  <MapPin className="h-4 w-4 mr-2" />
                  Get GPS
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="date-time">Date and Time *</Label>
              <Input
                id="date-time"
                type="datetime-local"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Incident Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of what happened..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-[120px]"
                required
              />
            </div>

            <div>
              <Label htmlFor="evidence">Evidence Upload</Label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6">
                <div className="text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-slate-400" />
                  <p className="text-slate-600 mb-2">Upload photos, videos, or documents</p>
                  <p className="text-sm text-slate-500 mb-4">
                    Supported formats: JPG, PNG, MP4, PDF (Max 50MB per file)
                  </p>
                  <Input
                    type="file"
                    multiple
                    accept="image/*,video/*,.pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <Label htmlFor="file-upload">
                    <Button type="button" variant="outline" asChild>
                      <span>
                        <Camera className="h-4 w-4 mr-2" />
                        Choose Files
                      </span>
                    </Button>
                  </Label>
                </div>
                
                {files.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Selected Files:</h4>
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Badge variant="outline">{file.name}</Badge>
                          <span className="text-sm text-slate-500">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Important Notice</h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Your report will be reviewed by our verification team and may be shared with 
                    relevant human rights organizations. Personal information will be protected 
                    according to our privacy policy.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-red-600 hover:bg-red-700">
                <Shield className="h-4 w-4 mr-2" />
                Submit Report Securely
              </Button>
              <Button type="button" variant="outline">
                Save as Draft
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default IncidentReporting;
