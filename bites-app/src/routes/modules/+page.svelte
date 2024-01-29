<script>
	import Content from './Content.svelte'
	import Sidebar from './Sidebar.svelte'

	let selectedIndex = 1;


</script>

<svelte:head>
	<title>Modules</title>
	<meta name="description" content="Read the modules" />
</svelte:head>

<section>
		<Sidebar bind:selectedIndex/>
		<Content bind:selectedIndex/>
	
</section>


<style>

	section{
		margin-top: 1rem;
		width: 95vw;
		height: 90vh;
		overflow-y: hidden;
		margin-inline: auto;
		display: flex;

	}
</style>