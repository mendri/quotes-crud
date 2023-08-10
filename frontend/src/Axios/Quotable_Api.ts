import axios from "axios";

const Quotable_Api = axios.create({
  baseURL: "https://api.quotable.io/quotes/",
})

export default Quotable_Api