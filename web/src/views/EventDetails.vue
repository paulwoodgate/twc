<template>
  <b-container fluid style="text-align: left">
    <b-row>
      <banner :title="event.date + ' - ' + event.title" class="mb-3" />
    </b-row>
    <b-row v-if="event.type == 'Walk'">
      <b-container>
        <b-row>
          <b-col cols="2"></b-col><b-col>{{ event.description }}</b-col>
        </b-row>
        <br />
        <b-row>
          <b-col cols="2">
            <b>Area</b>
          </b-col>
          <b-col>
            {{ event.area }}
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Walk Length</b>
          </b-col>
          <b-col>{{ event.length }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Walk Time</b>
          </b-col>
          <b-col>{{ event.walkTime }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Ascent</b>
          </b-col>
          <b-col>{{ event.ascent }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Terrain</b>
          </b-col>
          <b-col>{{ event.terrain }} </b-col>
        </b-row>
        <b-row v-if="event.source.url !== ''">
          <b-col cols="2">
            <b>Walk Map</b>
          </b-col>
          <b-col>
            <a :href="event.source.url" target="_blank">
              {{ event.source.name }}
            </a>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Grading</b>
          </b-col>
          <b-col>{{ event.grading }} </b-col>
        </b-row>
        <br />
        <b-row>
          <b-col cols="2">
            <b>Leave From</b>
          </b-col>
          <b-col>{{ event.leave }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Park at</b>
          </b-col>
          <b-col>{{ event.startFrom }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>3 Word Address</b>
          </b-col>
          <b-col>{{ event.w3wAddress }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Map Reference</b>
          </b-col>
          <b-col>{{ event.mapReference }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Estimated Fuel Cost</b>
          </b-col>
          <b-col>{{ event.fuelCost }} </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row v-else-if="event.type == 'Social'">
      <b-container>
        <b-row>
          <b-col cols="2">Location</b-col>
          <b-col>{{ event.leave }}</b-col>
        </b-row>
        <br />
        <b-row>
          <b-col>
            <p v-for="line in event.description" :key="line" v-html="line"></p>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row v-else>
      <b-container>
        <b-row>
          <b-col>
            <p v-for="line in event.description" :key="line" v-html="line"></p>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
import Events from "../../public/events.json";
export default {
  name: "EventDetails",
  props: ["id"],
  data() {
    return {
      events: Events
    };
  },
  computed: {
    event() {
      var e = this.events.find(event => event.id === this.id);
      return e;
    }
  },
  components: {
    Banner
  }
};
</script>
