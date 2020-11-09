import { get } from "@/utils/request";

export function AllClasstify(params) {
  return get("/api/v1/movies", params);
}

// export function BannerClasstify() {
//   return get("/api/v1/movies");
// }
