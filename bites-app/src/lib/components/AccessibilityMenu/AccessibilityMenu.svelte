<script lang="ts">
	import AccessMenuModal from './AccessMenuModal.svelte';

	/**
	 * @var classname CSS class for the toggle button.
	 */
	export let classname: string = '';

	let accessibilityMenuOpen = false;

	/**
	 * @function accessibilityMenuHandler Toggles whether the access menu is open.
	 *
	 * Inherited by child element for consistency.
	 */
	const accessibilityMenuHandler = () => {
		accessibilityMenuOpen = !accessibilityMenuOpen;
	};

	/**
	 * @function onKeyUp Handler for what to do when user presses escape.
	 * @param event Keyboard event containing a code.
	 */
	const onKeyUp = (event: KeyboardEvent) => {
		if (event.code == 'Escape' && accessibilityMenuOpen) {
			accessibilityMenuHandler();
		}
	};
</script>

<button class="{classname}" on:click="{accessibilityMenuHandler}">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
		></path>
	</svg>
</button>

<AccessMenuModal {accessibilityMenuOpen} {accessibilityMenuHandler} />

<svelte:window on:keydown="{onKeyUp}" />
