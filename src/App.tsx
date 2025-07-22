import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ViewProfile } from "./pages/ViewProfile";
import { EditProfile } from "./pages/EditProfile";
import { ChangePassword } from "./pages/ChangePassword";
import { WatchLater } from "./pages/WatchLater";
import { AdminDashboard } from "./pages/AdminDashboard";
import { AdminManageUsers } from "./pages/AdminManageUsers";
import { AdminReviewArts } from "./pages/AdminReviewArts";
import { AdminCategories } from "./pages/AdminCategories";
import { AdminReports } from "./pages/AdminReports";
import { CuratorDashboard } from "./pages/CuratorDashboard";
import { ProfessorDashboard } from "./pages/ProfessorDashboard";
import { VisitorDashboard } from "./pages/VisitorDashboard";
import { UpgradeToCurator } from "./pages/UpgradeToCurator";
import { Sidebar } from "./components/Sidebar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            {/* Temporary routes for UI review */}
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="admin-manage-users" element={<AdminManageUsers />} />
            <Route path="admin-review-arts" element={<AdminReviewArts />} />
            <Route path="admin-categories" element={<AdminCategories />} />
            <Route path="admin-reports" element={<AdminReports />} />
            <Route path="curator-dashboard" element={<CuratorDashboard />} />
            <Route path="professor-dashboard" element={<ProfessorDashboard />} />
          </Route>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="view-profile" element={<ViewProfile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="upgrade-to-curator" element={<UpgradeToCurator />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="watch-later" element={<WatchLater />} />
          <Route path="admin/dashboard" element={<AdminDashboard />} />
          <Route path="curator/dashboard" element={<CuratorDashboard />} />
          <Route path="professor/dashboard" element={<ProfessorDashboard />} />
          <Route path="visitor/dashboard" element={<VisitorDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
