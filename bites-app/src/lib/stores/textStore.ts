import { writable } from "svelte/store";

export const textStore = writable<{
  size: string
}>({
  size: "text-md"
})

export const changeTextSizeHandler = (newSize: number) => {
  textStore.set({size: textSizeEnum[newSize]})
}

const textSizeEnum: { [key: string]: any } = {
  1: "text-xs",
  2: "text-sm",
  3: "text-base",
  4: "text-xl",
  5: "text-3xl",
}

