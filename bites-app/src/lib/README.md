# lib

This directory contains library code (Utilities & components) as per svelte documentation.

**Import subdirectories using absolute import paths:**

```
import $libs/
import $libs/components
import $libs/...
```

## Sub-directories

> Firebase
>
> Includes Google Firebase & Authentication tools, utilities, and initialization.

> Components
>
> For components that are likely to be used in multiple locations across the application. Components that are only relevant to a single page should be placed in their page directory as in: `$src/routes/<corresponding page>/<component name>.svelte`

> Stores
>
> Includes utilities for interacting with <a href='https://svelte.dev/docs/svelte-store'>svelte stores</a>.

> Images
>
> For storing images used in the site.
