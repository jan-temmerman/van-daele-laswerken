<template>
  <nav
    class="language-switcher"
    :class="[`language-switcher-${placement}`, { 'language-switcher-on-dark': onDark }]"
    :aria-label="$t('header.language')"
  >
    <NuxtLink
      v-for="item in locales"
      :key="item.code"
      :to="switchLocalePath(item.code)"
      :hreflang="item.language"
      :lang="item.language"
      :title="item.name"
      :aria-label="item.name"
      :aria-current="item.code === locale ? 'true' : undefined"
      class="no-animation"
    >
      {{ item.code.toUpperCase() }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
// Op desktop staat de taalkeuze in de header, op mobiel onderaan de pagina
withDefaults(defineProps<{
  placement: 'header' | 'footer'
  onDark?: boolean
}>(), {
  onDark: false,
})

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<style lang="scss">
@use '@/assets/css/variables' as *;

.language-switcher {
  display: flex;
  gap: .25rem;

  a {
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: .875rem;
    font-weight: 600;
    color: $primary-color;
    text-decoration: none;
    padding: .25rem .5rem;
    border-radius: 1rem;
    opacity: .6;
    transition: opacity .1s;

    &:hover {
      opacity: 1;
    }

    &[aria-current] {
      opacity: 1;
      color: $secondary-color;
      background-color: $primary-color;
    }
  }

  &-on-dark a {
    color: $secondary-color;

    &[aria-current] {
      color: $primary-color;
      background-color: $secondary-color;
    }
  }

  &-header {
    justify-self: end;
  }

  &-footer {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    &-header {
      display: none;
    }

    &-footer {
      display: flex;
      justify-content: center;
      align-self: center;
      gap: .5rem;
      margin: 1rem 0 2rem;
    }
  }
}
</style>
