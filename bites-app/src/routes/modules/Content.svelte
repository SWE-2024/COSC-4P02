<script lang="ts">
	export let selector: number[];
	export let modules: any;
</script>

<div class="grid grid-cols-1 grid-rows-12 fill-height container lg:w-2/3 sm:w-1/3">
	<div class="text-sm breadcrumbs">
		<ul>
			<li>{modules[selector[0]].module_name}</li>
			<li>{modules[selector[0]].modules_content[selector[1]].item_name}</li>
		</ul>
	</div>
	<div class="w-full row-span-11 mask-square rounded-box">
		<iframe
			class="fill-height w-full h-auto"
			src="{modules[selector[0]].modules_content[selector[1]].item_url}"
			frameborder="0"
			title="{modules[selector[0]].modules_content[selector[1]].item_name}"
		></iframe>
	</div>
</div>

<style>
	/* .container {
		width: 80%;
		display: flex;
		flex-direction: column;
		padding-inline: 2rem;
	} */

	.module-content {
		width: 100%;
		height: 80%;
	}

	.module-content iframe {
		width: 100%;
		height: 100%;
	}

	.fill-height {
		height: 100%;
	}
</style>
