<template>
  <v-app>
    <v-layout class="text-xs-center">
      <v-flex xs2></v-flex>
      <v-flex xs8 pt-5>
        <v-card raised>
          <v-toolbar dark color="red darken-3">
            <v-toolbar-title>Get the best price!</v-toolbar-title>
          </v-toolbar>
          <v-form v-model="locationForm">
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
          </v-form>
          <v-btn 
            dark 
            color="red darken-3"
            @click="calculate"
            :dark="locationForm" 
            :disabled="!locationForm">
            Calculate
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialogErrorPrice" max-width="290" persistent>
      <v-card>
        <v-card-title class="headline">Error</v-card-title>
        <v-card-text>Unexpected error.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click="dialogErrorPrice = false">Accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogPrice" max-width="290" persistent>
      <v-card>
        <v-card-title class="headline">Success</v-card-title>
        <v-card-text>Your location: {{yourLocation}}</v-card-text>
        <v-card-text>Your desired location: {{desiredLocation}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click="restart">Accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialogErrorPrice: false,
    dialogPrice: false,
    drawer: null,
    locationForm: false,
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
      this.dialogPrice = true
    },
    restart () {
      this.dialogPrice = false
    }
  },
  props: {
    source: String
  }
}
</script>

