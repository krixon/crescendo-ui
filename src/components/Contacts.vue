<template>
  <v-layout justify-center>
    <v-flex>
      <v-card>
        <v-list subheader>
          <v-subheader>Students ({{ contacts.length }})</v-subheader>
          <ContactItem
            v-for="(contact, i) in contacts"
            :key="i"
            :contact="contact"
            @select="onSelect"
          />
        </v-list>

        <v-btn color="primary" fab fixed bottom right>
          <v-icon>add</v-icon>
        </v-btn>

        <ContactDetailsDialog v-model="dialogs.details" :contact="active" @edit="onEdit"/>
        <EditContactDialog v-model="dialogs.edit" :contact="active" @updated="update"/>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import EditContactDialog from './EditContactDialog'
import ContactItem from './ContactItem'
import ContactDetailsDialog from './ContactDetailsDialog'

export default {
  name: 'Contacts',
  components: {
    EditContactDialog,
    ContactItem,
    ContactDetailsDialog
  },
  data () {
    return {
      dialogs: {
        details: false,
        edit: true
      },
      stack: [],
      active: null
    }
  },
  computed: {
    contacts () {
      return this.$store.state.contacts
    },
  },
  mounted () {
    this.active = this.contacts.length ? this.contacts[0] : null
  },
  watch: {
    active (c) {
      console.log('manager: active contact changed', c)
    },
    dialogs : {
      handler (current) {
        let opened = null

        Object.keys(current).forEach(name => {
          if (current[name]) {
            opened = name
          }
        })

        if (opened === null) {
          this.stack.pop()
          let head = this.stack.length ? this.stack[this.stack.length - 1] : null;
          if (head !== null) {
            this.dialogs[head] = true
          }
        } else if (this.stack.indexOf(opened) === -1) {
          this.stack.push(opened)
        }
      },
      deep: true
    }
  },
  methods: {
    activate (contact) {
      this.active = contact
    },
    update (contact, data) {
      this.$store.commit('CONTACT_UPDATE', {contact, data})
    },
    openDialog (name) {
      this.closeAllDialogs()
      this.dialogs[name] = true
    },
    closeDialog (name) {
      this.dialogs[name] = false
    },
    closeAllDialogs () {
      Object.keys(this.dialogs).forEach(name => {
        this.closeDialog(name)
      })
    },
    onEdit (contact) {
      this.activate(contact)
      this.openDialog('edit')
    },
    onSelect (contact) {
      this.activate(contact)
      this.openDialog('details')
    }
  }
}
</script>

<style scoped>

</style>
