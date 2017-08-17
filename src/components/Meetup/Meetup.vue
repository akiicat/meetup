<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="primary--text">{{ meetup.title }}</h6>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="info--text">{{ meetup.date }} - Where it takes place</div>
            <div>Well. I've been lucky enough to not do any HTML emails in the last month so I'm not sure when it happened but Sparkup now does something quite weird: whatever stub I use (a,p,table…), the final tag is always a div. For example:</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="primary">
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

