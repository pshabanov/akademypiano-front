<script lang="ts" setup="">
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import type { Content } from "@/entity/content.model.ts";
import ky from "ky";
import ContentBox from "@/components/ContentBox.vue";
import MainBanner from "@/components/MainBanner.vue";
import AboutSchool from "@/components/AboutSchool.vue";
import Mission from "@/components/Mission.vue";
import OurValues from "@/components/OurValues.vue";

const content = ref<Content>(
    {
      "new-slug": {
        value: '',
        is_active: false
      },
      "new-slug2" : {
        value: '',
        is_active: false
      }
    }
);

ky('/api/content', {
  method: "get",
  credentials: "include"
})
    .json()
    .then((data: Content) => {
      content.value = data;
    })

const changeContentBox = (content) => {
  console.log(content)
}

</script>

<template>
  <MainBanner />
  <main class="wrapper">
    <AboutSchool />
    <Mission />
    <OurValues />
    <ContentBox
        v-if="!!content['new-slug']"
        :value="content['new-slug'].value"
        @click="changeContentBox(content['new-slug'])"
    />
    <pre>{{ content }}</pre>
  </main>
  <Footer/>
</template>

<style scoped lang="scss">
</style>
