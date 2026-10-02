<template>
  <CSection>
    <CHeader/>
    <CHero/>
  </CSection>

  <CSection class="section-light section-no-full-height about-us">
    <h2>Over ons</h2>
    <p>Met ondertussen 10 jaar ervaring in de metaalsector biedt Laswerken Van Daele een snelle en kwalitatieve service.
      Wij lassen en herstellen landbouwmachines, kraanbakken, aanhangwagens, containers en andere metalen constructies.
      Dat kan in onze werkplaats in Appels (Dendermonde) of ter plaatse, wanneer de machine niet verplaatst kan worden.</p>
    <p>Wij lassen staal, inox en aluminium met de technieken MIG, TIG en elektrode.</p>

    <div class="about-us-features">
      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="24"/>
        <p>MIG</p>
      </div>

      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="24"/>
        <p>TIG</p>
      </div>

      <div class="about-us-features-item">
        <Icon name="material-symbols:check" :size="24"/>
        <p>Elektrode</p>
      </div>
    </div>
  </CSection>

  <CSection class="section-no-full-height services" style="position: relative">
    <h2>Diensten</h2>

    <div class="about-us-services">
      <div class="about-us-services-item">
        <Icon name="material-symbols:tools-wrench-outline-rounded" :size="50"/>
        <h3>Herstellingen van metalen constructies</h3>
        <p>Scheuren, breuken en versleten onderdelen aan landbouwmachines, kraanbakken, aanhangwagens en containers vakkundig hersteld.</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:delivery-truck-speed-outline" :size="50"/>
        <h3>Lassen op locatie</h3>
        <p>Kan de machine of constructie niet naar de werkplaats? Dan komen wij ter plaatse lassen.</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:join-left-rounded" :size="50"/>
        <h3>Oplassen van slijtdelen</h3>
        <p>Versleten slijtdelen van bijvoorbeeld kraanbakken en landbouwmachines opnieuw opgelast, zodat ze weer langer meegaan.</p>
      </div>
    </div>

    <div class="frame-decoration-top"/>
    <div class="frame-decoration-bottom"/>
  </CSection>


  <CSection class="section-light case-container section-no-full-height">
    <h2>Realisaties</h2>

    <CSlider>
      <SwiperSlide>
        <div class="case-section">
          <div class="case-section-text-container">
            <h3>Hijsjuk voor het verplaatsen van bomen</h3>
            <p>Tijdens een grote marktrenovatie in Zele zocht de gemeente een goede en veilige manier om de gezonde bomen te verplaatsen. De aannemer contacteerde mij en het resultaat is deze hijsjuk gemaakt voor het verplaatsen van bomen.</p>
            <NuxtImg src="/cases/case_1_1.png" format="webp" alt="De zelfgemaakte hijsjuk in actie" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_1_2.png" format="webp" alt="Volledig zelfgemaakte hijsjuk voor het verplaatsen van bomen" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="case-section case-section-reversed">
          <div class="case-section-text-container">
            <h3>Nieuwe bodem voor zuigwagen</h3>
            <p>De zuigwagen van deze klant had nood aan een nieuwe bodem, dus hebben wij deze voorzien en ingelast.</p>
            <NuxtImg src="/cases/case_2_1.png" format="webp" alt="Zuigwagen met een nieuwe bodem opgelast" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_2_2.png" format="webp" alt="Zuigwagen zonder bodem" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="case-section">
          <div class="case-section-text-container">
            <h3>Afneembare trekhaak op duwblad</h3>
            <p>Deze klant zocht een oplossing om een trekhaak op dit duwblad te monteren. Wij hebben een connectie stuk op het duwblad gelast waaraan een trekhaak gemonteerd kan worden.</p>
            <NuxtImg src="/cases/case_3_1.png" format="webp" alt="Trekhaak die aan onze opgelaste connectie is gemonteerd" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_3_2.png" format="webp" alt="Connectie die wij aan het duwblad van een machine gelast hebben" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>
    </CSlider>
  </CSection>

  <CSection class="section-no-full-height faq">
    <h2>Veelgestelde vragen</h2>

    <details v-for="item in faq" :key="item.question" class="faq-item">
      <summary>{{ item.question }}</summary>
      <p>{{ item.answer }}</p>
    </details>
  </CSection>

  <CSection class="footer section-no-full-height">
    <div class="cta-card">
      <h2>Laswerk nodig?</h2>

      <p>Neem contact met ons op om je probleem of idee te bespreken of meer informatie over onze diensten te verkrijgen.</p>
      <a href="mailto:vandaele-laswerken@outlook.be" class="cta">Stuur ons een mail</a>
    </div>

    <div class="contact-card">
      <h2>Contact</h2>

      <address>
        <ul>
          <li>Laswerken Van Daele - Robin Van Daele</li>
          <li>
            Werkplaats:
            <a href="https://www.google.com/maps/search/?api=1&query=Bevrijdingslaan+114J%2C+9200+Appels" target="_blank" rel="noopener">Bevrijdingslaan 114J, 9200 Appels</a>
          </li>
          <li>
            <a href="tel:+32471348815">+32 471 34 88 15</a>
          </li>
          <li>
            <a href="mailto:vandaele-laswerken@outlook.be">vandaele-laswerken@outlook.be</a>
          </li>
          <li>Ondernemingsnummer / btw: BE&nbsp;0781.289.666</li>
          <li>
            <NuxtLink to="/privacy">Privacyverklaring</NuxtLink>
          </li>
        </ul>
      </address>

      <div class="frame-decoration-top"/>
      <div class="frame-decoration-bottom"/>
    </div>
  </CSection>
</template>

<script setup lang="ts">
import CHeader from "~/components/CHeader.vue";
import { SwiperSlide } from 'swiper/vue';

const description = 'Laswerken in staal, inox en aluminium: herstelling van landbouwmachines, kraanbakken en aanhangwagens. In onze werkplaats in Appels of ter plaatse.'

const faq = [
  {
    question: 'Komen jullie ook ter plaatse lassen?',
    answer: 'Ja. Het werk kan in onze werkplaats in Appels gebeuren, maar wij komen ook ter plaatse wanneer de machine of constructie niet verplaatst kan worden.',
  },
  {
    question: 'Welke materialen kunnen jullie lassen?',
    answer: 'Wij lassen staal, inox en aluminium.',
  },
  {
    question: 'Welke lastechnieken gebruiken jullie?',
    answer: 'Wij werken met MIG, TIG en elektrode, afhankelijk van het materiaal en de toepassing.',
  },
  {
    question: 'In welke regio werken jullie?',
    answer: 'Onze werkplaats ligt in Appels (Dendermonde). Van daaruit werken wij in de ruime regio Dendermonde.',
  },
  {
    question: 'Hoe vraag ik een prijs of offerte aan?',
    answer: 'Bel ons op +32 471 34 88 15 of stuur een mail naar vandaele-laswerken@outlook.be met een korte omschrijving en eventueel foto\'s van het werk.',
  },
]

useSeoMeta({
  title: 'Mobiel lassen in Appels & Dendermonde',
  description,
  ogTitle: 'Laswerken Van Daele | Mobiel lassen in Appels & Dendermonde',
  ogDescription: description,
  ogImage: '/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Logo Laswerken Van Daele met contactgegevens',
  ogImageType: 'image/jpeg',
  ogLocale: 'nl_BE',
  twitterImageAlt: 'Logo Laswerken Van Daele met contactgegevens',
})

useSchemaOrg([
  defineWebPage({ '@type': ['WebPage', 'FAQPage'] }),
  ...faq.map(item => defineQuestion({
    name: item.question,
    acceptedAnswer: item.answer,
  })),
])
</script>

<style lang="scss">
@use '@/assets/css/variables' as *;
</style>
