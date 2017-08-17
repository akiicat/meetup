<template>
  <v-container>

    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large to="/meetups" class="info">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large to="/meetups/new" class="info">Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-carousel style="cursor: pointer;">
        <v-carousel-item
          v-for="meetup in meetups"
          :src="meetup.imageUrl"
          :key="meetup.id"
          @click="onLoadMeetup(meetup.id)">
          <div class="title">
            {{ meetup.title }}
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-layout>

    <v-layout row wrap class="mb-2">
      <v-flex xs12 class="text-xs-center">
        <p>Join out awesome meetupds!</p>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'https://i.imgur.com/rO883eh.jpg', id: 'saf', title: 'Meetup in Taipei' },
          { imageUrl: 'https://i.imgur.com/0IGt7hM.jpg', id: 'saf', title: 'Meetup in Kauhsiung' }
        ]
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>

<style>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, .5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>
