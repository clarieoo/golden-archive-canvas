import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BackButton } from "@/components/BackButton";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Award, 
  FileText, 
  Upload,
  CheckCircle 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const UpgradeToCurator = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    qualifications: "",
    experience: "",
    portfolio: "",
    motivation: "",
    certifications: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.qualifications || !formData.experience) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Application Submitted",
      description: "Your curator upgrade request has been submitted for review. You will be notified within 5-7 business days.",
    });

    // Reset form
    setFormData({
      fullName: "",
      qualifications: "",
      experience: "",
      portfolio: "",
      motivation: "",
      certifications: ""
    });
  };

  const requirements = [
    { icon: GraduationCap, text: "Bachelor's degree in Art History, Museum Studies, or related field" },
    { icon: Award, text: "Minimum 2 years of experience in art curation or museum work" },
    { icon: FileText, text: "Portfolio of previous curatorial work or exhibitions" },
    { icon: CheckCircle, text: "Strong knowledge of historical periods and artistic movements" }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <BackButton />
          <div>
            <h1 className="text-3xl font-bold text-foreground">Upgrade to Curator</h1>
            <p className="text-muted-foreground">Apply to become a curator and help manage our art collection</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Requirements Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card border-archive-gold/20 sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-archive-gold" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <req.icon className="h-5 w-5 text-archive-gold mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{req.text}</p>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-archive-gold/20">
                  <Badge variant="secondary" className="w-full justify-center">
                    Review Period: 5-7 Days
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardHeader>
                <CardTitle>Curator Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Qualifications</h3>
                    
                    <div>
                      <Label htmlFor="qualifications">Educational Background *</Label>
                      <Textarea
                        id="qualifications"
                        value={formData.qualifications}
                        onChange={(e) => handleInputChange("qualifications", e.target.value)}
                        placeholder="Describe your educational background, degrees, and relevant coursework..."
                        required
                        className="mt-1 min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="certifications">Professional Certifications</Label>
                      <Textarea
                        id="certifications"
                        value={formData.certifications}
                        onChange={(e) => handleInputChange("certifications", e.target.value)}
                        placeholder="List any professional certifications, memberships, or additional training..."
                        className="mt-1"
                      />
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Professional Experience</h3>
                    
                    <div>
                      <Label htmlFor="experience">Relevant Experience *</Label>
                      <Textarea
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => handleInputChange("experience", e.target.value)}
                        placeholder="Describe your experience in art curation, museum work, or related fields..."
                        required
                        className="mt-1 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="portfolio">Portfolio/Previous Work</Label>
                      <Textarea
                        id="portfolio"
                        value={formData.portfolio}
                        onChange={(e) => handleInputChange("portfolio", e.target.value)}
                        placeholder="Provide links to your portfolio, exhibitions you've curated, or describe your previous work..."
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Motivation</h3>
                    
                    <div>
                      <Label htmlFor="motivation">Why do you want to become a curator?</Label>
                      <Textarea
                        id="motivation"
                        value={formData.motivation}
                        onChange={(e) => handleInputChange("motivation", e.target.value)}
                        placeholder="Tell us about your passion for art curation and what you hope to contribute..."
                        className="mt-1 min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4 pt-6">
                    <Button type="submit" variant="archive" className="flex-1">
                      <Upload className="h-4 w-4 mr-2" />
                      Submit Application
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setFormData({
                        fullName: "",
                        qualifications: "",
                        experience: "",
                        portfolio: "",
                        motivation: "",
                        certifications: ""
                      })}
                    >
                      Clear Form
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};