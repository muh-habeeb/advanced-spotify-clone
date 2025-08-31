import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

import "./index.css";
// import App from "./App.tsx";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        appearance={{ baseTheme: shadesOfPurple }}
      >
        <BrowserRouter>
          <AuthProvider>
            <App />

            <Toaster />
          </AuthProvider>
        </BrowserRouter>
      </ClerkProvider>
    </div>
  </StrictMode>
);
