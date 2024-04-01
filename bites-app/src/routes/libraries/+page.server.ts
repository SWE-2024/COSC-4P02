import type { Load } from "@sveltejs/kit"

let libraryIndex = {
	findingResources: [
		{
			title: "Wikipedia", 
			description: "The free online encyclopedia", 
			link: "https://en.wikipedia.org/wiki/Software_engineering"
		},
		{
			title: "Library Genesis", 
			description: "Library Genesis", 
			link: "https://libgen.is/"
		},
		{
			title: "Google", 
			description: "The software engineer's best friend", 
			link: "https://www.google.com/search?q=resources+for+learning+software+engineering",
		},
	],
	furtherResources: [
		{
			title: "Engineering Resources", 
			description: "Giant list of resources for several kinds of engineering students.", 
			link: "https://github.com/aaryan2134/Engineering-Resources"
		},
		{
			title: "Professional Programming", 
			description: "Another huge list of engineering resources.", 
			link: "https://github.com/charlax/professional-programming"
		},
		{
			title: "Awesome Systems Engineering", 
			description: "Resources of examples of systems engineering.", 
			link: "https://github.com/kktse/awesome-systems-engineering"
		},
		{
			title: "Awesome Software Architecture", 
			description: "Resources on software architecture and design patterns.", 
			link: "https://github.com/mehdihadeli/awesome-software-architecture"
		},
	],
	agile: [
		{
			title: "Awesome Agile", 
			description: "List of resources related to the agile method.", 
			link: "https://github.com/lorabv/awesome-agile"
		},
		{
			title: "Challenges of an Agile Workforce: Adopting an Agile Mindset", 
			description: "Article that explaines why the agile method even exists and what problems it tries to solve.", 
			link: "https://www.linkedin.com/pulse/challenges-agile-workforce-adopting-mindset-chris-gagn%25C3%25A9/"
		},
	],
	incremental: [
		{
			title: "Incremental Development", 
			description: "Guide for learning incremental development in the context of the agile method.", 
			link: "https://github.com/HackYourFutureBelgium/incremental-development"
		},
	],
	scrum: [
		{
			title: "Learn Scrum", 
			description: "Starting point for learning scrum, a popular flavor of the agile method.", 
			link: "https://github.com/imalitavakoli/learn-scrum"
		},
	],
	testing: [
		{
			title: "Testing strategies in a microservices architecture", 
			description: "In depth guide on how to test a service.", 
			link: "https://martinfowler.com/articles/microservice-testing/"
		},
		{
			title: "Intro To PyTest", 
			description: "Tutorial on the Python testing framework PyTest.", 
			link: "https://github.com/pluralsight/intro-to-pytest"
		},
		{
			title: "Web Automation Tutorial", 
			description: "Tutorial on the basics of automating testing on websites with tools like Selenium.", 
			link: "https://github.com/Anshul-Sonpure/WebAutomation_Tutorial"
		},
	],
	jobSearch: [
		{
			title: "How to Win the Coding Interview", 
			description: "An interview question example from the perspective of an interviewer.", 
			link: "https://medium.com/on-writing-code/how-to-win-the-coding-interview-71ae7102d685"
		},
		{
			title: "Red Flags on Your Resume", 
			description: "Tips on how to write a better resume.", 
			link: "https://danicfilip.com/2020/red-flags-on-your-resume/"
		},
		{
			title: "Front End Interview Questions", 
			description: "Quiz to test your knowledge on the front-end and agile method.", 
			link: "https://github.com/rradfar/front-end-interview-questions"
		},
	],
	tools: [
		{
			title: "Learn SQL", 
			description: "Tutorial on learning SQL.", 
			link: "https://github.com/WebDevSimplified/Learn-SQL"
		},
		{
			title: "Git Good: Common Commands", 
			description: "Summary of the dozen git commands you will use 99% of the time.", 
			link: "https://www.youtube.com/watch?v=b4zp02iULYY"
		},
		{
			title: "Docker - Beginners | Intermediate | Advanced", 
			description: "Tutorials on learning Docker for running packages in environments so they don't conflict with the packages already on your OS.", 
			link: "https://github.com/collabnix/dockerlabs"
		},
		{
			title: "Jenkins Tutorial", 
			description: "Tutorial on Jenkins for automating the entire process of building, testing and deploying your software.", 
			link: "https://github.com/ssbostan/jenkins-tutorial"
		},
	],
	architectures: [
		{
			title: "MVC Game Design", 
			description: "Fun and intuitive introduction to the Model-View-Controller architecture using Pygame.", 
			link: "https://github.com/wesleywerner/mvc-game-design",
		},
	]
}

export const load: Load = () => ({
	props: {
		libraryIndex: libraryIndex,
	}
})