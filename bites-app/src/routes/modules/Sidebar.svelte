    <script lang="ts">
        import { createEventDispatcher } from 'svelte';
        import arrowImage from '../../assets/arrow.png';    

    interface Item {
        item_index: number;
        item_name: string;
        item_type: string;
        item_url: string;
    }

    interface Module {
        module_name: string;
        module_description: string;
        modules_content: Item[];
        module_open: boolean;
        index: number;
    }

        const dispatch = createEventDispatcher();

        export let selectedIndex: number;
        export let selectedItem:number;
        export let modules: Module[]; // Changed this from Any to Interface to allow for filtering

        let searchString = '';

        function changeSelectedModule(index: number) {
            selectedIndex=index;
        }

        function changeSelectedItemNumber(itemNumber:number,index:number){
            selectedItem=itemNumber;
            console.log(selectedItem);
            changeSelectedModule(index)
        }

        function openModule(index:number){
            //modules[index].module_open = !modules[index].module_open
            let mods = modules
            mods[index].module_open = !mods[index].module_open
            modules = [...mods];
        }

        // Search Bar Filter only displays modules with relevant name, description or content that matches inputted searchString
        $: filteredModules = searchString ? modules.filter(module =>
        module.module_name.toLowerCase().includes(searchString.toLowerCase()) ||
        module.module_description.toLowerCase().includes(searchString.toLowerCase()) ||
        module.modules_content.some(item => item.item_name.toLowerCase().includes(searchString.toLowerCase()))
        ) : modules;

    </script>

    <div class="container">
        <div class="course-header">
            <h3>Software Engineering</h3>
            <p>{modules.length} Modules</p>
            <input type="text" class="searchBar" placeholder="Search modules..." bind:value={searchString} /> <!--Create an empty search bar-->    
        </div>
        <div class="module-container">
            {#each filteredModules as module}
            <div class="module-card">
                <button class="module_title_container" class:selected={selectedIndex==module.index} on:click={() => changeSelectedModule(module.index)}>
                    <div >
                        <h4>{module.module_name}</h4>
                        <p>{module.module_description}</p>
                    </div>
                
                    <button class="module_opener_button" on:click={() => openModule(module.index)}>
                        <img class:module_opened={module.module_open} src="{arrowImage}" alt="arrow">
                    </button>
                
                </button>
                {#if module.module_open}
                    <div class="module_items" class:items_opened={selectedIndex==module.index}>   
                        {#each module.modules_content as { item_index, item_name }}
                        
                                <button on:click={() => changeSelectedItemNumber(item_index, module.index)} >
                                    {item_name}
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

    .searchBar{
        margin-top: 10px;
        border-radius: 5px;
        border: 1px solid #646cff;
        color: white;
        font-size: 14px;
        background-color: rgb(46, 46, 46);
        padding: 5px;
        transition: transform 0.3s ease;

    }

    .searchBar:hover {
        transform: scale(102%);
        border-color: white
    }
    
</style>
