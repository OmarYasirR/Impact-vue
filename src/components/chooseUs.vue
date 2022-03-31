<template>
  <div class="chos-us">
    <div class="container">
      <div class="text">
        <h2>Why You Should Choose Us</h2>
        <div class="box" v-for="(item, i) in slice" :key="i">
          <font-awesome-icon :icon="item.icon" class="i" />
          <div class="tx">
            <h3>{{ item.h3 }}</h3>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
      <img src="assets/about-us-min.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "chooseUs",
  props: ["slice"],
};
</script>
