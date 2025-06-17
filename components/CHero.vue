<template>
  <div class="hero">
    <div class="hero-text-container">
      <div class="frame-decoration-top" style="top: -10px; left: -20px"/>

      <h1>Sterk in lassen,<br>Sterk in service.</h1>
      <p class="hero-text">Lassen van staal, inox & aluminium.</p>

      <a href="tel:+32471348815" class="cta">Bel ons</a>
    </div>

    <div class="hero-image-container">
      <NuxtImg src="/hero_image.png" :placeholder="blurUrl" alt="De werkplaats in Appels" preload quality="40" format="webp" class="hero-image"/>
      <div class="frame-decoration-bottom"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { decode } from 'blurhash'

const blurUrl = ref('')
const blurhashString = 'LLGuzMEmIqrqE2.8x]%1~px^tRxs'

onMounted(() => {
  const width = 32
  const height = 32
  const pixels = decode(blurhashString, width, height)
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const imageData = ctx.createImageData(width, height)
  imageData.data.set(pixels)
  ctx.putImageData(imageData, 0, 0)
  blurUrl.value = canvas.toDataURL()
});
</script>