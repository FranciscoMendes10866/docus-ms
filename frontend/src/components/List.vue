<template>
  <section>
    <div class="container mx-auto">
      <div class="flex flex-auto justify-center items-center text-center">
        <div class="max-w-md">
          <a :href="url" target="blank">
            <h2
              class="transition duration-700 ease-in-out transform translate-y-0 hover:translate-x-6 tracking-wide font-medium hover:font-semibold px-24 py-8 rounded shadow hover:shadow-2xl mt-8 bg-blue-400 hover:bg-white text-white hover:text-blue-500"
            >{{ name }}</h2>
          </a>
          <div class="mt-1">
            <span class="cursor-pointer shadow-none hover:shadow-xl" @click="$emit('onDelete')">
              <i class="im im-x-mark-circle text-red-600"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    props: [
        'link',
        'name',
        'url'
    ]
}
</script>