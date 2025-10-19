<script  lang="ts" setup="">

</script>

<template>
  <section class="our-values">
    <h2>Наши ценности</h2>
    <div class="our-values__top">
      <img src="/src/assets/images/content/our-values-1.jpg" alt="">
      <div class="">
        <h3><b>Ключевыми ценностями</b> <br> нашей школы являются:</h3>
        <div class="styled-list">
          <div><span>01 /</span> Индивидуальный подход</div>
          <div><span>02 /</span> Профессионализм</div>
          <div><span>03 /</span> Скорость обучения</div>
          <div><span>04 /</span> Забота об учениках</div>
          <div><span>05 /</span> Эстетика</div>
        </div>
      </div>
    </div>
    <div class="our-values__bottom">
      <div class="our-values__bottom-wrapper">
        <p class="text">Мы знаем, как важно в современном мире успевать расслабляться и разгружать психику. Поэтому мы убеждены, что у каждого человека должно быть хобби для души, которое будет наполнять его ресурсом и энергией. Ведь в жизни важно не только работать, но и заниматься тем, что будет приносить удовольствие и радовать нашего внутреннего ребенка.</p>
        <p><b>Поэтому если вы давно хотели добавить творчества и музыки в свою жизнь, будем рады видеть вас в нашей школе!</b></p>
      </div>
      <div class="our-values__bottom-img">
        <img src="/src/assets/images/content/our-values-2.webp" alt="">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.our-values {
  padding: 140px 0 60px 0;

  @media (max-width: 756px) {
    padding: 40px 0;
  }

  h2{
    text-align: center;
    font-size: 45px;
    @media (max-width: 756px) {
      font-size: 30px;
    }
  }

  &__top{
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    gap: 60px;

    @media (max-width: 756px) {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-bottom: 30px;
    }

    & img {
      max-width: 400px;
    }
  }

  &__bottom{
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 60px;

    @media (max-width: 756px) {
      display: flex;
      flex-direction: column-reverse;
      gap: 25px;
    }

  }

  h3 {
    font-size: 22px;
    font-weight: 400;
  }
}

.styled-list {
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-style: italic;
  font-size: 26px;
  line-height: 1.2;
  color: #1a1a1a;
  width: fit-content;

  @media (max-width: 756px) {
    font-size: 22px;
  }
}

.styled-list div {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 6px;
}

.styled-list span {
  color: #8b8b8b;
  font-weight: 300;
  font-style: normal;
  min-width: 50px;
  text-align: right;
}
</style>
