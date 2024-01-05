
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
