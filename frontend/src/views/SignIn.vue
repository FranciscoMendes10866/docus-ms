<template>
  <div>
    <section class="py-40">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-center items-center">
          <div>
            <h1 class="text-center text-3xl mb-10 text-blue-400 font-medium">
              <span class="underline hover:no-underline hover:text-blue-600">Login</span> into an account.
            </h1>
            <Form
              :myProps="myProps"
              firstInputPlc="example@gmail.com"
              secondInputPlc="********"
              :firstInputState="loginEmail"
              :secondInputState="loginPassword"
              @firstInputMutation="setLoginEmail"
              @secondInputMutation="setLoginPassword"
              @submitForm="SignIn"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
methods: {
  ...mapMutations('auth', [
    'setLoginEmail',
    'setLoginPassword'
  ]),
  ...mapActions('auth', [
    'SignIn'
  ])
},
computed: {
  ...mapState('auth', [
    'loginEmail',
    'loginPassword'
  ])
},
  data: () => {
    return {
      myProps: {
        button: 'Login',
        type: 'password'
      }
    }
  },
    components: {
        Form: () => import('../components/Form')
    }
}
</script>
