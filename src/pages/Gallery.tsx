import { useState } from "react";
import { Search, Filter, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArtCard } from "@/components/ArtCard";
import galleryImage from "@/assets/gallery-sample.jpg";

export const Gallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  // Sample art data - in a real app, this would come from an API
  const artworks = [
    {
      id: "1",
      title: "The Renaissance Portrait",
      artist: "Leonardo da Vinci",
      year: "1503",
      image: galleryImage,
      description: "A masterpiece from the Renaissance period showcasing the innovative techniques of the era.",
      period: "renaissance"
    },
    {
      id: "2", 
      title: "Classical Sculpture",
      artist: "Michelangelo",
      year: "1501",
      image: galleryImage,
      description: "An exquisite marble sculpture demonstrating the perfection of classical artistry.",
      period: "classical"
    },
    {
      id: "3",
      title: "Medieval Manuscript",
      artist: "Unknown Monk",
      year: "1200",
      image: galleryImage,
      description: "Illuminated manuscript featuring intricate calligraphy and religious imagery.",
      period: "medieval"
    },
    {
      id: "4",
      title: "Baroque Painting",
      artist: "Caravaggio",
      year: "1598",
      image: galleryImage,
      description: "A dramatic baroque painting known for its use of light and shadow.",
      period: "baroque"
    },
    {
      id: "5",
      title: "Ancient Pottery",
      artist: "Greek Artisan",
      year: "450 BC",
      image: galleryImage,
      description: "Ancient Greek pottery with geometric patterns and mythological scenes.",
      period: "ancient"
    },
    {
      id: "6",
      title: "Modern Abstract",
      artist: "Pablo Picasso",
      year: "1907",
      image: galleryImage,
      description: "A revolutionary abstract piece that changed the course of modern art.",
      period: "modern"
    }
  ];

  const periods = [
    { value: "all", label: "All Periods" },
    { value: "ancient", label: "Ancient" },
    { value: "medieval", label: "Medieval" },
    { value: "renaissance", label: "Renaissance" },
    { value: "baroque", label: "Baroque" },
    { value: "modern", label: "Modern" }
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPeriod = selectedPeriod === "all" || artwork.period === selectedPeriod;
    return matchesSearch && matchesPeriod;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Art Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our extensive collection of historical artworks and artifacts spanning multiple eras and cultures.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-gradient-card border border-archive-gold/20 rounded-lg p-6 mb-8 shadow-warm">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search artworks or artists..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background border-archive-gold/20"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 bg-background border border-archive-gold/20 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-archive-gold"
              >
                {periods.map(period => (
                  <option key={period.value} value={period.value}>
                    {period.label}
                  </option>
                ))}
              </select>
              
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "archive" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "archive" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredArtworks.length} of {artworks.length} artworks
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1"
        }`}>
          {filteredArtworks.map((artwork) => (
            <ArtCard
              key={artwork.id}
              id={artwork.id}
              title={artwork.title}
              artist={artwork.artist}
              year={artwork.year}
              image={artwork.image}
              description={artwork.description}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No artworks found matching your criteria.
            </p>
            <Button 
              variant="archive" 
              onClick={() => {
                setSearchTerm("");
                setSelectedPeriod("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};