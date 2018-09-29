<template>
  <v-list-tile class="student-item" avatar @click.stop="$emit('selected', student)">
    <v-list-tile-avatar>
      <img :src="student.avatar">
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title>{{ student.name }}</v-list-tile-title>
    </v-list-tile-content>

    <v-list-tile-action class="actions">
      <v-layout justify-end align-center>
        <v-btn icon @click.stop="">
          <v-icon :color="student.active ? 'teal' : 'grey'">chat</v-icon>
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
  name: 'StudentItem',
  props: {
    student: Object
  }
}
</script>

<style scoped lang="scss">
  .student-item {

    &:hover .actions {
      display: inherit;
    }

    .actions {
      display: none;
    }
  }
</style>
