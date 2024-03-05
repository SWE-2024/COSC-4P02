<script lang="ts">
	let columns = ['Name', 'Description', 'Site'];
	export let data: any;
	let library = data.props;
</script>

<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<div class="overflow-x-auto">
	<table class="table table-xl bg-base-300 container place-self-center mx-auto mt-4 mb-4">
		<thead>
			<tr class="">
				{#each columns as column}
					<th class="">{column}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each library.libraryArray as row}
				<tr class="hover:bg-base-200">
					<!--
			{#each row as cell}
			<td contenteditable="false" bind:innerHTML={cell} />
			{/each}
			-->
					<td contenteditable="false" bind:innerHTML="{row[0]}"></td>
					<td contenteditable="false" bind:innerHTML="{row[1]}"></td>
					<td>
						<a
							class="link link-hover"
							href="{row[2]}"
							target="”_blank”"
							rel="noopener noreferrer"
							contenteditable="false"
							bind:innerHTML="{row[2]}"
						></a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
