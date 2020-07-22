<template>
  <div>
    <form class="w-full max-w-sm">
      <div class="flex items-center justify-center">
        <div>
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-email"
            placeholder="example@gmail.com"
            type="text"
          />
        </div>
      </div>
      <div class="flex justify-center items-center mt-6">
        <div>
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            id="inline-password"
            placeholder="********"
            type="password"
          />
        </div>
      </div>
      <div class="flex justify-center items-center mt-12">
        <div>
          <button
            class="shadow bg-blue-500 hover:bg-white focus:shadow-outline focus:outline-none text-white hover:text-blue-600 font-bold py-2 px-4 rounded"
            type="submit"
          >
            {{ myProps.button }}
            <span>
              <i class="im im-diamond-o align-middle ml-2 text-sm"></i>
            </span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
    export default {
      props: [
        'myProps'
      ]
        
    }
</script>
