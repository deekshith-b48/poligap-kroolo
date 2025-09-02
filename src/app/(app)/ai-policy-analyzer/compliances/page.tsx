import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

const CompliancesPage = () => {
  const complianceStandards = [
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'compliant',
      coverage: '95%',
      lastChecked: '2024-01-15'
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'partial',
      coverage: '78%',
      lastChecked: '2024-01-14'
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act',
      status: 'non-compliant',
      coverage: '45%',
      lastChecked: '2024-01-13'
    },
    {
      name: 'SOX',
      description: 'Sarbanes-Oxley Act',
      status: 'compliant',
      coverage: '92%',
      lastChecked: '2024-01-15'
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'partial',
      coverage: '67%',
      lastChecked: '2024-01-14'
    },
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      status: 'compliant',
      coverage: '89%',
      lastChecked: '2024-01-15'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'compliant':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'partial':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'non-compliant':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'compliant':
        return <Badge className="bg-green-100 text-green-800">Compliant</Badge>;
      case 'partial':
        return <Badge className="bg-yellow-100 text-yellow-800">Partial</Badge>;
      case 'non-compliant':
        return <Badge className="bg-red-100 text-red-800">Non-Compliant</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Compliance Standards</h1>
        <p className="text-gray-600">
          Monitor and manage your organization's compliance with various regulatory standards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {complianceStandards.map((standard, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{standard.name}</CardTitle>
                {getStatusIcon(standard.status)}
              </div>
              <CardDescription className="text-sm">
                {standard.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  {getStatusBadge(standard.status)}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Coverage:</span>
                  <span className="text-sm font-semibold">{standard.coverage}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      standard.status === 'compliant' ? 'bg-green-500' :
                      standard.status === 'partial' ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: standard.coverage }}
                  />
                </div>
                
                <div className="text-xs text-gray-500">
                  Last checked: {new Date(standard.lastChecked).toLocaleDateString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Summary</CardTitle>
            <CardDescription>
              Overview of your organization's compliance status across all standards.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {complianceStandards.filter(s => s.status === 'compliant').length}
                </div>
                <div className="text-sm text-gray-600">Fully Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  {complianceStandards.filter(s => s.status === 'partial').length}
                </div>
                <div className="text-sm text-gray-600">Partially Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {complianceStandards.filter(s => s.status === 'non-compliant').length}
                </div>
                <div className="text-sm text-gray-600">Non-Compliant</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CompliancesPage;
