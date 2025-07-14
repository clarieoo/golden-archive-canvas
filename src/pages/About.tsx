import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Archive, Users, Award, Clock } from "lucide-react";

export const About = () => {
  const stats = [
    { label: "Artworks", value: "10,000+", icon: Archive },
    { label: "Visitors", value: "500K+", icon: Users },
    { label: "Awards", value: "25", icon: Award },
    { label: "Years", value: "15", icon: Clock }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Curator",
      description: "Specializing in Renaissance art with 20+ years of experience in museum curation."
    },
    {
      name: "Prof. Michael Chen",
      role: "Historical Consultant", 
      description: "Expert in ancient civilizations and archaeological artifacts from major universities."
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Archivist",
      description: "Leading our digital preservation efforts and ensuring accessibility of our collection."
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Mission and Vision */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Mission & Vision
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preserving history through digital innovation. We're dedicated to making historical art and artifacts 
            accessible to everyone, fostering a deeper understanding of our shared cultural heritage.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-archive-gold/20 text-center animate-scale-in">
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-archive-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-4">
              We believe that art and history should be accessible to everyone, regardless of location or background. 
              Our digital archive serves as a bridge between the past and present, allowing people worldwide to explore 
              and learn from humanity's greatest cultural achievements.
            </p>
            <p className="text-muted-foreground mb-6">
              Through cutting-edge technology and expert curation, we're building the world's most comprehensive 
              digital repository of historical artifacts and artworks.
            </p>
            <Button variant="archive" size="lg" asChild>
              <Link to="/gallery">Explore Our Collection</Link>
            </Button>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-archive-gold rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Preservation:</strong> Safeguarding cultural heritage for future generations through digital archiving.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-archive-gold rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Education:</strong> Providing educational resources and context to enhance understanding.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-archive-gold rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Accessibility:</strong> Making art and history available to global audiences.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-archive-gold rounded-full mt-2"></div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Innovation:</strong> Using technology to create new ways of experiencing history.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-gradient-card border-archive-gold/20 hover:shadow-warm transition-all duration-300 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-archive-gold font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Get in Touch */}
          <div className="bg-gradient-card border border-archive-gold/20 rounded-lg p-8 shadow-warm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">📍</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Visit Us</p>
                  <p className="text-muted-foreground text-sm">123 Museum Lane, Art District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">📞</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Call Us</p>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">✉️</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Us</p>
                  <p className="text-muted-foreground text-sm">info@historicalarchive.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Frame */}
          <div className="bg-gradient-card border border-archive-gold/20 rounded-lg p-8 shadow-warm">
            <h2 className="text-2xl font-bold text-foreground mb-6">Find Us</h2>
            <div className="w-full h-64 bg-archive-brown/20 rounded-lg border border-archive-gold/20 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1!2d-74.0059728!3d40.7589374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Send us a Message */}
        <div className="text-center bg-gradient-card border border-archive-gold/20 rounded-lg p-8 shadow-warm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Send us a Message</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Have questions about our collection? Want to contribute to our archive? We'd love to hear from you. 
            Join our community of art enthusiasts and historians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="archive" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/signup">Join Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};