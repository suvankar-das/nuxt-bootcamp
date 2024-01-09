
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


----

# Composable
So , in both car.vue and [name]-[id].vue , I am using a common function , which is responsible for returning first letter in capital.

``` js
const capitalizeFirstLetter = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
```

Now , I can re-use this using composable.

>In Nuxt.js, *composables* are a feature of the Composition API that allows you to organize and reuse logic across components. Composable is sort of places where we can store state as well as a different pieces of functionality.

- First create a directory named composables,
- Then create a file , here I give a name like useUtilities.js (all composables must begin with use)

``` js
export const useUtilities = ()=>{
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return {
        capitalizeFirstLetter
    }
}

```

- Now in page , I am using it like this ,

``` js
<script setup>
const route = useRoute();

const {capitalizeFirstLetter} = useUtilities();

useHead({
  title: capitalizeFirstLetter(route.params.name),
});

definePageMeta({
  layout:'central-aligned'
})

</script>
```

-----
# Error page
- To add a error page , simply create a file named error.vue at the root

- Now instead of hard-coded 404 and message , I can use useError composable

``` html
<script setup>

const error = useError();

</script>

<template>
    <div class="text-center">
    <h1 class="mb-4 text-6xl font-semibold text-red-500">{{ error.statusCode }}</h1>
    <p class="mb-4 text-lg text-gray-600">{{ error.message }}</p>
    <div class="animate-bounce">
        ...
```


----
# Dynamic rendering of each car

- First I have created a compsable named useCar
``` js
// import cars from '../data/cars.json';
import cars from '@/data/cars.json';

export const useCars = ()=>{
    return {
        cars
    }
}

```

 `Here @ meaning go to root`


- Then , on cards.vue

``` html
<script setup>

const {cars} = useCars();

</script>


<template>
  <div>
    <!-- Actual Car cards container  -->
    <div class="w-full">
      <!-- Individual car card start-->
      <CarCard v-for="car in cars" :key="car.id" :carObj="car"/>
      <!-- Actual Car cards container  end-->
    </div>
  </div>
</template>

```
`:carObj="car": This is using the : shorthand for v-bind, a directive in Vue.js that binds an attribute to an expression. In this case, it's binding the prop named carObj`

Now in CarCard,

``` html
<script setup>
const props = defineProps({
  carObj: Object,
});

const navigateToCarDetails = ()=>{
  const routeUrl = `/car/${props.carObj.name}-${props.carObj.id}`;
  navigateTo(routeUrl);
}

</script>

<template>
  <div>
    <div
      class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
      @click="navigateToCarDetails"
    >
      <div class="flex h-full">
        <img
          :src="carObj.url"
          alt="car image"
          class="w-[300px] h-full"
        />
        <div class="p-4 flex flex-col">
          <div>
            <h1 class="text-2xl text-blue-700">{{ carObj?.name }}</h1>
            <p class="text-green-700">
              {{ carObj?.description }}
            </p>
          </div>
          <div class="mt-auto text-xl">${{ carObj.price }}</div>
        </div>
      </div>
    </div>
    <!-- Individual car card end-->
  </div>
</template>

```

`defineProps(['carObj']) is used to define and access the carObj prop `

----
- The computed function is part of the Vue Composition API and is used to create a reactive computation. Computed properties are derived from one or more reactive properties, and they automatically update when the dependencies change.

``` js
const car = computed(() => {
  return cars.find(c => c.id === parseInt(route.params.id));
});
```
- When you use computed, Vue.js optimizes the computation. It will only re-run the function when the dependencies (route.params.id in this case) change. This avoids unnecessary re-computation and helps in optimizing the performance of your application.


----
- create a server side error.
``` js
if(!car.value){
  throw createError({
    statusCode:404,
    message:`Car with id ${route.params.id} does not exist!`
  })
}
```
Handle error
```
const error = useError();

const catchAndNavigate = () => {
  clearError({
    redirect: '/',
  });
};
```
----
### Optimizing Image

>npm install @nuxt/image

- Inside nuxt.config.js
``` js
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ]
})
```

- Change all <img> with <NuxtImg>


-----
### use vueuse composables

> npm i @vueuse/nuxt

``` js
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
})
```

- Now inside cards.vue (Parent)

``` js
const favourite = useLocalStorage("favourite", {});

const handleFavouriteCallfromChild = (id) => {
  if (id in favourite.value) {
    delete favourite.value[id];
  } else {
    favourite.value = {
      ...favourite.value,
      [id]: true,
    };
  }
};

<CarCard v-for="car in cars" :key="car.id" :carObj="car"
       @childCaller="handleFavouriteCallfromChild"
       :isFavourite="car.id in favourite"
       />
```


- Now in childpage

``` js
const emit = defineEmits(['childCaller']);


<img
        class="absolute w-7 right-5 top-3 z-50"
        :src="props.isFavourite ? heartFilled : heartOutlined"
        @click="emit('childCaller',carObj.id)"
      />
```
- But there is one issue , after reload , all data gets lost.

---
- When you use localStorage in Nuxt.js or Vue.js, there are a few important considerations related to server-side rendering (SSR) that can affect the behavior of your application.

1. localStorage in SSR:

During the server-side rendering process, the localStorage object is not available. This is because SSR is executed on the server, and localStorage is a browser-specific feature.
If you try to access localStorage directly during the server rendering of a component, it may lead to errors since the object is undefined.

2. Client-Side Only Code:

If your component relies on client-side features like localStorage or interacts with the DOM directly, you should ensure that this code is only executed on the client side.
Wrapping the component or code with <ClientOnly> is a way to achieve this, as it prevents the enclosed content from being rendered during server-side rendering.

``` js
<ClientOnly>
        <CarCard
          v-for="car in cars"
          :key="car.id"
          :carObj="car"
          @childCaller="handleFavouriteCallfromChild"
          :isFavourite="car.id in favourite"
        />
      </ClientOnly>
```
