<template>
  <v-dialog persistent v-model="open" max-width="640">

    <v-toolbar color="primary" dark>
      <v-btn icon @click="open = false">
        <v-icon>chevron_left</v-icon>
      </v-btn>
      <v-toolbar-title>Edit Contact</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="reset">
        <v-icon>mdi-restore</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card v-if="bound">
      <v-card-text>
        <v-form ref="form" v-model="valid">

          <v-layout row align-center>
            <v-flex justify-start>
              <v-icon color="primary">person</v-icon>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="bound.name"
                :rules="nameRules"
                :counter="100"
                label="Name"
                required
              ></v-text-field>
            </v-flex>
            <v-flex/>
          </v-layout>

          <v-layout
            align-center
            v-for="(phone, i) in bound.phones"
            :key="'phone-' + i"
          >
            <v-flex sm1 justify-start>
              <v-icon color="primary" v-if="i === 0">phone</v-icon>
            </v-flex>
            <v-flex sm9>
              <v-layout>
                <v-flex sm4>
                  <v-select
                    v-model="bound.phones[i].type"
                    :items="contactTypes"
                    :rules="[v => !!v || 'Type is required']"
                    label="Type"
                    required
                  ></v-select>
                </v-flex>
                <v-flex sm7 offset-sm1>
                  <v-text-field
                    v-model="bound.phones[i].number"
                    label="Phone"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex sm2>
              <v-layout justify-start>
                <v-btn icon class="mr-0" @click="removePhone(i)"><v-icon color="grey">delete</v-icon></v-btn>
                <v-btn icon v-if="i === bound.phones.length - 1" @click="addPhone()"><v-icon color="grey">add</v-icon></v-btn>
              </v-layout>
            </v-flex>
          </v-layout>

          <v-layout
            align-center
            v-for="(email, i) in bound.emails"
            :key="'email-' + i"
          >
            <v-flex sm1 justify-start>
              <v-icon color="primary" v-if="i === 0">email</v-icon>
            </v-flex>
            <v-flex sm9>
              <v-layout>
                <v-flex sm4>
                  <v-select
                    v-model="bound.emails[i].type"
                    :items="contactTypes"
                    :rules="[v => !!v || 'Type is required']"
                    label="Type"
                    required
                  ></v-select>
                </v-flex>
                <v-flex sm7 offset-sm1>
                  <v-text-field
                    v-model="bound.emails[i].address"
                    :rules="emailRules"
                    label="Email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex sm2>
              <v-layout justify-start>
                <v-btn icon class="mr-0" @click="removeEmail(i)"><v-icon color="grey">delete</v-icon></v-btn>
                <v-btn icon v-if="i === bound.emails.length - 1" @click="addEmail()"><v-icon color="grey">add</v-icon></v-btn>
              </v-layout>
            </v-flex>
          </v-layout>

          <v-card-actions>
            <v-btn @click="open = false">Cancel</v-btn>
            <v-btn color="primary" :disabled="!valid" @click="submit">Save</v-btn>
          </v-card-actions>

        </v-form>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'EditContactDialog',
  // TODO: Mixin shared by this and ContactDetailsDialog
  props: {
    value: Boolean,
    contact: Object
  },
  data () {
    return {
      open: false,
      valid: true,
      bound: null,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 100) || 'Name must be less than 100 characters long'
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      contactTypes: [
        'Personal',
        'Work',
        'Other',
      ]
    }
  },
  mounted () {
    this.reset()
  },
  methods: {
    addEmail () {
      this.bound.emails.push({
        type: 'Personal',
        address: ''
      })
    },
    removeEmail (index) {
      this.bound.emails.splice(index, 1)
    },
    addPhone () {
      this.bound.phones.push({
        type: 'Personal',
        address: ''
      })
    },
    removePhone (index) {
      this.bound.phones.splice(index, 1)
    },
    submit () {
      console.log('submit')
      if (this.$refs.form.validate()) {
        this.$emit('updated', this.contact, this.bound)
        this.open = false
      }
    },
    reset () {
      this.bound = JSON.parse(JSON.stringify(this.contact)); // FIXME: Better way to deep clone?
    }
  },
  watch: {
    value (v) {
      this.open = v
    },
    open (open) {
      this.$emit('input', open)
      if (open) {
        this.reset()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  /deep/ form {
    .layout > .flex {
      &:first-child {
        width: 48px;
        flex-grow: 0;
      }
      &:last-child {
        flex-grow: 0;
      }
    }
  }
</style>
