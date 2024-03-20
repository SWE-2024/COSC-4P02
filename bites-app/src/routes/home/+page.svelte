<script>
	import { goto } from '$app/navigation';
	import { themeStore } from '$lib/stores/themeStore';

	let img1 = 'https://media.istockphoto.com/id/1139800938/vector/stock-icon-on-white-background-flat-style-financial-market-crash-icon-for-your-web-site.jpg?s=612x612&w=0&k=20&c=ESZIEXtLpygjBHkQzBsDGV7W_N43Ba_mRGxaDEM3QMA=';
	
	let libraryImg = 'https://live.staticflickr.com/3494/4078029168_df7d060636_z.jpg'	

	let computerCommonsImg = 'https://brocku.ca/brock-news/wp-content/uploads/2020/09/image001.jpg'

		const onClickHandler = () => {
		goto('/modules');
	};
</script>

<div class="container {$themeStore.isLight ? 'container-light' : 'container-dark'}">
    <div class="flex items-center justify-center mb-4"> 
        <div class="logo-container">
            <img src="src/assets/logo.png" alt="Logo" class="logo w-32 h-auto">
        </div>
    </div>
    <h1>Brock Interactive Training for Engineering Students</h1>
    <div class="flex justify-between w-full p-5">
        <p class="mr-4">
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

	<!-- Button - Should bring you to the modules or something -->
	<button class="btn btn-primary" on:click="{onClickHandler}">Get Started</button>
</div>

<div class="container {$themeStore.isLight ? 'container-light' : 'container-dark'}">
    <h1>Outline of Content</h1>
    <div class="content">
        <img src="{computerCommonsImg}" alt="Fishbowl" />
            <p>
                <br>
                Introduction Module <br><br>
                Software Processes <br><br>
                Requirements Engineering <br><br>
                Systems Modeling <br><br>
                Software Architectural Design <br><br>
                Implementation Methods <br><br>
                Software Testing <br><br>
                Software Evolution
            </p>  
    </div>

    <!-- Button - Should bring you to the modules or something -->
    <button class="btn btn-primary" on:click="{onClickHandler}">Go to Modules</button>
</div>

<style>
	h1 {
		font-size: 48px;
	}

	.container-light {
		background-color: rgba(250, 250, 250, 0.55);
	}

	.container-dark {
		background-color: rgba(0, 0, 0, 0.5);
	}

	.container {
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
