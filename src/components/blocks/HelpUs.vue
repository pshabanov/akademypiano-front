<script  lang="ts" setup="">

</script>

<template>
<div class="help-us">
  <h2>ИГРА НА ФОРТЕПИАНО ПОМОГАЕТ НАМ</h2>
  <div class="help-us__list">
    <div class="help-us__list-item">Расслабиться и снять стресс</div>
    <div class="help-us__list-item">Побыть наедине с собой</div>
    <div class="help-us__list-item">Прожить эмоции через музыку</div>
    <div class="help-us__list-item">Наполниться ресурсом и энергией</div>
    <div class="help-us__list-item">Разгрузить психику и переключиться от работы</div>
    <div class="help-us__list-item">Поднять самооценку</div>
    <div class="help-us__list-item">Отдохнуть от быта, рутины и суеты</div>
    <div class="help-us__list-item">Создать новые нейронные связи и отодвинуть болезнь Альцгеймера</div>
  </div>
</div>
</template>

<style scoped lang="scss">
.help-us {
  margin-top: 60px;
  margin-bottom: 80px;
  h2 {
    text-align: center;
    font-size: 45px;
    font-weight: 600;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px 32px;

    &-item{
      flex: 1 1 45%;
      background-color: #f8f4ef;
      color: #2b2b2b;
      font-size: 18px;
      text-align: center;
      padding: 20px 24px;
      border-radius: 10px;
      box-shadow: 0 0 0 1px #f1ede8 inset;
    }
  }
}
</style>
