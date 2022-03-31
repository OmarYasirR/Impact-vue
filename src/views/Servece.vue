<template>
  <div class="services">
    <div class="bg">
      <div class="box">
        <h2>serveces</h2>
        <p>
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
          iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
          minima quo, consequuntur.
        </p>
        <div class="btn">get in touch</div>
      </div>
    </div>
    <ourFeatures />
    <getStarted />
    <div class="srvs">
      <div class="container srv">
        <div class="box" v-for="(item, i) in serv" :key="i">
          <font-awesome-icon :icon="item.icon" class="icon" />
          <h3>{{ item.h3 }}</h3>
          <p>{{ item.p }}</p>
        </div>
      </div>
      <choose-us :slice="slice" />
    </div>
  </div>
</template>

<script>
import data from "../data/chooseUs.json";
import services from "../data/services.json";
import ourFeatures from "@/components/ourFeatures.vue";
import getStarted from "@/components/getStarted.vue";
import chooseUs from "@/components/chooseUs.vue";
export default {
  name: "Servece",
  data() {
    return {
      serv: services,
      slice: data,
    };
  },
  components: {
    ourFeatures,
    getStarted,
    chooseUs,
  },
};
</script>
