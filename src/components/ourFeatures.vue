<template>
  <div class="features">
    <div class="container">
      <div class="box" v-for="(item, key, i) in fetures" :key="i">
        <font-awesome-icon :icon="item.icon" class="i" />
        <div class="tx">
          <h3>{{ item.h3 }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chooseUs from "../data/chooseUs.json";
export default {
  name: "ourFeatures",
  data() {
    return {
      fetures: chooseUs,
    };
  },
};
</script>
