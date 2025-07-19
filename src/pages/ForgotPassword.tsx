import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate password reset email
    toast({
      title: "Reset Email Sent",
      description: "If an account with that email exists, we've sent password reset instructions.",
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 animate-fade-in">
          <Card className="bg-gradient-card border-archive-gold/20 shadow-elegant text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-archive-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-archive-brown" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Check your email</h2>
              <p className="text-muted-foreground mb-6">
                We've sent password reset instructions to {email}
              </p>
              <Button asChild variant="archive" className="w-full">
                <Link to="/signin">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Sign In
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 animate-fade-in">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Forgot Password?</h2>
          <p className="mt-2 text-muted-foreground">
            Enter your email and we'll send you reset instructions
          </p>
        </div>

        {/* Forgot Password Form */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-elegant">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-foreground">Reset Password</CardTitle>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background border-archive-gold/20"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <Button type="submit" variant="archive" size="lg" className="w-full">
                Send Reset Instructions
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link 
                to="/signin" 
                className="text-sm text-archive-brown hover:text-archive-brown-light flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};