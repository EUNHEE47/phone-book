import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    if (name === "" || phoneNumber === "") {
      setError("Please enter your content.");
    } else {
      dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });

      setName("");
      setPhoneNumber("");
      setError("");
    }
  };

  return (
    <div>
      <Form onSubmit={(event) => addContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </Form.Group>
        <Form.Text>
          {error}
          <br />
        </Form.Text>

        <Button type="submit" variant="dark">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
