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
        date: '2017-08-16'
      },
      {
        imageUrl: 'https://i.imgur.com/0IGt7hM.jpg',
        id: 'meetup-in-kauhsiung',
        title: 'Meetup in Kauhsiung',
        date: '2017-08-15'
      }
    ],
    user: {
      id: 'user_id',
      registeredMeetups: ['registered_meetups_id']
    }
  },
  mutations: {},
  actions: {},
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
