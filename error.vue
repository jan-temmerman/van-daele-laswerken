<template>
  <NuxtLayout name="404"/>
</template>

<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: () => t('notFound.seoTitle'),
  robots: 'noindex, nofollow',
})
</script>
