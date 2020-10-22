import { USER_KEY, apiUrl } from "../helpers";
import { storageService } from "../services";

var token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTUzNjhkZGY3ZWEzOTMwY2M0ODg3OWEiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE1ODMyMTcyMDR9.e1uAJBnxKV2Vk1zKO3Wwjyo-VQCndpNhndvfaw-h-vA";

export function authHeader() {
  // return authorization header with jwt token
  if (!token) {
    let user = storageService.getData(USER_KEY);

    if (user) {
      //user = JSON.parse(user);
      token = user.token;
      console.log(user.token);
    }
  }

  return {
    Authorization: "Bearer " + token,
  };
}
