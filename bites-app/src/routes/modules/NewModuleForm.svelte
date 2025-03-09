<script lang="ts">
	let allowedExtensions = ['.pdf']; // list of file types allowed

	export let fileinputEnabled: boolean = true;
	export let videourlEnabled: boolean = true;
	export let data: {
		videoInput: string;
		fileInput: File;
		module_name: string;
		module_description: string;
	};
	export let error: {
		fileInput: string;
		videoInput: string;
		moduleNameInput: string;
		moduleDescriptionInput: string;
	};

	const handleClearURL = () => {
		data.videoInput = '';
	};

	const handleClearFileinput = () => {};

	const handleUpload = async (event: any) => {
		console.log(event.target.files[0]);
		let file = event.target.files[0];
		// let blob = await fetch(file).then(r => r.blob());
		// console.log(blob)
		data.fileInput = file;
	};
</script>

<div class="flex flex-col w-full">
	<h3 class="h-2">Module Name</h3>
	<label class="url-input self-center">
		<input type="text" id="modulename" bind:value="{data.module_name}" />
	</label>
	<p class="error-font">{error.moduleNameInput}</p>
	<br />
	<br />
	<h3 class="h-2">Module description</h3>
	<label class="url-input self-center">
		<input type="text" id="moduledescription" bind:value="{data.module_description}" />
	</label>
	<p class="error-font">{error.moduleDescriptionInput}</p>

	<div class="divider"></div>

	<h3 class="h-2">Add a Slideshow</h3>
	<input
		class="slide-input self-center"
		type="file"
		id="fileinput"
		disabled="{!fileinputEnabled}"
		accept="{allowedExtensions.join(',')}"
		on:input="{(event) => {
			handleUpload(event);
		}}"
	/>
	<p class="error-font">{error.fileInput}</p>

	<div class="divider"></div>

	<h3 class="h-2">Add a Video</h3>
	<label class="url-input self-center" aria-disabled="{!videourlEnabled}">
		URL
		<input
			type="text"
			id="videourl"
			pattern=""
			disabled="{!videourlEnabled}"
			bind:value="{data.videoInput}"
		/>
	</label>
	<p class="error-font">{error.videoInput}</p>
</div>
