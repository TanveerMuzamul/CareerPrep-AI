// Import React hooks to manage data and run code
import { useEffect, useState } from "react";

// Import our Axios connection to FastAPI
import api from "./api";

// Create a component to test the backend connection
function BackendTest() {
  // Store the message received from FastAPI
  const [message, setMessage] = useState("Connecting to backend...");

  // Run this code when the component loads
  useEffect(() => {
    // Send a GET request to the backend homepage
    api.get("/")
      .then((response) => {
        // Display the message returned by FastAPI
        setMessage(response.data.message);
      })
      .catch(() => {
        // Display an error if the backend cannot be reached
        setMessage("Backend connection failed");
      });
  }, []);

  // Show the backend message on the page
  return <p>{message}</p>;
}

// Allow other React files to use this component
export default BackendTest;