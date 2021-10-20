<template>
  <b-container fluid style="text-align: left">
    <b-row>
      <banner :title="report.formattedDate + ' - ' + report.title" class="mb-5" />
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <p v-for="line in report.report" :key="line" v-html="line"></p>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10"><b>Report by:</b> {{ report.reportBy }}</b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10"><b>Walk Rating:</b> {{ report.walkRating }}</b-col>
      <b-col></b-col>
    </b-row>
    <b-row v-for="collection in report.photoCollections" :key="collection">
      <b-container fluid class="mt-5">
        <b-row>
          <b-col style="text-align: center;">
            <div v-for="photo in collection.photos" :key="photo" style="margin:10px; display: inline-block;">
              <b-img thumbnail :src="'/assets/photos/' + year + '/' + photo.file"></b-img>
              <p>{{ photo.caption }}</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col><b>Photos by:</b> {{ collection.photographer }}</b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import DataService from '../services/data-service';

export default {
  name: 'ReportDetails',
  props: ['id'],
  data() {
    return {
      report: {}
    };
  },
  async created() {
    this.report = await DataService.getReportDetails(this.id);
  },
  computed: {
    year() {
      return this.id.substr(5, 4);
    }
  },
  components: {
    Banner
  }
};
</script>
