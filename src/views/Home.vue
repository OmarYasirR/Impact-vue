<template>
  <div class="home">
    <div class="bg">
      <div class="container">
        <div class="landing">
          <div class="persons-1">
            <img src="assets/persons-group-1.png" alt="Image" />
          </div>
          <div class="txt">
            <h1>Let's growth your business with us</h1>
            <p>
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa
              qui eos ullam minima quo, consequuntur.
            </p>
            <div class="btn">Get In Touch</div>
          </div>
          <div class="persons-2">
            <img src="assets/persons-group-2.png" alt="Image" />
          </div>
        </div>
        <div class="serv">
          <div class="box">
            <font-awesome-icon icon="layer-group" class="icon" />
            <div>
              <h2>design</h2>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
          <div class="box">
            <font-awesome-icon icon="laptop-file" class="icon" />
            <div>
              <h2>Applications</h2>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
          <div class="box">
            <font-awesome-icon icon="bag-shopping" class="icon" />
            <div>
              <h2>eCommerce</h2>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <choose-us :slice="slice" />
    <div class="grw-bsns">
      <div class="container">
        <div class="text">
          <h2>Why Growing Your Business is Important</h2>
          <p>
            Labore id odit sit optio, voluptas sequi nobis aliquid dignissimos
            iure recusandae vitae nam facere hic quis voluptate cum quae.
            Deserunt, harum, incidunt ex nesciunt est temporibus ipsum, vel rem
            eveniet facere et velit sunt aspernatur eaque quis, dolorem magnam
            quisquam? Facere?
          </p>
          <div class="btn">learn more</div>
        </div>
        <img src="assets/illustration-1.jpg" alt="" />
      </div>
    </div>
    <ourFeatures />
    <getStarted />
    <testimonials />
    <blog :sliceBlog="sliceBlog" />
  </div>
</template>

<script>
import data from "../data/chooseUs.json";
import blogData from "../data/blog.json";

import chooseUs from "@/components/chooseUs.vue";
import ourFeatures from "@/components/ourFeatures.vue";
import getStarted from "@/components/getStarted.vue";
import testimonials from "@/components/testimonials.vue";
import blog from "@/components/blog.vue";

export default {
  name: "Home",
  components: {
    chooseUs,
    ourFeatures,
    getStarted,
    testimonials,
    blog,
  },
  data() {
    return {
      slice: data.slice(1),
      sliceBlog: blogData.slice(3),
    };
  },
};
</script>
