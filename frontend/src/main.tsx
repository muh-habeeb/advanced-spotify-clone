import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { dark, neobrutalism, shadesOfPurple } from "@clerk/themes";

import "./index.css";
// import App from "./App.tsx";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex h-[100vh] w-auto bg-slate-800 text-white justify-center items-center text-3xl ">
      <ClerkProvider
        publishableKey={PUBLISHABLE_KEY}
        appearance={{ baseTheme: shadesOfPurple }}
      >
        <SignedOut>
          <SignInButton
            mode="modal"
            appearance={{ baseTheme: shadesOfPurple }} 

          
          > Sign In to continue</SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{ baseTheme: shadesOfPurple }} />
        </SignedIn>
      </ClerkProvider>
    </div>
  </StrictMode>
);
