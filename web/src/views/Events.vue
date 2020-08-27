<template>
  <b-container fluid>
    <b-row class="mb-5">
      <Banner title="Calendar" />
    </b-row>
    <b-card-group deck>
      <b-card
        v-for="event in futureEvents"
        :key="event.id"
        :footer="event.type"
        style="max-width: 15rem; min-width:14rem;"
        class="mb-2"
      >
        <b-link :to="'/event/' + event.id">
          <b-card-img :src="require('../../public/photos/' + event.image)" />
        </b-link>
        <b-card-title>{{ event.title }}</b-card-title>
        <b-card-text>{{ event.date }}</b-card-text>
        <b-card-text>{{ event.length }}</b-card-text>
        <b-card-text>{{ event.leave }}</b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
import Events from "../../public/events.json";
export default {
  name: "Events",
  components: {
    Banner
  },
  computed: {
    futureEvents() {
      function compare(a, b) {
        if (a.sortDate < b.sortDate) return -1;
        if (a.sortDate > b.sortDate) return 1;
        return 0;
      }

      var today = new Date().toJSON().slice(0, 10);
      return this.events.filter(event => event.sortDate >= today).sort(compare);
    }
  },
  data() {
    return {
      events: Events
    };
  }
};
</script>

<style scoped></style>
