import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Save, ArrowLeft, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export const EditProfile = () => {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    avatar: user?.avatar || ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    updateProfile(formData);
    
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
    
    navigate("/view-profile");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Please sign in to edit your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground">Edit Profile</h1>
          <p className="mt-2 text-muted-foreground">
            Update your account information
          </p>
        </div>

        {/* Edit Profile Form */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Avatar Section */}
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={formData.avatar} alt={formData.username} />
                    <AvatarFallback className="text-lg bg-archive-gold/20 text-archive-brown">
                      {formData.username.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <label htmlFor="avatar" className="block text-sm font-medium text-foreground mb-2">
                    Profile Picture URL
                  </label>
                  <Input
                    id="avatar"
                    name="avatar"
                    type="url"
                    value={formData.avatar}
                    onChange={handleChange}
                    className="bg-background border-archive-gold/20"
                    placeholder="Enter image URL"
                  />
                </div>
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-foreground mb-2">
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-background border-archive-gold/20"
                  placeholder="Enter your username"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background border-archive-gold/20"
                  placeholder="Enter your email"
                />
              </div>

              {/* Role (Read-only) */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Role
                </label>
                <Input
                  value={user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                  disabled
                  className="bg-muted border-archive-gold/20"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Contact an administrator to change your role
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/view-profile")}
                  className="flex-1"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button type="submit" variant="archive" className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};