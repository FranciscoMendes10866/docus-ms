<template>
  <div class="mt-8">
    <List
      v-for="link in linksList"
      :key="link._id"
      :name="link.linkName"
      :url="link.linkURL"
      @onDelete="deleteLink(link)"
    />
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'

export default {
  mounted () {
    this.fetchLinks()
  },
  computed: {
    ...mapState('links', [
      'linksList'
    ])
  },
  methods: {
    ...mapMutations('links', [
      'setFetchLinks',
      'setDeleteLink'
    ]),
    ...mapActions('links', [
      'fetchLinks',
      'deleteLink'
    ])
  },
  components: {
    List: () => import('../components/List')
  }
}
</script>
