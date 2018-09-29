import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [
      {
        name: 'Yogi El Doggo',
        emails: [
          { type: 'personal', 'address': 'yogi@example.com' },
          { type: 'work', 'address': 'yogi.work@example.com' }
        ],
        phones: [
          { type: 'personal', 'number': '07881 871 123' },
          { type: 'work', 'number': '07881 871 123' },
        ],
        email: 'yogi@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Archibald Removal',
        emails: [
          { type: 'personal', 'address': 'archie@example.com' },
          { type: 'work', 'address': 'archie.work@example.com' }
        ],
        phones: [
          { type: 'personal', 'number': '07881 871 123' },
          { type: 'work', 'number': '07881 871 123' },
        ],
        email: 'archie@example.com',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
      },
      {
        name: 'Karl Rixon',
        emails: [
          { type: 'personal', 'address': 'karlrixon@gmail.com' },
          { type: 'work', 'address': 'karl.rixon@maruedr.com' }
        ],
        phones: [
          { type: 'personal', 'number': '07881 871 123' },
          { type: 'work', 'number': '07881 871 123' },
        ],
        email: 'karlrixon@gmail.com',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
