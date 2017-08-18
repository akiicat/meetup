import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://i.imgur.com/rO883eh.jpg',
        id: 'meetup-in-taipei',
        title: 'Meetup in Taipei',
        date: new Date(),
        location: 'Taipei',
        description: 'taipei description'
      },
      {
        imageUrl: 'https://i.imgur.com/0IGt7hM.jpg',
        id: 'meetup-in-kauhsiung',
        title: 'Meetup in Kauhsiung',
        date: new Date(),
        location: 'Kauhsiung',
        description: 'Taipei description'
      }
    ],
    user: {
      id: 'user_id',
      registeredMeetups: ['registered_meetups_id']
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        loadtion: payload.loadtion,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'firebase_meetup_id'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
