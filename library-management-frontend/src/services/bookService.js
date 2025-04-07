import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const getBooks = async () => {
  try {
    console.log("Fetching books from:", API_URL + "/books");
    const response = await axios.get(`${API_URL}/books`);
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
  }
};
