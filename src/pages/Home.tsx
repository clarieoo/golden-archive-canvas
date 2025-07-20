import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Archive, Users, Star, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-archive.jpg";
import galleryImage from "@/assets/gallery-sample.jpg";

export const Home = () => {
  const featuredArtworks = [
    {
      id: "1",
      title: "The Renaissance Portrait",
      artist: "Leonardo da Vinci",
      year: "1503",
      image: galleryImage,
      description: "A magnificent piece showcasing the artistic mastery of the Renaissance era."
    },
    {
      id: "2", 
      title: "Classical Sculpture",
      artist: "Michelangelo",
      year: "1501",
      image: galleryImage,
      description: "An exemplary work demonstrating the perfection of classical sculptural techniques."
    },
    {
      id: "3",
      title: "Medieval Manuscript",
      artist: "Unknown Monk",
      year: "1200",
      image: galleryImage,
      description: "A beautifully illuminated manuscript reflecting medieval artistic traditions."
    }
  ];

  const features = [
    {
      icon: Archive,
      title: "Rich Collection",
      description: "Explore thousands of historical artifacts and artworks from various periods and cultures."
    },
    {
      icon: Users,
      title: "Expert Curation",
      description: "Our team of historians and curators ensure authentic and detailed information."
    },
    {
      icon: Star,
      title: "Rate & Review",
      description: "Share your thoughts and rate artworks to help build a community of art enthusiasts."
    },
    {
      icon: Clock,
      title: "Save for Later",
      description: "Bookmark your favorite pieces and create your personal collection to revisit anytime."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover History Through Art
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Journey through time with our carefully curated collection of historical artifacts and masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="golden" size="lg" asChild>
              <Link to="/gallery">Explore Gallery</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-archive-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Archive?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience history like never before with our innovative platform designed for art and history enthusiasts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-archive-gold/20 hover:shadow-warm transition-all duration-300 animate-scale-in">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-archive-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Artworks Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Artworks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover some of the most remarkable pieces from our collection, carefully selected for their historical significance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArtworks.map((artwork) => (
              <Card key={artwork.id} className="bg-gradient-card border-archive-gold/20 hover:shadow-warm transition-all duration-300 animate-scale-in group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-archive-gold font-medium mb-2">
                    {artwork.artist} • {artwork.year}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {artwork.description}
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to="/gallery">
                      View in Gallery
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="archive" size="lg" asChild>
              <Link to="/gallery">
                Explore Full Collection
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of art enthusiasts and historians in exploring our vast collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="golden" size="lg" asChild>
              <Link to="/signup">Join Now</Link>
            </Button>
            <Button variant="elegant" size="lg" asChild>
              <Link to="/gallery">Browse Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};