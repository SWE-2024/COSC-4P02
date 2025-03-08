<script lang="ts">
	// import './styles.css';
	import '../app.css';
	import 'tailwindcss/tailwind.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { onAuthStateChanged } from 'firebase/auth';
	import { auth } from '$lib/firebase/firebase.client';
	import { authLoading, authStore, isAdmin } from '$lib/stores/authStore';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import AccessibilityMenu from '$lib/components/AccessibilityMenu/AccessibilityMenu.svelte';

	// wait for DOM mount then set authStore
	if (browser) {
		onMount(() => {
			let admin: boolean;
			onAuthStateChanged(auth, async (user) => {
				try {
					admin = await isAdmin();
				} catch (e) {
					console.error(e);
				}
				authStore.set({
					isLoggedIn: user != null,
					user,
					admin: admin
				});
			});
			authLoading.set(false);
		});
	}
</script>

<html lang="en" data-theme="{$themeStore.theme}">
	<div class="background">
		<div
			class="app {$themeStore.isLight ? 'background-gradient-light' : 'background-gradient-dark'}"
		>
			<div class="">
				<Navbar />
				<main>
					<slot />
				</main>
				<div class="join join-vertical sticky float-right bottom-4 right-4 my-4">
					<DarkModeToggle classname="circle-button" />
					<AccessibilityMenu classname="circle-button" />
				</div>
			</div>
			<Footer />
		</div>
	</div>
</html>

<style>
	/* Background */
	.background {
		background-image: url('https://www.ouinfo.ca/assets/files/images/1.jpg');
		background-size: cover; /* Ensures the image covers the whole background */
		background-position: center; /* Centers the image */
		background-attachment: fixed;
	}

	.background-gradient-light {
		background-color: rgba(256, 256, 256, 0.6);
	}

	.background-gradient-dark {
		background-color: rgba(0, 0, 0, 0.6);
	}
</style>
