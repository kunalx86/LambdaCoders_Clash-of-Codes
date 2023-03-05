import Axios from "axios"

export const URL = "http://localhost:9000"

export const axios = Axios.create({
  baseURL: URL
});