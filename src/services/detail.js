import { get, post } from "@/utils/request";

/**
 * 获取收藏数据
 */
export function loadDetailAPI() {
  return get("/api/v1/admin/collection");
}

/**
 * 加入收藏
 * @param {*} product
 * @param {*} quantity
 */
export function addDetailAPI(product) {
  return post("/api/v1/user/collections", {
    product,
  });
}
