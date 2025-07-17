import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart3, Users, FileText, Settings, LogOut, Eye, Edit, Plus, Palette } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/Sidebar';

export const CuratorDashboard = () => {
  const navigate = useNavigate();
  const userRole = 'curator';

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
                <h1 className="text-4xl font-bold text-foreground mb-4">Curator Dashboard</h1>
                <p className="text-muted-foreground">Manage your artworks and collaborate with peers</p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Plus className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Upload Artwork</h3>
                    <p className="text-muted-foreground text-sm">Submit new artwork for review</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Eye className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">My Artworks</h3>
                    <p className="text-muted-foreground text-sm">View and manage your submissions</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Edit className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Edit Profile</h3>
                    <p className="text-muted-foreground text-sm">Update your curator information</p>
                  </CardContent>
                </Card>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <Plus className="h-8 w-8 mx-auto mb-2 text-archive-brown" />
                    <p className="text-2xl font-bold text-foreground">12</p>
                    <p className="text-sm text-muted-foreground">Uploaded</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <Eye className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <p className="text-2xl font-bold text-foreground">8</p>
                    <p className="text-sm text-muted-foreground">Approved</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
                    <p className="text-2xl font-bold text-foreground">3</p>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-2xl font-bold text-foreground">1,234</p>
                    <p className="text-sm text-muted-foreground">Total Views</p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest artwork interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                      <Eye className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Ancient Vase viewed by Dr. Smith</p>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                      <Plus className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Medieval Manuscript approved</p>
                        <p className="text-sm text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                      <Edit className="h-5 w-5 text-yellow-600" />
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Byzantine Icon received feedback</p>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
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