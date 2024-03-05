<script lang="ts">
	import Content from './Content.svelte'
	import Sidebar from './Sidebar.svelte'
    import db from '../../lib/firebase/firebase.modules';
	import { onMount } from 'svelte';
	import { Firestore, collection, onSnapshot } from 'firebase/firestore';
    import { authStore } from '$lib/stores/authStore';

    console.log(db)
    let modules:any = [];

    onMount(() => {
        onSnapshot(collection(db, "modules"), (snapshot) => {
            let data = snapshot.docs;
            modules=[]
            for(let i=0;i<data.length;i++){
                console.log(data[i].data())
                modules.push(data[i].data())
                
            } 
            modules.sort((a:any, b:any) => a.index - b.index);
        });
        
    });
  
	let selectedIndex = 0;
	let selectedItem = 0;

	

</script>

<svelte:head>
	<title>Modules</title>
	<meta name="description" content="Read the modules" />
</svelte:head>

<section>
    
        {#if modules.length>0 && $authStore.isLoggedIn}
            <Sidebar bind:selectedIndex bind:selectedItem {modules}/>
		    <Content bind:selectedIndex bind:selectedItem {modules}/>
        {/if}

		{#if !$authStore.isLoggedIn}
           <h2>Log in to see modules</h2>
        {/if}  
        
</section>


<style>

	section{
		margin-top: 1rem;
		width: 95vw;
		height: 90vh;
		overflow-y: hidden;
		margin-inline: auto;
		display: flex;

	}
</style>