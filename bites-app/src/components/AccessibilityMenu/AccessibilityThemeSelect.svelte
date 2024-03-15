<script lang="ts">
	import { handleThemeChange } from '$lib/stores/themeStore';

	let selected: themedata;

	interface themedata {
		theme: string;
		text: string;
		isLight: boolean;
	}
	let themeList: themedata[] = [
		{ theme: 'brock-dark', text: 'Brock Dark', isLight: false },
		{ theme: 'business', text: 'Business', isLight: false },
		{ theme: 'light', text: 'Light', isLight: true },
		{ theme: 'autumn', text: 'Autumn', isLight: true }
	];

	const changeTheme = (themename: string, isLight: boolean) => {
		handleThemeChange(themename, isLight);
	};
</script>

<select
	bind:value="{selected}"
	on:change="{() => {
		changeTheme(selected.theme, selected.isLight);
	}}"
	class="select select-bordered border-base-content w-11/12 col-span-1 justify-center"
>
	<option disabled selected>Select a theme</option>
	{#each themeList as themeoption}
		<option value="{themeoption}">{themeoption.text}</option>
	{/each}
</select>
