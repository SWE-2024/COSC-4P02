<script>
  const onClickHandler = () => {
    console.log('hello world')
  }
</script>

<main>
  <ul class='navbar'>
    <li><a href="./">Home</a></li>
    <li><a href="./modules">Modules</a></li>
    <li><a href="./quizzes">Quizzes</a></li>
    <li><a href="./libraries">Libraries</a></li>
    <button on:click={onClickHandler}>Log in</button>
  </ul>
</main>

<style>
  .navbar {
    list-style-type: none;
    align: left;
    background-color: aliceblue;
    padding: 4px;
    border-radius: 10px;
  }
  li {
    display: inline;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: inherit;
    padding-bottom: inherit;
    border-radius: 10px;
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
  }
</style>
