<script  lang="ts" setup="">

</script>

<template>
<h2>С какими запросами<br> к нам обратиться</h2>
  <div class="styled-list">
    <div><span>01 /</span> Научиться играть на фортепиано с нуля</div>
    <div><span>02 /</span> Вспомнить навыки игры после большого перерыва</div>
    <div><span>03 /</span> Разобрать конкретное произведение</div>
    <div><span>04 /</span> Расставить в нотах удобные пальцы и педаль</div>
    <div><span>05 /</span> Развить технику игры и музыкальность</div>
    <div><span>06 /</span> Научиться подыгрывать себе под пение</div>
  </div>
</template>

<style scoped lang="scss">

h2 {
  text-align: center;
  margin-top: 80px;
  font-size: 45px;
  font-weight: 500;
}
.styled-list {
  display: flex;
  gap: 16px 32px;
  margin-bottom: 80px;
  font-family: "Cormorant Garamond", "Georgia", serif;
  font-style: italic;
  font-size: 26px;
  line-height: 1.2;
  color: #1a1a1a;
  width: fit-content;
  flex-wrap: wrap;
}

.styled-list div {
  flex: 1 1 45%;
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
