import React from "react";
import { Container } from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth="md">
          <NavBar />
          <Container sx={{margin: "30px auto"}} maxWidth="sm">
              <Routes>
                <Route path="/"  element={<Todos />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
          </Container>
           
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
