<template>
  <div class="hero">
    <div class="hero-text-container">
      <div class="frame-decoration-top" style="top: -10px; left: -20px"/>

      <p class="hero-slogan">Sterk in lassen,<br>Sterk in service.</p>
      <h1 class="hero-text">Laswerken in staal, inox & aluminium in Appels (Dendermonde), in de werkplaats of ter plaatse.</h1>

      <a href="tel:+32471348815" class="cta">Bel ons</a>
    </div>

    <div class="hero-image-container">
      <NuxtImg
        src="/hero_image.png"
        alt="De werkplaats van Laswerken Van Daele in Appels"
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
