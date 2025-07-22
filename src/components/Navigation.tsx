import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Palette, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { Sidebar } from "./Sidebar";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gradient-primary shadow-elegant sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Palette className="h-8 w-8 text-archive-gold" />
              <span className="text-xl font-bold text-primary-foreground">
                Historical Archive
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200",
                  isActive(item.href) && "text-archive-gold font-medium"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <>
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src={user?.avatar} alt={user?.username} />
                    <AvatarFallback className="bg-archive-gold/20 text-archive-brown text-sm">
                      {user?.username?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSidebarOpen(true)}
                    className="text-primary-foreground"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" asChild>
                    <Link to="/signin" className="text-primary-foreground">
                      Sign In
                    </Link>
                  </Button>
                  <Button variant="archive" asChild>
                    <Link to="/signup">
                      Sign Up
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-archive-brown/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200",
                    isActive(item.href) && "text-archive-gold font-medium bg-archive-brown-light/20 rounded-md"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-2 px-3 py-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} alt={user?.username} />
                      <AvatarFallback className="bg-archive-gold/20 text-archive-brown text-sm">
                        {user?.username?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSidebarOpen(true);
                      }}
                      className="text-primary-foreground"
                    >
                      <Menu className="h-4 w-4 mr-2" />
                      Menu
                    </Button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Button variant="ghost" asChild>
                      <Link to="/signin" onClick={() => setIsOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button variant="archive" asChild>
                      <Link to="/signup" onClick={() => setIsOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Sidebar for authenticated users */}
      {isAuthenticated && isSidebarOpen && (
        <Sidebar 
          userRole={user?.role || 'visitor'} 
          onLogout={logout}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </nav>
  );
};