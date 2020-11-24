<template>

  <div class="exhibition">
    exhibition
    <div class="exhibition__navigation">
      <div class="datebar__icon--wrapper"><Icon class="datebar__icon" :iconProperties="{name: 'sliders', size: '16', strokeColor: '#9CB210', strokeWidth: 2}" /></div>
    </div>
    <div class="exhibition__cards">
      <div class="exhibition-card" v-for="item in drawings" :key="item.id" @click="showDetail(item.id)">
        <div class="exhibition-card__overlay"></div>
        <img class="exhibition-card__image" :src="`/img/drawings/${item.thumb}`" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
// Core
import { defineComponent } from 'vue'
import router from '@/router'

// Components
import Icon from '@/components/ui/icon/Icon.vue'

// It's GO Time
export default defineComponent({
  name: 'Exhibition',
  components: {
    Icon
  },
  setup () {
    const state = {
      drawings: [
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '1' },
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '2' },
        { thumb: 'img-1-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '3' },
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '4' },
        { thumb: 'img-1-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '5' }
      ]
    }

    const showDetail = (_id: string) => {
      router.push({ path: `/exhibition/${_id}/detail` })
    }

    return {
      ...state,
      showDetail,
      router
    }
  }
})
</script>
