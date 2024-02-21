# src

This directory contains all source code for the project.

**Import subdirectories using absolute import paths:**

```
import $src/
import $src/assets/
import $src/...
```

## Sub-directories

> Assets

> Lib
>
> Contains library code (Utilities & components) as per svelte documentation.

> Routes
>
> Contains the routes of the applications. Can also place components that are used by one route here with their parent as per svelte documentation.

> App.html
>
> Is the page template.
>
> > Includes %sveltekit.head% > \<link>, and \<script> which are required to run the app along with \<sveltehead> content.
>
> > %sveltekit.body% includes html to render the page.
>
> > %sveltekit.assets%
>
> > %sveltekit.nonce%
>
> > %sveltekit.env.[NAME]%
