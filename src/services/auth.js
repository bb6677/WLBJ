import { post, get } from "@/utils/request";
// import { get } from "core-js/fn/dict";

export function regAPI(user) {
  return post("/api/v1/auth/reg", user);
}

export function loginAPI(user) {
  return post("/api/v1/auth/login", user);
}

export function userInfoAPI() {
  return get("/api/v1/users/info");
}

export function keyAPI(data) {
  return post("/api/v1/users/change_pwd", data);
}
