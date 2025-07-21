import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Images, 
  Info, 
  Mail, 
  Settings, 
  LogOut, 
  User, 
  Upload, 
  CheckCircle, 
  Clock,
  Menu,
  X,
  Award,
  BarChart3,
  Users,
  FileText,
  Palette,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  userRole: string;
  onLogout: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ userRole, onLogout, isOpen = false, onClose }: SidebarProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const location = useLocation();
  
  const actualIsOpen = isOpen !== undefined ? isOpen : internalIsOpen;
  const handleClose = onClose || (() => setInternalIsOpen(false));
  const toggleSidebar = () => {
    if (onClose) {
      onClose();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const menuItems = {
    admin: [
      { icon: BarChart3, label: "Dashboard", path: "/admin-dashboard" },
      { icon: Users, label: "Manage Users", path: "/admin-manage-users" },
      { icon: FileText, label: "Review Arts", path: "/admin-review-arts" },
      { icon: Palette, label: "Categories", path: "/admin-categories" },
      { icon: BarChart3, label: "Reports", path: "/admin-reports" },
    ],
    curator: [
      { icon: BarChart3, label: "Dashboard", path: "/curator-dashboard" },
      { icon: Upload, label: "Upload Art", path: "/curator/upload" },
      { icon: Images, label: "My Arts", path: "/curator/arts" },
      { icon: Images, label: "Gallery", path: "/gallery" },
    ],
    professor: [
      { icon: BarChart3, label: "Dashboard", path: "/professor-dashboard" },
      { icon: CheckCircle, label: "Approve Arts", path: "/professor/approve" },
      { icon: Clock, label: "Pending", path: "/professor/pending" },
      { icon: Images, label: "Gallery", path: "/gallery" },
    ],
    visitor: [
      { icon: BarChart3, label: "Dashboard", path: "/visitor-dashboard" },
      { icon: Images, label: "Browse Gallery", path: "/gallery" },
      { icon: Bookmark, label: "Watch Later", path: "/watch-later" },
      { icon: Award, label: "Upgrade to Curator", path: "/upgrade-to-curator" },
    ]
  };

  const currentItems = menuItems[userRole as keyof typeof menuItems] || menuItems.visitor;

  return (
    <>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-40 w-64 bg-gradient-card border-l border-archive-gold/20 transform transition-transform duration-300 ease-in-out ${
        actualIsOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-archive-gold/20">
            <h2 className="text-xl font-bold text-foreground capitalize">
              {userRole} Dashboard
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {currentItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleClose}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-archive-gold/20 text-archive-brown shadow-warm' 
                      : 'text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-archive-gold/20 space-y-2">
            <Link
              to="/view-profile"
              onClick={handleClose}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground transition-all duration-200"
            >
              <User className="h-5 w-5" />
              <span className="font-medium">View Profile</span>
            </Link>
            <Link
              to="/edit-profile"
              onClick={handleClose}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground transition-all duration-200"
            >
              <Settings className="h-5 w-5" />
              <span className="font-medium">Edit Profile</span>
            </Link>
            <Link
              to="/change-password"
              onClick={handleClose}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground transition-all duration-200"
            >
              <Settings className="h-5 w-5" />
              <span className="font-medium">Change Password</span>
            </Link>
            <Separator className="bg-archive-gold/20" />
            <Button
              variant="ghost"
              onClick={() => {
                onLogout();
                handleClose();
              }}
              className="w-full justify-start text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span className="font-medium">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {actualIsOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={handleClose}
        />
      )}
    </>
  );
};