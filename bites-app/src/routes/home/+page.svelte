<script>
	import { goto } from '$app/navigation';

	var img1 =
		'https://media.istockphoto.com/id/1139800938/vector/stock-icon-on-white-background-flat-style-financial-market-crash-icon-for-your-web-site.jpg?s=612x612&w=0&k=20&c=ESZIEXtLpygjBHkQzBsDGV7W_N43Ba_mRGxaDEM3QMA=';
	const onClickHandler = () => {
		goto('/modules');
	};
</script>

<div class="container">
	<h1>Brock Interactive Training for Engineering Students</h1>
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

	<!-- Button - Should bring you to the modules or something -->
	<button on:click="{onClickHandler}">Get Started</button>
</div>

<div class="container">
	<h1>Outline of Content</h1>
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

	<!-- Button - Should bring you to the modules or something -->
	<button on:click="{onClickHandler}">Go to Modules</button>
</div>

<style>
	h1 {
		font-size: 48px;
	}

	button {
		background-color: rgb(170, 0, 0);
		border-radius: 8px;
		padding: 16px;
	}

	.container {
		background-color: rgba(0, 0, 0, 0.2);
		border-radius: 16px;

		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		padding: 16px;
		margin: 16px auto;
		text-align: center;
	}

	.content {
		display: flex;
		justify-content: space-between; /* Divide the space evenly between items */
		width: 100%; /* Ensure content takes up full width of container */
		padding: 20px; /* Add padding for spacing */
	}

	.content p {
		flex: 1; /* Each item takes up equal space */
		text-align: left;
		margin: 0; /* Remove default margins */
	}

	.content img {
		flex: 1; /* Each item takes up equal space */
		max-width: 40%; /* Ensure image does not exceed container width */
		height: auto; /* Maintain aspect ratio */
		padding: 16px;
		margin-left: 20px; /* Adjust as needed */
	}
</style>
