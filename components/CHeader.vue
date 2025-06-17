<template>
    <div class="header">
      <NuxtLink to="/" class="no-animation logo">
        <NuxtImg src="/logo_icon.png" alt="Logo" preload format="webp" class="logo"/>
      </NuxtLink>

      <NuxtLink to="/" class="no-animation logo-text">
        <NuxtImg src="/logo_text.png" alt="Logo" preload format="webp" class="logo-text"/>
      </NuxtLink>

      <div class="header-decoration"/>
    </div>
</template>

<style lang="scss">
@use '@/assets/css/main.scss';
@use '@/assets/css/variables' as *;

.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: $secondary-color;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  min-height: 5rem;

  .logo {
    width: 6rem;
    &-text {
      width: 10rem;
      justify-self: center;
    }
  }

  &-decoration {
    position: absolute;
    bottom: -4px;
    left: calc(50% - 25px);
    width: 50px;
    height: 8px;
    background-color: $accent-color;
  }


  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
}
</style>
<script setup lang="ts">
</script>