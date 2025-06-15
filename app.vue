<template>
  <div class="section">
    <div class="header">
      <NuxtImg src="/logo_icon.png" alt="Logo" preload class="logo"/>
      <NuxtImg src="/logo_text.png" alt="Logo" preload class="logo-text"/>
    </div>

    <div class="hero">
      <div class="hero-text-container">
        <h1>Sterk in lassen,<br>Sterk in service.</h1>
        <p class="hero-text">Lassen van staal, inox & aluminium.</p>

        <a href="tel:+32471348815" class="cta">Bel ons</a>
      </div>

      <NuxtImg src="/hero_image.png" alt="Man welding stock photo" preload class="hero-image"/>
    </div>
  </div>

  <div class="section section-light section-no-full-height about-us">
    <h2>Over ons</h2>
    <p>Met ondertussen 10 jaar ervaring in de metaalsector bieden wij een snelle en kwalitatieve service.
      Voor het lassen/herstellen van landbouwmachines, kraanbakken, aanhangwagens, containers, etc... Zowel in de werkplaats als ter plaatse.</p>

    <div class="about-us-features">
      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="24"/>
        <p>Mig</p>
      </div>

      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="24"/>
        <p>Tig</p>
      </div>

      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="24"/>
        <p>Elektrode</p>
      </div>
    </div>
  </div>

  <div class="section section-no-full-height services">
    <h2>Diensten</h2>

    <div class="about-us-services">
      <div class="about-us-services-item">
        <Icon name="material-symbols:tools-wrench-outline-rounded" :size="50"/>
        <p>Herstellingen van metalen constructies</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:delivery-truck-speed-outline" :size="50"/>
        <p>Lassen op locatie</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:join-left-rounded" :size="50"/>
        <p>Oplassen van slijtdelen</p>
      </div>
    </div>
  </div>

  <div class="section section-light section-no-full-height">
    <h2>Realisaties</h2>

    <div class="case-section">
        <NuxtImg src="/cases/case_1_1.png" alt="Volledig zelfgemaakte Hijsjuk voor het verplaatsen van bomen" loading="lazy" class="case-section-image"/>

      <div class="case-section-text-container">
        <h3>Hijsjuk voor het verplaatsen van bomen</h3>
        <p>Tijdens een grote marktrenovatie in Zele zocht de gemeente een goede en veilige manier om de gezonde bomen te verplaatsen. De aannemer contacteerde mij en het resultaat is deze hijsjuk gemaakt voor het verplaatsen van bomen.</p>
        <NuxtImg src="/cases/case_1_2.png" alt="De zelfgemaakte hijsjuk in actie" loading="lazy" class="case-section-image"/>
      </div>
    </div>

    <div class="divider"/>

    <div class="case-section case-section-reversed">
      <div class="case-section-text-container">
        <h3>Nieuwe bodem voor zuigwagen</h3>
        <p>De zuigwagen van deze klant had nood aan een nieuwe bodem, dus hebben wij deze voorzien en opgelast.</p>
        <NuxtImg src="/cases/case_2_1.png" alt="Zuigwagen met een nieuwe bodem opgelast" loading="lazy" class="case-section-image"/>
      </div>

      <NuxtImg src="/cases/case_2_2.png" alt="Zuigwagen zonder bodem" loading="lazy" class="case-section-image"/>
    </div>

    <div class="divider"/>

    <div class="case-section">
      <NuxtImg src="/cases/case_3_1.png" alt="Connectie die wij aan het duwblad van een machine gelast hebben" loading="lazy" class="case-section-image"/>

      <div class="case-section-text-container">
        <h3>Afneembare trekhaak op duwblad</h3>
        <p>Deze klant zocht een oplossing om een trekhaak op dit duwblad te monteren. Wij hebben een connectie stuk op het duwblad gelast waaraan een trekhaak gemonteerd kan worden.</p>
        <NuxtImg src="/cases/case_3_2.png" alt="Trekhaak die aan onze opgelaste connectie is gemonteerd" loading="lazy" class="case-section-image"/>
      </div>
    </div>
  </div>

  <div class="section footer section-no-full-height">
    <div class="cta-card">
      <h2>Laswerk nodig?</h2>

      <p>Neem contact met ons op om je probleem of idee te bespreken of meer informatie over onze diensten te verkrijgen.</p>
      <a href="mailto:vandaele-laswerken@outlook.be" class="cta">Stuur ons een mail</a>
    </div>

    <div class="contact-card">
      <h2>Contact</h2>

      <ul>
        <li>
          Werkplaats: Bevrijdingslaan 114J, Appels 9200
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
    title: 'Home',
    ogTitle: 'Home',
    ogImage: 'https://van-daele-laswerken.be/ogImage.png',
    description: 'Mobiele las herstellingen en oplassingen voor bedrijven (staal, inox & aluminium).',
    ogDescription: 'Mobiele las herstellingen en oplassingen voor bedrijven (staal, inox & aluminium).',
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

  ::selection {
    background: $accent-color;
    color: $secondary-color;
  }

  html {
    font-family: 'Figtree', 'Montserrat', Arial, sans-serif;
    background-color: $secondary-color;
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
      transform: rotate(180deg);
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
    transition: scale 0.1s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      scale: 1.05;
    }
  }

  .about-us {
    &-features, &-services {
      margin-top: 2rem;
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
        max-width: 11rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 2rem;
        color: $secondary-color;
        padding: 0 2rem;
        text-align: center;
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

  .services {
    margin: 0 6rem;
    padding: 6rem;

    @media screen and (max-width: 1024px) {
      margin: 5%;
      padding: 2rem 5%;
    }
  }

  .case-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    text-align: left;

    &:first-of-type {
      margin-top: 4rem;
    }

    & > &-image {
      object-fit: cover;
      width: 100%;
      aspect-ratio: 1;
    }

    &-text-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 0;

      h3 {
        font-size: clamp(1.5rem, 3vw + 1rem, 2rem);
        margin: 0;
      }

      .case-section-image {
        object-fit: cover;
        width: 100%;
        aspect-ratio: 1;
      }
    }

    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr;

      & > &-image {
        width: 100%;
      }

      &-text-container {
        width: 100%;
      }
    }
  }

  .footer {
    flex-direction: row;
    padding: 0;

    .cta-card {
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

        &::marker {
          color: $accent-color;
        }
      }

      a:hover {
        text-decoration: underline;
      }
    }


    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      flex-wrap: wrap;

      .cta-card, .contact-card {
        width: 80%;
        margin: 2rem 0;
      }

      .contact-card {
        padding: 1rem;
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