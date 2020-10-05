<template>
  <b-container fluid>
    <b-row class="mb-3">
      <Banner title="Reports" />
    </b-row>
    <b-row class="mb-3">
      <b-col style="text-align: left;">
        Year:
        <b-form-select
          v-model="selectedYear"
          :options="availableYears"
          v-on:input="yearSelected"
          style="width: 100px; margin-left:5px;"
        ></b-form-select>
      </b-col>
    </b-row>
    <b-card-group deck>
      <b-card v-for="report in reports" :key="report.id" style="max-width: 15rem; min-width:12rem;">
        <b-link :to="'/report/' + report.id">
          <b-card-img :src="require('../../public/photos/' + selectedYear + '/' + report.coverPhoto)">
          </b-card-img>
        </b-link>
        <b-card-title>{{ report.title }}</b-card-title>
        <b-card-text>{{ report.formattedDate }}</b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
import DataService from '../data-service';

export default {
  name: 'Reports',
  components: {
    Banner
  },

  data() {
    return {
      availableYears: [],
      selectedYear: 2020,
      reports: []
    };
  },

  async created() {
    this.availableYears = await DataService.getReportYears();
    this.availableYears = this.availableYears.reverse();
    this.selectedYear = this.availableYears[0];
    this.reports = await DataService.getYearReports(this.selectedYear);
  },

  methods: {
    async yearSelected() {
      this.reports = [];
      this.reports = await DataService.getYearReports(this.selectedYear);
    }
  }
};
</script>

<style scoped></style>
