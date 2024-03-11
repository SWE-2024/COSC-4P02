<script lang="ts">
	import Content from './Content.svelte';
	import Sidebar from './Sidebar.svelte';
	import { db } from '$lib/firebase/firebase.client';
	import { onMount } from 'svelte';
	import { collection, onSnapshot } from 'firebase/firestore';
	import { authLoading, authStore } from '$lib/stores/authStore';

	/**
	 * @var modules Contains module data.
	 */
	let modules: any = [];

	onMount(() => {
		onSnapshot(collection(db, 'modules'), (snapshot) => {
			let data = snapshot.docs;
			modules = [];
			for (let i = 0; i < data.length; i++) {
				// console.log(data[i].data());
				modules.push(data[i].data());
			}
			modules.sort((a: any, b: any) => a.index - b.index);
		});
	});

	/**
	 * @var selector list containing the item and module currently selected.
	 *
	 * Stored as [module index, item index].
	 *
	 * Initialized as the first item of the first module.
	 */
	let selector = [0, 0];
</script>

<svelte:head>
	<title>Modules</title>
	<meta name="description" content="Read the modules" />
</svelte:head>

<div class="join join-horizontal w-11/12 m-2 p-2 rounded-box h-[80vh]">
	{#if modules.length > 0 && $authStore.isLoggedIn}
		<Sidebar bind:selector {modules} />
		<div class="divider divider-horizontal"></div>
		<Content bind:selector {modules} />
	{/if}

	{#if $authLoading}
		<div class="grid grid-col-1 grid-rows=1 place-items-center w-full h-full">
			<div class="flex flex-col items-center">
				<h2 class="text-3xl font-bold">Currently loading, please wait</h2>
				<span class="loading loading-lg"></span>
			</div>
		</div>
	{:else if !$authStore.isLoggedIn}
		<div class="grid grid-col-1 grid-rows=1 place-items-center w-full h-full">
			<div class="flex flex-col items-center">
				<h2 class="text-3xl font-bold">Please log in to see modules</h2>
			</div>
		</div>
	{/if}
</div>

<style>
</style>
