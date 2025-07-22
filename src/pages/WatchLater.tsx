import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "@/components/BackButton";
import { Eye, Heart, Clock, Trash2 } from "lucide-react";
import galleryImage from "@/assets/gallery-sample.jpg";

export const WatchLater = () => {
  const [savedItems, setSavedItems] = useState([
    {
      id: "1",
      title: "The Renaissance Portrait",
      artist: "Leonardo da Vinci",
      year: "1503",
      image: galleryImage,
      category: "Painting",
      savedDate: "2024-01-15"
    },
    {
      id: "2", 
      title: "Classical Sculpture",
      artist: "Michelangelo",
      year: "1501",
      image: galleryImage,
      category: "Sculpture",
      savedDate: "2024-01-10"
    },
    {
      id: "3",
      title: "Medieval Manuscript",
      artist: "Unknown Monk",
      year: "1200",
      image: galleryImage,
      category: "Manuscript",
      savedDate: "2024-01-08"
    }
  ]);

  const removeItem = (id: string) => {
    setSavedItems(items => items.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="flex items-center space-x-4">
          <BackButton />
          <div>
            <h1 className="text-4xl font-bold text-foreground">Watch Later</h1>
            <p className="text-muted-foreground">Your saved artworks and artifacts</p>
          </div>
        </div>

        {savedItems.length === 0 ? (
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm text-center py-12">
            <CardContent>
              <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No saved items yet</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring our gallery and save artworks you'd like to view later
              </p>
              <Button variant="archive" asChild>
                <a href="/gallery">Browse Gallery</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems.map((item) => (
              <Card key={item.id} className="bg-gradient-card border-archive-gold/20 hover:shadow-warm transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Badge variant="secondary" className="bg-archive-gold/90 text-archive-brown">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-archive-gold font-medium text-sm">
                      {item.artist} • {item.year}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Saved on {new Date(item.savedDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};