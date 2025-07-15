import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Images, 
  TrendingUp, 
  Calendar,
  Eye,
  UserCheck,
  Palette,
  Award
} from "lucide-react";

export const AdminDashboard = () => {
  const [stats] = useState({
    totalUsers: 1247,
    totalArtworks: 2834,
    monthlyViews: 45672,
    pendingApprovals: 23,
    activeUsers: 892,
    curators: 156,
    professors: 34,
    visitors: 1057
  });

  const recentActivity = [
    { id: 1, action: "New artwork uploaded", user: "Sarah Wilson", time: "2 hours ago", type: "upload" },
    { id: 2, action: "Art approved", user: "Dr. Johnson", time: "3 hours ago", type: "approval" },
    { id: 3, action: "New user registered", user: "Mike Chen", time: "5 hours ago", type: "registration" },
    { id: 4, action: "Comment added", user: "Emma Davis", time: "7 hours ago", type: "comment" },
  ];

  const StatCard = ({ title, value, icon: Icon, trend, color }: any) => (
    <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value.toLocaleString()}</p>
            {trend && (
              <p className={`text-xs ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {trend > 0 ? '+' : ''}{trend}% from last month
              </p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-archive-brown" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your Historical Archive platform</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Users"
            value={stats.totalUsers}
            icon={Users}
            trend={12}
            color="bg-blue-100"
          />
          <StatCard
            title="Total Artworks"
            value={stats.totalArtworks}
            icon={Images}
            trend={8}
            color="bg-green-100"
          />
          <StatCard
            title="Monthly Views"
            value={stats.monthlyViews}
            icon={Eye}
            trend={15}
            color="bg-purple-100"
          />
          <StatCard
            title="Pending Approvals"
            value={stats.pendingApprovals}
            icon={Calendar}
            trend={-5}
            color="bg-orange-100"
          />
        </div>

        {/* User Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                User Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Visitors</span>
                <Badge variant="secondary">{stats.visitors}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Curators</span>
                <Badge variant="secondary">{stats.curators}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Professors</span>
                <Badge variant="secondary">{stats.professors}</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-archive-gold/5">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-archive-gold rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">by {activity.user}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button variant="archive" className="h-12">
                <Users className="h-4 w-4 mr-2" />
                Manage Users
              </Button>
              <Button variant="archive" className="h-12">
                <Images className="h-4 w-4 mr-2" />
                Review Arts
              </Button>
              <Button variant="archive" className="h-12">
                <Palette className="h-4 w-4 mr-2" />
                Categories
              </Button>
              <Button variant="archive" className="h-12">
                <Calendar className="h-4 w-4 mr-2" />
                Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};