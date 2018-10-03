<template>
  <v-list-tile class="contact-item" avatar @click.stop="$emit('select', contact)">
    <v-list-tile-avatar>
      <img :src="contact.avatar">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>{{ contact.name }}</v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action class="actions">
      <v-layout justify-end align-center>
        <v-btn icon @click.stop="">
          <v-icon :color="contact.active ? 'teal' : 'grey'">chat</v-icon>
        </v-btn>
        <v-btn icon @click.stop="" class="ml-1">
          <v-icon color="grey">mdi-dots-vertical</v-icon>
        </v-btn>
      </v-layout>
    </v-list-tile-action>
  </v-list-tile>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    contact: Object
  }
}
</script>

<style scoped>

</style>
