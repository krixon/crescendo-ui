<template>
  <v-dialog v-model="open" max-width="600">
    <v-card v-if="contact">
      <v-img
        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
        height="300px"
      >
        <v-layout column fill-height>
          <v-card-title>
            <v-btn dark icon @click="open = false">
              <v-icon>chevron_left</v-icon>
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn dark icon class="mr-3" @click.stop="$emit('edit', contact)">
              <v-icon>edit</v-icon>
            </v-btn>

            <v-btn dark icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-card-title>

          <v-spacer></v-spacer>

          <v-card-title class="white--text pl-5 pt-5">
            <div class="display-1 pl-5 pt-5">{{ contact.name }}</div>
          </v-card-title>
        </v-layout>
      </v-img>

      <v-list two-line>
        <v-list-tile v-for="(phone, i) in contact.phones" :key="'p' + i">
          <v-list-tile-action>
            <v-icon v-if="i === 0" color="primary">phone</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ phone.number }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ phone.type }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon>
              <v-icon color="grey">chat</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider inset></v-divider>

        <v-list-tile v-for="(email, i) in contact.emails" :key="'e' + i">
          <v-list-tile-action>
            <v-icon v-if="i === 0" color="primary">mail</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ email.address }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ email.type }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon>
              <v-icon color="grey">mail</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider inset></v-divider>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="primary">location_on</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>1400 Main Street</v-list-tile-title>
            <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ContactDetailsDialog',
  props: {
    value: Boolean,
    contact: Object
  },
  data () {
    return {
      open: false
    }
  },
  watch: {
    value (v) {
      this.open = v

    },
    open (o) {
      this.$emit('input', o)
    }
  }
}
</script>

<style scoped>

</style>
