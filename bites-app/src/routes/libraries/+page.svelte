
<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<script lang="ts">
	let columns = ["Name", "Description", "Site"]
	export let data: any
	let library = data.props
</script>

<table class="library">
	<tr id="libraryTitles">
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each library.libraryArray as row}
		<tr id="libraryEntries">
			<!--
			{#each row as cell}
			<td contenteditable="false" bind:innerHTML={cell} />
			{/each}
			-->
			<td contenteditable="false" bind:innerHTML={row[0]} />
			<td contenteditable="false" bind:innerHTML={row[1]} />
			<td><a href={row[2]} target=”_blank” rel="noopener noreferrer" contenteditable="false" bind:innerHTML={row[2]} /></td>
		</tr>
	{/each}
</table>

<style>
	.library {
		margin: 1% 0 2% 5%;
		width: 90%;
		background-color: #10101033;
		color: #e0e8ef;
		padding: 0 0 0 0;
		border-radius: 2pt;
	}

	th, td {
		padding: 5px;
		border-width: 1pt;
		border-color: #00000033;
		border-style: solid;
	}

	#libraryTitles {
		background-color: #e0e8ef;
		color: #000;
	}

	#libraryEntries:nth-child(even) {
    	background-color: #00000033;
	}
</style>