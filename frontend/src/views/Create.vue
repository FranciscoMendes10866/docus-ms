<template>
  <div>
    <section class="py-32">
      <div class="container mx-auto">
        <div class="flex flex-auto justify-center items-center">
          <div>
            <h1 class="text-center text-3xl mb-10 text-blue-400 font-medium">
              <span class="underline hover:no-underline hover:text-blue-600">Create</span> a new link.
            </h1>
            <Form
              :myProps="myProps"
              firstInputPlc="Link name"
              secondInputPlc="Link url"
              :firstInputState="linkName"
              :secondInputState="linkURL"
              @firstInputMutation="setLinkName"
              @secondInputMutation="setLinkURL"
              @submitForm="createLink"
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
    ...mapMutations('links', [
      'setLinkName',
      'setLinkURL'
    ]),
    ...mapActions('links', [
      'createLink'
    ])
  },
  computed: {
    ...mapState('links', [
      'linkName',
      'linkURL'
    ])
  },
  data: () => {
    return {
      myProps: {
        button: 'Create link',
        type: 'text'
      }
    }
  },
  components: {
    Form: () => import('../components/Form')
  }
}
</script>
