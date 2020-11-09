import { get } from "@/utils/request";


export function loadProductsFromServer() {
  return get("/api/v1/movies");
}
