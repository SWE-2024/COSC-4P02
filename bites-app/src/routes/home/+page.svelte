<script>
	import { goto } from '$app/navigation';
	import { themeStore } from '$lib/stores/themeStore';

	// values
	let libraryImg = 'https://live.staticflickr.com/3494/4078029168_df7d060636_z.jpg';
	let computerCommonsImg = 'https://brocku.ca/brock-news/wp-content/uploads/2020/09/image001.jpg';
	let moduleGif = '../../../src/assets/module.gif';

	const onClickHandler = () => {
		goto('/modules');
	};
</script>

<div class="container {$themeStore.isLight ? 'container-light' : 'container-dark'}">
	<div class="flex items-center justify-center">
		<div class="logo-container">
			<img src="src/assets/logo-sm.png" alt="Logo" class="logo w-32 h-auto transition-transform hover:scale-105" />
		</div>
	</div>

	<h1 class="text-xl sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center my-2 sm:my-3 md:my-4 lg:my-5">
		Brock Interactive Training for Engineering Students
	</h1>

	<div class="content flex justify-between w-full p-5">
		<p class="text-base md:text-base lg:text-lg">
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

		<img src="{libraryImg}" alt="Library" />
	</div>
</div>

<div class="container {$themeStore.isLight ? 'container-light' : 'container-dark'}">
	<h1 class="text-xl sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center my-2 sm:my-3 md:my-4 lg:my-5">Outline of Content</h1>

	<div class="content flex justify-between w-full p-5">
		<img
			src="{moduleGif}"
			alt="Fishbowl"
			class="w-2/5 h-auto p-4 transition-transform hover:scale-105"
		/>
		<div class="flex-1 text-center">
			<p class="text-base md:text-base lg:text-lg leading-relaxed">
				i. Software Processes <br /><br />
				ii. Requirements Engineering <br /><br />
				iii. Systems Modeling <br /><br />
				iv. Software Architectural Design <br /><br />
				v. Implementation Methods <br /><br />
				vi. Software Testing <br /><br />
				vii. Software Evolution
			</p>
		</div>
	</div>
	<!-- Button - Should bring you to the modules or something -->
	<button class="btn btn-primary m-6" on:click="{onClickHandler}">Go to Modules</button>
</div>

<style>

	button {
		font-size: 16px;
	}

	.container-light {
		background-color: rgba(250, 250, 250, 0.55);
	}

	.container-dark {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.container {
		border-radius: 16px;
		border-bottom: 1px solid red;

		display: flex;
		flex-direction: column;
		align-items: center;
		width: 80%;
		padding: 16px;
		margin: 16px auto;
		/* text-align: center; */
	}

	.content {
		display: flex;
		align-items: center; /* Vertical alignment; Helps make the images stay to their natural aspect ratio */
		justify-content: center;
	}

	.content p {
		flex: 1;
		padding: 16px;
	}

	.content img {
		max-width: 40%; /* Ensure image does not exceed container width */
		height: auto; /* Maintain aspect ratio */

		padding: 16px;
		transition: 0.2 ease-in-out;
	}
</style>
