import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const PostPage = lazy(() => import("./pages/PostPage"));
const UserPage = lazy(() => import("./pages/UserPage"));

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/account/login" element={<LoginPage />} exact />
            <Route path="/account/user" element={<UserPage />} exact />
            <Route path="/account/post/:id" element={<PostPage />} />
          </Routes>
        </Suspense>
      </Container>
    </Router>
  );
}

export default App;
