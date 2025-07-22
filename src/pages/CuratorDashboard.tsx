import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Images, 
  MessageSquare, 
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Heart,
  Star
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CuratorDashboard = () => {
  const { toast } = useToast();
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    category: "",
    year: "",
    artist: ""
  });

  const [myArtworks] = useState([
    {
      id: 1,
      title: "Ancient Vase",
      status: "approved",
      views: 245,
      likes: 32,
      rating: 4.5,
      comments: 8,
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Medieval Manuscript",
      status: "pending",
      views: 0,
      likes: 0,
      rating: 0,
      comments: 0,
      uploadDate: "2024-01-20"
    },
    {
      id: 3,
      title: "Renaissance Painting",
      status: "rejected",
      views: 12,
      likes: 2,
      rating: 3.2,
      comments: 3,
      uploadDate: "2024-01-18"
    }
  ]);

  const [discussions] = useState([
    {
      id: 1,
      artwork: "Ancient Vase",
      curator: "Dr. Smith",
      message: "Excellent preservation techniques used here.",
      replies: 3,
      time: "2 hours ago"
    },
    {
      id: 2,
      artwork: "Medieval Manuscript",
      curator: "Prof. Johnson",
      message: "The historical context needs more details.",
      replies: 1,
      time: "5 hours ago"
    }
  ]);

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Artwork Submitted!",
      description: "Your artwork has been submitted for review.",
    });
    setUploadForm({ title: "", description: "", category: "", year: "", artist: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUploadForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return XCircle;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Curator Dashboard</h1>
          <p className="text-muted-foreground">Manage your artworks and collaborate with peers</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardContent className="p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-archive-brown" />
              <p className="text-2xl font-bold text-foreground">{myArtworks.length}</p>
              <p className="text-sm text-muted-foreground">Uploaded</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="text-2xl font-bold text-foreground">
                {myArtworks.filter(art => art.status === 'approved').length}
              </p>
              <p className="text-sm text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-600" />
              <p className="text-2xl font-bold text-foreground">
                {myArtworks.filter(art => art.status === 'pending').length}
              </p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardContent className="p-6 text-center">
              <Eye className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="text-2xl font-bold text-foreground">
                {myArtworks.reduce((sum, art) => sum + art.views, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload New Artwork
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-4">
                <Input
                  name="title"
                  placeholder="Artwork Title"
                  value={uploadForm.title}
                  onChange={handleInputChange}
                  className="bg-background border-archive-gold/20"
                  required
                />
                <Input
                  name="artist"
                  placeholder="Artist Name"
                  value={uploadForm.artist}
                  onChange={handleInputChange}
                  className="bg-background border-archive-gold/20"
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="category"
                    placeholder="Category"
                    value={uploadForm.category}
                    onChange={handleInputChange}
                    className="bg-background border-archive-gold/20"
                    required
                  />
                  <Input
                    name="year"
                    placeholder="Year"
                    value={uploadForm.year}
                    onChange={handleInputChange}
                    className="bg-background border-archive-gold/20"
                    required
                  />
                </div>
                <Textarea
                  name="description"
                  placeholder="Description and historical context"
                  value={uploadForm.description}
                  onChange={handleInputChange}
                  className="bg-background border-archive-gold/20 min-h-[100px]"
                  required
                />
                <div className="border-2 border-dashed border-archive-gold/30 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Click to upload artwork image</p>
                  <p className="text-xs text-muted-foreground mt-2">PNG, JPG up to 10MB</p>
                </div>
                <Button type="submit" variant="archive" className="w-full">
                  Submit for Review
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* My Artworks */}
          <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Images className="h-5 w-5" />
                My Artworks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myArtworks.map((artwork) => {
                  const StatusIcon = getStatusIcon(artwork.status);
                  return (
                    <div key={artwork.id} className="p-4 rounded-lg bg-archive-gold/5 border border-archive-gold/10">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-foreground">{artwork.title}</h3>
                        <Badge className={getStatusColor(artwork.status)}>
                          <StatusIcon className="h-3 w-3 mr-1" />
                          {artwork.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {artwork.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {artwork.likes}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {artwork.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          {artwork.comments}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Curator Discussions */}
        <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Curator Discussions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="p-4 rounded-lg bg-archive-gold/5 border border-archive-gold/10">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{discussion.artwork}</h4>
                      <p className="text-sm text-muted-foreground">by {discussion.curator}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{discussion.time}</span>
                  </div>
                  <p className="text-sm text-foreground mb-2">{discussion.message}</p>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      Reply
                    </Button>
                    <span className="text-xs text-muted-foreground">
                      {discussion.replies} replies
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};