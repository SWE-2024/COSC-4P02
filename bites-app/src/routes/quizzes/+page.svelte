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

  function toggleLeaderboard(){
    quizComplete=!quizComplete
  }
</script>

<div class="w-11/12 m-2 p-2 rounded-box h-[80vh] main">
	{#if $authStore.isLoggedIn}
		{#if !quizComplete}
			<div class="header">
        <h1 class="text-2xl h1">Quiz Center</h1>
        <button class="red" on:click="{()=>{toggleLeaderboard()}}">Toggle LeaderBoard</button>
      </div>
      
      
			<div>
				{#each questions as q, questionIndex}
					<div class="mt-7 rounded-md bg-base-300 p-6 border-b-accent">
						<div class="question-header">
							<div class="questionIndex">
								{questionIndex + 1}
							</div>
							<p>{q.question}</p>
						</div>
						<ul>
							{#each q.options as option, answerIndex}
								<li
									on:click="{() => selectAnswer(questionIndex, answerIndex)}"
									class:selected="{q.selectedOption == answerIndex}"
								>
									{option}
								</li>
							{/each}
						</ul>
					</div>
				{/each}

				<button class="red text-xl mt-6 submit" on:click="{() => submitQuiz()}">Submit</button>
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
  <div class="header">
        <h1 class="text-2xl h1">Quiz Center</h1>
        <button class="red" on:click="{()=>{toggleLeaderboard()}}">Toggle Leaderboard</button>
      </div>
  <div class="auto-page">
    <div class="text-2xl">
      Current score : {score}
    </div>

		<table class="table table-xl bg-base-300 container place-self-center mx-auto mt-4 mb-4">
			<thead>
				<tr class="text-2xl">
					<th class="">Student Name</th>
          <th class="">Score</th>
				</tr>
			</thead>
			<tbody>
				{#each leaderBoardData as data}
					<tr class="hover:bg-base-200">
						<td contenteditable="false" class="text-xl user-name">
              <img src="{data.user_photo}" class="user-photo">
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
		margin-top: 2rem;
		font-size: 1.5rem;
	}
	.main {
		height:calc(100% + 5rem) ;
		flex-direction: row;
		width: 85%;
		margin-inline: auto;
	}

  .user-photo{
    width: 40px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  .header{
    display: flex;
    justify-content: space-between;
  }

  .user-name{
    display: flex;
    gap:1rem;
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

  .submit{
    margin-top: 2rem;

  }

	.questionIndex {
		width: 30px;
		height: 30px;
		background-color: red;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		font-weight: 600;
		font-size: 1.25rem;
	}

	ul {
		list-style-type: none;
		padding: 0;
	}

  .auto-page{
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
		background-color: red;
		color: white;
		font-size: 1.2rem;
	}

	button {
		margin-top: 10px;
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

  .red{
    background-color: red;
  }
</style>
