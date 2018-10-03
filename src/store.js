import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        name: 'Yogi El Doggo',
        emails: [
          { type: 'Personal', 'address': 'yogi@example.com' },
          { type: 'Work', 'address': 'yogi.work@example.com' }
        ],
        phones: [
          { type: 'Personal', 'number': '07881 871 123' },
          { type: 'Work', 'number': '01486 811 811' },
        ],
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Archibald Removal',
        emails: [
          { type: 'Personal', 'address': 'archie@example.com' },
          { type: 'Work', 'address': 'archie.work@example.com' }
        ],
        phones: [
          { type: 'Mobile', 'number': '07881 871 123' },
          { type: 'Work', 'number': '07881 871 123' },
        ],
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        name: 'Karl Rixon',
        emails: [
          { type: 'Personal', 'address': 'karlrixon@gmail.com' },
          { type: 'Work', 'address': 'karl.rixon@maruedr.com' }
        ],
        phones: [
          { type: 'Personal', 'number': '07881 871 123' },
          { type: 'Work', 'number': '07881 871 123' },
        ],
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      }
    ]
  },
  mutations: {
    CONTACT_UPDATE (state, { contact, data }) {
      for (let i = 0; i < state.contacts.length; i++) {
        if (state.contacts[i] === contact) {
          Vue.set(state.contacts, i, Object.assign(contact, data))
          return
        }
      }
    }
  },
  actions: {

  }
})
