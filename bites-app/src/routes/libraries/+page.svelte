<script lang="ts">
	import LibraryTable from "../../components/LibraryTable.svelte";
	export let data: any;
	let library = data.props;
	let columns = ['Name', 'Description', 'Site'];
	let libraryIndex = data.props.libraryIndex;

	const labels_to_functions = {
		"Finding\xa0Resources": libraryIndex.findingResources, 
		"Further\xa0Resources": libraryIndex.furtherResources, 
		"Agile": libraryIndex.agile, 
		"Incremental": libraryIndex.incremental, 
		"Scrum": libraryIndex.scrum, 
		"Architectures": libraryIndex.architectures, 
		"Testing": libraryIndex.testing, 
		"Job\xa0Search": libraryIndex.jobSearch, 
		"Tools": libraryIndex.tools,
	}
</script>

<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<div class="overflow-x-auto">
	<div class="bg-base-300 content-center container place-self-center mx-auto my-4 px-auto rounded-box">	
		<div role="tablist" class="tabs tabs-bordered pt-5">
			<!-- Keep these the same name. -->			
			{#each Object.entries(labels_to_functions) as [label, function_member], index}
				{#if index == 0}
					<!-- Add a response for medium and smaller. -->
					<input type="radio" name="my_tabs_1" role="tab" class="tab lg:ml-8 xl:ml-48 2xl:ml-64" aria-label={label} checked />
				{:else}
					<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label={label} />
				{/if}
				<div role="tabpanel" class="tab-content p-10 2xl:w-[100%] xl:w-[90%] lg:w-[66%] md:w-[50%] sm:w-[30%] min-[320px]:w-[10%]">
					<LibraryTable libraryTable={function_member} columns={columns}/>
				</div>
			{/each}
		</div>
	</div>
</div>
