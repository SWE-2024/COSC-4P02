<script lang='ts'>
  let allowedExtensions = ['.pdf']; // list of file types allowed

  export let fileinputEnabled: boolean = true;
  export let videourlEnabled: boolean = true;
  export let data: {
    videoInput: string, 
    fileInput: string
  }
  export let error: {
    fileInput:string,
    videoInput: string
  }

  const handleClearURL = () =>{
    data.videoInput = ''
  };

  const handleClearFileinput = () => {
    data.fileInput = '';
  };

</script>

<div class='flex flex-col w-full'>
  <h3 class='subheading'>Add a Slideshow</h3>
  <input
    class="slide-input self-center" 
    type="file" 
    id="fileinput" 
    disabled={!fileinputEnabled}
    accept={allowedExtensions.join(',')}
    bind:value={data.fileInput}
    />
  <p class='error-font'>{error.fileInput}</p>

  <div class='divider'></div>

  <h3 class='subheading'>Add a Video</h3>
  <label class='url-input self-center' aria-disabled="{!videourlEnabled}">
    URL
    <input 
      type="text" 
      id="videourl" 
      pattern=""
      disabled={!videourlEnabled} 
      bind:value={data.videoInput}
      />
  </label>
  <p class='error-font'>{error.videoInput}</p>

  <div class='divider'></div>
  
  <div class="flex justify-evenly m-4">
    <div class='flex flex-col items-center'>
      <h4 class='text-lg m-2'>Slideshow</h4>
      <input 
        type='checkbox' 
        class='input-toggle'
        bind:checked="{fileinputEnabled}"
        on:click="{handleClearFileinput}" 
        />
    </div>
    <div class='flex flex-col items-center'>
      <h4 class='text-lg m-2'>Video</h4>
      <input 
        type='checkbox' 
        class='input-toggle'
        bind:checked="{videourlEnabled}"
        on:click="{handleClearURL}" 
        />
    </div>
  </div>
</div>

<style>
  .url-input {
    @apply input input-bordered flex items-center gap-2 w-full max-w-md;
  }
  .slide-input {
    @apply file-input file-input-bordered w-full max-w-md;
  }
  .subheading {
    @apply text-xl self-center mb-4;
  }
  .input-toggle {
    @apply toggle toggle-primary lg:toggle-lg
  }
  .error-font {
    @apply text-sm italic
  }
</style>