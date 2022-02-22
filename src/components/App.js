import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup";
import Home from "./Home";
import axios from 'axios';
import jwtDecode from "jwt-decode";
import { AppContextProvider } from "../contexts/AppContextProvider";
import { GlobalContextProvider, StateContext, DispatchContext } from "../contexts/AppContextProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { getUserData, logoutUser } from "../contexts/AuthContext/AuthActions";
import { SET_AUTHENTICATED } from "../contexts/types"

import { processDispatch } from "../utils/utils";

axios.defaults.baseURL = 'http://localhost:5001'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight:'100vh'}}>
      <Router>
        <GlobalContextProvider>
          <Routes>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </GlobalContextProvider>
      </Router>
    </Container>
  );
}

export default App;
