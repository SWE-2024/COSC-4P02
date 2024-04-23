<!-- Quiz.svelte -->
<script lang="ts">
	import { authLoading, authStore } from '$lib/stores/authStore';
	import { onMount } from 'svelte';
	import importQuestions from './question.json';
	import { setDoc, addDoc, collection, where, onSnapshot, doc } from 'firebase/firestore';
	import * as fire from '../../lib/firebase/firebase.client';

	let viewLeaderboard: boolean = false;
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
		viewLeaderboard = true;
		window.scrollTo(0, 0);
	}

	function selectAnswer(questionIndex: number, answerIndex: number) {
		questions[questionIndex].selectedOption = answerIndex;
		//console.log(questions);
	}

	function toggleLeaderboard() {
		viewLeaderboard = !viewLeaderboard;
	}
</script>

<div class="m-2 main">
	{#if $authStore.isLoggedIn}
		<div class="flex justify-between">
			<h1 class="header">QUIZ CENTER</h1>
			<button
				class="btn btn-primary"
				on:click="{() => {
					toggleLeaderboard();
				}}">Toggle Leaderboard</button
			>
		</div>
		<div class="divider divide-primary"></div>

		<div
			class="flex flex-col items-center rounded-md
			"
		>
			{#each questions as q, questionIndex}
				<div class="card mt-8 bg-neutral p-4 w-11/12 max-w-6xl">
					<div class="card-title">
						<div class="badge text-nowrap content-center badge-primary h-8 m-2">
							<p class="lg:text-lg md:text-md">Question {questionIndex + 1}</p>
						</div>
					</div>
					<p class="ms-4 content-center text-neutral-content">{q.question}</p>
					<!-- Displays each individual answer/option -->
					<div class="card-body">
						{#each q.options as option, answerIndex}
							<button
								class="btn"
								on:click="{() => selectAnswer(questionIndex, answerIndex)}"
								class:selected="{q.selectedOption == answerIndex}"
							>
								{option}
							</button>
						{/each}
					</div>
				</div>
			{/each}

			<button class="btn btn-accent w-1/2 min-w-fit max-w-6xl my-8" on:click="{() => submitQuiz()}"
				>Submit</button
			>
		</div>
	{/if}

	{#if $authLoading}
		<div class="grid grid-col-1 grid-rows=1 place-items-center w-full h-full">
			<div class="flex flex-col items-center">
				<h2 class="text-3xl font-bold">
					<span class="loading loading-lg"></span>
					<h2 class="text-2xl">Loading page. Please wait.</h2>
				</h2>
			</div>
		</div>
	{:else if !$authStore.isLoggedIn}
		<div class="flex justify-center">
			<h1 class="text-2xl">Please Log in to view quizzes.</h1>
		</div>
	{/if}
</div>

<dialog class="modal" class:modal-open="{viewLeaderboard}">
	<div class="modal-box w-11/12 max-w-4xl">
		<button
			on:click="{toggleLeaderboard}"
			class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
		>

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
	</div>
</dialog>

<style>
	.header {
		@apply font-bold text-2xl content-center;
	}
	.main {
		flex-direction: row;
		width: 85%;
		margin-inline: auto;
	}

	.user-photo {
		width: 40px;
		aspect-ratio: 1/1;
		border-radius: 50%;
	}

	.user-name {
		display: flex;
		gap: 1rem;
		align-items: center;
	}

	.border-b-accent {
		border-bottom: 2px solid;
		border-bottom-color: var(--fallback-a, oklch(var(--a) / var(--tw-border-opacity)));
	}

	.question-header {
		display: flex;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.questionIndex {
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		border-radius: 50%;
		font-weight: 600;
		font-size: 1.25rem;
	}

	/* ul {
		list-style-type: none;
		padding: 0;
	} */

	.selected {
		background-color: rgba(255, 0, 0, 0.2);
		border: solid 1px;
		color: white;
		transition: 0.1s ease-in-out;
		/* font-size: 1.15rem; */
	}

	/* For the buttons */
</style>
