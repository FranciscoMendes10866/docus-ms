import EXPRESS from '../../server/Api'

export default {
  namespaced: true,
  state: {
    // all links
    linksList: [],
    // create link
    linkName: null,
    linkURL: null,
    // errors
    createError: null,
    deleteError: null
  },
  actions: {
    fetchLinks ({ commit }) {
      return EXPRESS().get('/links')
        .then(({ data }) => {
          commit('setFetchLinks', data)
        })
    },
    createLink({ commit, state }) {
      return EXPRESS().post('/links', {
        linkName: state.linkName,
        linkURL: state.linkURL
      })
        .then(({ data }) => {
          commit('appendLinks', data)
          commit('setLinkName', null)
          commit('setLinkURL', null)
        })
        .catch(() => {
          commit('setCreateError')
        })
    },
    deleteLink({ commit }, link) {
      return EXPRESS().delete(`/links/${link._id}`)
        .then(() => {
          commit('setDeleteLink', link)
        })
        .catch(() => {
          commit('setDeleteError')
        })
    },
  },
  getters: {
  },
  mutations: {
    setFetchLinks(state, linksList) {
      state.linksList = linksList
    },
    setLinkName(state, linkName) {
      state.linkName = linkName
    },
    setLinkURL(state, linkURL) {
      state.linkURL = linkURL
    },
    setCreateError(state, error) {
      state.createError = error
    },
    appendLinks(state, link) {
      state.linksList.push(link)
    },
    setDeleteLink(state, link) {
      state.linksList.splice(state.linksList.indexOf(link), 1)
    },
    setDeleteError(state, error) {
      state.deleteError = error
    }
  }
}