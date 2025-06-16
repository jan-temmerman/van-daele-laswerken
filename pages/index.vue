<template>
  <CSection>
    <CHeader/>
    <CHero/>
  </CSection>

  <CSection class="section-light section-no-full-height about-us">
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
  </CSection>

  <CSection class="section-no-full-height services" style="position: relative">
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
            <NuxtImg src="/cases/case_1_2.png" alt="De zelfgemaakte hijsjuk in actie" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_1_1.png" alt="Volledig zelfgemaakte Hijsjuk voor het verplaatsen van bomen" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="case-section case-section-reversed">
          <div class="case-section-text-container">
            <h3>Nieuwe bodem voor zuigwagen</h3>
            <p>De zuigwagen van deze klant had nood aan een nieuwe bodem, dus hebben wij deze voorzien en opgelast.</p>
            <NuxtImg src="/cases/case_2_1.png" alt="Zuigwagen met een nieuwe bodem opgelast" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_2_2.png" alt="Zuigwagen zonder bodem" loading="lazy" class="case-section-image"/>
        </div>    </SwiperSlide>

      <SwiperSlide>
        <div class="case-section">
          <div class="case-section-text-container">
            <h3>Afneembare trekhaak op duwblad</h3>
            <p>Deze klant zocht een oplossing om een trekhaak op dit duwblad te monteren. Wij hebben een connectie stuk op het duwblad gelast waaraan een trekhaak gemonteerd kan worden.</p>
            <NuxtImg src="/cases/case_3_2.png" alt="Trekhaak die aan onze opgelaste connectie is gemonteerd" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_3_1.png" alt="Connectie die wij aan het duwblad van een machine gelast hebben" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>
    </CSlider>
  </CSection>

  <CSection class="footer section-no-full-height">
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

      <div class="frame-decoration-top"/>
      <div class="frame-decoration-bottom"/>
    </div>
  </CSection>
</template>

<script setup lang="ts">
import CHeader from "~/components/CHeader.vue";
import { SwiperSlide } from 'swiper/vue';

useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
  ogImage: 'https://van-daele-laswerken.be/ogImage.png',
  description: 'Mobiele las herstellingen en oplassingen voor bedrijven (staal, inox & aluminium).',
  ogDescription: 'Mobiele las herstellingen en oplassingen voor bedrijven (staal, inox & aluminium).',
})
</script>

<style lang="scss">
@import '@/assets/css/main.scss';
</style>