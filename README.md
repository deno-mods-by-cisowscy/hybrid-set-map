# @deno-mods-by-cisowscy/hybrid-set-map@0.0.1-alpha

##  HOW TO USE THIS

**( 1 )** go to your project (and next see point 3) or  if you do not have a project (see point 2), 
**( 2 )** initiate a new project (and next see point 3).

```powershell
PS A:\any\path\on\your-pc> mkdir my-project && cd my-project && deno init && mkdir mods 
PS A:\any\path\on\your-pc\my-project> Set-Content -Path ".\mods\.gitkeep" -Value $null -Encoding UTF8
PS A:\any\path\on\your-pc\my-project> git init -b=main  && git add . &&  git commit -m "init deno and init git"
```

**( 3 )** start add this module  (and next see point 4).

```powershell
PS A:\any\path\on\your-pc\my-project> git -c protocol.file.allow=always submodule add --name by-cisowscy-mod-hybrid-set-map https://github.com/deno-mods-by-cisowscy/hybrid-set-mapgit mods/deno-mods-by-cisowscy/hybrid-set-map 
PS A:\any\path\on\your-pc\my-project> git submodule update --init --recursive && git add . &&  git commit -m "(step 1 of 2) add git submodule of @deno-mods-by-cisowscy/hybrid-set-map"
```
**( 4 )** update your config file `A:\any\path\on\your-pc\my-project\deno.json`  (and next see point 5).

eg. before change

>  ```json
>    {
>      "imports": {
>        "@std/assert": "jsr:@std/assert@1"
>      },
>      "tasks": {
>        "dev": "deno run --watch main.ts"
>      }
>    }
>
>  ```

eg. after change

>  ```json
>   {
>     "workspace": [
>       "./mods/deno-mods-by-cisowscy/hybrid-set-map",
>     ],
>     "imports": {
>       "@std/assert": "jsr:@std/assert@1"
>     },
>     "tasks": {
>       "dev": "deno run --watch main.ts"
>     }
>  }
>
>  ```

**( 5 )** finish  add this module  (and next see point 6).

```powershell
PS A:\any\path\on\your-pc\my-project> git add . &&  git commit -m "(step 2 of 2) add git submodule of @deno-mods-by-cisowscy/hybrid-set-map"
```

**( 6 )** add example usage to eg.  `A:\any\path\on\your-pc\my-project\main.ts`   (and next see point 7).

eg. before change

>```typescript
>  export function add(a: number, b: number): number {
>    return a + b;
>  }
>  
>  // Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
>  if (import.meta.main) {
>    console.log("Add 2 + 3 =", add(2, 3));
>  }
>```

eg. after change

>```typescript
>  //import { HybridSetMap } from './mods/deno-mods-by-cisowscy/hybrid-set-map/main/hybrid-set-map';
>  import { HybridSetMap } from '@deno-mods-by-cisowscy/hybrid-set-map';
> 
>  // Przykład użycia
>  const initialData: [string, number][] = [['key1', 10], ['key2', 20]];
>  const myHybridSetMap = new HybridSetMap<string, number>(initialData);
>  
>  console.log(myHybridSetMap.get('key1')); // Wyświetli: 10
>  console.log(myHybridSetMap.has('key2')); // Wyświetli: true
>  console.log(myHybridSetMap.size); // Wyświetli: 2
>  
>  myHybridSetMap.add('key3', 30);
>  console.log(myHybridSetMap.get('key3')); // Wyświetli: 30
>  
>  const hybridSetMapWithoutVals = new HybridSetMap<string>();
>  hybridSetMapWithoutVals.add('key1');
>  console.log(hybridSetMapWithoutVals.has('key1')); // Wyświetli: true
>  console.log(hybridSetMapWithoutVals.get('key1')); // Wyświetli: undefined
>  console.log(hybridSetMapWithoutVals.size); // Wyświetli: 1
>  
>  
>  export function add(a: number, b: number): number {
>    return a + b;
>  }
>  
>  // Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
>  if (import.meta.main) {
>    console.log("Add 2 + 3 =", add(2, 3));
>  }
>``` 

**( 7 )** finish 

```powershell
PS A:\any\path\on\your-pc\my-project> git add . &&  git commit -m "add example usage of @deno-mods-by-cisowscy/hybrid-set-map"
```

---
---
---


## Suplement ***(links to the official documentation [--> deno@2.1.5 <--](https://github.com/denoland/deno/tree/v2.1.5) )***

- [about **workspaces** and **monorepos** in deno](https://docs.deno.com/runtime/fundamentals/workspaces/)
- [about **deno.json**](https://docs.deno.com/runtime/fundamentals/configuration/)
- [about start a new deno project](https://docs.deno.com/runtime/reference/cli/init/)

