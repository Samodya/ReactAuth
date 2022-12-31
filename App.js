import { Routes, Route} from 'react-router-dom';
import Signin from "./Logininfo/signin.js"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Logininfo/navbar';
import { useState,useEffect } from 'react';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "@firebase/firestore";

import './App.css';

import { async } from '@firebase/util';

function App() {
  
  
  return (

      <div className="App">

      <div>
       
          <Navbar/>
          <div className="page-content">
          <Routes >
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/signin" element={<Signin/>}></Route>
          </Routes>
          </div>

        
        
      </div>
        
       
      </div>
    
  );
}

export default App;
