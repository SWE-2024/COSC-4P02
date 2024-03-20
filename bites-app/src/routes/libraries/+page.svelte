<script lang="ts">
	import LibraryTable from "../../components/LibraryTable.svelte";
	export let data: any;
	let library = data.props;
	let columns = ['Name', 'Description', 'Site'];
	let libraryIndex = data.props.libraryIndex;
	
</script>

<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<div class="overflow-x-auto">
	<div class="bg-base-300 content-center container place-self-center mx-auto my-4 rounded-box w-[70%]">	
		<div role="tablist" class="tabs tabs-bordered pt-5">
			<!-- Keep these the same name -->
			<input type="radio" name="my_tabs_1" role="tab" class="tab ml-20" aria-label="Finding Resources" checked />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.findingResources} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Further Resources" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.furtherResources} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Agile" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.agile} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Incremental" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.incremental} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Scrum" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.scrum} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Architectures" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.architectures} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Testing" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.testing} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Job Search" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.jobSearch} columns={columns}/>
			</div>
			<input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tools" />
			<div role="tabpanel" class="tab-content p-10">
				<LibraryTable libraryTable={libraryIndex.tools} columns={columns}/>
			</div>
		</div>
	</div>
</div>
