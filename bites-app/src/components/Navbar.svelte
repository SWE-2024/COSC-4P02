<script>
	import LoginButton from './LoginButton.svelte';
</script>

<nav>
	<ul class="navbar">
		<a href="./home" class="btn btn-ghost text-lg">Home</a>
		<a href="./modules" class="btn btn-ghost text-lg">Modules</a>
		<a href="./quizzes" class="btn btn-ghost text-lg">Quizzes</a>
		<a href="./libraries" class="btn btn-ghost text-lg">Libraries</a>
		<LoginButton />
	</ul>
</nav>

<!-- <div class="navbar">
	<div class="flex-1">
		<a href="./home" class="btn btn-ghost text-lg">Home</a>
		<a href="./modules" class="btn btn-ghost text-lg">Modules</a>
		<a href="./quizzes" class="btn btn-ghost text-lg">Quizzes</a>
		<a href="./libraries" class="btn btn-ghost text-lg">Libraries</a>
		<div class="right"><LoginButton /></div>
	</div>
</div> -->

<style>
	.navbar {
		list-style-type: none;
		background-color: aliceblue;
		padding: 0.25rem;
		border-radius: 10px;
		width: 35vw;
		max-width: 500px;
		margin-inline: auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	li {
		display: inline;
		border-radius: 10px;
		padding: 0.5rem 1rem;
	}
	a {
		color: black;
		text-decoration: inherit;
		font-weight: 500;
	}
	a:hover {
		color: black;
	}
	li:hover {
		background-color: lightsteelblue;
	}
	button {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: border-color 0.25s;
	}

	button:hover {
		border-color: #646cff;
	}

	button:focus,
	button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}
</style>
