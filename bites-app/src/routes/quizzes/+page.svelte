<!-- Quiz.svelte -->
<script>
    let questions = [
      { question: 'Click a button to begin the test:', options: ['answer', 'answer', 'answer', 'answer'], correctAnswer: 'Paris' },
      { question: 'Which planet is known as the Red Planet?', options: ['Earth', 'Mars', 'Jupiter', 'Venus'], correctAnswer: 'Mars' },
    ];
  
    let currentQuestion = 0;
    let selectedOption = '';
    let score = 0;
  
    function checkAnswer() {
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        score++;
      }
  
      if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        selectedOption = '';
      } else {
        alert(`Quiz completed! Your score is ${score}/${questions.length}`);
      }
    }
</script>

<style>
  main {
    display: flex;
    flex-direction: column; /* Changed to column layout */
    min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
    padding-bottom: 50px; /* Adjusted padding for spacing at the bottom */
    position: relative; /* Relative positioning for absolute positioning of the menu */
  }

  section {
    margin: 20px 50px; /* Adjusted margin */
    text-align: left;
  }

  h1 {
    text-align: left;
    color: black;
    margin-bottom: 0.5%;
  }

  ul {
    list-style-type: none;
    padding: 0;
    }

  li {
    margin-bottom: 10px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.8);
  }

  li.selected {
    background-color: #3498db;
    color: white;
  }
</style>

<main>
  <section>
    {#if currentQuestion < questions.length}
      <h1>{questions[currentQuestion].question}</h1>
      <ul>
        {#each questions[currentQuestion].options as option}
          <li on:click={() => selectedOption = option} class:selected={selectedOption === option}>{option}</li>
        {/each}
      </ul>
      <button on:click={checkAnswer} disabled={!selectedOption}>Next</button>
    {:else}
      <p>The quiz is completed!</p>
    {/if}
  </section>

</main>
