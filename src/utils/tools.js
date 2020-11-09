export const serverUrl = "http://localhost:1337";

export function isLogined() {
  if (localStorage.getItem("token")) {
    return true
  } else {
    return false
  }
}

export function setToken(val) {
  localStorage.setItem("token",val)
}

export function getToken() {
  localStorage.getItem("token")
}

export function removeToken() {
  localStorage.removeItem("token")
}