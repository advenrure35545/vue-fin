import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    costs: {}
  },
  mutations: {
    SET_USER(state, payload){
      state.user = payload
    },

    SET_COSTS(state, payload){
      state.costs = payload
    },

    ADD_COST(state, payload){
      state.costs.push(payload)
    }
  },
  actions: {
    async loginUser({commit}){
      const userData = await firebase.firestore().collection('users').doc('YF4w84G6zKzaMh3Mvngi').get()
      commit('SET_USER', userData.data())
    },

    async fetchCosts({commit, state}){
      try{
        const costsCol = await firebase.firestore().collection('costs').where('user','==', 'YF4w84G6zKzaMh3Mvngi').get()
        let costs = []
        costsCol.forEach(doc => costs.push(doc.data()))
        commit('SET_COSTS', costs)
      }catch(e){
        console.log(e)
      }
    
    },

    async addCost({commit}, payload){
      try{
        await firebase.firestore().collection('costs').add({user: "YF4w84G6zKzaMh3Mvngi", title: payload.title, value: payload.value, category: payload.category})
        commit('ADD_COST', payload)
      }catch(e){
        console.log(e)
      } 
    }
  },
  getters: {
    user: state => state.user,
    totalCosts: state => {
      return 14134
    },
    costs: state => {
      return state.costs
    }
  }
})
