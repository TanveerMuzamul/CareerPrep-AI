// Import Axios to send requests to our FastAPI backend
import axios from "axios";

// Create an Axios connection to our local backend
const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

// Export the connection so other React files can use it
export default api;