import axios from "axios";

export default axios.create({
  baseURL: "https://dctcbackend.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
