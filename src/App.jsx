import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ChangeViewProvider } from "./context/ChangeViewContext";

import Homepage from "./Front/pages/Homepage";
import Features from "./Front/pages/Features";
import Pricing from "./Front/pages/Pricing";
import Support from "./Front/pages/Support";
import Login from "./Back/pages/Login";
import Signup from "./Back/pages/Signup";
import AppLayout from "./Front/ui/AppLayout";
import LoginLayout from "./Back/ui/authentication/LoginLayout";
import ScrollToTop from "./Front/ui/ScrollToTop";
import DashboardLayout from "./Back/ui/DashboardLayout";
import Dashboard from "./Back/pages/Dashboard";
import Board from "./Back/pages/Board";
import Analytics from "./Back/pages/Analytics";
import PageNotFound from "./Front/pages/PageNotFound";
import ProtectedRoute from "./Back/ui/ProtectedRoute";
import Account from "./Back/pages/Account";

import { applySavedTheme } from "./Back/services/darkMode";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1,
    },
  },
});
applySavedTheme();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="features" element={<Features />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="support" element={<Support />} />
          </Route>

          <Route element={<LoginLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <ChangeViewProvider>
                  <DashboardLayout />
                </ChangeViewProvider>
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="board" element={<Board />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--toast-bg)",
            color: "var(--toast-color)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
