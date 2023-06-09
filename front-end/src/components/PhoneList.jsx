import { useState, useEffect } from "react"; // <== IMPORT useEffect
import axios from "axios";
import { Link } from "react-router-dom";

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_API_URL}/api/phones`);
        setPhones(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching phone data:", error);
      }
    };

    fetchPhones();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }
  return (
    <div>
      <h1>Phone List</h1>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id}>
            <Link to={`phones/${phone.id}`}>{phone.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneList;
