import { writable } from "svelte/store";

export const themeStore = writable<{
  theme: string
}>({
  theme: 'brock-dark'
});
