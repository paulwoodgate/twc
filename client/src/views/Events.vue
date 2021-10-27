<template>
  <b-container fluid>
    <b-row class="mb-5">
      <Banner title="Calendar" />
    </b-row>
    <b-card-group deck>
      <b-card
        v-for="event in events"
        :key="event.id"
        :footer="event.type"
        style="max-width: 15rem; min-width:14rem;"
        class="mb-2"
      >
        <b-link :to="'/event/' + event.id">
          <b-card-img v-if="event.image !== undefined" :src="'/assets/images/' + event.image" />
          <b-card-title>{{ event.title }}</b-card-title>
          <b-card-text>{{ event.formattedDate }}</b-card-text>
          <b-card-text v-if="event.type == 'Walk'">{{ event.formattedLength }}</b-card-text>
          <b-card-text>{{ event.leave }}</b-card-text>
        </b-link>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import DataService from '../services/data-service';

export default {
  name: 'Events',
  components: {
    Banner
  },
  data() {
    return {
      events: []
    };
  },
  async created() {
    this.events = await DataService.getAllEvents();
  }
};
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
