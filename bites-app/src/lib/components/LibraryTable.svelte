<script lang="ts">
    export let columns: any;
    export let libraryTable: any;
</script>

<table class="table table-xl">
    <thead>
        <tr class="">
            {#each columns as column}
                <th class="text-center">{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each libraryTable as entry}
            <tr class="hover:bg-base-200">
                <!--
        {#each row as cell}
        <td contenteditable="false" bind:innerHTML={cell} />
        {/each}
        -->
                <td contenteditable="false" class="w-[23%]" bind:innerHTML="{entry.title}"></td>
                <td contenteditable="false" class="w-[38%]" bind:innerHTML="{entry.description}"></td>
                <td>
                    <a
                        class="link link-hover w-[38%]"
                        href="{entry.link}"
                        target="”_blank”"
                        rel="noopener noreferrer"
                        contenteditable="false"
                        bind:innerHTML="{entry.link}"
                    ></a>
                </td>
            </tr>
        {/each}
    </tbody>
</table>