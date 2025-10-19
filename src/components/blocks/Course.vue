<script  lang="ts" setup="">

</script>

<template>
  <div class="wrapper">
    <h2>Обучение с нуля</h2>
    <p class="text">
      Если вы хотите научиться играть с нуля или восстановить полностью забытые навыки игры, то под этот запрос у нас есть индивидуальное обучение.<br><br>
      Соберем под вас по авторской методике преподавания взрослым с нуля, по которой научились играть уже сотни человек.
    </p>
    <div class="course-overview">
      <div class="course-overview__left">
        <h3>Премиальная программа <br> по фортепиано с нуля</h3>
        <img src="/src/assets/images/content/course.webp" alt="course">
      </div>
      <div class="course-overview__right">
        <strong>- углубленное обучение игре на фортепиано
          с обратной связью Венеры Алкановой.</strong> <br> <br>

        Помимо базовых навыков, на нем вы учитесь играть красивым звуком, свободными мягкими руками и разучиваете некоторые произведения.
        <br>
        <br>
        Начать обучение можно сразу после оплаты.
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 80px;
  text-align: center;
  font-size: 45px;
  font-weight: 500;
}

h3 {
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: -30px;
}

.text {
  text-align: center;
  max-width: 60%;
  margin: 0 auto;
}

.course-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  margin-top: 60px;

  &__left {
    & img {
      width: 100%;
    }
  }
}
</style>
