import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AllRoutes } from "./Pages/AllRoutes";
import { useState } from "react";


function App() {
  
  return (
    <div className="App">
      <Navbar />
    
      <AllRoutes />
     
      <Footer />

    
    </div>
  );
}

export default App;
