<template>
  <div class="exhibition-detail">
    <use-socials class="socials-wrapper"/>
      <img :src="getImage()">
  </div>
</template>

<script lang="ts">
// Core
import { defineComponent } from 'vue'
import router from '@/router'

// Composable
import UseSocials from '@/use/useSocials.vue'

// It's GO Time
export default defineComponent({
  name: 'ExhibitionDetail',
  components: {
    UseSocials
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

    const getImage = (): string => {
      const image = state.drawings.find((item) => item.id === router.currentRoute.value.params.id)

      return (image) ? `/img/drawings/${image.full}` : `/img/drawings/img-not-found.jpg`
    }

    // const getBackgroundImage = (): object => {
    //   const image = state.drawings.find((item) => item.id === router.currentRoute.value.params.id)

    //   return (image) ? { backgroundImage: `/img/drawings/${image.full}` } : { backgroundImage: `/img/drawings/img-not-found.jpg` }
    // }

    return {
      ...state,
      router,
      getImage
    }
  }
})
</script>
