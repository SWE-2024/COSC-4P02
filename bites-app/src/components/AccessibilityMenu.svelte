<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';

	function showKeyboardShortcuts() {
		alert(
			'Keyboard Shortcuts:\n\n1. Navigate to the next option: Right arrow key\n2. Navigate to the previous option: Left arrow key\n3. Select an option: Enter key\n4. Toggle Accessibility Menu: Alt + A\n5. Select a line: Shift + Up/Down arrow keys\n6. Copy selected text: Ctrl + C\n7. Paste copied text: Ctrl + V'
		);
	}

	let accessibilityMenuOpen = false;

	const accessibilityMenuHandler = () => {
		accessibilityMenuOpen = !accessibilityMenuOpen;
	};

	const onKeyUp = (event: KeyboardEvent) => {
		if (event.code == 'Escape' && accessibilityMenuOpen) {
			accessibilityMenuHandler();
		}
	};

	const handleFontChange = () => {
		let newSize = fontSize;
		document.body.style.fontSize = newSize + 'px';
	};

	let fontSize = '16';
</script>

<button class="circle-button" on:click="{accessibilityMenuHandler}">
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

<dialog class="modal" class:modal-open="{accessibilityMenuOpen}">
	<div class="modal-box">
		<h2 class="font-bold text-xl flex mb-4">Accessibility</h2>
		<label class="col-span-2 col-start-1">
			Change Font size
			<input
				class="range"
				type="range"
				min="12"
				max="20"
				bind:value="{fontSize}"
				step="2"
				on:change="{handleFontChange}"
			/>
			<div class="w-full flex justify-between text-xs mb-4">
				<span>Small</span>
				<span>|</span>
				<span>Normal</span>
				<span>|</span>
				<span>Large</span>
			</div>
		</label>
		<div class="join col-span-2 w-full my-4">
			<div class="grid justify-items-center w-1/2">
				<DarkModeToggle
					classname="btn btn-outline w-11/12 col-span-1 justify-center"
					text="Toggle Theme"
				/>
			</div>
			<div class="grid justify-items-center w-1/2">
				<button
					class="btn btn-outline w-11/12 col-span-1 justify-center"
					on:click="{showKeyboardShortcuts}">Keyboard Shortcuts</button
				>
			</div>
		</div>

		<button
			on:click="{accessibilityMenuHandler}"
			class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
		>
	</div>

	<form method="dialog" class="modal-backdrop">
		<button on:click="{accessibilityMenuHandler}">Close</button>
	</form>
</dialog>

<!-- Accessibility menu -->
<!-- <div
		class="accessibility-menu {accessibilityMenuOpen ? 'open' : ''}"
		style="left: 100px; bottom:150px; transform: translateX(-50%);"
	>
		<button on:click="{() => changeTextSize(2)}">Increase Text Size</button>
		<button on:click="{() => changeTextSize(-2)}">Decrease Text Size</button>
		<button on:click="{toggleHighContrast}">High Contrast</button>
		<button on:click="{resetSettings}">Reset</button> -->
<!-- New button for keyboard shortcuts -->
<!-- <button on:click="{showKeyboardShortcuts}">Keyboard Shortcuts</button>
	</div> -->

<svelte:window on:keydown="{onKeyUp}" />

<style>
	.circle-button {
		@apply btn btn-primary btn-circle my-4 sticky bottom-4 left-4 float-left;
	}

	/* button {
		margin-top: 10px;
		padding: 10px;
		background-color: #2ecc71;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	} */

	/* button:disabled {
		background-color: #95a5a6;
		cursor: not-allowed;
	} */

	/* Added styles for high contrast */
	/* .high-contrast {
		color: #fff !important;
		background-color: #000 !important;
	} */

	/* Added styles for pop-up accessibility menu */
	/* .accessibility-menu {
		position: absolute;
		bottom: calc(100% + 10px); 
		left: 20px;
		background-color: #fff;
		padding: 10px;
		border: 1px solid #ccc;
		display: none; 
		z-index: 999;  */
	/* } */

	/* .accessibility-menu.open {
		display: flex; 
		flex-direction: column;
	} */

	/* .accessibility-menu button {
		margin-bottom: 5px; 
	} */

	/* Accessibility menu toggle button */
	/* #accessibility-menu-button {
		position: fixed;
		bottom: 20px;
		left: 20px;
		cursor: pointer;
		z-index: 999; 
	} */
</style>
