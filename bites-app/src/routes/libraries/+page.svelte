<svelte:head>
	<title>Libraries</title>
	<meta name="description" content="Index of Resources" />
</svelte:head>

<script>
	let columns = ["Name", "Description", "Site"]
	let data = [
    ["Wikipedia", 
	"The free online encyclopedia", 
	"https://en.wikipedia.org/wiki/Software_engineering"],

    ["Library Genesis", 
	"Library with many free books", 
	"https://libgen.is/"],

    ["Google", "The software engineer's best friend", 
	"https://www.google.com/search?q=resources+for+learning+software+engineering"],

	["Engineering Resources",
	"Giant list of resources for several kinds of engineering students.",
	"https://github.com/aaryan2134/Engineering-Resources"],

	["Professional Programming",
	"Another huge list of engineering resources.",
	"https://github.com/charlax/professional-programming"],

	["Awesome Agile", 
	"List of resources related to the agile method.", 
	"https://github.com/lorabv/awesome-agile"],

	["Challenges of an Agile Workforce: Adopting an Agile Mindset",
	"Article that explaines why the agile method even exists and what problems it tries to solve.",
	"https://www.linkedin.com/pulse/challenges-agile-workforce-adopting-mindset-chris-gagn%25C3%25A9/"],

	["Incremental Development", 
	"Guide for learning incremental development in the context of the agile method.", 
	"https://github.com/HackYourFutureBelgium/incremental-development"],

	["Learn Scrum", 
	"Starting point for learning scrum, a popular flavor of the agile method.", 
	"https://github.com/imalitavakoli/learn-scrum"],

	["Awesome Systems Engineering",
	"Resources of examples of systems engineering.",
	"https://github.com/kktse/awesome-systems-engineering"],

	["Awesome Software Architecture", 
	"Resources on software architecture and design patterns.", 
	"https://github.com/mehdihadeli/awesome-software-architecture"],

	["Testing strategies in a microservices architecture", 
	"In depth guide on how to test a service.", 
	"https://martinfowler.com/articles/microservice-testing/"],

	["Intro To PyTest", 
	"Tutorial on the Python testing framework PyTest.", 
	"https://github.com/pluralsight/intro-to-pytest"],

	["Web Automation Tutorial", 
	"Tutorial on the basics of automating testing on websites with tools like Selenium.", 
	"https://github.com/Anshul-Sonpure/WebAutomation_Tutorial"],

	["Learn SQL", 
	"Tutorial on learning SQL.", 
	"https://github.com/WebDevSimplified/Learn-SQL"],

	["Git Good: Common Commands", 
	"Summary of the dozen git commands you will use 99% of the time.", 
	"https://www.youtube.com/watch?v=b4zp02iULYY"],

	["Docker - Beginners | Intermediate | Advanced", 
	"Tutorials on learning Docker for running packages in environments so they don't conflict with the packages already on your OS.", 
	"https://github.com/collabnix/dockerlabs"],

	["Jenkins Tutorial", 
	"Tutorial on Jenkins for automating the entire process of building, testing and deploying your software.", 
	"https://github.com/ssbostan/jenkins-tutorial"],

	["How to Win the Coding Interview", 
	"An interview question example from the perspective of an interviewer.", 
	"https://medium.com/on-writing-code/how-to-win-the-coding-interview-71ae7102d685"],

	["Red Flags on Your Resume",
	"Tips on how to write a better resume.",
	"https://danicfilip.com/2020/red-flags-on-your-resume/"],

	["Front End Interview Questions", 
	"Quiz to test your knowledge on the front-end and agile method.", 
	"https://github.com/rradfar/front-end-interview-questions"],
  ]
</script>

<table class="library">
	<tr>
		{#each columns as column}
			<th>{column}</th>
		{/each}
	</tr>
	
	{#each data as row}
		<tr>
			<!--
			{#each row as cell}
			<td contenteditable="false" bind:innerHTML={cell} />
			{/each}
			-->
			<td contenteditable="false" bind:innerHTML={row[0]} />
			<td contenteditable="false" bind:innerHTML={row[1]} />
			<a href={row[2]} target=”_blank” rel="noopener noreferrer" contenteditable="false" bind:innerHTML={row[2]} />
		</tr>
	{/each}
</table>

<style>
	.library {
		margin: 1% 0 2% 5%;
		width: 90%;
		background-color: aliceblue;
		color: black;
		padding: 0 0 0 0;
		border-radius: 5pt;
	}
	th, td {
		padding: 5px;
	}
</style>