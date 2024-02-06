<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let selectedIndex: number;

    function changeSelectedModule(index: number) {
        selectedIndex=index;
        dispatch('index', selectedIndex);
    }

    let modules = ["Intro","UML","Testing","Observability","Maintenance",7,8,9,10,11,12,13,14];

    function getModules() {
        return modules.map(module => module).flat()
    }

</script>


<div class="container">
    <div class="course-header">
        <h3>Software Engineering</h3>
        <p>{modules.length} Modules</p>
    </div>
    <div class="module-container">
        {#each getModules() as module,index}
        <button class="module-card" class:selected={selectedIndex==index+1} on:click={() => changeSelectedModule(index+1)}>
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

  /* ===== Scrollbar CSS ends ===== */
    .container{
        width:20%;
        border-right: 3px rgba(86, 86, 86, 0.534) solid;
    }
   
    h3, h4{
        padding:0;
        margin:0;
    }

    p{
        padding:0;
        margin:0;
        opacity: 0.7;
        font-size: 0.75rem;
    }

    .course-header{
        padding: 1rem 1rem 1rem 1rem;
        border-bottom:1px rgb(67, 67, 67) solid;
        border-radius: 5px;
        background-color: #646cff;
        margin-bottom:0.5rem;
        margin-right:0.25rem;
    }


    .module-container{    
        max-height: 80vh;
        overflow-y: scroll;
        padding:0rem 0.5rem 0rem 0rem;
        margin-left: 0.25rem;
        border-radius: 5px;
    }

    .module-card{
        padding:1rem 1rem 1rem 0.45rem;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        border:#646cff;
        width: 100%;
        border-bottom: 2px solid  rgb(46, 46, 46);
    }

    .module-card:hover{
        border-left: 3px solid #646cff;
    }

    .selected{
        border-left: 3px solid #646cff;
        background-color: rgb(46, 46, 46);
        border-radius: 0 10px 10px 0px;
    }
    

    .checkmark{
        width: 30px;
        aspect-ratio: 1/1;
    }

</style>
