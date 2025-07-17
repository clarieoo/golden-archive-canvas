import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart3, Users, FileText, Settings, LogOut, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const userRole = 'admin';
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

  const handleLogout = () => {
    navigate('/signin');
  };

  return (
    <div className="flex h-screen bg-background">
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-gradient-primary shadow-elegant flex items-center justify-between px-6">
          <Link to="/" className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-archive-gold" />
            <span className="text-xl font-bold text-primary-foreground">
              Historical Archive
            </span>
          </Link>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 p-6 overflow-auto">
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
                  icon={FileText}
                  trend={8}
                  color="bg-green-100"
                />
                <StatCard
                  title="Monthly Views"
                  value={stats.monthlyViews}
                  icon={BarChart3}
                  trend={15}
                  color="bg-purple-100"
                />
                <StatCard
                  title="Pending Approvals"
                  value={stats.pendingApprovals}
                  icon={Settings}
                  trend={-5}
                  color="bg-orange-100"
                />
              </div>

              {/* Quick Actions */}
              <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button 
                      variant="archive" 
                      className="h-12"
                      onClick={() => navigate('/admin-manage-users')}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Manage Users
                    </Button>
                    <Button 
                      variant="archive" 
                      className="h-12"
                      onClick={() => navigate('/admin-review-arts')}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Review Arts
                    </Button>
                    <Button 
                      variant="archive" 
                      className="h-12"
                      onClick={() => navigate('/admin-categories')}
                    >
                      <Palette className="h-4 w-4 mr-2" />
                      Categories
                    </Button>
                    <Button 
                      variant="archive" 
                      className="h-12"
                      onClick={() => navigate('/admin-reports')}
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <Sidebar userRole={userRole} onLogout={handleLogout} />
        </div>
      </div>
    </div>
  );
};