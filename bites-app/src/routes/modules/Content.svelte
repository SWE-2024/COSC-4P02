<script lang="ts">
    export let selectedIndex:number;
    export let selectedItem:number;
    export let modules:any;
</script>



<div class="container">
    <div class="module-info">
        <p><b> {modules[selectedIndex].module_name} </b> >> {modules[selectedIndex].modules_content[selectedItem].item_name}</p>
    </div>
    <div class="module-content">
        <iframe src="{modules[selectedIndex].modules_content[selectedItem].item_url}" frameborder="0" title="{modules[selectedIndex].modules_content[selectedItem].item_name}" ></iframe>   
    </div>
    
</div>

<style>
    .container{
        width:80%;
        display: flex;
        flex-direction: column;
        padding-inline:2rem;
    }

    .module-content{
        width:100%;
        height:600px;
    }

    .module-content iframe{
        width:100%;
        height: 100%;
    }
    
</style>
