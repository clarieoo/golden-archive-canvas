import { useState } from "react";
import { Star, Heart, HeartOff, Bookmark, BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ArtCardProps {
  id: string;
  title: string;
  artist: string;
  year: string;
  image: string;
  description: string;
  initialRating?: number;
  isSaved?: boolean;
}

export const ArtCard = ({ 
  id, 
  title, 
  artist, 
  year, 
  image, 
  description, 
  initialRating = 0, 
  isSaved = false 
}: ArtCardProps) => {
  const [rating, setRating] = useState(initialRating);
  const [saved, setSaved] = useState(isSaved);
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
    // Here you would typically save to localStorage or backend
    localStorage.setItem(`rating-${id}`, starRating.toString());
  };

  const handleSaveToggle = () => {
    setSaved(!saved);
    // Here you would typically save to localStorage or backend
    const savedItems = JSON.parse(localStorage.getItem('savedItems') || '[]');
    if (!saved) {
      savedItems.push(id);
    } else {
      const index = savedItems.indexOf(id);
      if (index > -1) savedItems.splice(index, 1);
    }
    localStorage.setItem('savedItems', JSON.stringify(savedItems));
  };

  return (
    <Card className="group overflow-hidden bg-gradient-card border-archive-gold/20 hover:shadow-elegant transition-all duration-300 animate-scale-in">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-background/80 hover:bg-background"
          onClick={handleSaveToggle}
        >
          {saved ? (
            <BookmarkCheck className="h-4 w-4 text-archive-gold" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-foreground group-hover:text-archive-brown transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">by {artist} • {year}</p>
        <p className="text-sm text-foreground/80 mt-2 line-clamp-3">{description}</p>
        
        {/* Rating Stars */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => handleStarClick(star)}
                className="focus:outline-none"
              >
                <Star
                  className={cn(
                    "h-4 w-4 transition-colors cursor-pointer",
                    (hoveredStar >= star || rating >= star)
                      ? "fill-archive-gold text-archive-gold"
                      : "text-muted-foreground hover:text-archive-gold"
                  )}
                />
              </button>
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              {rating > 0 ? `${rating}/5` : "Rate this"}
            </span>
          </div>
          <span className={cn(
            "text-xs px-2 py-1 rounded-full transition-colors",
            saved ? "bg-archive-gold/20 text-archive-brown" : "bg-muted text-muted-foreground"
          )}>
            {saved ? "Saved" : "Save"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};