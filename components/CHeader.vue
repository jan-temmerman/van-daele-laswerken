<template>
    <div class="header">
      <NuxtLink :to="localePath('/')" class="no-animation logo" :aria-label="$t('header.home')">
        <NuxtImg src="/logo_mark.png" :alt="$t('header.logoAlt')" width="96" height="87" densities="x1 x2" preload format="webp" class="logo"/>
      </NuxtLink>

      <NuxtLink :to="localePath('/')" class="no-animation logo-text" :aria-label="$t('header.home')">
        <NuxtImg src="/logo_text.png" alt="Laswerken Van Daele" width="160" height="59" densities="x1 x2" preload format="webp" class="logo-text"/>
      </NuxtLink>

      <CLanguageSwitcher placement="header"/>

      <div class="header-decoration"/>
    </div>
</template>

<style lang="scss">
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
    height: auto;
    &-text {
      width: 10rem;
      height: auto;
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
const localePath = useLocalePath()
</script>