<template>
  <div>
    <Navbar />
    <h1 class="text-center font-bold tracking-wide">Hello world</h1>
  </div>
</template>

<script>
  export default {
    components: {
      Navbar: () => import('../components/Navbar')
    }
  }
</script>
