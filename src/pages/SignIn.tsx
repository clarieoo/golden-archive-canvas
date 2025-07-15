import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "visitor",
    remember: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userRole', formData.role);
    localStorage.setItem('isAuthenticated', 'true');
    
    toast({
      title: "Welcome back!",
      description: "You have successfully signed in to your account.",
    });

    switch (formData.role) {
      case 'admin':
        navigate('/admin/dashboard');
        break;
      case 'curator':
        navigate('/curator/dashboard');
        break;
      case 'professor':
        navigate('/professor/dashboard');
        break;
      default:
        navigate('/');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Welcome Back</h2>
          <p className="mt-2 text-muted-foreground">
            Sign in to your Historical Archive account
          </p>
        </div>

        {/* Sign In Form */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-foreground">Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 bg-background border-archive-gold/20"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                  Select Your Role
                </label>
                <Select
                  value={formData.role}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}
                >
                  <SelectTrigger className="bg-background border-archive-gold/20">
                    <SelectValue placeholder="Choose your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visitor">Visitor</SelectItem>
                    <SelectItem value="curator">Curator</SelectItem>
                    <SelectItem value="professor">Professor</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10 pr-10 bg-background border-archive-gold/20"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember"
                    name="remember"
                    checked={formData.remember}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, remember: checked as boolean }))
                    }
                  />
                  <label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-archive-brown hover:text-archive-brown-light">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" variant="archive" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-archive-gold/20" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="elegant" className="w-full">
                  Google
                </Button>
                <Button variant="elegant" className="w-full">
                  Apple
                </Button>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium text-archive-brown hover:text-archive-brown-light">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link to="/terms" className="text-archive-brown hover:text-archive-brown-light">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-archive-brown hover:text-archive-brown-light">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};