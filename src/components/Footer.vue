<script lang="ts" setup="">

</script>

<template>
  <div class="footer">
    <div class="wrapper">
      <p class="text">Соцсети, где можно поближе познакомиться с преподавателями школы, посмотреть результаты учеников, узнать много полезного про игру на фортепиано и вдохновиться на занятия.</p>
      <p class="bold">Подписывайтесь, чтобы следить за новостями и первыми узнавать о новых проектах!</p>
    </div>
    <div class="social">
      <a href="https://www.instagram.com/akademikpiyano?utm_source=qr&igsh=cXR1OG54MW1hdTl3" target="_blank" rel="noreferrer noopener" class="link">
        <img src="/src/assets/images/icons/instagram.webp" alt="">
      </a>
      <a href="https://l.instagram.com/?u=https%3A%2F%2Ft.me%2F%2BTFtUdFsLxCgyNWRk%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAadmeU3T_5wAN2FlRalQ1-IvtLjDhl6C82NFmFXzsy9V5hUcQC5SHTWFteGowg_aem_lKZnaUfxp17IT3ycyCVWag&e=AT2K_vMobsvogW1wLotbgqwus2kGo0XiknwahPgz5sAuLmn7dj1TkfnDNzYjyGNusn-qNPeOuVXAnzbaSErGFYOot6LfwqFsjK77Qrs6Zg" target="_blank" rel="noreferrer noopener" class="link">
        <img src="/src/assets/images/icons/telegram.webp" alt="">
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding: 120px 0;
  color: #fff;
  text-align: center;
  background-color: #be9e76;
  
  @media (max-width: 756px) {
   padding: 60px 0;
  }

  .wrapper {
    max-width: 800px;
  }
}

.text, .bold {
  font-size: 22px;
  line-height: 1;

  @media (max-width: 756px) {
    font-size: 20px;
  }
}

.social {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  a {
    display: inline-block;
  }

  img {
    display: block;
  }
}
</style>
