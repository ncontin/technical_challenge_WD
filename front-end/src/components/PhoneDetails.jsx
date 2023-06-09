import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PhoneDetails() {
  const { id } = useParams();
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/phones/${id}`);
        setPhones(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching phone data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  return (
    <div>
      <h2>Phone Details</h2>

      <p>{phones.name}</p>
      <p>{phones.manufacturer}</p>
      <p>{phones.description}</p>
      <p>{phones.color}</p>
      <p>{phones.price}</p>

      <p>{phones.screen}</p>
      <p>{phones.processor}</p>
      <p>{phones.ram}</p>
    </div>
  );
}

export default PhoneDetails;
