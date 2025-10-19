<script lang="ts" setup="">
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import type { Content } from "@/entity/content.model.ts";
import ky from "ky";
import ContentBox from "@/components/ContentBox.vue";
import MainBanner from "@/components/blocks/MainBanner.vue";
import AboutSchool from "@/components/blocks/AboutSchool.vue";
import Mission from "@/components/blocks/Mission.vue";
import OurValues from "@/components/blocks/OurValues.vue";
import AboutCreator from "@/components/blocks/AboutCreator.vue";
import HelpUs from "@/components/blocks/HelpUs.vue";
import RequestForUs from "@/components/blocks/RequestForUs.vue";
import Course from "@/components/blocks/Course.vue";
import Individual from "@/components/blocks/Individual.vue";

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
  <div class="main">
    <div class="wrapper">
      <AboutSchool />
      <Mission />
      <OurValues />
    </div>
  </div>
  <div class="wrapper">
    <AboutCreator />
    <HelpUs />
  </div>
  <RequestForUs />
  <Course />
  <Individual />
  <ContentBox
    v-if="!!content['new-slug']"
    :value="content['new-slug'].value"
    @click="changeContentBox(content['new-slug'])"
  />
  <pre>{{ content }}</pre>

  <Footer/>
</template>

<style scoped lang="scss">
</style>
