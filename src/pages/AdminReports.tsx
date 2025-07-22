import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  BarChart3, 
  Download,
  Calendar,
  TrendingUp,
  Users,
  Eye,
  Images,
  Activity
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export const AdminReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [selectedReport, setSelectedReport] = useState("overview");

  const reportData = {
    overview: {
      totalViews: 45672,
      totalUsers: 1247,
      totalArtworks: 2834,
      activeUsers: 892,
      viewsGrowth: 15.2,
      usersGrowth: 8.7,
      artworksGrowth: 12.3
    },
    userActivity: [
      { date: "2024-01-01", visitors: 234, curators: 45, professors: 12 },
      { date: "2024-01-02", visitors: 267, curators: 52, professors: 15 },
      { date: "2024-01-03", visitors: 198, curators: 38, professors: 9 },
      { date: "2024-01-04", visitors: 345, curators: 67, professors: 18 },
      { date: "2024-01-05", visitors: 456, curators: 78, professors: 23 },
    ],
    popularCategories: [
      { name: "Paintings", views: 12543, percentage: 35 },
      { name: "Sculptures", views: 8921, percentage: 25 },
      { name: "Ceramics", views: 6743, percentage: 19 },
      { name: "Textiles", views: 4321, percentage: 12 },
      { name: "Documents", views: 3254, percentage: 9 },
    ],
    recentReports: [
      { id: 1, name: "Monthly User Activity", type: "User Analytics", generated: "2024-01-15", size: "2.3 MB" },
      { id: 2, name: "Artwork Views Report", type: "Content Analytics", generated: "2024-01-14", size: "1.8 MB" },
      { id: 3, name: "Category Performance", type: "Category Analytics", generated: "2024-01-13", size: "1.2 MB" },
      { id: 4, name: "User Engagement", type: "User Analytics", generated: "2024-01-12", size: "3.1 MB" },
    ]
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logout");
  };

  const handleDownloadReport = (reportType: string) => {
    console.log(`Downloading ${reportType} report`);
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar userRole="admin" onLogout={handleLogout} />
      
      <div className="flex-1 p-6 lg:ml-0">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
              <p className="text-muted-foreground">View detailed analytics and generate reports</p>
            </div>
            <div className="flex gap-2">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-[120px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                  <SelectItem value="365">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="archive">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                    <p className="text-2xl font-bold text-foreground">{reportData.overview.totalViews.toLocaleString()}</p>
                    <p className="text-xs text-green-600">
                      +{reportData.overview.viewsGrowth}% from last period
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-100">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold text-foreground">{reportData.overview.totalUsers.toLocaleString()}</p>
                    <p className="text-xs text-green-600">
                      +{reportData.overview.usersGrowth}% from last period
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-green-100">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Artworks</p>
                    <p className="text-2xl font-bold text-foreground">{reportData.overview.totalArtworks.toLocaleString()}</p>
                    <p className="text-xs text-green-600">
                      +{reportData.overview.artworksGrowth}% from last period
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-100">
                    <Images className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                    <p className="text-2xl font-bold text-foreground">{reportData.overview.activeUsers.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((reportData.overview.activeUsers / reportData.overview.totalUsers) * 100)}% of total
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-orange-100">
                    <Activity className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Popular Categories */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Popular Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reportData.popularCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-archive-gold/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-archive-gold/20 flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{category.name}</p>
                        <p className="text-sm text-muted-foreground">{category.views.toLocaleString()} views</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{category.percentage}%</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Recent Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {reportData.recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border border-archive-gold/10 hover:bg-archive-gold/5 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded bg-archive-gold/10">
                        <BarChart3 className="h-4 w-4 text-archive-brown" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{report.name}</p>
                        <p className="text-sm text-muted-foreground">{report.type} • {report.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{report.generated}</span>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDownloadReport(report.name)}
                      >
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Generate Report Section */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardHeader>
              <CardTitle>Generate New Report</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  variant="archive" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => handleDownloadReport("User Analytics")}
                >
                  <Users className="h-6 w-6" />
                  User Analytics
                </Button>
                <Button 
                  variant="archive" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => handleDownloadReport("Content Analytics")}
                >
                  <Images className="h-6 w-6" />
                  Content Analytics
                </Button>
                <Button 
                  variant="archive" 
                  className="h-20 flex flex-col gap-2"
                  onClick={() => handleDownloadReport("Engagement Report")}
                >
                  <TrendingUp className="h-6 w-6" />
                  Engagement Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};