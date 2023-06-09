import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function App() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/phones`);
        setPhones(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhones();
  }, []);

  const handlePhoneSelect = (phone) => {
    setSelectedPhone(phone);
  };

  if (loading) {
    return <div>Loading...</div>; // Display a loading message or spinner while fetching data
  }

  return (
    <Container>
      <h1>Phone List</h1>
      <ListGroup>
        {phones.map((phone) => (
          <ListGroup.Item
            key={phone.id}
            action
            active={selectedPhone === phone}
            onClick={() => handlePhoneSelect(phone)}
          >
            <ButtonGroup>
              <Button variant="primary">{phone.name}</Button>
            </ButtonGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>
      {selectedPhone && (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Model: {selectedPhone.name}</Card.Title>
            <Card.Text>Manufacturer: {selectedPhone.manufacturer}</Card.Text>
            <Card.Text>Description: {selectedPhone.description}</Card.Text>
            <Card.Text>Color: {selectedPhone.color}</Card.Text>
            <Card.Text>Price: {selectedPhone.price}</Card.Text>
            <Card.Text>Screen: {selectedPhone.screen}</Card.Text>
            <Card.Text>Processor: {selectedPhone.processor}</Card.Text>
            <Card.Text>RAM: {selectedPhone.ram} GB</Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default App;
