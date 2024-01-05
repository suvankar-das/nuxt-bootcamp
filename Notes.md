
**index.vue** going to be the new component that is going to be rendered whenever we go to the home page.



`<NuxtPage>` component, is going to be a very specific component that is going to detect exactly what vue file it needs to render. And why this is nice is that now what we can do is we can add other things on top of it or below it, like this,



<template>

<div>

<nav>Nav</nav>

<NuxtPage></NuxtPage>

<footer>Footer</footer>

</div>

</template>



![enter image description here](https://i.ibb.co/ZV9BqgR/image.png)




----

 - Create a component folder under root directory
 - Create a component named NavBar.vue
 - Now , inside Index.vue that resides under page , You can Import like this ,

```vue
<script setup>

import NavBar from '../components/NavBar.vue';

</script>

<template>
  <div>
    <NavBar/>
  </div>
</template>
```

But , vue is strong enough to detect , If You omit script section i.e

``` vue
<template>
  <div>
    <NavBar/>
  </div>
</template>
```

> Nuxt.js simplifies process by offering a feature known as "Nested
> Routes & Named Views." If you organize components within folders in a
> specific way, Nuxt.js automatically recognizes the folder structure
> and generates routes based on folder names.

For example, in a Nuxt.js project, if you have a folder structure like this:
- components/
  - users/
    - UserProfile.vue

When you use the `UserProfile.vue` component, Nuxt.js automatically recognizes it as if it were named `users-UserProfile` (following the folder name and file name) when creating routes or referencing the component. This behavior aids in automatic route generation and component resolution.

**Nuxt.js** automatically recognizes folder-based component structures for route generation and component naming


- /city/city_name/car (city_name is dynamic)
- Also When we change maker , it is also going to change the path like this  /city/city_name/car/maker_name
- rules /city/:city_name/car/:maker_name
- To make dynamic , use [] and to make optional and dynmaic , use [[]]
- example usage
   http://localhost:3000/city/kolkata/car
   http://localhost:3000/city/kolkata/car/bmw
----

- For car details page , I need to follow this rule /car/porche-5 (/car is fixed porche is dynamic, - is fixed , 5 is dynamic , which is id )


-----

- inside navbar component , when clicking , I want to redirect to home page and I can do like this ,
 ``` js
 <a href="/" class="text-3xl font-mono">Car Trader</a>
 ```
- But the problem is, it will reload the whole page , to fix this ,
