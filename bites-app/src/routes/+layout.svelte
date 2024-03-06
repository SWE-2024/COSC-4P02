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

	// wait for DOM mount then set authStore
	if (browser) {
		onMount(() => {
			console.log('Mounted DOM');
			onAuthStateChanged(auth, async (user) => {
				$authStore = {
					isLoggedIn: user != null,
					user
				};
			});
		});
	}
</script>

<div class="app bg-gradient-to-r from-base-100 from-70% to-base-200">
	<Navbar />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.app {
	  background-color: rgba(0, 0, 0, 0.8);
	  background-image: url('https://www.ouinfo.ca/assets/files/images/1.jpg');
	  background-size: cover;
	  background-position: center;
	  opacity: 1;
	}
  </style>
