<template>
  <CHeader/>

  <CSection class="not-found-section">
    <h1 class="not-found-title">
      {{ $t('notFound.title') }}
    </h1>
    <NuxtLink :to="localePath('/')" class="cta">
      <i18n-t keypath="notFound.back" scope="global">
        <template #home><span class="text-primary">{{ $t('notFound.home') }}</span></template>
      </i18n-t>
    </NuxtLink>
  </CSection>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>

<style lang="scss">
@use '@/assets/css/variables' as *;

.section.not-found-section {
  justify-content: center;
  align-items: center;
  height: 100vh;

  h1 {
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    margin: 0;
    text-align: center;
  }
}
</style>