<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import arrowImage from '../../assets/arrow.png';    

    const dispatch = createEventDispatcher();

    export let selectedIndex: number;

    export let selectedItem:string;

    function changeSelectedModule(index: number) {
        selectedIndex=index;
        dispatch('index', selectedIndex);
    }

    function changeSelectedItemNumber(item:string,index:number){
        selectedItem=item;
        changeSelectedModule(index)
    }

    function openModule(index:number){
        //modules[index].module_open = !modules[index].module_open
        let mods = modules
        mods[index].module_open = !mods[index].module_open
        modules = [...mods];
    }

    let modules = [
        {
            "module_name":"Intro",
            "module_description":"Intro Module",
            "modules_content":["Item1","Item2"],
            "module_open":false,
            "index":0
        },
        {
            "module_name":"UML",
            "module_description":"UML Module",
            "modules_content":["Item1"],
            "module_open":false,
            "index":1
        },{
            "module_name":"Testing",
            "module_description":"Testing Module",
            "modules_content":["Item1","Item2"],
            "module_open":false,
            "index":2
        },{
            "module_name":"Observability",
            "module_description":"Observability Module",
            "modules_content":["Item1","Item2","Item3"],
            "module_open":false,
            "index":3
        },{
            "module_name":"Maintenance",
            "module_description":"Maintenance Module",
            "modules_content":["Item1","Item2"],
            "module_open":false,
            "index":4
        }
        ];



</script>


<div class="container">
    <div class="course-header">
        <h3>Software Engineering</h3>
        <p>{modules.length} Modules</p>
    </div>
    <div class="module-container">
        {#each modules as module}
        <div class="module-card" >
            <button class="module_title_container" class:selected={selectedIndex==module.index} on:click={() => changeSelectedModule(module.index)}>
                <div >
                    <h4>{module.module_name}</h4>
                    <p> {module.module_description} description</p>
                </div>
            
                <button class="module_opener_button" on:click={() => openModule(module.index)}>
                    <img class:module_opened={module.module_open} src="{arrowImage}" alt="arrow">
                </button>
            
            </button>
            {#if module.module_open}
                <div class="module_items" class:items_opened={selectedIndex==module.index}>   
                    {#each module.modules_content as item}
                      
                            <button on:click={() => changeSelectedItemNumber(item,module.index)} >
                                {item}
                            </button>
                        
                    {/each}
                    
                </div>
            {/if}
        </div>
        {/each}
       
    </div>
</div>


<style>

        /* width */
    ::-webkit-scrollbar {
    width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    border-radius: 5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: lightsteelblue; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: lightsteelblue; 
    }

  
    .container{
        width:20%;
        border-right: 3px rgba(86, 86, 86, 0.534) solid;
        max-height: 80vh;
        overflow-y: scroll;
        overflow-x: hidden;
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

        padding:0rem 0.5rem 0rem 0rem;
        margin-left: 0.25rem;
        border-radius: 5px;
    }
    
   
    .module-card{
         border-bottom: 2px solid  rgb(69, 69, 69);
    }

    .module_title_container{
        display: flex;
        justify-content: space-between;
        padding:1rem 1rem 1rem 0.45rem;
        cursor: pointer;
        border:#646cff;
        width: 100%;
        
    }

    
    .module_title_container:hover{
        border-left: 3px solid #646cff;
    }



    .selected{
        border-left: 3px solid #646cff;
        background-color: rgb(46, 46, 46);
    }
    

    
    .module_opener_button{
        background-color: azure;
        padding: 0;
        margin:0; 
        aspect-ratio: 1/1;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
 

    .module_opener_button img{
        padding: 0;
        margin:0; 
        width: 135%;
        aspect-ratio: 1/1;
        rotate: 90deg;
        transition: 0.2s ease-in-out;
    }

    .module_opened{
        rotate: 180deg !important;
    }

    .module_items{
        padding-left: 1rem;
        padding-block: 0.5rem;
        display: flex;
        flex-direction: column;
        font-size: 0.8rem;
        gap:0.5rem;
        background-color: transparent;
        transition: 0.2s ease-in-out;
        
        
    }
    .module_items button{
        margin-right:2rem;
        padding:0.5rem 0.25rem;
        border:rgb(69, 69, 69) 2px;
        transition: 0.2s ease-in-out;
        border-bottom: 2px solid rgb(69, 69, 69);
    }

    .module_items button:hover{
        border-bottom: 3px solid #646cff;
    }
    .items_opened{
        background-color: rgb(46, 46, 46);
        border-left: 3px solid #646cff;
    }
    
</style>
