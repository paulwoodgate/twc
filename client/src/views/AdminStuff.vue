<template>
  <b-container style="text-align:left" fluid>
    <b-row class="mb-5">
      <Banner title="Admin Stuff" />
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <h4>Mileage Payments</h4>
        <p>
          Assistance with fuel costs is given to drivers based on the following (last review date April 2017).
        </p>
        <ul>
          <li>Private petrol car – 20.0p</li>
          <li>Private diesel car – 18.5p</li>
          <li>Company petrol car – 15.5p</li>
          <li>Company diesel car – 14.0p</li>
        </ul>
        <h4>Walk/Walker Grading</h4>
        <b-table-simple striped>
          <b-thead head-variant="dark">
            <b-th>Grade</b-th>
            <b-th>Typical Walk Parameters</b-th>
            <b-th>Walker Attributes</b-th>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>Standard</b-td>
              <b-td>
                Good level paths and tracks; Length 8 to 12 miles; Climbing up to 300m; Height – below 400m
              </b-td>
              <b-td>
                Reasonable fitness; Reasonable walk speed for terrain; Suitable equipment for conditions
                likely on low level walks.
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>Moderate</b-td>
              <b-td>
                Undulating paths and tracks, some cross country; Length 10 to 12 miles; Climbing up to 600m;
                Max. height – around 600m.
              </b-td>
              <b-td>
                Good fitness and agility; Reasonable walk speed for terrain; Equipment suitable for higher
                level walks in all conditions.
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>Strenuous</b-td>
              <b-td>
                Rugged cross country; Some scrambling and/or boggy ground; Length 10 to 15 miles; Climbing up
                to 1200m; Max. height – around 800m.
              </b-td>
              <b-td>
                Good fitness and agility; Reasonable walk speed for terrain; Not afraid of heights and sudden
                drops; Equipment suitable for higher level walks in all conditions.
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>Challenging</b-td>
              <b-td>
                Rugged cross country; Significant scrambling and/or boggy ground; Length 15 to 20 miles;
                Climbing over 1200m; Height – above 800m.
              </b-td>
              <b-td>
                High level of fitness and agility; Reasonable walk speed for terrain; Comfortable with heights
                and sudden drops; High standard of equipment.
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <h4>Insurance</h4>
        <p>
          The committee, appointed walk leaders and members on our approved walks are covered for civil
          liability (which includes public liability), as per follows: Public Liability Bodily injury to third
          parties and/or damage to third party property arising out of the insured activities. Cover includes
          member to member liability, damage to leased or rented premises, trespass, nuisance and pollution.
          The interest of principals (land/property owners etc) is also included.
        </p>
        <h4>General Data Protection Regulation (GDPR)</h4>
        <p>
          For the purposes of the General Data Protection Regulation the Club acts as a controller of personal
          data furnished by its members. The personal data concerned are those provided by members on
          membership application forms, any other information provided in connection with any walks, events
          and/or activities organised by the Club and photographs taken during such walks, events and/or
          activities. Such personal data are used in pursuit of the Club's legitimate interests, namely the
          planning, organisation, and delivery of walks, events and activities and communication with members.
          Names and addresses may need to be disclosed to organisations providing travel, accommodation or
          other services in connection with the Club's activities and photographs may appear on the Club
          website, but personal data will not otherwise be disclosed without consent and will not be kept once
          a member has indicated his or her wish to cease to be a member.
        </p>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Banner from '@/components/common/Banner.vue';
export default {
  components: {
    Banner
  }
};
</script>
