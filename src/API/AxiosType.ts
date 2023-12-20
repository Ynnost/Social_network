import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "19a20be4-376b-428b-8e2c-afca32450dd7",
  },
});