import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

export default axios;
