<script lang="ts" setup>

interface ContentBoxProps {
  value?: string,
}
const props = defineProps<ContentBoxProps>()

</script>

<template>
  <p>{{props.value}}</p>
</template>

<style scoped lang="scss">

</style>
