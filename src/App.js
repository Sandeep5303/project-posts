import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} exact />
          <Route path="/user" element={<UserPage />} exact />
          <Route path="/post/:post_id" element={<PostPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
