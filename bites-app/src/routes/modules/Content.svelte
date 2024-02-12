<script lang="ts">
    export let selectedIndex:number;
    export let selectedItem:string;
</script>


<div class="container">
    <h1>Module - {selectedIndex}</h1>
    <h2>{selectedItem}</h2>
</div>

<style>
    .container{
        width:80%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
