<script lang="ts">
	/**
	 * @var selector prop including the item and number currently selected.
	 *
	 * Stored as [module index, item index].
	 */
	export let selector: number[];

	/**
	 * @var modules prop containing module data.
	 */
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
	/* Important */
	.fill-height {
		height: 100%;
	}
</style>
