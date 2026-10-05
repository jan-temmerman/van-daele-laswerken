<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// hreflang-links naar de andere talen; canonical en og:locale komen al van @nuxtjs/seo
const localeHead = useLocaleHead()

useHead(() => ({
  link: (localeHead.value.link || []).filter(link => link.rel === 'alternate'),
  meta: (localeHead.value.meta || []).filter(meta => meta.property === 'og:locale:alternate'),
}))
</script>
