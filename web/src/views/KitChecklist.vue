<template>
  <b-container fluid>
    <b-row align-v="center" class="mb-5">
      <Banner title="Kit Checklist" />
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-table-simple small borderless>
          <b-row>
            <b-col>
              <b-td>Items with a</b-td>
              <b-td variant="success">green background</b-td>
              <b-td>are normally carried by the walk leader</b-td>
            </b-col>
          </b-row>
        </b-table-simple>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-table-simple responsive striped small>
          <b-thead head-variant="dark">
            <b-th>Item</b-th>
            <b-th>Hill walking in winter, all walks in bad weather</b-th>
            <b-th>
              Hill walking in summer, all walks in unpredictable weather
            </b-th>
            <b-th>Summer non-hill walking</b-th>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>Walking boots</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td>Thick socks</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td>Spare dry socks</b-td>
              <b-td>Preferred</b-td>
              <b-td>Preferred</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Waterproof jacket</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td>Waterproof overtrousers</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Gaiters</b-td>
              <b-td>Essential</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Winter hat</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
              <b-td>Not necessary</b-td>
            </b-tr>
            <b-tr>
              <b-td>Sun hat</b-td>
              <b-td>Not necessary</b-td>
              <b-td>Preferred</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td>Gloves</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
              <b-td>Not necessary</b-td>
            </b-tr>
            <b-tr>
              <b-td>Extra layers</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td>Survival bag</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td variant="success">Bothy bag</b-td>
              <b-td>Preferred</b-td>
              <b-td>Not necessary</b-td>
              <b-td>Not necessary</b-td>
            </b-tr>
            <b-tr>
              <b-td>Whistle</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td variant="success">First aid kit</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td variant="success">Map</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td variant="success">Map carrying case</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td variant="success">Compass</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td variant="success">GPS</b-td>
              <b-td>Preferred</b-td>
              <b-td>Preferred</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td>Food</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td>Spare high energy food</b-td>
              <b-td>Essential</b-td>
              <b-td>Preferred</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Cold drink</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
            <b-tr>
              <b-td>Hot drink</b-td>
              <b-td>Preferred</b-td>
              <b-td>Optional</b-td>
              <b-td>Not necessary</b-td>
            </b-tr>
            <b-tr>
              <b-td>Towel</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Suntan lotion</b-td>
              <b-td>Not necessary</b-td>
              <b-td>Preferred</b-td>
              <b-td>Preferred</b-td>
            </b-tr>
            <b-tr>
              <b-td>Change of clothes</b-td>
              <b-td>Preferred</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Sit mat</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Insect repellent</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Torch</b-td>
              <b-td>Preferred</b-td>
              <b-td>Preferred</b-td>
              <b-td>Optional</b-td>
            </b-tr>
            <b-tr>
              <b-td>Change of shoes</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
              <b-td>Essential</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
export default {
  name: "KitChecklist",
  components: {
    Banner
  }
};
</script>

<style>
b-th {
  vertical-align: text-top;
}
span {
  background-color: success;
}
</style>
