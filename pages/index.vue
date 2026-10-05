<template>
  <CSection>
    <CHeader/>
    <CHero/>
  </CSection>

  <CSection class="section-light section-no-full-height about-us">
    <h2>{{ $t('home.about.title') }}</h2>
    <p>{{ $t('home.about.text1') }}</p>
    <p>{{ $t('home.about.text2') }}</p>

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
        <p>{{ $t('home.about.electrode') }}</p>
      </div>
    </div>
  </CSection>

  <CSection class="section-no-full-height services" style="position: relative">
    <h2>{{ $t('home.services.title') }}</h2>

    <div class="about-us-services">
      <div class="about-us-services-item">
        <Icon name="material-symbols:tools-wrench-outline-rounded" :size="50"/>
        <h3>{{ $t('home.services.repair.title') }}</h3>
        <p>{{ $t('home.services.repair.text') }}</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:delivery-truck-speed-outline" :size="50"/>
        <h3>{{ $t('home.services.onSite.title') }}</h3>
        <p>{{ $t('home.services.onSite.text') }}</p>
      </div>

      <div class="about-us-services-item">
        <Icon name="material-symbols:join-left-rounded" :size="50"/>
        <h3>{{ $t('home.services.hardfacing.title') }}</h3>
        <p>{{ $t('home.services.hardfacing.text') }}</p>
      </div>
    </div>

    <div class="frame-decoration-top"/>
    <div class="frame-decoration-bottom"/>
  </CSection>


  <CSection class="section-light case-container section-no-full-height">
    <h2>{{ $t('home.cases.title') }}</h2>

    <CSlider>
      <SwiperSlide>
        <div class="case-section">
          <div class="case-section-text-container">
            <h3>{{ $t('home.cases.liftingBeam.title') }}</h3>
            <p>{{ $t('home.cases.liftingBeam.text') }}</p>
            <NuxtImg src="/cases/case_1_1.png" format="webp" :alt="$t('home.cases.liftingBeam.imageAlt1')" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_1_2.png" format="webp" :alt="$t('home.cases.liftingBeam.imageAlt2')" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="case-section case-section-reversed">
          <div class="case-section-text-container">
            <h3>{{ $t('home.cases.vacuumTanker.title') }}</h3>
            <p>{{ $t('home.cases.vacuumTanker.text') }}</p>
            <NuxtImg src="/cases/case_2_1.png" format="webp" :alt="$t('home.cases.vacuumTanker.imageAlt1')" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_2_2.png" format="webp" :alt="$t('home.cases.vacuumTanker.imageAlt2')" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="case-section">
          <div class="case-section-text-container">
            <h3>{{ $t('home.cases.towHitch.title') }}</h3>
            <p>{{ $t('home.cases.towHitch.text') }}</p>
            <NuxtImg src="/cases/case_3_1.png" format="webp" :alt="$t('home.cases.towHitch.imageAlt1')" loading="lazy" class="case-section-image"/>
          </div>

          <NuxtImg src="/cases/case_3_2.png" format="webp" :alt="$t('home.cases.towHitch.imageAlt2')" loading="lazy" class="case-section-image"/>
        </div>
      </SwiperSlide>
    </CSlider>
  </CSection>

  <CSection class="section-no-full-height faq">
    <h2>{{ $t('home.faq.title') }}</h2>

    <details v-for="item in faq" :key="item.question" class="faq-item">
      <summary>{{ item.question }}</summary>
      <p>{{ item.answer }}</p>
    </details>
  </CSection>

  <CSection class="footer section-no-full-height">
    <div class="cta-card">
      <h2>{{ $t('home.contact.ctaTitle') }}</h2>

      <p>{{ $t('home.contact.ctaText') }}</p>
      <a href="mailto:vandaele-laswerken@outlook.be" class="cta">{{ $t('home.contact.ctaButton') }}</a>
    </div>

    <div class="contact-card">
      <h2>{{ $t('home.contact.title') }}</h2>

      <address>
        <ul>
          <li>Laswerken Van Daele - Robin Van Daele</li>
          <li>
            {{ $t('home.contact.workshop') }}
            <a href="https://www.google.com/maps/search/?api=1&query=Bevrijdingslaan+114J%2C+9200+Appels" target="_blank" rel="noopener">Bevrijdingslaan 114J, 9200 Appels</a>
          </li>
          <li>
            <a href="tel:+32471348815">+32 471 34 88 15</a>
          </li>
          <li>
            <a href="mailto:vandaele-laswerken@outlook.be">vandaele-laswerken@outlook.be</a>
          </li>
          <li>{{ $t('home.contact.vat') }} BE&nbsp;0781.289.666</li>
          <li>
            <NuxtLink :to="localePath('privacy')">{{ $t('privacy.title') }}</NuxtLink>
          </li>
        </ul>
      </address>

      <div class="frame-decoration-top"/>
      <div class="frame-decoration-bottom"/>
    </div>

    <CLanguageSwitcher placement="footer" on-dark/>
  </CSection>
</template>

<script setup lang="ts">
import CHeader from "~/components/CHeader.vue";
import { SwiperSlide } from 'swiper/vue';

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const contact = { phone: '+32 471 34 88 15', email: 'vandaele-laswerken@outlook.be' }

const faq = computed(() => (tm('home.faq.items') as { question: string, answer: string }[]).map(item => ({
  question: rt(item.question),
  answer: rt(item.answer, contact),
})))

useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogTitle: () => `Laswerken Van Daele | ${t('home.seo.title')}`,
  ogDescription: () => t('home.seo.description'),
  ogImage: '/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => t('home.seo.imageAlt'),
  ogImageType: 'image/jpeg',
  twitterImageAlt: () => t('home.seo.imageAlt'),
})

useSchemaOrg([
  defineWebPage({ '@type': ['WebPage', 'FAQPage'] }),
  ...faq.value.map(item => defineQuestion({
    name: item.question,
    acceptedAnswer: item.answer,
  })),
])
</script>

<style lang="scss">
@use '@/assets/css/variables' as *;
</style>
