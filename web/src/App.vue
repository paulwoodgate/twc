<template>
  <div id="app">
    <AppNavigation />
    <router-view />
  </div>
</template>

<script>
import AppNavigation from "@/components/common/AppNavigation.vue";
export default {
  components: {
    AppNavigation
  }
};
</script>

<style>
AppNavigation {
  margin-bottom: 125px;
}
</style>
