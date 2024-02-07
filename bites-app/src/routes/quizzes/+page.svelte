<!-- Quiz.svelte -->
<script>
    let questions = [
      { question: 'Test?', options: ['answer', 'answer', 'answer', 'answer'], correctAnswer: 'Paris' },
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
    height: 100vh; 
    flex-direction: row; 
  }

  section {   
    margin-top: 20px; 
    margin-left: 50px; 
    text-align: left; 
    flex-grow: 1; 
  }

  h1 {
    text-align: left;
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
  }

  li.selected {
    background-color: #3498db;
    color: white;
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
