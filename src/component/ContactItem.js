/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Row } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <div className="contact-item-box">
      <Row>
        <Col lg={2}>
          <img
            className="item-img"
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          />
        </Col>
        <Col lg={9} className="item-content">
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
