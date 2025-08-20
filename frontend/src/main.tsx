import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { dark, neobrutalism, shadesOfPurple } from '@clerk/themes'

import "./index.css";
// import App from "./App.tsx";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={{ baseTheme: shadesOfPurple }}>
  <SignedOut>
    <SignInButton mode="modal" appearance={{ baseTheme: shadesOfPurple }} />
  </SignedOut>
  <SignedIn>
    <UserButton appearance={{ baseTheme: shadesOfPurple }} />
  </SignedIn>
</ClerkProvider>
  </StrictMode>
);
