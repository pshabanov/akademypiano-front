<script  lang="ts" setup="">

</script>

<template>
  <div class="banner">
    <div class="banner-img">
      <img src="/src/assets/images/logo.webp" alt="">
    </div>
    <h1>Онлайн-школа по фортепиано <br> для взрослых</h1>
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
  background-image: url("/src/assets/images/main_banner.webp");

  & h1 {
    text-align: center;
    vertical-align: middle;
    color: #000000;
    font-size: 45px;
    font-style: normal;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
  }
}

</style>
