import { proxy, useProxy } from "valtio";

export const state = proxy({
  isLoggedIn: false,
  userName: null,
  usersGroup: null,
});
