<template>
  <b-container fluid>
    <b-row align-v="center" class="mb-5">
      <Banner title="About us" />
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="10">
        <p>
          Walks are led by one of the experienced club members who have led many
          walks over many years. Normally there are about 5 - 10 people on a
          walk, enough for some good conversation without being unwieldly. On
          walk days, we meet at points in Peterborough and Stamford, so that we
          minimise the cost of the walks. The only charge we make is to cover
          the cost of the fuel. This naturally varies with the number of walkers
          and the distance we have to travel.
        </p>
        <p>
          If you wish to take part in any of the listed walks then let Alan know
          by e–mail 48 hours before the walk so that we can arrange cars. If
          subsequently you find that you cannot make it, please give us a ring
          or text and let us know. If this is on the morning of the walk then
          ring Alan’s mobile; telephone numbers are in the newsletter.
        </p>
        <p>
          Our main meeting place in Peterborough is the
          <a
            href="https://www.google.com/maps/@52.5690752,-0.2883906,15.04z"
            target="_blank"
          >
            car park opposite The Woodman pub
          </a>
          , which is on Thorpe Road just down from Thorpe Road Police Staion PE3
          6SQ (latitude:longitude = N52°34’4.46”:W0°17’28.02”). For walks where
          we travel north up the A1, a second meeting place is at the
          <a
            href="https://www.google.com/maps/@52.6533001,-0.4953724,13.74z"
            target="_blank"
          >
            Danish Invader pub
          </a>
          in Stamford PE9 2SX (latitude:longitude = N52°39’13.66”:W0°30’04.93”)
          as indicated in walk details. Click on the links for maps of the
          meeting points.
        </p>
        <p>
          Before you join the club you are invited to join us on a walk to see
          what you think. If you aren't an experienced walker re recommend you
          try one of the easier walks first.
        </p>
        <p>
          Members of the Walking Club receive a 10% discount at Go Outdoors at
          the former Stage 2 Freemans, Saville Road Industrial Estate,
          Peterborough, PE3 7PR upon the production of a Walking Club membership
          card.
        </p>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Banner from "@/components/common/Banner.vue";
export default {
  name: "about",
  components: {
    Banner
  }
};
</script>
