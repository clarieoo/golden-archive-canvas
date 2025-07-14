import { useState } from "react";
import { Search, Filter, Grid3X3, List, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArtCard } from "@/components/ArtCard";
import galleryImage from "@/assets/gallery-sample.jpg";

export const Gallery = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Generate 60 artworks for pagination
  const generateArtworks = () => {
    const baseArtworks = [
      { title: "The Renaissance Portrait", artist: "Leonardo da Vinci", year: "1503", period: "renaissance" },
      { title: "Classical Sculpture", artist: "Michelangelo", year: "1501", period: "classical" },
      { title: "Medieval Manuscript", artist: "Unknown Monk", year: "1200", period: "medieval" },
      { title: "Baroque Painting", artist: "Caravaggio", year: "1598", period: "baroque" },
      { title: "Ancient Pottery", artist: "Greek Artisan", year: "450 BC", period: "ancient" },
      { title: "Modern Abstract", artist: "Pablo Picasso", year: "1907", period: "modern" },
      { title: "Egyptian Sarcophagus", artist: "Ancient Egyptian", year: "1400 BC", period: "ancient" },
      { title: "Gothic Architecture", artist: "Master Builder", year: "1250", period: "medieval" },
      { title: "Renaissance Fresco", artist: "Raphael", year: "1510", period: "renaissance" },
      { title: "Neoclassical Marble", artist: "Antonio Canova", year: "1805", period: "classical" }
    ];

    const artworks = [];
    for (let i = 1; i <= 60; i++) {
      const base = baseArtworks[(i - 1) % baseArtworks.length];
      artworks.push({
        id: i.toString(),
        title: `${base.title} ${Math.ceil(i / baseArtworks.length)}`,
        artist: base.artist,
        year: base.year,
        image: galleryImage,
        description: `A magnificent piece from the ${base.period} period showcasing the artistic mastery of the era.`,
        period: base.period
      });
    }
    return artworks;
  };

  const artworks = generateArtworks();

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

  // Pagination logic
  const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArtworks = filteredArtworks.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePeriodChange = (value: string) => {
    setSelectedPeriod(value);
    setCurrentPage(1);
  };

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
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10 bg-background border-archive-gold/20"
                />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <select
                value={selectedPeriod}
                onChange={(e) => handlePeriodChange(e.target.value)}
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
        <div className="mb-6 flex justify-between items-center">
          <p className="text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, filteredArtworks.length)} of {filteredArtworks.length} artworks
          </p>
          <p className="text-muted-foreground">
            Page {currentPage} of {totalPages}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className={`grid gap-6 mb-8 ${
          viewMode === "grid" 
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {currentArtworks.map((artwork) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="text-foreground hover:text-archive-gold"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "archive" : "ghost"}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                  className="min-w-[40px]"
                >
                  {page}
                </Button>
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="text-foreground hover:text-archive-gold"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}

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
                setCurrentPage(1);
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