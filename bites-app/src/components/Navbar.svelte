<script>
    const onClickHandler = () => {
      console.log('hello world')
    }
</script>
  
<nav>
     <ul class='navbar'>
        <li><a href="./">Home</a></li>
        <li><a href="./modules">Modules</a></li>
        <li><a href="./quizzes">Quizzes</a></li>
        <li><a href="./libraries">Libraries</a></li>
     <button on:click={onClickHandler}>Log in</button>
     </ul>
</nav>
  
<style>
    .navbar {
      list-style-type: none;
      align: left;
      background-color: aliceblue;
      padding: 0.25rem;
      border-radius: 10px;
      width: 35vw;
      max-width: 500px;
      margin-inline:auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

    }
    li {
      display: inline;
      border-radius: 10px;
      padding:0.5rem 1rem;
    }
    a {
      color: black;
      text-decoration: inherit;
      font-weight: 500;
    }
    a:hover {
      color: black;
    }
    li:hover {
      background-color: lightsteelblue;
    }

    
  button {
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #1a1a1a;
	cursor: pointer;
	transition: border-color 0.25s;
    
  }

  button:hover {
	border-color: #646cff;
  }

  button:focus,
  button:focus-visible {
	outline: 4px auto -webkit-focus-ring-color;
  }
   

</style>