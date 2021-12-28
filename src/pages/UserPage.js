import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listUserDetails } from "../redux/user/userActions";

const UserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    dispatch(listUserDetails());
    if (!userInfo) {
      setTimeout(() => {
        navigate("/account/login");
      }, 3000);
    }
  }, [dispatch, navigate, userInfo]);

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
        <User user={user} />
      )}
    </>
  );
};

export default UserPage;
