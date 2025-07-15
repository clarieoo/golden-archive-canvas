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
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  userRole: string;
  onLogout: () => void;
}

export const Sidebar = ({ userRole, onLogout }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = {
    admin: [
      { icon: Home, label: "Dashboard", path: "/admin/dashboard" },
      { icon: Images, label: "Gallery", path: "/gallery" },
      { icon: Settings, label: "Settings", path: "/admin/settings" },
      { icon: User, label: "Users", path: "/admin/users" },
    ],
    curator: [
      { icon: Home, label: "Dashboard", path: "/curator/dashboard" },
      { icon: Upload, label: "Upload Art", path: "/curator/upload" },
      { icon: Images, label: "My Arts", path: "/curator/arts" },
      { icon: Images, label: "Gallery", path: "/gallery" },
    ],
    professor: [
      { icon: Home, label: "Dashboard", path: "/professor/dashboard" },
      { icon: CheckCircle, label: "Approve Arts", path: "/professor/approve" },
      { icon: Clock, label: "Pending", path: "/professor/pending" },
      { icon: Images, label: "Gallery", path: "/gallery" },
    ],
    visitor: [
      { icon: Home, label: "Home", path: "/" },
      { icon: Images, label: "Gallery", path: "/gallery" },
      { icon: Info, label: "About", path: "/about" },
      { icon: Mail, label: "Contact", path: "/contact" },
    ]
  };

  const currentItems = menuItems[userRole as keyof typeof menuItems] || menuItems.visitor;

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-gradient-card shadow-warm"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gradient-card border-r border-archive-gold/20 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
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
                  onClick={() => setIsOpen(false)}
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
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground transition-all duration-200"
            >
              <User className="h-5 w-5" />
              <span className="font-medium">Profile</span>
            </Link>
            <Separator className="bg-archive-gold/20" />
            <Button
              variant="ghost"
              onClick={onLogout}
              className="w-full justify-start text-muted-foreground hover:bg-archive-gold/10 hover:text-foreground"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span className="font-medium">Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};