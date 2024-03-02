<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<script lang="ts">
	let columns = ["Name", "Description", "Site"]
	export let data: any
	let library = data.props
</script>

<table class="mx-16 my-4 rounded-sm text-alice-blue-default bg-background-black-slightly-lighter [&>*:nth-child(even)]:bg-background-black-default">
	<tr class="bg-alice-blue-slightly-darker text-[color:black]">
		{#each columns as column}
			<th class="p-1.5">{column}</th>
		{/each}
	</tr>
	
	{#each library.libraryArray as row}
		<tr class="">
			<!--
			{#each row as cell}
			<td contenteditable="false" bind:innerHTML={cell} />
			{/each}
			-->
			<td class="p-1 text-alice-blue-slightly-darker" contenteditable="false" bind:innerHTML={row[0]} />
			<td class="p-1 text-alice-blue-slightly-darker" contenteditable="false" bind:innerHTML={row[1]} />
			<td class="p-1 text-alice-blue-slightly-darker">
				<a href={row[2]} target=”_blank” rel="noopener noreferrer" contenteditable="false" bind:innerHTML={row[2]} />
			</td>
		</tr>
	{/each}
</table>