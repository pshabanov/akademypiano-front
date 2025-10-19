<script  lang="ts" setup="">

</script>

<template>
  <div class="banner">
    <div class="banner-img">
      <img src="/src/assets/LOGO.png" alt="">
    </div>
    <h1>Online Piyano Eğitmenlik Eğitimi</h1>
  </div>
</template>

<style scoped lang="scss">
.banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/src/assets/images/banner.jpg");

  & h1 {

    text-align: center;
    vertical-align: middle;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    background-color: #000;
    font-size: 45px;
    font-style: normal;
    background-position: center center;
    border-color: transparent;
    border-style: solid;

    @media (max-width: 756px) {
      font-size: 30px;
    }
  }
}

.banner-img img {
  max-width: 250px;
}

</style>
