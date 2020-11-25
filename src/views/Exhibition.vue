<template>

  <div class="exhibition">
    <div class="exhibition__navigation">
      <div class="icon-wrapper"><Icon class="icon" :iconProperties="{name: 'sliders', size: '16', strokeColor: '#9CB210', strokeWidth: 2}" /></div>
    </div>
    <div class="exhibition__cards">
      <div class="exhibition-card" v-for="item in drawings" :key="item.id" @click="showDetail(item.id)" :style="{'background-image': `url(/img/drawings/${item.thumb}`}">
        <div class="exhibition-card__overlay"></div>
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
        { thumb: 'img-27-thumb.jpg', full: 'img-27.jpg', name: 'Sasa', age: '9', country: 'Popasna', countrycode: 'AZ', id: '27' },
        { thumb: 'img-28-thumb.jpg', full: 'img-28.jpg', name: 'Sasa', age: '9', country: 'Popasna', countrycode: 'AZ', id: '28' },
        { thumb: 'img-30-thumb.jpg', full: 'img-30.jpg', name: 'Sasa', age: '9', country: 'Popasna', countrycode: 'AZ', id: '30' },
        { thumb: 'img-33-thumb.jpg', full: 'img-33.jpg', name: 'Sasa', age: '9', country: 'Popasna', countrycode: 'AZ', id: '33' },
        { thumb: 'img-34-thumb.jpg', full: 'img-34.jpg', name: 'Sasa', age: '9', country: 'Popasna', countrycode: 'AZ', id: '34' },
        { thumb: 'img-37-thumb.jpg', full: 'img-37.jpg', name: 'Sasa', age: '9', country: 'Popasna', countrycode: 'AZ', id: '37' },
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '1' },
        { thumb: 'img-1-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '3' },
        { thumb: 'img-2-nl-thumb.jpg', full: 'img-2-nl.jpg', name: 'Dieuwertje', age: '8', country: 'Netherlands', countrycode: 'AZ', id: '6' },
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
