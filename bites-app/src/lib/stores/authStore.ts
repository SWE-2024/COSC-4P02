import type { UserInfo } from "firebase/auth";
import { writable } from "svelte/store";

export interface User {
  user?: UserInfo
}

export const authStore = writable<{
  isLoggedIn: boolean
  user?: any
}>({
  isLoggedIn: false
});
