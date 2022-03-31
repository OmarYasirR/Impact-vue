<template>
  <div class="blog">
    <div class="container">
      <h2>blog Posts</h2>
      <p>
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit consequuntur.
      </p>
      <div class="blog-box">
        <div class="box" v-for="(item, i) in sliceBlog" :key="i">
          <img :src="item.image" alt="image" />
          <div class="date">{{ item.date }}</div>
          <h3>{{ item.h3 }}</h3>
          <p>{{ item.p }}</p>
          <span>read more ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog",
  props: ["sliceBlog"],
};
</script>
