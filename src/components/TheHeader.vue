<template>
  <div class="head">
    <div class="container">
      <h3 class="logo">Impact</h3>
      <nav>
        <font-awesome-icon icon="bars" class="i" @click="increaceHeight()" />
        <ul ref="ul">
          <router-link to="/" tag="li" exact>
            <a @click="decreaceHeight()" href="">Home</a>
          </router-link>
          <router-link tag="li" to="/servece">
            <a @click="decreaceHeight()" href="">Serveces</a>
          </router-link>
          <router-link tag="li" to="/blog">
            <a @click="decreaceHeight()" href="">Blogs</a>
          </router-link>
          <router-link to="/about" tag="li">
            <a @click="decreaceHeight()" href="">About</a>
          </router-link>
          <router-link to="/ContactUs" tag="li">
            <a @click="decreaceHeight()" href="">Contacts Us</a>
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // const ul = this.$refs.ul
  },
  name: "TheHeader",
  data() {
    return {
      // height: 0,
      ul: this.$refs.ul,
    };
  },
  methods: {
    increaceHeight() {
      let height = 0;
      const handler = setInterval(() => {
        height += 1;
        if (height === 350) {
          clearInterval(handler);
        }
        this.$refs.ul.style.height = height + "px";
      }, 1);
    },
    decreaceHeight() {
      let height = parseInt(this.$refs.ul.style.height);
      const handler = setInterval(() => {
        height -= 1;
        if (height < 0) {
          clearInterval(handler);
        }
        this.$refs.ul.style.height = height + "px";
      }, 1);
    },
  },
};
</script>
