<template>
  <div class="testm">
    <div class="container">
      <h2>Testimonials</h2>
      <div class="cont" key="i">
        <div
          v-for="(costmer, i) in Testimonials"
          :key="i"
          class="box"
          :style="{ zIndex: [i + 1 === active ? '10' : ''] }"
        >
          <img :src="costmer.image" alt="" />
          <h3>{{ costmer.name }}</h3>
          <div class="token">costmer</div>
          <div class="opin">
            {{ costmer.opinion.substring(0, 80) }}
          </div>
        </div>
      </div>
      <ul class="bullets">
        <li
          v-for="(costmer, i) in Testimonials"
          :key="i"
          :class="[i + 1 == active ? 'active' : '']"
          @click="naving(i)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import testimonials from "../data/costmers.json";
export default {
  name: "testimonials",
  data() {
    return {
      Testimonials: testimonials,
      active: 1,
      wait: false,
    };
  },
  methods: {
    contWidth() {
      let length = 0;
      for (let i = 0; i < this.Testimonials.length; i++) {
        length += 1;
      }
      return length;
    },
    mov() {
      setInterval(
        () => {
          this.active += 1;
          if (this.active === this.contWidth() + 1) {
            this.active = 1;
          }
          this.wait = true;
        },
        this.wait ? 6000 : 3000
      );
    },
    // navigate through bultts
    naving(i) {
      this.wait = true;
      this.active = i + 1;
    },
  },
  mounted() {
    this.mov();
  },
};
</script>
