// Header.js

import React, { useEffect } from "react";
import { Card, CardBody } from "reactstrap";
import './Header.css'; // Import the CSS file

const Header = () => {

  return (
    <div>
      <Card className="my-2">
        <CardBody className="card-body">
          <h1 className="card-title">Header</h1>
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;
