<template>
  <CHeader/>

  <CSection class="not-found-section">
    <h1 class="not-found-title">
      404 - Pagina niet gevonden
    </h1>
    <NuxtLink to="/" class="cta">
      Terugkeren naar de <span class="text-primary">homepagina</span>
    </NuxtLink>
  </CSection>
</template>

<style lang="scss">
@use '@/assets/css/main.scss';
@use '@/assets/css/variables' as *;

.not-found-section {
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