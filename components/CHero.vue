<template>
  <div class="hero">
    <div class="hero-text-container">
      <div class="frame-decoration-top" style="top: -10px; left: -20px"/>

      <p class="hero-slogan">{{ $t('hero.sloganLine1') }}<br>{{ $t('hero.sloganLine2') }}</p>
      <h1 class="hero-text">{{ $t('hero.title') }}</h1>

      <a href="tel:+32471348815" class="cta">{{ $t('hero.cta') }}</a>
    </div>

    <div class="hero-image-container">
      <NuxtImg
        src="/hero_image.png"
        :alt="$t('hero.imageAlt')"
        sizes="sm:80vw md:80vw lg:80vw 2xl:60vw"
        format="webp"
        :preload="{ fetchPriority: 'high' }"
        fetchpriority="high"
        class="hero-image"
      />
      <div class="frame-decoration-bottom"/>
    </div>
  </div>
</template>
