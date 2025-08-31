import { Route, Routes } from "react-router-dom";
// import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import AuthCallBackPage from "./pages/AuthCallBackPage";
import { axiosInstance } from "./lib/axios";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    //token => 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
      </Routes>
    </>
  );
};

export default App;
