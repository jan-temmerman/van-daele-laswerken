<template>
  <div class="section">
    <div class="header">
      <NuxtImg src="/logo_icon.png" alt="Logo" preload class="logo"/>
      <NuxtImg src="/logo_text.png" alt="Logo" preload class="logo-text"/>
    </div>

    <div class="hero">
      <div class="hero-text-container">
        <h1>Sterk in lassen,<br>Sterk in service.</h1>
        <p class="hero-text">Herstelling van uw aanhangwagen of op locatie - Wij lassen het voor u.</p>

        <a href="tel:+32471348815" class="cta">Bel ons</a>
      </div>

      <NuxtImg src="/hero_image.jpg" alt="Man welding stock photo" preload class="hero-image"/>
    </div>
  </div>

  <div class="section section-light section-no-full-height about-us">
    <h2>Over ons</h2>
    <p>Met jaren ervaring in de metaalsector biedt Van Daele Laswerken kwalitatieve lasoplossingen voor particulieren en bedrijven.</p>

    <div class="about-us-features">
      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="30"/>
        <p>Betrouwbaar</p>
      </div>

      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="30"/>
        <p>Vakmanschap</p>
      </div>

      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="30"/>
        <p>Flexibel</p>
      </div>
    </div>

    <div class="divider"/>

    <h2>Diensten</h2>

    <div class="about-us-services">
      <div class="about-us-services-item">
        <Icon name="material-symbols:tools-wrench-outline-rounded" :size="60"/>
        <p>Herstellingen van metalen constructies</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:delivery-truck-speed-outline" :size="60"/>
        <p>Lassen op locatie</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:join-left-rounded" :size="60"/>
        <p>Oplassingen</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  $primary-color: #1d382a;
  $secondary-color: #efefeb;
  $secondary-color-dark: #d9d8d2;
  $accent-color: #CC6410FF;

  @keyframes slideInFromBottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  html {
    font-family: 'Anton', 'Montserrat', Arial, sans-serif;
    background-color: $primary-color;
  }

  body {
    margin: 0;
  }

  h1, h2, h3, p, a, .iconify {
    animation: 300ms slideInFromBottom;
  }

  .section {
    display: flex;
    flex-direction: column;
    height: 100vh;

    h2 {
      font-size: 4rem;
      margin: 0;
    }

    p {
      font-family: 'Montserrat', Arial, sans-serif;
      font-weight: 500;
    }

    &-light {
      background-color: $secondary-color;
      color: $primary-color;
    }

    &-no-full-height {
      padding: 6rem 12rem;
      height: auto;
    }
  }

  .header {
    background-color: $secondary-color-dark;
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
  }

  .hero {
    height: calc(100% - 7rem);
    display: flex;
    align-items: center;
    justify-content: right;

    &-image {
      height: calc(100% - 10rem);
      width: 40%;
      object-fit: cover;
      object-position: top;
      padding: 5rem;
      animation: 300ms fadeIn;
    }

    &-text-container {
      margin-right: 1rem;

      h1 {
        font-weight: 100;
        font-size: 5rem;
        line-height: 6rem;
        margin: 0;
        color: $secondary-color-dark;
      }

      .hero-text {
        font-family: 'Montserrat', Arial, sans-serif;
        color: $secondary-color-dark;
        font-weight: 500;
        max-width: 40rem;
        margin-bottom: 2rem;
      }

      .cta {
        display: inline-block;
        text-decoration: none;
        color: $secondary-color;
        background-color: $accent-color;
        padding: .75rem 2rem;
        border-radius: 2rem;
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: 600;
        margin-top: 2rem;
      }
    }
  }

  .about-us {
    &-features, &-services {
      margin: 2rem 0 2rem 0;
      display: flex;
      justify-content: center;
      gap: 10rem;
      width: 100%;
    }

      &-features-item {
        background-color: $secondary-color;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: 2rem;
        color: $primary-color;
        padding: 0 2rem;

        .iconify {
          color: $accent-color;
        }
      }

    &-services {
      color: $primary-color;

      &-item {
        background-color: $secondary-color;
        max-width: 11rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 2rem;
        color: $primary-color;
        padding: 0 2rem;

        .iconify {
          color: $accent-color;
        }
      }
    }
  }

  .divider {
    margin: 6rem 0;
    border-bottom: 3px solid $primary-color;
    border-bottom-style: dashed;
  }
</style>