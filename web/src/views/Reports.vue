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
          style="width: 100px; margin-left:5px;"
        ></b-form-select>
      </b-col>
    </b-row>
    <b-card-group deck>
      <b-card
        v-for="report in sortedReports"
        :key="report.id"
        style="max-width: 15rem; min-width:12rem;"
      >
        <b-link :to="'/report/' + report.id">
          <b-card-img
            :src="
              require('../../public/photos/' +
                selectedYear +
                '/' +
                report.coverPhoto)
            "
          >
          </b-card-img>
        </b-link>
        <b-card-title>{{ report.title }}</b-card-title>
        <b-card-text>{{ report.date }}</b-card-text>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
export default {
  name: "Reports",
  components: {
    Banner
  },
  computed: {
    sortedReports() {
      var reports = require(`../../public/reports${this.selectedYear}.json`);
      function compare(a, b) {
        if (a.sortDate < b.sortDate) return 1;
        if (a.sortDate > b.sortDate) return -1;
        return 0;
      }

      return reports.filter(r => r).sort(compare);
    },
    availableYears() {
      return [2020, 2019];
    }
  },

  data() {
    return {
      selectedYear: 2020
    };
  },

  mounted() {
    this.selectedYear = new Date().toJSON().slice(0, 4);
  }
};
</script>

<style scoped></style>
