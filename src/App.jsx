import React from "react";
import './App.css'
import {Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from "./Footer";
import { CarbonProvider } from "./carbonContext";


function App() {

  return (
    <CarbonProvider>
    <Navbar></Navbar>
    <Outlet/>
    <Footer></Footer>
    </CarbonProvider>
    
  )
}

export default App
