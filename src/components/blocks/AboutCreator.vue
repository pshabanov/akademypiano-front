<script lang="ts" setup="">

</script>

<template>
  <div class="creator">
    <div class="creator__wrapper">
      <div class="creator__img">
        <img alt="creator" src="/src/assets/images/content/creator.jpg">
      </div>
      <div class="creator__list">
        <h2>ОБ ОСНОВАТЕЛЕ</h2>
        <h3>Венера Алканова</h3>
        <div class="_mob">
          <img alt="creator" src="/src/assets/images/content/creator.jpg">
        </div>
        <ul class="creator__list">
          <li>Профессиональная пианистка и преподаватель фортепиано</li>
          <li>Выпускница Санкт-Петербургской консерватории с красным дипломом</li>
          <li>Лауреат Всероссийских и Международных конкурсов</li>
          <li>Опыт преподавания более 13 лет</li>
          <li>Автор современной методики онлайн-обучения взрослых с нуля за 3 недели</li>
          <li>Основательница школы по фортепиано для взрослых «PIANO FOR SOUL»</li>
          <li>Обучила более 100 студентов по всему миру</li>
          <li>Автор 4-х сборников нот для фортепиано</li>
          <li>Создатель самой большой нотной библиотеки в Telegram</li>
          <li>Автор блога @piano.for.soul про игру на фортепиано, эстетику и саморазвитие с аудиторией более 65.000
            человек
          </li>
        </ul>
      </div>
    </div>
    <div class="creator__subtext">
      <p class="title">"Свое предназначение я вижу в том, чтобы бережно открыть взрослым музыкальный мир и показать, что
        научиться играть на фортепиано может каждый"</p>
      <p class="text">Я хочу, чтобы музыка служила людям опорой и поддержкой по жизни, была «островком безопасности» и
        занятием, где можно побыть наедине с собой. Ведь игра на фортепиано подобна терапии — когда ты исполняешь
        любимое произведение, ты проживаешь в нем все свои эмоции и после чувствуешь себя полностью обновленным».</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.creator {
  margin-top: 60px;

  &__wrapper {
    display: flex;
    gap: 60px;
    margin-bottom: 60px;

    @media (max-width: 756px) {
      display: block;
    }
  }

  &__img {

    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 756px) {
      display: none;
    }

    & img {
      max-width: 20vw;
      display: block;
    }
  }

  &__list {
    list-style: circle;
    margin-left: 20px;
    font-size: 18px;
    @media (max-width: 756px) {
      margin-left: 0;
      li {
        margin-left: 20px;
      }
    }
  }

  h2 {
    font-size: 45px;
    font-weight: 600;

    @media (max-width: 756px) {
      font-size: 30px;
    }
  }

  h3 {
    font-size: 30px;
  }

  .title {
    width: 75%;
    font-size: 28px;
    font-weight: 300;
    font-style: italic;
    @media (max-width: 756px) {
      width: auto;
      font-size: 24px;
    }
  }
  .text {
    width: 75%;
    @media (max-width: 756px) {
      width: auto;
    }
  }
}

._mob {
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 40px;
  img {
    display: block;
    width: 100%;
  }
}
</style>
