<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<script>
	let columns = ["Name", "Description", "Site"]
	let data = [
    ["Wikipedia", "The free online encyclopedia", "https://en.wikipedia.org"],
    ["Library Genesis", "Library with many free books", "https://libgen.is/"],
    ["Google", "The software engineer's best friend", "https://www.google.com/"]
  ]
</script>

<table class="library">
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
		<tr>
			{#each row as cell}
			<td contenteditable="true" bind:innerHTML={cell} />
			{/each}
		</tr>
	{/each}
</table>

<style>
	.library {
		margin: auto;
		width: 50%;
		background-color: aliceblue;
		color: black;
		padding: 10px;
		border-radius: 5pt;
	}
</style>