<template>
  <div class="exhibition-detail">
    exhibitiondetail {{router.currentRoute.value.params.id}}
    <use-socials />
    <!-- <div ref="socialsRef" id="social" class="social-wrapper">
      <div ref="facebook">FB</div>
      <div ref="twitter">twitter</div>
    </div> -->
    <div class="exhibition-detail__image">
      <img :src="getImage()">
    </div>
  </div>

</template>

<script lang="ts">
// Core
import { defineComponent, ref, onMounted } from 'vue'
import router from '@/router'

// Composable
import { useSocials } from '@/use/useSocials'
import UseSocials from '@/use/useSocials.vue'

// It's GO Time
export default defineComponent({
  name: 'ExhibitionDetail',
  components: {
    useSocials
  },
  setup () {

    UseSocials    const state = {
      drawings: [
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '1' },
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '2' },
        { thumb: 'img-1-thumb.jpg', full: 'img-1.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '3' },
        { thumb: 'img-0-thumb.jpg', full: 'img-0.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '4' },
        { thumb: 'img-1-thumb.jpg', full: 'img-1.jpg', name: 'Sasa', age: '8', country: 'Azerbedjan', countrycode: 'AZ', id: '5' }
      ]
    }

    const socialsRef = ref(null)

    const getImage = () => {
      const image = state.drawings.find((item) => item.id === router.currentRoute.value.params.id)

      return (image) ? `/img/drawings/${image.full}` : `/img/drawings/img-not-found.jpg`
    }

    onMounted(() => {
    })

    return {
      ...state,
      router,
      getImage
    }
  }
})
</script>
