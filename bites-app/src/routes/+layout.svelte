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
	import { authLoading, authStore } from '$lib/stores/authStore';
	import DarkModeToggle from '../components/DarkModeToggle.svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import AccessibilityMenu from '../components/AccessibilityMenu.svelte';
	import { invalidateAll } from '$app/navigation';

	// wait for DOM mount then set authStore
	if (browser) {
		onMount(() => {
			onAuthStateChanged(auth, async (user) => {
				authStore.set({
					isLoggedIn: user != null,
					user
				});
				authLoading.set(false);
			});
		});
	}
</script>

<html lang="en" data-theme="{$themeStore.theme}">
	<div class="bg-[url('https://www.ouinfo.ca/assets/files/images/1.jpg')]">
		<div
			class="app {$themeStore.theme == 'light'
				? 'background-gradient-light'
				: 'background-gradient-dark'}"
		>
			<div class="">
				<Navbar />
				<main>
					<slot />
				</main>
				<div class="join join-vertical sticky float-right bottom-4 right-4 my-4">
					<DarkModeToggle classname="btn btn-primary btn-circle btn-md" />
					<AccessibilityMenu />
				</div>
			</div>
			<Footer />
		</div>
	</div>
</html>

<style>
	.background-gradient-light {
		background-color: rgba(256, 256, 256, 0.6);
	}
	.background-gradient-dark {
		background-color: rgba(0, 0, 0, 0.94);
	}
</style>
