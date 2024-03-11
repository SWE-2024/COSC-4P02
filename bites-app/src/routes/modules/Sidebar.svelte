<script lang="ts">
	import ArrowButton from './ArrowButton.svelte';

	interface Item {
		item_index: number;
		item_name: string;
		item_type: string;
		item_url: string;
	}

	interface Module {
		module_name: string;
		module_description: string;
		modules_content: Item[];
		module_open: boolean;
		index: number;
	}

	/**
	 *
	 */
	export let selector: number[] = [0, 0];
	export let modules: Module[]; // Changed this from Any to Interface to allow for filtering

	let searchString = '';

	const selectorHandler = (itemidx: number, moduleidx: number) => {
		selector = [moduleidx, itemidx];
	};

	function openModule(index: number) {
		//modules[index].module_open = !modules[index].module_open
		let mods = modules;
		mods[index].module_open = !mods[index].module_open;
		modules = [...mods];
	}

	// Search Bar Filter only displays modules with relevant name, description or content that matches inputted searchString
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
			<input
				type="text"
				class="grow"
				placeholder="Search modules"
				bind:value="{searchString}"
			/></label
		>
		<!--Create an empty search bar-->
	</div>

	<div class="h-1/3">
		{#each filteredModules as module}
			<div class="">
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
								{item_name}
							</button>
						{/each}
					</div>
				{/if}
			</div>
			<div class="divider divider-vertical my-0"></div>
		{/each}
	</div>
	<!-- {#if filteredModules.length=0}
            <div>
                <h3>Nothing Found</h3>
            </div>  
        {/if} -->
</div>

<style>
	.fill-height {
		height: 100%;
	}
	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border-radius: 5px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: lightsteelblue;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: lightsteelblue;
	}

	/* h3 {
		font-size: 1.8rem;
		color: white;
	}

	h4 {
		font-size: 1.2rem;
		align-items: left;
		text-align: left;
		color: white;
		font-weight: 400;
	}

	h3,
	h4 {
		padding: 0;
		margin: 0;
	}

	p {
		padding: 0;
		margin: 0;
		opacity: 0.7;
		font-size: 0.75rem;
		text-align: left;
	} */

	/* button {
		text-align: left;
	} */

	/* .course-header {
		padding: 1rem 1rem 1rem 1rem;
		border-bottom: 1px rgb(67, 67, 67) solid;
		border-radius: 5px;
		background-color: #646cff;
		margin-bottom: 0.5rem;
		margin-right: 0.25rem;
	} */

	/* .module-container {
		padding: 0rem 0.5rem 0rem 0rem;
		margin-left: 0.25rem;
		border-radius: 5px;
	} */

	/* .module_title_container {
		display: flex;
		justify-content: space-between;
		padding: 1rem 1rem 1rem 0.45rem;
		cursor: pointer;
		border: #646cff;
		width: 100%;
	} */

	/* .module_title_container:hover {
		border-left: 3px solid #646cff;
	} */

	/* .selected {
		border-left: 3px solid #646cff;
		background-color: rgb(46, 46, 46);
	} */

	/* .module_opener_button img {
		padding: 0;
		margin: 0;
		width: 135%;
		aspect-ratio: 1/1;
		rotate: 90deg;
		transition: 0.2s ease-in-out;
	} */

	/* .module_opened {
		rotate: 180deg !important;
	}

	.module_items {
		padding-left: 1rem;
		padding-block: 0.5rem;
		display: flex;
		flex-direction: column;
		font-size: 0.8rem;
		gap: 0.5rem;
		background-color: transparent;
		transition: 0.2s ease-in-out;
	} */
	/* .module_items button {
		margin-right: 2rem;
		padding: 0.5rem 0.25rem;
		border: rgb(69, 69, 69) 2px;
		transition: 0.2s ease-in-out;
		border-bottom: 2px solid rgb(69, 69, 69);
	} */

	/* .module_items button:hover {
		border-bottom: 3px solid #646cff;
	} */
	/* .items_opened {
		background-color: rgb(46, 46, 46);
		border-left: 3px solid #646cff;
	} */

	.searchBar {
		margin-top: 10px;
		border-radius: 5px;
		border: 1px solid #646cff;
		color: white;
		font-size: 14px;
		background-color: rgb(46, 46, 46);
		padding: 5px;
		transition: transform 0.3s ease;
		width: 100%;
	}

	.searchBar:hover {
		border-color: white;
	}
</style>
