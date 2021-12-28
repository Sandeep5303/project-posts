import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/account/login" element={<LoginPage />} exact />
          <Route path="/account/user" element={<UserPage />} exact />
          <Route path="/account/post/:id" element={<PostPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
