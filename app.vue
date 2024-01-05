<template>
  <div>
    <!-- navbar start-->
    <header
      class="sticky top-0 z-50 flex justify-between items-center space-x-1 shadow-md border-b p-4"
    >
      <a href="" class="text-3xl font-mono">Car Trader</a>
    </header>
    <!-- navbar endz -->

    <!-- Cars Listing Page -->
    <div class="mx-auto mt-4 space-y-4 max-w-7xl px-4">
      <div class="mt-32 flex">
        <!-- Car side bar -->
        <div class="shadow border w-64 mr-10 z-30 h-[190px]">
          <div class="p-5 flex justify-between relative cursor-pointer custom-border-bottom">
            <h3>Location</h3>
            <h3 class="capitalize text-blue-400 font-bold">Torronto</h3>

            <!-- Modal Popup -->
            <!-- <div class="left-56 p-5 absolute border shadow top-1 -m-1 bg-white">
              <input class="border p-1 rounded" type="text"/>
              <button class="bg-blue-400 mt-2 w-full rounded text-white p-1">Apply</button>
            </div> -->
          </div>


          <div class="p-5 flex justify-between relative cursor-pointer custom-border-bottom">
            <h3>Make</h3>
            <h3 class="capitalize text-blue-400 font-bold">Hyundai</h3>
          </div>

          <div class="p-5 flex justify-between relative cursor-pointer">
            <h3>Price</h3>
            <h3 class="capitalize text-blue-400 font-bold">Any</h3>
          </div>
        </div>

        <!-- Car side bar end-->

        <!-- Actual Car  -->
        <!-- Actual Car  end-->
      </div>
    </div>
    <!-- Cars Listing Page end -->
  </div>
</template>
