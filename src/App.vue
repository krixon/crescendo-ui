<template>
  <v-app id="app">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.mdAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>

          <v-divider v-else-if="item.divider" :key="item.divider"/>

          <v-list-group
            v-else-if="item.children"
            v-model="item.open"
            :key="item.text"
            :prepend-icon="item.open ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon :color="child.color ? child.color : 'gray'">{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action v-if="child.actions">
                <v-layout justify-end>
                  <v-icon v-for="(action, i) in child.actions" :key="i" color="grey">{{ action.icon }}</v-icon>
                </v-layout>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-tile v-else :key="item.text" :to="item.link">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      color="primary"
      dark
      app
      fixed
    >
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Crescendo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        label="Search"
        prepend-inner-icon="search"
        class="hidden-sm-and-down"
        style="max-width: 720px"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', link: '/' },
      { icon: 'contacts', text: 'Students', link: '/students' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'lightbulb_outline', text: 'Notes' },
      { icon: 'touch_app', text: 'Reminders' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        open: false,
        children: [
          {
            icon: 'label',
            color: 'purple',
            text: 'Adult',
            actions: [
              { icon: 'edit' },
              { icon: 'delete' }
            ]
          },
          {
            icon: 'label',
            color: 'blue',
            text: 'Child',
            actions: [
              { icon: 'edit' },
              { icon: 'delete' }
            ]
          },
          { icon: 'add', text: 'Create label' }
        ]
      },
      { icon: 'mdi-import', text: 'Import' },
      { icon: 'mdi-export', text: 'Export' },
      { icon: 'print', text: 'Print' },
      { divider: true },
      { icon: 'settings', text: 'Settings' },
      { icon: 'help', text: 'Help' },
      { icon: 'info', text: 'About', link: '/about' },
      { icon: 'keyboard', text: 'Keyboard shortcuts' }
    ]
  })
}
</script>

<style lang="scss">
  .v-navigation-drawer {
    .v-list__tile {
      .v-list__tile__action:last-child {
        display: none;
      }
      &:hover .v-list__tile__action:last-child {
        display: inherit;
      }
    }
  }
</style>
