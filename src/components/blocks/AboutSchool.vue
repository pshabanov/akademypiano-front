<script lang="ts" setup="">

</script>

<template>
  <section class="about">
    <div class="about-content">
      <h2>О ШКОЛЕ</h2>
      <p class="title">
        <b>Онлайн-школа «PIANO FOR SOUL»</b><br>— это место, где взрослые по всему миру<br> учатся играть на фортепиано
        для души.</p>
      <p class="text">Если вы всю жизнь мечтали играть на пианино, но в детстве вас не отдали в музыкальную школу — это не
        повод ставить крест на своей мечте. Научиться играть можно в любом возрасте, вне зависимости от музыкального слуха
        и длины пальцев. Сейчас обучение на фортепиано стало доступным каждому, а занимаясь в нашей школе, вам даже не
        потребуется выходить из дома.</p>
      <p class="text">
        <b>Онлайн-формат позволяет экономить время на дорогу и заниматься в своей комфортной домашней обстановке!</b>
      </p>
    </div>
    <div class="about-img">
      <img src="/src/assets/images/content/about-img.jpg" alt="">
    </div>
  </section>
</template>

<style scoped lang="scss">
.about {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 120px;
  padding: 100px 0 60px 0;

  @media (max-width: 756px) {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px 0 30px 0;
  }

   &-img {
     border-radius: 12px;
     overflow: hidden;
     img {
       display: block;
       max-height: 500px;
     }
   }
}

h2 {
  font-size: 45px;
  @media (max-width: 756px) {
    font-size: 30px;
  }
}
</style>
