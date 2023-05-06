import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contactList } = useSelector((state) => state);

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={searchByName}>
        <Row>
          <Col lg={10}>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col lg={2}>
            <Button variant="dark" type="submit">
              찾기
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
