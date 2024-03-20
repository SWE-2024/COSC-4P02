import { writable } from "svelte/store";

export const themeStore = writable<{
  theme: string,
  isLight: boolean
}>({
  theme: 'brock-dark',
  isLight: false
});



/**
 * @handleThemeChange Handler for theme change button with no specified theme.
 */
export const handleSwapTheme = () => {
  themeStore.update((theme) => {
    switch (theme.theme) {
      case 'brock-dark':
        return ({
          theme: 'light', isLight: 'true'})
      case 'light':
        return ({
          theme: 'brock-dark',
        isLight: false})
      default:
        return ({
          theme: 'brock-dark',
        isLight: false})
    }
  })
};

export const handleThemeChange = (newtheme: string, islight: boolean) => {
  themeStore.set({
    theme: newtheme,
    isLight: islight
  })
}

