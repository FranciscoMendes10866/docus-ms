<template>
  <div>
    <section class="py-40">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-center items-center">
          <div>
            <h1 class="text-center text-3xl mb-10 text-blue-400 font-medium">
              <span class="underline hover:no-underline hover:text-blue-600">Create</span> an account.
            </h1>
            <Form
              email="example@gmail.com"
              password="********"
              :myProps="myProps"
              :emailValue="registerEmail"
              :passwordValue="registerPassword"
              @emailInput="setRegisterEmail"
              @passwordInput="setRegisterPassword"
              @submitForm="SignUp"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', [
      'SignUp'
    ]),
    ...mapMutations('auth', [
      'setRegisterEmail',
      'setRegisterPassword'
    ])
  },
  computed: {
    ...mapState('auth', [
      'registerEmail',
      'registerPassword'
    ])
  },
  data: () => {
    return {
      myProps: {
        button: 'Register'
      }
    }
  },
    components: {
        Form: () => import('../components/AuthForm')
    }
}
</script>
