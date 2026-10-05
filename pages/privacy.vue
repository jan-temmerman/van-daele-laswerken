<template>
  <CSection class="section-light section-no-full-height legal-page">
    <CHeader/>

    <h1>{{ $t('privacy.title') }}</h1>
    <p class="legal-page-updated">{{ $t('privacy.updated') }}</p>

    <h2>{{ $t('privacy.who.title') }}</h2>
    <p>{{ $t('privacy.who.text') }}</p>
    <ul>
      <li>{{ $t('privacy.who.address') }} Bevrijdingslaan 114J, 9200 Appels</li>
      <li>{{ $t('privacy.who.email') }} <a href="mailto:vandaele-laswerken@outlook.be">vandaele-laswerken@outlook.be</a></li>
      <li>{{ $t('privacy.who.phone') }} <a href="tel:+32471348815">+32 471 34 88 15</a></li>
    </ul>

    <h2>{{ $t('privacy.data.title') }}</h2>
    <p>{{ $t('privacy.data.text') }}</p>

    <h2>{{ $t('privacy.purpose.title') }}</h2>
    <ul>
      <li v-for="item in purposes" :key="item">{{ item }}</li>
    </ul>
    <p>{{ $t('privacy.purpose.text') }}</p>

    <h2>{{ $t('privacy.sharing.title') }}</h2>
    <p>{{ $t('privacy.sharing.text') }}</p>

    <h2>{{ $t('privacy.website.title') }}</h2>
    <p>{{ $t('privacy.website.text') }}</p>

    <h2>{{ $t('privacy.retention.title') }}</h2>
    <p>{{ $t('privacy.retention.text') }}</p>

    <h2>{{ $t('privacy.rights.title') }}</h2>
    <i18n-t keypath="privacy.rights.text" tag="p" scope="global">
      <template #email><a href="mailto:vandaele-laswerken@outlook.be">vandaele-laswerken@outlook.be</a></template>
    </i18n-t>
    <i18n-t keypath="privacy.rights.complaint" tag="p" scope="global">
      <template #website>
        <a :href="`https://${$t('privacy.rights.authorityWebsite')}`" target="_blank" rel="noopener">{{ $t('privacy.rights.authorityWebsite') }}</a>
      </template>
    </i18n-t>

    <NuxtLink :to="localePath('/')" class="cta">{{ $t('privacy.back') }}</NuxtLink>

    <CLanguageSwitcher placement="footer"/>
  </CSection>
</template>

<script setup lang="ts">
const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const purposes = computed(() => (tm('privacy.purpose.items') as string[]).map(item => rt(item)))

useSeoMeta({
  title: () => t('privacy.title'),
  description: () => t('privacy.seo.description'),
})
</script>
