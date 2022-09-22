import { Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home/Home";

// import Series from "./pages/series/Series";
import Favorites from "./components/favorites/Favorites";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile"
import Footer from "./components/footer/Footer";
import CardDetails from "./components/cardDetails/CardDetails";
import axios from "axios";

//Esta es la tmdb original!!!!!!!!!!!



function App() {

useEffect(() => {
  axios.get("/api/me")
  
  .then(res => console.log("Me =>", res))

}, [])


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:movieId" element={<CardDetails/>}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer/>
      </>
      
  );
}

export default App;
