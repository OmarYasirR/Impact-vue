<template>
  <div class="contact-us">
    <div class="conct-box">
      <h2>contact us</h2>
      <p>
        Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
        iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos ullam
        minima quo, consequuntur.
      </p>
    </div>
    <div class="container">
      <form action="">
        <div class="name">
          <div class="fr">
            <label for="first">first name</label>
            <input type="text" id="first" />
          </div>
          <div class="lst">
            <label for="last">last name</label>
            <input type="text" id="last" />
          </div>
        </div>
        <label for="email">email address</label>
        <input type="email" id="email" />
        <label for="message">message</label>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button class="btn">send message</button>
      </form>
      <div class="call-box">
        <div class="comp">
          <font-awesome-icon icon="map-location-dot" class="icon" />
          <div>
            <h3>Company Address</h3>
            <span>155 Market St #101, Paterson, NJ 07505, United States</span>
          </div>
        </div>
        <div class="col-us">
          <font-awesome-icon icon="phone" class="icon" />
          <div>
            <h3>coll us</h3>
            <span>+1 202 2020 200</span>
          </div>
        </div>
        <div class="em">
          <font-awesome-icon icon="envelope" class="icon" />
          <div>
            <h3>email us</h3>
            <span>example@domain.com</span>
          </div>
        </div>
        <div class="cstm">
          <font-awesome-icon icon="life-ring" class="icon" />
          <div>
            <h3>custom support</h3>
            <span>info@support.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
};
</script>
>
