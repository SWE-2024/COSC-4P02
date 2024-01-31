<script>
	import './styles.css';
	import Navbar from '../components/Navbar.svelte'
</script>

<div class="app">
	<Navbar/>
	<main>
		<slot />
	</main>
</div>

<style>

</style>
