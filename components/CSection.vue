<template>
  <div class="section">
    <slot/>
  </div>
</template>

<style lang="scss">
@use '@/assets/css/main.scss';
@use '@/assets/css/variables' as *;

.section {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: $secondary-color;
  background-color: $primary-color;

  h2 {
    font-size: clamp(2rem, 5vw + 1rem, 4rem);
    margin: 0;
  }

  p, li {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: clamp(.75rem, 2vw, 1rem);
    font-weight: 500;
  }

  &-light {
    background-color: $secondary-color;
    color: $primary-color;
  }

  &-no-full-height {
    padding: 6rem 24rem;
    height: auto;
  }

  @media screen and (max-width: 2024px) {
    &-no-full-height {
      padding: 6rem 18rem;
      height: auto;
    }
  }

  @media screen and (max-width: 1024px) {
    height: auto;

    &-no-full-height {
      padding: 2rem 10%;
      height: auto;
    }
  }
}
</style>