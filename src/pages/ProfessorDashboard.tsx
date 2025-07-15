import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  MessageSquare,
  Eye,
  Calendar,
  Award,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ProfessorDashboard = () => {
  const { toast } = useToast();
  const [selectedArt, setSelectedArt] = useState<number | null>(null);
  const [reviewComment, setReviewComment] = useState("");

  const [pendingArtworks, setPendingArtworks] = useState([
    {
      id: 1,
      title: "Medieval Manuscript",
      artist: "Unknown",
      curator: "Sarah Wilson",
      category: "Documents",
      year: "1347",
      description: "A well-preserved medieval manuscript with illuminated letters...",
      uploadDate: "2024-01-20",
      status: "pending",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Ancient Pottery",
      artist: "Unknown",
      curator: "Mike Chen",
      category: "Ceramics",
      year: "800 BCE",
      description: "Pottery fragments discovered in archaeological excavation...",
      uploadDate: "2024-01-21",
      status: "pending",
      image: "/api/placeholder/300/200"
    }
  ]);

  const [stats] = useState({
    totalReviewed: 156,
    approved: 124,
    rejected: 32,
    pending: pendingArtworks.length
  });

  const [recentDecisions] = useState([
    { id: 1, title: "Ancient Vase", decision: "approved", curator: "Dr. Smith", date: "2024-01-19" },
    { id: 2, title: "Roman Coin", decision: "rejected", curator: "Prof. Johnson", date: "2024-01-18" },
    { id: 3, title: "Byzantine Icon", decision: "approved", curator: "Sarah Wilson", date: "2024-01-17" }
  ]);

  const handleApprove = (id: number) => {
    setPendingArtworks(prev => prev.filter(art => art.id !== id));
    toast({
      title: "Artwork Approved!",
      description: "The artwork has been approved and is now visible in the gallery.",
    });
    setSelectedArt(null);
    setReviewComment("");
  };

  const handleReject = (id: number) => {
    if (!reviewComment.trim()) {
      toast({
        title: "Comment Required",
        description: "Please provide a reason for rejection.",
        variant: "destructive"
      });
      return;
    }
    setPendingArtworks(prev => prev.filter(art => art.id !== id));
    toast({
      title: "Artwork Rejected",
      description: "The curator has been notified with your feedback.",
    });
    setSelectedArt(null);
    setReviewComment("");
  };

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
          </div>
          <div className={`p-3 rounded-lg ${color}`}>
            <Icon className="h-6 w-6 text-archive-brown" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Professor Dashboard</h1>
          <p className="text-muted-foreground">Review and approve curator submissions</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            title="Total Reviewed"
            value={stats.totalReviewed}
            icon={Eye}
            color="bg-blue-100"
          />
          <StatCard
            title="Approved"
            value={stats.approved}
            icon={CheckCircle}
            color="bg-green-100"
          />
          <StatCard
            title="Rejected"
            value={stats.rejected}
            icon={XCircle}
            color="bg-red-100"
          />
          <StatCard
            title="Pending"
            value={stats.pending}
            icon={Clock}
            color="bg-yellow-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pending Artworks */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Pending Approvals ({pendingArtworks.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingArtworks.map((artwork) => (
                    <div key={artwork.id} className="p-4 rounded-lg bg-archive-gold/5 border border-archive-gold/10">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-48 h-32 bg-archive-brown/20 rounded-lg flex items-center justify-center">
                          <img 
                            src={artwork.image} 
                            alt={artwork.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-foreground">{artwork.title}</h3>
                            <Badge variant="secondary">{artwork.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            by {artwork.artist} • {artwork.year}
                          </p>
                          <p className="text-sm text-muted-foreground mb-2">
                            Curator: {artwork.curator}
                          </p>
                          <p className="text-sm text-foreground mb-4 line-clamp-2">
                            {artwork.description}
                          </p>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => setSelectedArt(selectedArt === artwork.id ? null : artwork.id)}
                            >
                              {selectedArt === artwork.id ? 'Hide Details' : 'Review'}
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {selectedArt === artwork.id && (
                        <div className="mt-4 pt-4 border-t border-archive-gold/20">
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-foreground mb-2">
                                Review Comments
                              </label>
                              <Textarea
                                value={reviewComment}
                                onChange={(e) => setReviewComment(e.target.value)}
                                placeholder="Add your review comments here..."
                                className="bg-background border-archive-gold/20 min-h-[80px]"
                              />
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                variant="default"
                                onClick={() => handleApprove(artwork.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Approve
                              </Button>
                              <Button 
                                variant="destructive"
                                onClick={() => handleReject(artwork.id)}
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {pendingArtworks.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>No pending artworks to review</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Decisions */}
          <div>
            <Card className="bg-gradient-card border-archive-gold/20 shadow-warm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Recent Decisions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentDecisions.map((decision) => (
                    <div key={decision.id} className="p-3 rounded-lg bg-archive-gold/5">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-foreground text-sm">{decision.title}</h4>
                        <Badge 
                          className={decision.decision === 'approved' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                          }
                        >
                          {decision.decision}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        by {decision.curator} • {decision.date}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-archive-gold/20 shadow-warm mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="archive" className="w-full">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Curators
                </Button>
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Review History
                </Button>
                <Button variant="outline" className="w-full">
                  <Award className="h-4 w-4 mr-2" />
                  Guidelines
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};