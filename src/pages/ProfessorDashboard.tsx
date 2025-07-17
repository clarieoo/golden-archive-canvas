import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart3, Users, FileText, Settings, LogOut, BookOpen, GraduationCap, Calendar, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';

export const ProfessorDashboard = () => {
  const navigate = useNavigate();
  const userRole = 'professor';

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
                <h1 className="text-4xl font-bold text-foreground mb-4">Professor Dashboard</h1>
                <p className="text-muted-foreground">Review and approve curator submissions</p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Review Artworks</h3>
                    <p className="text-muted-foreground text-sm">Approve or reject submissions</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Academic Resources</h3>
                    <p className="text-muted-foreground text-sm">Access research materials</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Review History</h3>
                    <p className="text-muted-foreground text-sm">View past decisions</p>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <FileText className="h-8 w-8 mx-auto mb-2 text-archive-brown" />
                    <p className="text-2xl font-bold text-foreground">156</p>
                    <p className="text-sm text-muted-foreground">Total Reviewed</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <p className="text-2xl font-bold text-foreground">124</p>
                    <p className="text-sm text-muted-foreground">Approved</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2 text-red-600" />
                    <p className="text-2xl font-bold text-foreground">32</p>
                    <p className="text-sm text-muted-foreground">Rejected</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                    <p className="text-2xl font-bold text-foreground">8</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                  <CardDescription>Your latest review activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                      <BookOpen className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Ancient Vase - Approved</p>
                        <p className="text-sm text-muted-foreground">Curator: Dr. Smith • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                      <GraduationCap className="h-5 w-5 text-red-600" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Roman Coin - Rejected</p>
                        <p className="text-sm text-muted-foreground">Curator: Prof. Johnson • 1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                      <Calendar className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Byzantine Icon - Approved</p>
                        <p className="text-sm text-muted-foreground">Curator: Sarah Wilson • 3 days ago</p>
                      </div>
                    </div>
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