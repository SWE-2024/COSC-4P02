<script>
    import checkmark from '$lib/images/checkmark.svg';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let selectedIndex;

    function changeSelectedModule(index) {
        selectedIndex=index;
        dispatch('index', selectedIndex);
    }

    let modules = ["Intro","UML","Testing","Observability","Maintenance","Agile Methodologies","Agile - Scrum"];
</script>


<div class="container">
    <div class="course-header">
        <h2>Software Engineering</h2>
    </div>
    <div class="module-container">
        {#each modules as module}
        <button class="module-card" class:selected={selectedIndex==module} on:click={() => changeSelectedModule(module)}>
            <div >
                <h4>{module}</h4>
                <p> {module} description</p>
            </div>
           
        </button>
        {/each}
       
    </div>
</div>


<style>

/* ===== Scrollbar CSS ===== */
  


    
/* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #646cff #646cff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: lightsteelblue;
    border-radius: 10px;
    border: 3px solid lightsteelblue;
  }

    .container{
        width:20%;
        border-right: 3px rgba(86, 86, 86, 0.534) solid;
    }
   

    h2, h4{
        padding:0;
        margin:0;
    }

    h2{
        margin:0rem 0rem 1rem 0rem;
    }

    p{
        padding:0;
        margin:0;
        opacity: 0.7;
        font-size: 0.75rem;
    }

    .course-header{
        padding-right: 3rem;
       
    }

    .module-container{
        
        max-height: 80vh;
        overflow-y: scroll;
        box-shadow: inset 0px 15px 27px -21px #181818a3;
        padding:0rem 0rem 0rem 0.5rem;
        border-radius: 5px;
    }

    .module-card{
        padding:1rem 1rem 1rem 5px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        border:#646cff;
        width: 100%;
    }

    .module-card:hover{
        border-left: 3px solid #646cff;
    }

    .selected{
        border-left: 3px solid #646cff;
        background-color: rgb(46, 46, 46);
    }
    

    .checkmark{
        width: 30px;
        aspect-ratio: 1/1;
    }

</style>
