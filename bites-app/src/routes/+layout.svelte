<script lang="ts">
	// import './styles.css';
	import '../app.css';
	import 'tailwindcss/tailwind.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebase.client';
	import { authStore } from '$lib/stores/authStore';
	import DarkModeToggle from '../components/DarkModeToggle.svelte';
	import { themeStore } from '$lib/stores/themeStore';

	// wait for DOM mount then set authStore
	if (browser) {
		onMount(() => {
			onAuthStateChanged(auth, async (user) => {
				$authStore = {
					isLoggedIn: user != null,
					user
				};
			});
		});
	}
</script>

<html lang="en" data-theme="{$themeStore.theme}">
	<div class="app bg-gradient-to-r from-base-100 from-70% to-base-300">
		<Navbar />
		<main>
			<slot />
		</main>
		<DarkModeToggle
			classname="btn btn-primary btn-circle btn-md my-4 sticky bottom-4 right-4 float-right"
		/>
		<Footer />
	</div>
</html>

<style>
</style>
