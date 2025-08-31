import { Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

const App = () => {
  return (
    //token => 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signInForceRedirectUrl={"/auth-callback"} />} />
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
      </Routes>
    </>
  );
};

export default App;
