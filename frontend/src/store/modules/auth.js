import EXPRESS from '../../server/Api'
import router from '../../router/index'

export default {
  namespaced: true,
  state: {
    // register
    registerEmail: null,
    registerPassword: null,
    registerError: null,
    // login
    loginEmail: null,
    loginPassword: null,
    loginError: null,
    // jwt
    token: null
  },
  actions: {
    SignUp({ commit, state }) {
      return EXPRESS().post('/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword
      })
        .then(() => {
          router.push('/signin')
        })
        .catch(() => {
          commit('setRegisterError')
        })
    },
    SignIn({ commit, state }) {
      return EXPRESS().post('/auth/login', {
        email: state.loginEmail,
        password: state.loginPassword
      })
        .then(({ data }) => {
          commit('setToken', data.token)
          router.push('/dashboard')
        })
        .catch(() => {
          commit('setLoginError')
        })
    },
    LogOut({ commit }) {
      commit('setToken', null)
      router.push('/')
    }
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token
    }
  },
  mutations: {
    setRegisterPassword(state, registerPassword) {
      state.registerPassword = registerPassword
    },
    setRegisterEmail(state, registerEmail) {
      state.registerEmail = registerEmail
    },
    setRegisterError(state, error) {
      state.registerError = error
    },
    setLoginEmail(state, loginEmail) {
      state.loginEmail = loginEmail
    },
    setLoginPassword(state, loginPassword) {
      state.loginPassword = loginPassword
    },
    setLoginError(state, error) {
      state.loginError = error
    },
    setToken(state, token) {
      state.token = token
    }
  }
}