"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Video, FileText, ExternalLink, Clock, Users } from 'lucide-react';

const LearnPage = () => {
  const learningResources = [
    {
      type: 'article',
      title: 'Understanding GDPR Compliance',
      description: 'A comprehensive guide to General Data Protection Regulation requirements and implementation strategies.',
      duration: '15 min read',
      difficulty: 'Beginner',
      category: 'Privacy Law',
      link: '#',
      icon: <FileText className="h-5 w-5" />
    },
    {
      type: 'video',
      title: 'HIPAA Security Rule Deep Dive',
      description: 'Learn about the technical safeguards required under the HIPAA Security Rule.',
      duration: '25 min',
      difficulty: 'Intermediate',
      category: 'Healthcare',
      link: '#',
      icon: <Video className="h-5 w-5" />
    },
    {
      type: 'course',
      title: 'SOX Compliance Framework',
      description: 'Complete course on Sarbanes-Oxley Act compliance for financial reporting.',
      duration: '2 hours',
      difficulty: 'Advanced',
      category: 'Financial',
      link: '#',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      type: 'article',
      title: 'PCI DSS Requirements Overview',
      description: 'Essential guide to Payment Card Industry Data Security Standard compliance.',
      duration: '12 min read',
      difficulty: 'Beginner',
      category: 'Payment Security',
      link: '#',
      icon: <FileText className="h-5 w-5" />
    },
    {
      type: 'video',
      title: 'ISO 27001 Implementation',
      description: 'Step-by-step guide to implementing an Information Security Management System.',
      duration: '35 min',
      difficulty: 'Advanced',
      category: 'Security',
      link: '#',
      icon: <Video className="h-5 w-5" />
    },
    {
      type: 'course',
      title: 'CCPA Privacy Rights',
      description: 'Understanding California Consumer Privacy Act and consumer rights.',
      duration: '1.5 hours',
      difficulty: 'Intermediate',
      category: 'Privacy Law',
      link: '#',
      icon: <BookOpen className="h-5 w-5" />
    }
  ];

  const categories = ['All', 'Privacy Law', 'Healthcare', 'Financial', 'Payment Security', 'Security'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredResources = selectedCategory === 'All' 
    ? learningResources 
    : learningResources.filter(resource => resource.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article':
        return 'bg-blue-100 text-blue-800';
      case 'video':
        return 'bg-purple-100 text-purple-800';
      case 'course':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learning Center</h1>
        <p className="text-gray-600">
          Expand your knowledge of compliance standards, regulations, and best practices.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Learning Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  {resource.icon}
                  <Badge className={getTypeColor(resource.type)}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </Badge>
                </div>
                <ExternalLink className="h-4 w-4 text-gray-400" />
              </div>
              <CardTitle className="text-lg leading-tight">
                {resource.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {resource.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    {resource.duration}
                  </div>
                  <Badge className={getDifficultyColor(resource.difficulty)}>
                    {resource.difficulty}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {resource.category}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <CardTitle className="text-xl">Compliance Fundamentals</CardTitle>
              </div>
              <CardDescription>
                Essential knowledge for compliance professionals and beginners.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">5 courses • 8 hours total</div>
                <div className="text-sm text-gray-600">Beginner to Intermediate</div>
                <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Start Learning Path
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-500" />
                <CardTitle className="text-xl">Advanced Security Frameworks</CardTitle>
              </div>
              <CardDescription>
                Deep dive into complex security and compliance frameworks.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">3 courses • 12 hours total</div>
                <div className="text-sm text-gray-600">Advanced</div>
                <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                  Start Learning Path
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Progress</CardTitle>
            <CardDescription>Track your compliance education journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-sm text-gray-600">Courses Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">45</div>
                <div className="text-sm text-gray-600">Hours Learned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">8</div>
                <div className="text-sm text-gray-600">Certificates Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">95%</div>
                <div className="text-sm text-gray-600">Average Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LearnPage;
