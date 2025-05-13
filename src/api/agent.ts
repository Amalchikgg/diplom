import axios from "axios";

/**
 * Axios API agent
 * @category Utils
 */
export const agent = axios.create({
  baseURL: "https://tasteandfeast-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
  },
});

agent.interceptors.request.use((config) => {
  const token = window?.localStorage?.getItem("token");
  console.log("token", token);
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
    console.log("Authorization header set:", config.headers["Authorization"]);
  } else {
    console.log("No token found, skipping Authorization header");
  }
  console.log("Final headers:", config.headers);
  return config;
});
