
**index.vue** going to be the new component that is going to be rendered whenever we go to the home page.



`<NuxtPage>` component, is going to be a very specific component that is going to detect exactly what vue file it needs to render. And why this is nice is that now what we can do is we can add other things on top of it or below it, like this,



<template>

<div>

<nav>Nav</nav>

<NuxtPage></NuxtPage>

<footer>Footer</footer>

</div>

</template>



![enter image description here](https://i.ibb.co/YWhxDnj/image.png)




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
``` js
 <NuxtLink class="text-3xl font-mono" to="/">Car Trader</NuxtLink>
```

- In SearchBar.vue ,

### `const cityName = ref("");`

-   **`ref`**: `ref` is a function provided by Vue 3's Composition API for creating reactive references. In this context, it creates a reactive variable named `cityName` and initializes it with an empty string. The reactivity allows changes to `cityName` to automatically trigger updates in the component's rendering.

### `<input type="text" v-model="cityName" :class="isEmptySearch ? 'border border-red-900' : ''" />`

-   **`v-model="cityName"`**: `v-model` is a directive in Vue.js that creates a two-way binding on an input element. In this case, it binds the value of the input field to the `cityName` variable. Any changes to the input field will update the value of `cityName`, and vice versa.

----
![enter image description here](https://i.ibb.co/k2zcTQv/image.png)
- Here In this page th right side of the page will gets changed frequently. i.e If I chnage any parameter like
- change location or make then different cars will popped up on the right side of that screen.

So what we need to do is change our routing structure so that the frequently chnaged portion will be a nested route.


# Page Layout

- To create a default layout , create a folder named layouts at the root
- Inside that folder, create a file named default.vue

``` html
<template>
  <div>
    <NavBar />
    <slot />
  </div>
</template>

```

- Then inside app.vue , wrap `<NuxtPage>` inside `<NuxtLayout>`

``` html
<NuxtLayout><NuxtPage></NuxtPage></NuxtLayout>
```

----
# Custom layout


Now , first look at the structure of the page ,
In the homepage , I don't have any space ![enter image description here](https://i.ibb.co/84kP4TR/image.png)

But in car listing page , ![enter image description here](https://i.ibb.co/NYtGHXn/image.png) there are white spaces in both side and same for car details page ![enter image description here](https://i.ibb.co/KjdmD7N/image.png)

This is because ,

```html
<div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
</div>
```
is used in both pages


So create a new layout , here name does not matter at all , I named it `central-aligned.vue`

``` html
<template>
  <NavBar/>
  <div
    class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  >
    <slot />
  </div>
</template>

```

Now , in order to use this custom layout , inside script tag of that page,
``` js
definePageMeta({
  layout: "central-aligned",
});
```

and remove that div from there , so code now looks like this

``` html
<script setup>
const route = useRoute();

useHead({
  title: route.params.name.toUpperCase(),
});

definePageMeta({
  layout:'central-aligned'; // name of the layout page
})

</script>

<template>
  <div>
    <!-- CAR DETAIL PAGE Start-->
    <!-- <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    > -->
      <CarDetailHero />

      <CarDetailAttribute />

      <CarDetailDescription />

      <CarDetailContact />
    <!-- </div> -->
    <!-- CAR DETAIL PAGE  End -->
  </div>
</template>

```
