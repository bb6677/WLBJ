
import { post } from '@/utils/request.js';


export function regAPI(user) {
  return post('/api/v1/auth/reg',user)
}
export function loginAPI(user) {
  return post('/api/v1/auth/login',user)
}