import { post, get ,put} from "@/utils/request";
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

export function keyAPI(user) {
  return post("/api/v1/users/change_pwd", user);
}

export function personAPI(user) {
  return put("/api/v1/users/change_pwd", user);
}

// export function removeCAPI() {
//   return delete("/api/v1/user/collections/:id");
// }