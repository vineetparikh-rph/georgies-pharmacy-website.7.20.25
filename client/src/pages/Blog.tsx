import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'What Vaccines Are Covered by Medicare in 2025?',
      excerpt:
        'Complete guide to Medicare vaccine coverage including flu shots, COVID-19 vaccines, shingles vaccine, and pneumonia vaccines. Learn about Part B vs Part D coverage.',
      author: 'Dr. Sarah Johnson, PharmD',
      date: 'January 15, 2025',
      readTime: '5 min read',
      tags: ['Medicare', 'Vaccines', 'Insurance'],
      slug: 'medicare-vaccine-coverage-2025',
      featured: true,
    },
    {
      id: 2,
      title: 'How to Transfer a Prescription in New Jersey',
      excerpt:
        'Step-by-step guide to transferring prescriptions between pharmacies in NJ. Learn about legal requirements, what information you need, and how to make the process smooth.',
      author: 'Georgies Pharmacy Team',
      date: 'January 10, 2025',
      readTime: '3 min read',
      tags: ['Prescription Transfer', 'New Jersey', 'How-To'],
      slug: 'how-to-transfer-prescription-nj',
    },
    {
      id: 3,
      title: 'What Is a Specialty Pharmacy?',
      excerpt:
        'Understanding specialty pharmacies and how they differ from traditional pharmacies. Learn about complex medications, patient support services, and insurance coordination.',
      author: 'Mark Thompson, PharmD',
      date: 'January 5, 2025',
      readTime: '4 min read',
      tags: ['Specialty Pharmacy', 'Healthcare', 'Education'],
      slug: 'what-is-specialty-pharmacy',
    },
    {
      id: 4,
      title: 'Managing Diabetes Medications: Tips for Better Health',
      excerpt:
        'Essential tips for managing diabetes medications including timing, storage, monitoring blood sugar, and working with your pharmacist for optimal care.',
      author: 'Dr. Michael Chen, PharmD',
      date: 'December 28, 2024',
      readTime: '6 min read',
      tags: ['Diabetes', 'Medication Management', 'Health Tips'],
      slug: 'managing-diabetes-medications',
    },
    {
      id: 5,
      title: '2025 Updates to Prescription Drug Coverage',
      excerpt:
        'Important changes to prescription drug coverage for 2025 including new Medicare benefits, updated formularies, and tips for maximizing your savings.',
      author: 'Georgies Insurance Team',
      date: 'December 20, 2024',
      readTime: '7 min read',
      tags: ['Insurance', 'Medicare', 'Drug Coverage'],
      slug: '2025-prescription-coverage-updates',
    },
    {
      id: 6,
      title: 'The Importance of Medication Synchronization',
      excerpt:
        'Learn how medication synchronization can improve adherence, reduce pharmacy trips, and help you better manage multiple prescriptions.',
      author: 'Dr. Lisa Rodriguez, PharmD',
      date: 'December 15, 2024',
      readTime: '4 min read',
      tags: ['Medication Sync', 'Adherence', 'Convenience'],
      slug: 'importance-medication-synchronization',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Georgies Pharmacy Blog - Health Tips & Medication Advice | NJ Pharmacy</title>
        <meta
          name="description"
          content="Get expert health tips, medication advice, and pharmacy insights from Georgies Pharmacy. Learn about Medicare coverage, prescription transfers, specialty medications, and more."
        />
        <meta
          name="keywords"
          content="pharmacy blog, health tips, medication advice, Medicare coverage, prescription help, pharmacy news, New Jersey pharmacy, medication management"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Georgies Pharmacy Blog - Health Tips & Medication Advice"
        />
        <meta
          property="og:description"
          content="Expert health tips, medication advice, and pharmacy insights from Georgies Pharmacy team."
        />
        <meta property="og:url" content="https://georgiesrx.com/blog" />
        <meta property="og:type" content="website" />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Georgies Pharmacy Blog',
            description:
              'Expert health tips, medication advice, and pharmacy insights from licensed pharmacists at Georgies Pharmacy.',
            url: 'https://georgiesrx.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Georgies Pharmacy',
              url: 'https://georgiesrx.com',
            },
            blogPost: blogPosts.map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              author: {
                '@type': 'Person',
                name: post.author,
              },
              datePublished: new Date(post.date).toISOString(),
              url: `https://georgiesrx.com/blog/${post.slug}`,
              keywords: post.tags.join(', '),
            })),
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <Navigation />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              Health & Wellness Blog
            </Badge>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Georgies Pharmacy <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert health tips, medication advice, and pharmacy insights from our licensed
              pharmacists. Stay informed about the latest in healthcare and medication management.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <div key={post.id} className="mb-16">
                <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-50 pb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="default" className="bg-primary">
                        Featured
                      </Badge>
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-3xl font-bold text-slate-900 mb-4">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-slate-600 mb-6">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Read Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}

          {/* Other Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span className="truncate">{post.author.split(',')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardHeader>
                </Card>
              ))}
          </div>

          {/* Newsletter Signup */}
          <section className="mt-16 bg-gradient-to-r from-primary to-red-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Health Tips</h2>
            <p className="text-xl text-red-100 mb-8">
              Subscribe to our newsletter for the latest health tips, medication advice, and
              pharmacy updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900"
              />
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
