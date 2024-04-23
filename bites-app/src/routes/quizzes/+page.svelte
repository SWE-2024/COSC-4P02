<!-- Quiz.svelte -->
<script lang="ts">
	import { authStore } from '$lib/stores/authStore';
	import { onMount } from 'svelte';
	import importQuestions from './question.json';
	import { setDoc, addDoc, collection, where, onSnapshot, doc } from 'firebase/firestore';
	import * as fire from '../../lib/firebase/firebase.client';

	let quizComplete: boolean = false;
	let score = 0;
	let questions: any = [];

	selectQuestions();

	let leaderBoardData: any = [];

	const db = fire.db;
	const quizLeaderBoard = collection(db, 'quizLeaderBoard');

	let previousUserScore: number | undefined;
	let previousScoreID: string = '';

	onMount(() => {
		onSnapshot(quizLeaderBoard, (snapshot) => {
			let data = snapshot.docs;
			leaderBoardData = [];
			for (let i = 0; i < data.length; i++) {
				let score = data[i].data();
				if ($authStore.isLoggedIn && $authStore.user?.uid == score.user_id) {
					previousUserScore = score.score;
					previousScoreID = data[i].id;
				}
				leaderBoardData.push(data[i].data());
			}
			// console.log(previousUserScore);
			// console.log(previousScoreID);
			leaderBoardData.sort((a: any, b: any) => b.score - a.score);
		});
	});

	function selectQuestions() {
		let selIndex: number[] = [];
		do {
			const randomNumber = Math.floor(Math.random() * 55) + 1;
			if (selIndex.includes(randomNumber)) {
				continue;
			} else {
				questions.push(importQuestions[randomNumber]);
				selIndex.push(randomNumber);
				// console.log(importQuestions[randomNumber].answer + 1);
			}
		} while (questions.length < 10);
	}

	async function submitQuiz() {
		for (let i = 0; i < questions.length; i++) {
			if (questions[i].answer == questions[i].selectedOption) {
				score += 1;
			}
		}

		let leaderBoardEntry = {
			score: score,
			user_photo: $authStore.user?.photoURL,
			user_id: $authStore.user?.uid,
			user_name: $authStore.user?.displayName
		};

		if (previousUserScore) {
			if (leaderBoardEntry.score > previousUserScore) {
				const docRef = doc(db, 'quizLeaderBoard', previousScoreID);
				let res = await setDoc(docRef, leaderBoardEntry);
				// console.log(res);
			}
		} else {
			let res = await addDoc(quizLeaderBoard, leaderBoardEntry);
			// console.log(res);
		}
		quizComplete = true;
		window.scrollTo(0, 0);
	}

	function selectAnswer(questionIndex: number, answerIndex: number) {
		questions[questionIndex].selectedOption = answerIndex;
		//console.log(questions);
	}

	function toggleLeaderboard() {
		quizComplete = !quizComplete;
	}
</script>

<div class="w-11/12 m-2 p-2 rounded-box h-[80vh] main">
	{#if $authStore.isLoggedIn}
		<div class="header">
			<h1 class="text-2xl font-bold h1">QUIZ CENTER</h1>
			<button class="red btn btn-primary" on:click="{() => {toggleLeaderboard();}}">Toggle Leaderboard</button>
		</div>
		<hr class="border-b-accent">

		{#if !quizComplete}
			<div>
				{#each questions as q, questionIndex}
					<div class="mt-7 rounded-md bg-base-300 p-6 border-b-accent">
						<div class="question-header">
							<div class="questionIndex">
								{questionIndex + 1}
							</div>
							<p class="question">{q.question}</p>
						</div>
						<!-- Displays each individual answer/option -->
						<ul>
							{#each q.options as option, answerIndex}
								<li on:click="{() => selectAnswer(questionIndex, answerIndex)}" class:selected="{q.selectedOption == answerIndex}">
									{option}
								</li>
							{/each}
						</ul>
					</div>
				{/each}

				<button class="red btn btn-primary text-xl mt-6 submit" on:click="{() => submitQuiz()}">Submit</button>
			</div>
		{/if}
	{/if}

	{#if !$authStore.isLoggedIn}
		<div class="grid grid-col-1 grid-rows=1 place-items-center w-full h-full">
			<div class="flex flex-col items-center">
				<h2 class="text-3xl font-bold">Please log in to see modules</h2>
			</div>
		</div>
	{/if}

	{#if quizComplete}
		<div class="auto-page">
			<div class="text-2xl">
				<span class="font-semibold">Current Score</span>: {score}
			</div>

			<table class="table table-xl bg-base-300 container place-self-center mx-auto mt-4 mb-4">
				<thead>
					<tr class="text-2xl">
						<th>Student Name</th>
						<th>Score</th>
					</tr>
				</thead>
				<tbody>
					{#each leaderBoardData as data}
						<tr class="hover:bg-base-200">
							<td contenteditable="false" class="text-xl user-name">
								<img src="{data.user_photo}" class="user-photo" />
								{data.user_name}
							</td>
							<td contenteditable="false"> <span class="text-xl"> {data.score} </span>/ 10</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>

<style>
	.h1 {
		text-align: left;
		/* margin-top: 2rem; */
		font-size: 1.5rem;
	}
	.main {
		height: calc(100% + 5rem);
		flex-direction: row;
		width: 85%;
		margin-inline: auto;
	}

	.main ul li:hover {
		background-color: rgba(255, 0, 0, 0.2);
		transition-duration: 0.1s;
	}

	.user-photo {
		width: 40px;
		aspect-ratio: 1/1;
		border-radius: 50%;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.user-name {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	section {
		margin-top: 20px;
		margin-left: 50px;
		text-align: left;
		flex-grow: 1;
	}

	.border-b-accent {
		border-bottom: 2px red solid;
		border-bottom-color: var(--fallback-a, oklch(var(--a) / var(--tw-border-opacity)));
	}

	.question-header {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.submit {
		margin-top: 2rem;
	}

	.questionIndex {
		width: 30px;
		height: 30px;
		background-color: red;
		display: flex;
		justify-content: center;
		border-radius: 50%;
		font-weight: 600;
		font-size: 1.25rem;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

	.auto-page {
		min-height: 100vh;
		height: min-content;
	}

	li {
		margin-bottom: 10px;
		cursor: pointer;
		padding: 10px;
		border: 1px solid #1c1c1c;
		border-radius: 5px;
	}

	.selected {
		background-color: rgba(255, 0, 0, 0.2);
		border: red solid 1px;
		color: white;
		transition: 0.1s ease-in-out;
		/* font-size: 1.15rem; */
	}

	button {
		/* margin-top: 10px; */
		padding: 10px;
		background-color: #2ecc71;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	button:disabled {
		background-color: #95a5a6;
		cursor: not-allowed;
	}

	hr {
		border: none;
		height: 2px;
		margin: 12px 0px 12px 0px;
	}

	/* For the buttons */
	.red {
		background-color: red;
		font-size: 16px;
	}

	.red:hover {
		background-color: rgba(255, 0, 0, 0.6);
		transition: 0.2s ease-in-out;
	}
</style>
