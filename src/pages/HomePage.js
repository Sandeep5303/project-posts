import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post";
import Loader from "../components/Loader";
import Message from "../components/Message";

import { listPosts } from "../redux/post/postActions";

const HomePage = () => {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, error, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {posts.map((post) => (
            <Col key={`post_${post.id}`} sm={12} md={6} lg={6}>
              <h3>{post.title}</h3>
              <Post post={post} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
