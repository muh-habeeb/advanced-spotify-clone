import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { getToken } = useAuth();
    const [loading, setLoading] = useState(true);

    const updateApiToken = (token: string | null) => {
        if (token) {
            axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axiosInstance.defaults.headers.common["Authorization"];
        }
    };

    useEffect(() => {
        const initAuth = async () => {
            try {
                const token = await getToken();
                if (token === null) {
                    toast.error("User not authenticated");
                    return;
                }
                updateApiToken(token);
            } catch (error: any) {
                console.error("Error in auth provider:", error);
                toast.error(error.message || "Authentication failed");
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, [getToken]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center w-full">
                <Loader className="size-8 text-emerald-500 animate-spin" />
            </div>
        );
    }

    return <>{children}</>;
};

export default AuthProvider;
