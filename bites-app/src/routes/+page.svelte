<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	var img1 =
		'https://media.istockphoto.com/id/1139800938/vector/stock-icon-on-white-background-flat-style-financial-market-crash-icon-for-your-web-site.jpg?s=612x612&w=0&k=20&c=ESZIEXtLpygjBHkQzBsDGV7W_N43Ba_mRGxaDEM3QMA=';

	const onClickHandler = () => {
		console.log('hello world');
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="container">
	<h1 class="header">Brock Interactive Training for Engineering Students</h1>
	<div class="content">
		<p>
			The field of software engineering has developed greatly in recent decades, and as such there
			is a growing need for supporting tools to assist students and educators in training new
			software engineers. User-friendly applications improve the process of education are a constant
			demand.<br /><br />
			In traditional educational settings, software engineering courses often face challenges in engaging
			students and providing an interactive and dynamic learning environment. Conventional methods may
			struggle to adapt to individual learning styles, making it difficult for students to grasp complex
			concepts effectively. Additionally, the availability of diverse learning resources and instant
			feedback on assessments is often limited, hindering the overall learning experience.<br /><br
			/>
			BITES aims to create an immersive and adaptive learning environment for software engineering and
			other related courses, enhancing student understanding and performance.
		</p>
		<img src="{img1}" alt="Training Program Image" />
	</div>

	<div class="text-center">
		<button class="btn btn-outline btn-accent" on:click="{onClickHandler}">Get Started</button>
	</div>
</div>

<div class="container">
	<h1 class="header">Outline of Content</h1>
	<div class="content">
		<img src="{img1}" alt="Training Program Image" />
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ducimus debitis aliquam
			perspiciatis error aspernatur itaque, neque cum delectus esse cupiditate incidunt iusto at
			maxime ex facere accusamus culpa? Libero.<br /><br />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatibus consequuntur possimus
			magnam mollitia totam ut. Ratione, aut obcaecati. Fugit provident autem necessitatibus sunt alias,
			nobis neque doloremque perspiciatis et?
		</p>
	</div>

	<div class="text-center">
		<button class="btn btn-outline btn-accent" on:click="{onClickHandler}">Go to Modules</button>
	</div>
</div>

<!-- Using tailwindcss -->
<style>
	.container {
		@apply bg-secondary rounded-box p-6 mx-auto my-6;
	}

	.header {
		@apply text-5xl text-center font-bold;
	}

	.content {
		@apply flex p-6;
	}

	.content img {
		@apply max-w-lg p-6;
	}
</style>
