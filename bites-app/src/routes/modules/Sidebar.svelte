<script lang="ts">
	import AddItemButton from './AddItemButton.svelte';
	import ArrowButton from './ArrowButton.svelte';
	import SlidesIcon from './SlidesIcon.svelte';
	import VideoIcon from './VideoIcon.svelte';

	/**
	 * @interface Item represents a database entry for a subcategory of a module.
	 */
	interface Item {
		item_index: number;
		item_name: string;
		item_type: string;
		item_url: string;
	}

	/**
	 * @interface Module represents a database entry for an entire module.
	 */
	interface Module {
		module_name: string;
		module_description: string;
		modules_content: Item[];
		module_open: boolean;
		index: number;
	}

	/**
	 * @var selector prop including the item and number currently selected.
	 *
	 * Stored as [module index, item index].
	 */
	export let selector: number[] = [0, 0];

	/**
	 * @var modules prop containing module data.
	 */
	export let modules: Module[];

	let searchString = '';

	/**
	 * @function selectorHandler handler for sidebar menu buttons.
	 * @param itemidx index of the module item currently selected
	 * @param moduleidx index of the module currently selected
	 */
	const selectorHandler = (itemidx: number, moduleidx: number) => {
		selector = [moduleidx, itemidx];
	};

	/**
	 * @function openModule This probably opens the modules.
	 *
	 * Idk, I used it like two hours ago and it was created by someone else.
	 *
	 * @param index
	 */
	function openModule(index: number) {
		//modules[index].module_open = !modules[index].module_open
		let mods = modules;
		mods[index].module_open = !mods[index].module_open;
		modules = [...mods];
	}

	/**
	 * @function Filter only displays modules with relevant name, description or content that matches inputted searchString
	 */
	$: filteredModules = searchString
		? modules.filter(
				(module) =>
					module.module_name.toLowerCase().includes(searchString.toLowerCase()) ||
					module.module_description.toLowerCase().includes(searchString.toLowerCase()) ||
					module.modules_content.some((item) =>
						item.item_name.toLowerCase().includes(searchString.toLowerCase())
					)
			)
		: modules;
</script>

<div class="menu menu-vertical overflow-y-scroll bg-base-300 rounded-box fill-height">
	<!-- <div class="drawer w-1/5 bg-base-300"> -->
	<div class="menu-title space-y-1 text-wrap text-lg">
		<h3 class="text-base-content text-2xl">Software Engineering</h3>
		<span class="text-xs">{modules.length} Modules</span>
		<label class="input input-bordered flex input-sm items-center gap-2 bg-base-300"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4 opacity-70"
				><path
					fill-rule="evenodd"
					d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
					clip-rule="evenodd"
				></path></svg
			>
			<input type="text" class="grow" placeholder="Search modules" bind:value="{searchString}" />
		</label>
	</div>

	<div class="h-1/3">
		{#each filteredModules as module}
			<button
				class="btn col-span-1 rounded-none btn-lg btn-block {selector[0] == module.index
					? 'border-4 border-b-accent'
					: 'btn-ghost'}"
				class:selected="{selector[0] == module.index}"
				on:click="{() => {
					// selectorHandler(selector[1], module.index);
					openModule(module.index);
				}}"
			>
				<div class="grid grid-cols-2 grid-rows-2 w-full">
					<p class="text-md col-end-1 text-left">{module.module_name}</p>
					<button
						class="btn btn-circle btn-ghost btn-md col-start-3 row-span-2"
						on:click="{() => {}}"><ArrowButton /></button
					>
					<p
						class="text-sm text-left text-opacity-80 text-base-content row-start-2 col-span-1 row-end-2"
					>
						{module.module_description}
					</p>
				</div>
			</button>
			{#if module.module_open}
				<div class="flex flex-col" class:items_opened="{selector[0] == module.index}">
					{#each module.modules_content as { item_index, item_name }}
						<button
							class="btn rounded-none {selector[1] == item_index && selector[0] == module.index
								? 'btn-primary'
								: 'btn-ghost'}"
							on:click="{() => selectorHandler(item_index, module.index)}"
						>
							{#if item_name == 'item1'}
								Slides <SlidesIcon />
							{:else}
								Video <VideoIcon />
							{/if}
						</button>
					{/each}
				</div>
			{/if}
			<div class="divider divider-vertical my-0"></div>
		{/each}
		<AddItemButton bind:moduleLength="{modules.length}" />
		<div class="divider divider-vertical my-0"></div>
	</div>
</div>

<style>
	.fill-height {
		height: 100%;
	}

	/* Scrollbar */

	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	::-webkit-scrollbar-track {
		border-radius: 5px;
	}

	::-webkit-scrollbar-thumb {
		background: lightsteelblue;
		border-radius: 10px;
	}

	::-webkit-scrollbar-thumb:hover {
		background: lightsteelblue;
	}
</style>
