import { Link } from "react-router-dom";
import { Edit, Mail, User, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";

export const ViewProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Profile</h1>
          <p className="mt-2 text-muted-foreground">
            View and manage your account information
          </p>
        </div>

        {/* Profile Card */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-elegant">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback className="text-lg bg-archive-gold/20 text-archive-brown">
                  {user.username.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-2xl text-foreground">{user.username}</CardTitle>
            <Badge variant="secondary" className="mt-2 bg-archive-gold/20 text-archive-brown">
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Contact Information */}
            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Username</p>
                  <p className="text-sm text-muted-foreground">{user.username}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-foreground">Member Since</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Statistics */}
            <div className="border-t border-archive-gold/20 pt-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Account Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-archive-gold/10 rounded-lg">
                  <p className="text-2xl font-bold text-archive-brown">0</p>
                  <p className="text-sm text-muted-foreground">Artworks Uploaded</p>
                </div>
                <div className="text-center p-4 bg-archive-gold/10 rounded-lg">
                  <p className="text-2xl font-bold text-archive-brown">0</p>
                  <p className="text-sm text-muted-foreground">Collections Created</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center pt-6">
              <Button asChild variant="archive">
                <Link to="/edit-profile">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};