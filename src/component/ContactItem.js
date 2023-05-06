/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img
            width={50}
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          />
        </Col>
        <Col lg={10}></Col>
      </Row>
    </div>
  );
};

export default ContactItem;
