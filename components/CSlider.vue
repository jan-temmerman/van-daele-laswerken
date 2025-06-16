<template>
  <div class="c-base-slider">
    <Swiper v-bind="fullSwiperParams" @swiper="onSwiper">
      <slot/>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper } from 'swiper/vue';
import { Keyboard, Scrollbar } from 'swiper/modules';

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
  spaceBetween: 16,
  slidesPerView: 1,
  slidesOffsetBefore: 20,
  slidesOffsetAfter: 20,
  breakpoints: {
    1024: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesOffsetBefore: 200,
      slidesOffsetAfter: 200,
    },
  },
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
.c-base-slider {
  width: 1px;
  min-width: 100%;

  .swiper {
    width: 1px;
    min-width: 100%;

    .c-card-image {
      aspect-ratio: 3/4;
    }
  }
}
</style>