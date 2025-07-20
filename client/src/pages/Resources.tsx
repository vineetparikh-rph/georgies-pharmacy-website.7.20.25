import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Download,
  FileText,
  Video,
  ExternalLink,
  Search,
  Heart,
  Pill,
  Shield,
  Users,
  Clock,
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');

  const resourceCategories = [
    {
      id: 'medication-guides',
      title: 'Medication Guides',
      description: 'Comprehensive guides on proper medication use and management',
      icon: Pill,
      count: 47,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'health-education',
      title: 'Health Education',
      description: 'Educational materials on various health conditions and prevention',
      icon: Heart,
      count: 32,
      color: 'bg-red-100 text-red-800',
    },
    {
      id: 'insurance-forms',
      title: 'Insurance & Forms',
      description: 'Insurance information and downloadable forms',
      icon: Shield,
      count: 18,
      color: 'bg-green-100 text-green-800',
    },
    {
      id: 'patient-resources',
      title: 'Patient Resources',
      description: 'Tools and resources for better health management',
      icon: Users,
      count: 25,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'emergency-info',
      title: 'Emergency Information',
      description: 'Critical information for medical emergencies',
      icon: Clock,
      count: 12,
      color: 'bg-orange-100 text-orange-800',
    },
  ];

  const featuredResources = [
    {
      title: 'Medication Adherence Guide',
      description: 'Learn how to properly take your medications and improve health outcomes',
      type: 'PDF Guide',
      category: 'Medication Guides',
      downloadUrl: '#',
      popular: true,
    },
    {
      title: 'Understanding Your Insurance Benefits',
      description: 'Navigate your insurance coverage and maximize your benefits',
      type: 'Interactive Guide',
      category: 'Insurance & Forms',
      downloadUrl: '#',
      popular: true,
    },
    {
      title: 'Diabetes Management Toolkit',
      description: 'Comprehensive resources for managing diabetes effectively',
      type: 'Resource Kit',
      category: 'Health Education',
      downloadUrl: '#',
      popular: false,
    },
    {
      title: 'Vaccination Schedule & Records',
      description: 'Track your vaccinations and stay up-to-date with immunizations',
      type: 'Tracking Form',
      category: 'Patient Resources',
      downloadUrl: '#',
      popular: false,
    },
    {
      title: 'Emergency Medication Information',
      description: 'Essential information for emergency situations and medication allergies',
      type: 'Emergency Card',
      category: 'Emergency Information',
      downloadUrl: '#',
      popular: true,
    },
    {
      title: 'Senior Medication Safety',
      description: 'Special considerations for medication use in older adults',
      type: 'Safety Guide',
      category: 'Medication Guides',
      downloadUrl: '#',
      popular: false,
    },
  ];

  const healthTips = [
    {
      title: 'Medication Storage Tips',
      content: 'Store medications in a cool, dry place away from direct sunlight and moisture.',
      category: 'Medication Safety',
    },
    {
      title: 'Reading Prescription Labels',
      content:
        'Always check the medication name, dosage, and instructions before taking any medication.',
      category: 'Patient Education',
    },
    {
      title: 'Drug Interaction Awareness',
      content:
        "Always inform your pharmacist about all medications, supplements, and vitamins you're taking.",
      category: 'Safety',
    },
    {
      title: 'Timing Your Medications',
      content:
        'Take medications at the same time each day to maintain consistent levels in your system.',
      category: 'Adherence',
    },
  ];

  const filteredResources = featuredResources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Health <span className="text-primary">Resources</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access valuable health information, medication guides, and educational materials to help
            you manage your health effectively.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
            <Input
              type="text"
              placeholder="Search resources, guides, and health information..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-slate-200 focus:border-primary"
            />
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resourceCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg ${category.color.replace('text-', 'bg-').replace('800', '100')}`}
                  >
                    <category.icon
                      className={`h-6 w-6 ${category.color.replace('bg-', 'text-').replace('100', '600')}`}
                    />
                  </div>
                  <Badge variant="secondary" className={category.color}>
                    {category.count} resources
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{category.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Resources
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Resources */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Resources</h2>
            <div className="space-y-6">
              {filteredResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-slate-900">{resource.title}</h3>
                          {resource.popular && (
                            <Badge variant="destructive" className="ml-2">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-slate-600 text-sm mb-3">{resource.description}</p>
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline">{resource.type}</Badge>
                          <Badge variant="secondary">{resource.category}</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Health Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  Health Tips
                </CardTitle>
                <CardDescription>Quick tips for better health management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthTips.map((tip, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-sm text-slate-900">{tip.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{tip.content}</p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {tip.category}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Prescription Transfer Form
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Insurance Authorization Form
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Video className="h-4 w-4 mr-2" />
                    Medication Administration Videos
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Drug Interaction Checker
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-red-800">Poison Control</p>
                    <p className="text-red-700">1-800-222-1222</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">Emergency Services</p>
                    <p className="text-red-700">911</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">24/7 Pharmacist On-Call</p>
                    <p className="text-red-700">(908) 925-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest health tips and resources delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Enter your email address" type="email" />
                  <Button className="w-full">Subscribe to Newsletter</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
