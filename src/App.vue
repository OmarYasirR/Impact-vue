/* eslint-disable */
<template>
  <the-header />
  <router-view />
  <theFooter />
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import theFooter from "@/components/theFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    theFooter,
  },
};
</script>
