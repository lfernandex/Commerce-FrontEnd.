import { requestBackend } from "../utils/requests";
import { getAccessToken } from "./AuthService";

export function findMe(){

    const headers ={
        Authorization: "Bearer " + getAccessToken()
    }

    console.log(headers)

    return requestBackend({ url:`/users/me`, headers})
}