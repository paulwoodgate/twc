<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="5000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="@/assets/LathkillRound.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/GrisedaleTarn.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "HomeCarousel"
};
</script>
<style scoped></style>
