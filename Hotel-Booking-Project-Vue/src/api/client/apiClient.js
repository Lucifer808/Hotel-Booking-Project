import axios from "axios";

const apiRootUrl = "";

const apiClient = axios.create({
    baseURL: apiRootUrl,
    headers: {"x-camelcase": 1}
});

apiClient.interceptors.response.use(
    function (resp) {
        return resp;
    },
    function (err) {
        if (axios.isCancel(err)) throw err;
    }
);

export default apiClient;
