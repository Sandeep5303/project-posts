import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { listPostDetails } from "../redux/post/postActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const PostPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listPostDetails(params.id));
  }, [dispatch, params]);

  const postDetails = useSelector((state) => state.postDetails);
  const { loading, error, post } = postDetails;

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </>
      )}
    </>
  );
};

export default PostPage;
