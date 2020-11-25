<template>
  <div class="socials">
    <div class="socials--icon" @click="sharePage('linkedin')"><Icon :iconProperties="{name: 'linkedin', size: '16', strokeColor: '#A8A8A8', strokeWidth: 2}" /><span class="hidden">LinkedIn</span></div>
    <div class="socials--icon" @click="sharePage('twitter')"><Icon :iconProperties="{name: 'twitter', size: '16', strokeColor: '#A8A8A8', strokeWidth: 2}" /><span class="hidden">Twitter</span></div>
    <div class="socials--icon" @click="sharePage('facebook')"><Icon :iconProperties="{name: 'facebook', size: '16', strokeColor: '#A8A8A8', strokeWidth: 2}" /><span class="hidden">Facebook</span></div>
  </div>
</template>

<script lang="ts">
// Core
import { defineComponent } from 'vue'

// Components
import Icon from '@/components/ui/icon/Icon.vue'

export default defineComponent({
  components: {
    Icon
  },
  setup () {
    let platformURL = ''
    const pageURL = window.location.href

    const sharePage = (platform: string) => {
      if (platform === 'mailto') {
        window.open(`mailto:?body=${pageURL}`, platform.charAt(0).toUpperCase(), 'height=450, width=550, top=' + (window.innerHeight / 2 - 225) + ', left=' + window.innerWidth / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0')
      }

      if (platform === 'copy') {
        // copyToClipBoard()
        return false
      }

      if (platform === 'twitter') {
        platformURL = 'http://twitter.com/share?url='
      }
      if (platform === 'facebook') {
        platformURL = 'https://www.facebook.com/sharer/sharer.php?u='
      }
      if (platform === 'google-plus') {
        platformURL = 'https://plus.google.com/share?url='
      }
      if (platform === 'whatsapp') {
        platformURL = 'https//api.whatsapp.com/send?text='
      }
      if (platform === 'linkedin') {
        platformURL = 'https://www.linkedin.com/sharing/share-offsite/?url='
      }

      window.open(platformURL + pageURL, platform.charAt(0).toUpperCase(), 'height=450, width=550, top=' + (window.innerHeight / 2 - 225) + ', left=' + window.innerWidth / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0')
    }

    return {
      sharePage
    }
  }
})
</script>

<style scoped>

</style>
