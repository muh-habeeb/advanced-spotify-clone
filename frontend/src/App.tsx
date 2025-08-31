import { Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    //token =>
    <>
      <Routes>
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signInForceRedirectUrl={"/auth-callback"}
            />
          }
        />

        <Route path="/auth-callback" element={<AuthCallBackPage />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
