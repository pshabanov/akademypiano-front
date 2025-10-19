<script lang="ts" setup="">

</script>

<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <div class="content__left">
          <h2>Индивидуальные занятия</h2>
          <p class="text">
            <strong>Если у вас уже есть начальная база и знание нотной грамоты, то будем рады видеть вас на
              индивидуальных
              онлайн-занятиях в нашей школе.</strong>
            Занятия проходят на платформе Яндекс Телемост/ВКонтакте/Zoom.
          </p>
          <p class="text">
            На индивидуальных занятиях вы разучиваете свои любимые композиции и двигаетесь конкретно к вашим целям с
            поддержкой наставника. Для нас важно, чтобы вы получали удовольствие не только от результата, но и от
            процесса
            занятий, поэтому на наших уроках всегда царит дружелюбная атмосфера, уважение к желаниям ученика и
            психологический комфорт.
          </p>
        </div>
        <div class="content__right">
          <img src="/src/assets/images/content/individual.jpg" alt="">
        </div>
      </div>
      <div class="content reverse">
        <div class="content__right">
          <img src="/src/assets/images/content/individual-2.jpg" alt="">
        </div>
        <div class="content__left">
          <p class="text">Также на индивидуальных занятиях вы получаете<br> <strong>доступ к авторским аранжировкам Венеры Алкановой</strong></p>
            <p>Поэтому если вы хотите научиться играть свои любимые произведения, аккомпанировать себе под пение и
            устраивать домашние концерты для близких, будем ждать вас на занятиях!
            Занятия проходят на платформе Яндекс Телемост/ВКонтакте/Zoom.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 80px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 60px;

  &.reverse {
    grid-template-columns: auto 1fr;
  }

  &__right {
    border-radius: 30px;
    overflow: hidden;
    width: fit-content;

    & img {
      display: block;
      max-width: 100%;
      max-height: 600px;
    }
  }
}

h2 {
  text-align: center;
  font-size: 45px;
  font-weight: 300;
  line-height: 1.2;
}
</style>
