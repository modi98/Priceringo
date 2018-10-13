<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
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
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
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
              @click=""
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="">
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
    <v-content>
      <v-toolbar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        color="red darken-3"
        dark
        app
        fixed
      >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">Priceringo</span>
        </v-toolbar-title>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-layout class="text-xs-center">
        <v-flex xs2></v-flex>
        <v-flex xs8 pt-5>
          <v-card raised>
            <v-toolbar dark color="red darken-3">
              <v-toolbar-title>Get the best price!</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                label="Your location"
                v-model="yourLocation"
                required :rules="[() => yourLocation.length > 0 || 'Insert a valid location.']"
              ></v-text-field>
              <v-text-field
                label="Desired locaiton"
                v-model="desiredLocation"
                required :rules="[() => desiredLocation.length > 0 || 'Insert a valid location.']"
              ></v-text-field>
            </v-card-text>
            <v-btn dark color="red darken-3" @click="calculate">Calculate</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    yourLocation: '',
    desiredLocation: '',
    items: [
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' }
    ]
  }),
  methods: {
    calculate () {
      console.log('Your location: ' + this.yourLocation)
      console.log('Desired location: ' + this.desiredLocation)
      this.yourLocation = ''
      this.desiredLocation = ''
    }
  },
  props: {
    source: String
  }
}
</script>
