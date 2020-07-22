<template>
  <div>
    <section class="py-40">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-center items-center">
          <div>
            <h1 class="text-center text-3xl mb-10 text-blue-400 font-medium">
              <span class="underline hover:no-underline hover:text-blue-600">Create</span> an account.
            </h1>
            <Form />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    components: {
        Form: () => import('../components/SignUpForm')
    }
}
</script>
