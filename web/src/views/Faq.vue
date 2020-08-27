<template>
  <b-container fluid>
    <b-row class="mb-5">
      <Banner title="Frequently Asked Questions" />
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <b-list-group class="text-left">
          <b-list-group-item>
            <h4>What should I do if I want to come on a walk?</h4>
            <p>
              You should contact us first instance by clicking on the “Contact
              us” button on our web site. We will respond as soon as we can. Let
              us know that which walk that you want to come on before the
              Thursday before the walk, so that we know to expect you at one of
              the meeting places. If you are an inexperienced walker you should
              choose one of the easier walks to start with.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>What type of walks do you do?</h4>
            <p>
              Our walk programme is described on our website. In general we walk
              between 8 and 14 miles in locations up to a 2 hour drive from
              Peterborough. The walks cover a range of difficulties from flat
              walking in the Fens to the hills in the Peak District. We arrange
              weekends away where the walking may be more challenging.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>Do I have to join?</h4>
            <p>
              You do not have to join for your first walk. We hope you will come
              along and see what a lovely bunch of people we are before you
              join.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>Why do you charge for walks?</h4>
            <p>
              The “charge” identified for each walk is an estimate of the shared
              cost of petrol to drive to the walk and back. This cost varies,
              depending on how many people share a car.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>Do I need a car?</h4>
            <p>
              Our Club relies on members willing to drive to walks which are
              usually a car ride away. So if you have a car, we would hope you
              would take a turn to drive. Obviously, if none of our members had
              cars that they were happy to use, then we would need to change the
              type of walking we do. Generally we have a sufficient proportion
              of members who are willing to drive so we are happy to welcome
              non–drivers.
            </p>
            <p>
              You will need to find your own way to one of our meeting points.
              The main meeting place is in Peterborough. When we are travelling
              northwards, we also have a meeting place in Stamford and by
              arrangement, Market Deeping when travelling in that direction.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>What equipment do I need?</h4>
            <p>
              As a minimum we expect you to have some strong walking shoes and
              some waterproofs. You will need some lunch and a drink. In the
              summer you will need more drink than you think – maybe between one
              and a half and three litres. What you need varies depending on
              time of year and where we are walking.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>What is the average age of members?</h4>
            <p>
              Our age range is from late twenties to seventies, but the majority
              of our walkers are between forty five and sixty five.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>Can I bring my dog?</h4>
            <p>
              You may bring your dog providing you keep it under control and you
              use you own car to transport it. Some members of our group are not
              comfortable with dogs, so you will need to be sensitive to this in
              controlling your dog.
            </p>
          </b-list-group-item>
          <b-list-group-item>
            <h4>Do you walk all year round?</h4>
            <p>
              Yes. Our walks are programmed at regular intervals throughout the
              year. We will walk in any conditions. The only constraint there
              has been in the past, is where snow and ice is, or is forecast to
              be, so bad that road conditions are too dangerous to travel. In
              this case we might undertake a local walk instead.
            </p>
          </b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
export default {
  name: "FAQ",
  components: {
    Banner
  }
};
</script>
