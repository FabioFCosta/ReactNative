import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:'http://localhost:8080/comercio-seguro'
});

// adb reverse tcp:8080 tcp:8080

export default AxiosInstance;