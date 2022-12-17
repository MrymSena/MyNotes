import axios from "axios";
import { toaster } from "../utils/utils";
const BASE_URL = "http://localhost:8080/";

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
});

const API = axios.create({
  baseURL: BASE_URL,
  //  headers: {
  //   Authentication: "tokenblabla",
  // },
});

export const doRequest = ({ type, endpoint, payload }) => {
  return new Promise((resolve, reject) => {
    API[type](endpoint, payload)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        //do app based error handling logic here
        toaster(`${type}: ${endpoint} isteğinde hata oluştu: ${err?.message}`);
        reject(err);
      });
  });
};
