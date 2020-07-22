<template>
  <div>
    <!-- Hero section -->
    <section>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 py-10 md:py-20">
          <div class="ml-6 md:ml-0">
            <h1 class="mt-6 text-3xl md:text-5xl font-bold tracking-wide leading-normal">
              Gain time
              <br />by saving your
              <br />
              <span
                class="text-green-400 hover:text-blue-400 underline hover:no-underline"
              >favourite</span> websites.
            </h1>
            <p
              class="text-md md:text-xl font-normal tracking-wide leading-relaxed text-gray-700 mt-6"
            >
              If you use different browser’s or/and
              <br />different devices, stop wasting your time
              <br />looking for the correct website and link.
            </p>
            <div class="mt-10 md:mt-16">
              <router-link
                class="shadown hover:shadow-lg bg-blue-500 hover:bg-white text-white hover:text-blue-500 px-6 md:px-12 py-4 md:py-4 rounded-md"
                to="/signup"
              >
                <span class="font-semibold text-sm md:text-lg inline-block">Sign Up</span>
                <i class="im im-arrow-right align-middle ml-2 md:ml-3 text-sm md:text-md"></i>
              </router-link>
            </div>
          </div>
          <div>
            <img
              class="p-10 md:p-0"
              src="https://res.cloudinary.com/dj5iihhqv/image/upload/v1595435782/docus-ms/122-work-from-home-2_oprxcl.png"
              alt="Woman lost"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Level section -->
    <section class="bg-gray-200 py-20">
      <div class="container mx-auto">
        <div class="grid grid-cols-1">
          <div>
            <h1
              class="ml-6 md:ml-0 text-2xl md:text-4xl text-left md:text-center font-bold tracking-wide"
            >Why Docus</h1>
            <p
              class="ml-6 md:ml-0 mt-6 text-md md:text-lg text-md md:text-center font-normal tracking-wide leading-loose text-gray-700"
            >
              If you use different browser’s or/and different devices, stop wasting your time
              <br />looking for the correct website and link.
            </p>
          </div>
        </div>
        <div class="grid md:gap-5 grid-cols-1 md:grid-cols-3 mt-16 -mb-48">
          <div class="div p-8 md:p-0">
            <div
              class="transform hover:-translate-y-6 transition duration-150 ease-in-out text-white hover:text-blue-600 shadow-md hover:shadow-xl h-64 bg-pink-600 hover:bg-white rounded"
            >
              <i class="im im-layer mt-4 ml-4"></i>
              <h1 class="text-2xl font-medium tracking-wide ml-4 pt-40">Simple.</h1>
            </div>
          </div>
          <div class="div p-8 md:p-0">
            <div
              class="mt-2 md:mt-0 transform hover:-translate-y-6 transition duration-150 ease-in-out text-white hover:text-blue-600 shadow-md hover:shadow-xl h-64 bg-indigo-600 hover:bg-white rounded"
            >
              <i class="im im-mobile mt-4 ml-4"></i>
              <h1 class="text-2xl font-medium tracking-wide ml-4 pt-40">Flexible.</h1>
            </div>
          </div>
          <div class="div p-8 md:p-0">
            <div
              class="mt-2 md:mt-0 transform hover:-translate-y-6 transition duration-150 ease-in-out text-white hover:text-blue-600 shadow-md hover:shadow-xl h-64 bg-blue-600 hover:bg-white rounded"
            >
              <i class="im im-coin mt-4 ml-4"></i>
              <h1 class="text-2xl font-medium tracking-wide ml-4 pt-40">Free.</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Getting started section -->
    <section>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 pt-56 pb-40">
          <div class="div text-left md:text-center">
            <h1
              class="ml-6 md:ml-0 text-2xl md:text-4xl font-bold tracking-wide"
            >It’s easy to get started</h1>
            <p
              class="ml-6 md:ml-0 text-md md:text-lg tracking-wide leading-relaxed text-gray-700 mt-6"
            >
              Start by creating an account in the platform,
              <br />and then you can create your bookmarks.
            </p>
            <div class="mt-8 md:mt-16 ml-6 md:ml-0">
              <router-link
                class="shadown hover:shadow-lg bg-blue-500 hover:bg-white text-white hover:text-blue-500 px-6 md:px-12 py-4 md:py-4 rounded-md"
                to="/signup"
              >
                <span class="font-semibold text-sm md:text-lg inline-block">Sign Up</span>
                <i class="im im-arrow-right align-middle ml-2 md:ml-3 text-sm md:text-md"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {}
</script>
