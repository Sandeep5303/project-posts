import React from "react";
import { Card } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <h3>Name: {user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Street: {user.street}</p>
        <p>Number: {user.number}</p>
        <p>Country: {user.country}</p>
      </Card.Body>
    </Card>
  );
};

export default User;
