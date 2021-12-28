import React from "react";
import { Card } from "react-bootstrap";

const User = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </Card.Body>
    </Card>
  );
};

export default User;
