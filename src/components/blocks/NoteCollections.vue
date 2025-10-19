<script lang="ts" setup="">

</script>

<template>
  <div class="wrapper">
    <h2>Сборники нот</h2>
    <div class="top">
      <div class="top__text">
        <p class="text">
          Если вы уже начали учиться играть на фортепиано и находитесь в поиске качественных,<br> красивых и удобных нот
          авторских сборника аранжировок:
        </p>
        <p class="text">
          1. Сборник для начинающих <br>
          2. Сборник для начинающих. Часть II <br>
          3. Сборник мелодий о любви <br>
          4. Новогодний сборник
        </p>
      </div>
      <div class="top__img">
        <img src="/src/assets/images/content/note-collection-1.jpg" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="bottom__img">
        <img src="/src/assets/images/content/note-collection-2.webp" alt="">
      </div>
      <div class="bottom__text">
        <p class="text">Серия сборников для начинающих отлично подойдет как новичкам, так и тем, кто хочет восстановить<br>
          забытые навыки игры. В этих сборниках вы найдете легкие ноты популярных каверов и музыки из фильмов с
          расставленными пальцами, педалью и динамикой.</p>
        <p class="text">Сборник мелодий о любви и Новогодний сборник отлично подойдут для продолжающего уровня. В них
          собраны знаменитые песни и саундтреки в насыщенных переложениях Надежды.</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  margin-top: 60px;
}

h2 {
  font-size: 45px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 756px) {
    font-size: 30px;
  }
}

.top {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 100px;
  margin-bottom: 80px;

  @media (max-width: 756px) {
    display: block;
    gap: 20px;
  }

  &__img {
    border-radius: 20px;
    overflow: hidden;
    & img {
      display: block;
      max-height: 500px;
    }
  }
}
.bottom {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 100px;
  margin-bottom: 40px;

  @media (max-width: 756px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }

  &__img {
    border-radius: 20px;
    overflow: hidden;
    & img {
      display: block;
      max-height: 500px;
    }
  }
}
</style>
