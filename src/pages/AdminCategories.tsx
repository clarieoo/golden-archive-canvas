import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Palette, 
  Search, 
  Plus,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export const AdminCategories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { 
      id: 1, 
      name: "Paintings", 
      description: "Oil paintings, watercolors, and other painted artworks", 
      itemCount: 234, 
      status: "Active",
      createdDate: "2023-01-15",
      color: "#FF6B6B"
    },
    { 
      id: 2, 
      name: "Sculptures", 
      description: "Stone, metal, wood and clay sculptures", 
      itemCount: 156, 
      status: "Active",
      createdDate: "2023-01-20",
      color: "#4ECDC4"
    },
    { 
      id: 3, 
      name: "Ceramics", 
      description: "Pottery, vases, and ceramic artifacts", 
      itemCount: 89, 
      status: "Active",
      createdDate: "2023-02-05",
      color: "#45B7D1"
    },
    { 
      id: 4, 
      name: "Textiles", 
      description: "Historical fabrics, tapestries, and clothing", 
      itemCount: 67, 
      status: "Active",
      createdDate: "2023-02-10",
      color: "#96CEB4"
    },
    { 
      id: 5, 
      name: "Documents", 
      description: "Manuscripts, letters, and historical papers", 
      itemCount: 123, 
      status: "Inactive",
      createdDate: "2023-03-01",
      color: "#FFEAA7"
    },
    { 
      id: 6, 
      name: "Jewelry", 
      description: "Historical jewelry and ornamental pieces", 
      itemCount: 45, 
      status: "Active",
      createdDate: "2023-03-15",
      color: "#DDA0DD"
    },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeColor = (status: string) => {
    return status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
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
            <div>
              <h1 className="text-3xl font-bold text-foreground">Categories</h1>
              <p className="text-muted-foreground">Manage artwork categories and classifications</p>
            </div>
            <Button variant="archive">
              <Plus className="h-4 w-4 mr-2" />
              Add Category
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{categories.length}</p>
                  <p className="text-sm text-muted-foreground">Total Categories</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">
                    {categories.filter(c => c.status === "Active").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Active</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-red-600">
                    {categories.filter(c => c.status === "Inactive").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Inactive</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-card border-archive-gold/20">
              <CardContent className="p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">
                    {categories.reduce((sum, c) => sum + c.itemCount, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Items</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categories Table */}
          <Card className="bg-gradient-card border-archive-gold/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Categories ({filteredCategories.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCategories.map((category) => (
                      <TableRow key={category.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: category.color }}
                            />
                            <div className="font-medium text-foreground">{category.name}</div>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground max-w-xs">
                          <div className="truncate">{category.description}</div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{category.itemCount} items</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusBadgeColor(category.status)}>
                            {category.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {category.createdDate}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                              <Trash2 className="h-3 w-3" />
                            </Button>
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