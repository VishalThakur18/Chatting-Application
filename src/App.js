import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import Landingpage from "./pages/LandingPage";
import SplashScreen from "./components/SplashScreen";

function App() {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/landingpage" />;
    }

    return children
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time (you can replace this with your actual loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 3500); // Replace 5000 with the time your app needs to load
  }, []);

  return (
    <BrowserRouter>
      {loading ? <SplashScreen /> : 
        <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="landingpage" element={<Landingpage />}/>
      </Routes>
      } 
    </BrowserRouter>
  );
}

export default App;
