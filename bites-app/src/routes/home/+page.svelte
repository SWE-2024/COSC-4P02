<script>
	import { goto } from '$app/navigation';
	import { themeStore } from '$lib/stores/themeStore';

	// values
	let libraryImg = 'https://live.staticflickr.com/3494/4078029168_df7d060636_z.jpg';
	// let computerCommonsImg = 'https://brocku.ca/brock-news/wp-content/uploads/2020/09/image001.jpg';
	let moduleGif =
		'https://firebasestorage.googleapis.com/v0/b/bites-login.appspot.com/o/module.gif?alt=media&token=9a90ad18-193d-4285-a648-66ff6d35a071';

	const onClickHandler = () => {
		goto('/modules');
	};
</script>
<div class="w-full flex flex-col items-center mt-4">
	<div class="container rounded-box {$themeStore.isLight ? 'container-light' : 'container-dark'}">
		<div class="flex items-center justify-center">
			<div class="logo-container">
				<img
					src="https://firebasestorage.googleapis.com/v0/b/bites-login.appspot.com/o/logo-sm.png?alt=media&token=cd6cbb82-3923-4c04-9f4f-a2e8dfcfbb3f"
					alt="Logo"
					class="logo w-32 h-auto transition-transform hover:scale-105"
				/>
			</div>
		</div>

		<h1
			class="text-xl sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center my-2 sm:my-3 md:my-4 lg:my-5"
		>
			Brock Interactive Training for Engineering Students
		</h1>

		<div class="flex justify-between w-full p-5">
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

			<img class="show-only-on-desktop w-1/2" src="{libraryImg}" alt="Library" />
		</div>
	</div>

	<div class="divider"></div>

	<div class="container rounded-box {$themeStore.isLight ? 'container-light' : 'container-dark'}">
		<h1
			class="text-xl sm:text-xl md:text-2xl lg:text-4xl font-semibold text-center my-2 sm:my-3 md:my-4 lg:my-5"
		>
			Outline of Content
		</h1>
		<div class="content flex justify-between w-full p-5 flex-col md:flex-row">
			<img
				src="{moduleGif}"
				alt="Fishbowl"
				class="w-full md:w-1/2 h-auto p-4 transition-transform hover:scale-105"
			/>
			<div class="flex-1 text-center">
				<p class="text-lg leading-relaxed">
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
		<div class="text-center">
			<button class="btn btn-primary m-2 content-center" on:click="{onClickHandler}">Go to Modules</button>
		</div>
	</div>
	<div class="divider"></div>
</div>
