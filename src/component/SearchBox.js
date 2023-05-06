import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  // let { contact } = useSelector((state) => state);

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={searchByName}>
        <Row>
          <Col lg={6}>
            <Form.Control
              type="text"
              placeholder="Name"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Col>
          <Col>
            <Button variant="dark" type="submit">
              <BsSearch />
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
