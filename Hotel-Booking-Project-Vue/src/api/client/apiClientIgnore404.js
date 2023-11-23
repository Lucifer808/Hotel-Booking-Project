import axios from "axios";

const apiRootUrl = "";

const apiClient = axios.create({
  baseURL: apiRootUrl,
  headers: {"x-camelcase": 1}
});


export default apiClient;
