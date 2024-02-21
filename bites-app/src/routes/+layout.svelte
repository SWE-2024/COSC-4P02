<script>
	// import './styles.css';
	import '../app.css';
	import 'tailwindcss/tailwind.css';
	import Navbar from '../components/Navbar.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebase.client';
	import { authStore } from '$lib/stores/authStore';

	// wait for DOM mount then set authStore
	if (browser) {
		onMount(() => {
			console.log('Mounted DOM');
			onAuthStateChanged(auth, (user) => {
				$authStore = {
					isLoggedIn: user != null,
					user
				};
			});
		});
	}
</script>

<div class="app">
	<Navbar />
	<main>
		<slot />
	</main>
</div>

<style>
</style>
