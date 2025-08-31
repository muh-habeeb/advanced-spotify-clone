import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import LoaderSpin from "@/components/ui/Loaders/LoaderSpin";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(true);

  // update axios instance with token
  // will call avery time referees the page
  const updateApiToken = (token: string | null) => {
    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  };

  

  useEffect(() => {
    const initAuth = async () => {
      // Start with a loading toast
      toast.loading("Authenticating...", { id: "auth-status" });

      try {
        const token = await getToken();

        if (token === null) {
          toast.error("You are not authenticated", {
            id: "auth-status", // 👈 replaces the loading toast
            duration: 2000,
          });
          return;
        }

        updateApiToken(token);

        toast.success("Authenticated successfully!", {
          id: "auth-status", // 👈 replaces the loading toast
          duration: 2000,
        });
      } catch (error: any) {
        console.error("Error in auth provider:", error);
        toast.error(error.message || "Authentication failed", {
          id: "auth-status", // 👈 replaces the loading toast
        });
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center w-full">
        <LoaderSpin />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;
