import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Post = ({ post }) => {
  return (
    <Card>
      <Card.Body>
        <p>{post.description}</p>
        <Link to={`/account/post/${post.id}`}>
          <span>Read more</span>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
