<template>
  <v-layout justify-center>
    <v-flex>
      <StudentManager/>
    </v-flex>
  </v-layout>
</template>

<script>
import StudentManager from '../components/StudentManager.vue'

export default {
  name: 'Students',
  components: {
    StudentManager
  }
}
</script>
