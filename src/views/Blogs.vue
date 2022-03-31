<template>
  <div class="blogs">
    <div class="blg-box">
      <h2>Blog</h2>
      <p>
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
        minima quo, consequuntur.
      </p>
      <div class="btn">get in touch</div>
    </div>

    <blog :sliceBlog="sliceBlog" />
  </div>
</template>

<script>
import blogDta from "../data/blog.json";
import blog from "@/components/blog.vue";

export default {
  data() {
    return {
      sliceBlog: blogDta,
    };
  },
  name: "blogs",
  components: {
    blog,
  },
};
</script>
>
