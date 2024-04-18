<script lang='ts'>
	import { authStore } from "$lib/stores/authStore";
	import { themeStore } from "$lib/stores/themeStore";

  let modalOpen: boolean = false

  const toggleModal = () => {
		modalOpen = !modalOpen;
	};

  const onKeyUp = (event: KeyboardEvent) => {
		// const target = event.target as HTMLInputElement;
		if (event.code == 'Escape' && modalOpen) {
			toggleModal();
		}
	};
</script>

<div>
  {#if $authStore.isLoggedIn}
    <!-- @todo -->
    <button class="btn rounded-none outline-dashed outline-2 btn-lg btn-block btn-neutral {$themeStore.isLight? 'outline-neutral': 'outline-neutral-content'} outline-offset-4"
    on:click="{toggleModal}">
    <div class="grid grid-cols-1 grid-rows-1 w-full">
      <p class='text-left content-center'>Add New Module</p>
      <button class='btn btn-circle btn-ghost btn-md col-start-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>
    </div>
    </button>
  {/if}
</div>

<dialog class="modal" class:modal-open="{modalOpen}">
  <div class="modal-box w-3/4 max-w-3xl">
    <h3 class="font-bold text-lg flex">Add a new module</h3>
    <div class="divider"></div>
    <form>
      <div class='grid w-full text-center justify-center columns-1'>
        <h3 class='text-xl'>Add a powerpoint</h3>
        <div class="flex w-full">
          <input type="file" class="file-input file-input-bordered w-full max-w-md col-start-1 mr-10">
          <input type="checkbox" class="toggle toggle-lg toggle-success self-center" checked />
        </div>

        <div class="divider"></div>

        <h3 class='text-xl'>Add a video</h3>
        <div class="flex w-full">
          <label class='input input-bordered flex items-center gap-2 w-full max-w-md mr-10'>
            <p>URL</p>
            <input type="text" class="">
          </label>
          <input type="checkbox" class="toggle toggle-lg toggle-success self-center" checked />
        </div>
      </div>
    </form>
  </div>

  <form method="dialog" class="modal-backdrop">
    <button on:click="{toggleModal}">Close</button>
  </form>
</dialog>

<svelte:window on:keydown="{onKeyUp}" />