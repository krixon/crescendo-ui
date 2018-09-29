<template>
  <v-card>
    <v-list subheader>
      <v-subheader>Recently contacted</v-subheader>
      <StudentItem
        v-for="student in students"
        :key="student.name"
        :student="student"
        @selected="onSelected"
      />
    </v-list>

    <v-divider/>

    <v-list subheader>
      <v-subheader>Students ({{ students.length }})</v-subheader>
      <StudentItem
        v-for="(student, i) in students"
        :key="i"
        :student="student"
        @selected="onSelected"
      />
    </v-list>

    <v-btn color="primary" fab fixed bottom right>
      <v-icon>add</v-icon>
    </v-btn>

    <StudentDetailsDialog v-model="dialog" :student="active"/>

  </v-card>
</template>

<script>
import StudentItem from './StudentItem'
import StudentDetailsDialog from './StudentDetailsDialog'

export default {
  name: 'StudentManager',
  components: {
    StudentItem,
    StudentDetailsDialog
  },
  data () {
    return {
      dialog: false,
      active: null
    }
  },
  computed: {
    students () {
      return this.$store.state.students
    }
  },
  methods: {
    onSelected (student) {
      this.active = student
      this.dialog = true
    }
  }
}
</script>

<style scoped>

</style>
