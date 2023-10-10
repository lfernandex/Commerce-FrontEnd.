import axios, { AxiosRequestConfig } from "axios";
import { getAccessToken } from "../services/AuthService";
import { BASE_URL } from "./system";

export function requestBackend(config: AxiosRequestConfig) {


    const headers = config.withCredentials
        ? {
            ...config.headers,
            Authorization: "Bearer " + getAccessToken()
        }
        : config.headers;

    return axios({ ...config, baseURL: BASE_URL, headers });
}