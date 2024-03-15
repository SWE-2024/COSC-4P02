<script lang="ts">
	import DarkModeToggle from '../DarkModeToggle.svelte';
	import AccessibilityThemeSelect from './AccessibilityThemeSelect.svelte';

	/**
	 * @var {boolean} accessibilityMenuOpen boolean representing whether the modal is open or not.
	 */
	export let accessibilityMenuOpen: boolean;

	/**
	 * @todo make selectedOption select a theme.
	 */
	let selectedOption: number;

	/**
	 * @function accessibilityMenuHandler handles opening and closing of handler, inherited from parent.
	 */
	export let accessibilityMenuHandler: () => void;

	/**
	 * @todo probably make this look nicer or something idk. Not a priority.
	 */
	const showKeyboardShortcuts = () => {
		alert(
			'Keyboard Shortcuts:\n\n1. Navigate to the next option: Right arrow key\n2. Navigate to the previous option: Left arrow key\n3. Select an option: Enter key\n4. Toggle Accessibility Menu: Alt + A\n5. Select a line: Shift + Up/Down arrow keys\n6. Copy selected text: Ctrl + C\n7. Paste copied text: Ctrl + V'
		);
	};

	/**
	 * @todo Make this function actually handle changing the font across the
	 * webapp using a textStore or something.
	 */
	const handleFontChange = () => {
		let newSize = fontSize;
		document.body.style.fontSize = newSize + 'px';
	};

	/**
	 * @todo shouldn't need this variable probably I think in the future.
	 */
	let fontSize = '16';
</script>

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
		<div class="join col-span-2 w-full my-4 h-20">
			<div class="grid justify-items-center h-full items-center w-1/2">
				<DarkModeToggle
					classname="btn btn-outline w-11/12 col-span-1 justify-center"
					text="Toggle Theme"
				/>
			</div>
			<div class="divider divider-horizontal"><small class="text-xs">OR</small></div>
			<div class="grid justify-items-center h-full items-center w-1/2">
				<AccessibilityThemeSelect />
			</div>
		</div>
		<div class="grid justify-items-center w-full">
			<button
				class="btn btn-outline w-3/4 col-span-1 justify-center"
				on:click="{showKeyboardShortcuts}">Keyboard Shortcuts</button
			>

			<button
				on:click="{accessibilityMenuHandler}"
				class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
			>
		</div>

		<form method="dialog" class="modal-backdrop">
			<button on:click="{accessibilityMenuHandler}">Close</button>
		</form>
	</div>
</dialog>
