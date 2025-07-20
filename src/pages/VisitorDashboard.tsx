import { Images, Info, Mail, Eye, BookOpen, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const VisitorDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Historical Archive</h1>
          <p className="text-muted-foreground">Explore our collection of historical artworks and artifacts</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card 
            className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer"
            onClick={() => navigate('/gallery')}
          >
            <CardContent className="p-6 text-center">
              <Images className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
              <h3 className="text-lg font-semibold text-foreground mb-2">View Gallery</h3>
              <p className="text-muted-foreground text-sm">Browse our complete collection</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer"
            onClick={() => navigate('/about')}
          >
            <CardContent className="p-6 text-center">
              <Info className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
              <h3 className="text-lg font-semibold text-foreground mb-2">About Us</h3>
              <p className="text-muted-foreground text-sm">Learn about our mission</p>
            </CardContent>
          </Card>

          <Card 
            className="bg-gradient-card border-archive-gold/20 shadow-warm hover:shadow-elegant transition-shadow cursor-pointer"
            onClick={() => navigate('/contact')}
          >
            <CardContent className="p-6 text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-archive-brown" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact</h3>
              <p className="text-muted-foreground text-sm">Get in touch with us</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Collections */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
          <CardHeader>
            <CardTitle>Featured Collections</CardTitle>
            <CardDescription>Discover our most popular historical artifacts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                <Eye className="h-8 w-8 text-archive-brown" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Ancient Artifacts</p>
                  <p className="text-sm text-muted-foreground">234 pieces</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                <BookOpen className="h-8 w-8 text-archive-brown" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Medieval Manuscripts</p>
                  <p className="text-sm text-muted-foreground">156 documents</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                <Calendar className="h-8 w-8 text-archive-brown" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Renaissance Art</p>
                  <p className="text-sm text-muted-foreground">89 pieces</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Additions */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
          <CardHeader>
            <CardTitle>Recent Additions</CardTitle>
            <CardDescription>Newly added artifacts to our collection</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                <Images className="h-5 w-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Byzantine Golden Chalice</p>
                  <p className="text-sm text-muted-foreground">Added 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                <Images className="h-5 w-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Roman Marble Statue</p>
                  <p className="text-sm text-muted-foreground">Added 1 week ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-archive-gold/5">
                <Images className="h-5 w-5 text-purple-600" />
                <div className="flex-1">
                  <p className="font-medium text-foreground">Egyptian Papyrus Scroll</p>
                  <p className="text-sm text-muted-foreground">Added 2 weeks ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};