import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BackButton } from "@/components/BackButton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Images, 
  Search, 
  Filter,
  Eye,
  Check,
  X,
  Clock
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export const AdminReviewArts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const artworks = [
    { 
      id: 1, 
      title: "Ancient Vase Collection", 
      artist: "Sarah Wilson", 
      category: "Ceramics", 
      status: "Pending", 
      uploadDate: "2024-01-15", 
      reviewDate: "2024-01-16",
      thumbnail: "/placeholder.svg"
    },
    { 
      id: 2, 
      title: "Medieval Manuscripts", 
      artist: "Dr. Johnson", 
      category: "Documents", 
      status: "Approved", 
      uploadDate: "2024-01-10", 
      reviewDate: "2024-01-12",
      thumbnail: "/placeholder.svg"
    },
    { 
      id: 3, 
      title: "Renaissance Paintings", 
      artist: "Emma Davis", 
      category: "Paintings", 
      status: "Rejected", 
      uploadDate: "2024-01-08", 
      reviewDate: "2024-01-09",
      thumbnail: "/placeholder.svg"
    },
    { 
      id: 4, 
      title: "Roman Sculptures", 
      artist: "Mike Chen", 
      category: "Sculptures", 
      status: "Pending", 
      uploadDate: "2024-01-14", 
      reviewDate: "2024-01-15",
      thumbnail: "/placeholder.svg"
    },
  ];

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         artwork.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || artwork.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Approved": return "bg-green-100 text-green-800";
      case "Pending": return "bg-yellow-100 text-yellow-800";
      case "Rejected": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved": return <Check className="h-3 w-3" />;
      case "Pending": return <Clock className="h-3 w-3" />;
      case "Rejected": return <X className="h-3 w-3" />;
      default: return <Clock className="h-3 w-3" />;
    }
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logout");
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar userRole="admin" onLogout={handleLogout} />
      
      <div className="flex-1 p-6 lg:ml-0">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <BackButton />
              <div>
                <h1 className="text-3xl font-bold text-foreground">Review Arts</h1>
                <p className="text-muted-foreground">Review and manage artwork submissions</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Bulk Review
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">23</p>
                  <p className="text-sm text-muted-foreground">Pending</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">145</p>
                  <p className="text-sm text-muted-foreground">Approved</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">12</p>
                  <p className="text-sm text-muted-foreground">Rejected</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">180</p>
                  <p className="text-sm text-muted-foreground">Total</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search artworks by title or artist..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Artworks Table */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Images className="h-5 w-5" />
                Artworks ({filteredArtworks.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Artwork</TableHead>
                      <TableHead>Artist</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Upload Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredArtworks.map((artwork) => (
                      <TableRow key={artwork.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <img 
                              src={artwork.thumbnail} 
                              alt={artwork.title}
                              className="w-10 h-10 rounded object-cover bg-archive-gold/10"
                            />
                            <div>
                              <div className="font-medium text-foreground">{artwork.title}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">
                          {artwork.artist}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{artwork.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadgeColor(artwork.status)}>
                            {getStatusIcon(artwork.status)}
                            <span className="ml-1">{artwork.status}</span>
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {artwork.uploadDate}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                            {artwork.status === "Pending" && (
                              <>
                                <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                                  <Check className="h-3 w-3" />
                                </Button>
                                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                                  <X className="h-3 w-3" />
                                </Button>
                              </>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};