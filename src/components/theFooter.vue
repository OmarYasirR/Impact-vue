<template>
  <footer>
    <div class="container">
      <div class="box">
        <div class="about">
          <h3>about</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div class="icons">
            <div>
              <font-awesome-icon :icon="['fab', 'instagram']" class="con" />
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'twitter']" class="con" />
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'facebook']" class="con" />
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'linkedin']" class="con" />
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'pinterest']" class="con" />
            </div>
            <div>
              <font-awesome-icon :icon="['fab', 'github']" class="con" />
            </div>
          </div>
        </div>
        <div class="links">
          <h3>links</h3>
          <span>about</span>
          <span>Services</span>
          <span>News</span>
          <span>Careers</span>
          <span>contact</span>
        </div>

        <div class="company">
          <h3>company</h3>
          <span>about</span>
          <span>Services</span>
          <span>News</span>
          <span>Careers</span>
          <span>contact</span>
        </div>
        <div class="contact">
          <h3>contact</h3>
          <span>43 Raymouth Rd. Baltemoer, London 3910</span>
          <span>+1(123)-456-7890</span>
          <span>+1(123)-456-7890</span>
          <span>info@mydomain.com</span>
        </div>
      </div>
      <div class="rights">
        Copyright ©2022. All Rights Reserved. — Coded with love by
        <span>omer yasir</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "theFooter",
};
</script>
