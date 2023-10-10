import { AxiosRequestConfig } from "axios";
import jwtDecode from "jwt-decode";
import QueryString from "qs";
import { get, remove, save } from "../localstorage/AccsessTokenRepository";
import { AccessTokenPayloadDTO, CredentialsDTO, RoleEnum } from "../models/auth";
import { requestBackend } from "../utils/requests";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";



export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    }

    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" });

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers,
    }

    return requestBackend(config);
}

export function logout() {
    remove();
}

export function saveAccesToken(token: string) {
    save(token);
}

export function getAccessToken() {
    return get();
}

export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = get();
        return token == null ? undefined : (jwtDecode(token) as AccessTokenPayloadDTO);
    } catch (error) {
        return undefined;
    }
}

export function isAuthenticated(): boolean {
    let tokenPayload = getAccessTokenPayload();
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}

export function hasAnyRoles(roles: RoleEnum[]): boolean {
    if (roles.length === 0) {
        return true;
    }

    const tokenPayload = getAccessTokenPayload();

    if (tokenPayload !== undefined) {
        for (var i = 0; i < roles.length; i++) {
            if (tokenPayload.authorities.includes(roles[i])) {
                return true;
            }
        }
    }
    return false;
}