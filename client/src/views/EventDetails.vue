<template>
  <b-container fluid style="text-align: left">
    <b-row>
      <banner :title="event.formattedDate + ' - ' + event.title" class="mb-3" />
    </b-row>
    <b-row v-if="event.type == 'Walk'">
      <b-container>
        <b-row>
          <b-col cols="2"></b-col><b-col>{{ event.description[0] }}</b-col>
        </b-row>
        <br />
        <b-row>
          <b-col cols="2">
            <b>Area</b>
          </b-col>
          <b-col>
            {{ event.county }}
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Walk Length</b>
          </b-col>
          <b-col>{{ event.formattedLength }} </b-col>
        </b-row>
        <b-row>
          <b-col cols="2">
            <b>Walk Time</b>
          </b-col>
          <b-col>{{ event.formattedTime }} </b-col>
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
            <b>Distance Away</b>
          </b-col>
          <b-col>
            {{ event.formattedDistance }}
          </b-col>
        </b-row>
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
          <b-col>{{ event.w3wReference }} </b-col>
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
          <b-col>{{ event.formattedCost }} </b-col>
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
import Banner from '@/components/common/Banner.vue';
import DataService from '../data-service';

export default {
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      event: {}
    };
  },
  async created() {
    this.event = await DataService.getEventDetails(this.id);
  },
  components: {
    Banner
  }
};
</script>
