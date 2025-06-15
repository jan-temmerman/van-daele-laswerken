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

  <div class="section footer section-no-full-height">
    <div class="invoice-card">
      <h2>Offerte</h2>

      <p>Neem contact met ons op voor een vrijblijvende offerte of meer informatie over onze diensten.</p>
      <a href="mailto:vandaele-laswerken@outlook.be" class="cta">Vraag een offerte aan</a>
    </div>

    <div class="contact-card">
      <h2>Contact</h2>

      <ul>
        <li>
          Werkplaats: Bevrijdingslaan 114j, Appels 9200
        </li>
        <li>
          <a href="tel:+32471348815">+32 471 34 88 15</a>
        </li>
        <li>
          <a href="mailto:vandaele-laswerken@outlook.be">vandaele-laswerken@outlook.be</a>
        </li>
        <li>BTW nr: BE0781289666</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  useSeoMeta({
    title: 'Laswerken Van Daele',
    ogTitle: 'Laswerken Van Daele',
    description: 'Laswerken Van Daele biedt betrouwbare en flexibele lasoplossingen voor particulieren en bedrijven.',
    ogDescription: 'Laswerken Van Daele biedt betrouwbare en flexibele lasoplossingen voor particulieren en bedrijven.',
  })
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
    font-family: 'Figtree', 'Montserrat', Arial, sans-serif;
    background-color: $primary-color;
  }

  body {
    margin: 0;
  }

  h1, h2, h3, p, a, .iconify, li {
    animation: 300ms slideInFromBottom;
  }

  .section {
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: $secondary-color;

    h2 {
      font-size: clamp(2rem, 5vw + 1rem, 4rem);
      margin: 0;
    }

    p {
      font-family: 'Montserrat', Arial, sans-serif;
      font-size: clamp(.75rem, 2vw, 1rem);
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


    @media screen and (max-width: 1024px) {
      height: auto;

      &-no-full-height {
        padding: 2rem 10%;
        height: auto;
      }
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


    @media screen and (max-width: 1024px) {
      display: flex;
      justify-content: center;
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
        font-weight: 700;
        font-size: clamp(2.5rem, 4vw + 1rem, 8rem);
        line-height: clamp(3rem, 4vw + 1rem, 9rem);
        margin: 0;
        color: $secondary-color;
      }

      .hero-text {
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: 500;
        max-width: 40rem;
        margin-bottom: 2rem;
      }
    }

    @media screen and (max-width: 1024px) {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      &-image {
        height: calc(50%);
        width: 80%;
        padding: 0;
        animation: 300ms fadeIn;
      }

      &-text-container {
        margin: 5rem 0;
        width: 80%;
      }
    }
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
    animation: 300ms fadeIn;
  }

  .about-us {
    &-features, &-services {
      margin: 2rem 0 2rem 0;
      display: flex;
      justify-content: center;
      gap: 10rem;
      width: 100%;
      flex-wrap: wrap;
    }

      &-features-item {
        background-color: $primary-color;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        border-radius: 2rem;
        color: $secondary-color;
        padding: 0 1.25rem;
        animation: 300ms fadeIn;

        p, .iconify {
          animation: none;
        }

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
        animation: 300ms fadeIn;

        p, .iconify {
          animation: none;
        }

        .iconify {
          color: $accent-color;
        }
      }
    }

    @media screen and (max-width: 1024px) {
      &-features, &-services {
        gap: 2rem;
      }
    }
  }

  .footer {
    flex-direction: row;
    padding: 0;

    .invoice-card {
      margin: 6rem 3rem 6rem 12rem;
      width: calc(50% - 15rem);
    }

    .contact-card {
      width: calc(50% - 8rem);
      margin: 4rem;
      padding: 2rem;
      background-color: $secondary-color;
      color: $primary-color;

      li, a {
        text-decoration: none;
        color: $primary-color;
        font-family: 'Montserrat', Arial, sans-serif;
        margin-bottom: 1rem;
      }

      a:hover {
        text-decoration: underline;
      }
    }


    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      .invoice-card, .contact-card {
        width: 80%;
        margin: 2rem 0;
      }
    }
  }

  .divider {
    margin: 6rem 0;
    border-bottom: 3px solid $primary-color;
    border-bottom-style: dashed;

    @media screen and (max-width: 1024px) {
      margin: 3rem 0;
    }
  }
</style>