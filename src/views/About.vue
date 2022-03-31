<template>
  <div class="about-us">
    <div class="abot-box">
      <h2>about</h2>
      <p>
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
        minima quo, consequuntur.
      </p>
      <div class="btn">get in touch</div>
    </div>
    <our-features />
    <getStarted />
    <chooseUs :slice="slice" />
    <testimonials />
  </div>
</template>
<script>
import chosData from "../data/chooseUs.json";

import ourFeatures from "@/components/ourFeatures";
import getStarted from "@/components/getStarted";
import chooseUs from "@/components/chooseUs";
import testimonials from "@/components/testimonials";
export default {
  name: "about",
  components: {
    ourFeatures,
    getStarted,
    chooseUs,
    testimonials,
  },
  data() {
    return {
      slice: chosData,
    };
  },
};
</script>
