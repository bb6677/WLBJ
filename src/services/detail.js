import { get, post } from "@/utils/request";

/**
 * 获取收藏数据
 */
export function loadDetailAPI() {
  return get("/api/v1/user/collections");
}

/**
 * 加入收藏
 * @param {*} product
 * @param {*} quantity
 */
export function addDetailAPI(id) {
  return post("/api/v1/user/collections", {
    
    movie:id,
  });
}
