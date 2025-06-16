<template>
  <div class="c-base-slider">
    <div class="c-base-slider-control">
      <button aria-label="Cases carousel go to previous case" @click="swiperEl.slidePrev()">
        <Icon name="material-symbols:arrow-back-ios-new-rounded" :size="36"/>
      </button>
    </div>

    <Swiper v-bind="fullSwiperParams" @swiper="onSwiper">
      <slot/>
    </Swiper>

    <div class="c-base-slider-control">
      <button aria-label="Cases carousel go to next case" @click="swiperEl.slideNext()">
        <Icon name="material-symbols:arrow-forward-ios-rounded" :size="36"/>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import {Keyboard, Scrollbar} from 'swiper/modules';

const props = withDefaults(defineProps<{
  swiperParams?: object
  progress?: number,
  disable?: boolean
}>(), {
  disable: false,
});

const swiperEl = ref(null);

const fullSwiperParams = {
  modules: [Keyboard, Scrollbar],
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  observer: true,
  grabCursor: true,
  resistance: false,
  preventInteractionOnTransition: true,
  spaceBetween: 1000,
  slidesPerView: 1,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  ...props.swiperParams,
};

watch(() => props.progress, () => {
  swiperEl.value?.setProgress(props.progress, 15);
});

watch(() => props.disable, () => {
  if (props.disable) {
    swiperEl.value?.disable();
  } else {
    swiperEl.value?.enable();
  }
});

const onSwiper = (swiper: any) => {
  swiperEl.value = swiper;
  swiperLocker();
};

function swiperLocker() {
  if (props.disable) {
    swiperEl.value?.disable();
  } else {
    swiperEl.value?.enable();
  }
}
</script>

<style lang="scss">
@import '@/assets/css/main.scss';

.c-base-slider {
  position: relative;
  display: grid;
  grid-template-columns: 10rem auto 10rem;
  padding: 0 20rem;
  overflow: hidden;

  .swiper {
    width: 1px;
    min-width: 100%;
    overflow: visible;

    .c-card-image {
      aspect-ratio: 3/4;
    }
  }

  &-control {
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    height: 100%;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      color: $accent-color;
      transition: scale 0.1s;

      &:hover {
        scale: 1.1;
      }
    }
  }

  @media screen and (max-width: 2024px) {
    grid-template-columns: 10rem auto 10rem;
    padding: 0 10rem;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 0 auto 0;
    padding: 0;
    overflow: unset;

    .swiper {
      overflow: hidden;
    }

    &-control {
      position: sticky;
      top: 0;
      max-height: 100vh;

      button {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        aspect-ratio: 1;
        background-color: $secondary-color-dark;

        &:hover {
          scale: 1;
        }
      }

      &:first-of-type {
        margin-right: -4rem;
        & > button > span {
          margin-right: .3rem;
        }
      }
      &:last-of-type {
        margin-left: -4rem;
        & > button > span {
          margin-left: .3rem;
        }
      }
    }
  }
}
</style>