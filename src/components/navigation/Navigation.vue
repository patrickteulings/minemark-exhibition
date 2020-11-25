<template>
  <div class="navigation" :class="[(menuOpen === true) ? 'opened': '']">
    <div class="logo"><a href="http://www.minemark.org"><img src="/img/assets/minemark-logo.png" alt="Mine Mark logo"></a></div>
    <div>
      <button class="btn--hamburger" @click="toggleMenu" :style="getRouteDependantStyle()" :class="getRouteDependantClass()">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navigation-content--wrapper">
      <div>
        <div class="navigation__items">
          <router-link @click.prevent="jump('/')" class="navigation__item" to="/"><span class="item">Home</span></router-link><br>
          <router-link @click.prevent="jump('/exhibition')" class="navigation__item" to="/exhibition"><span class="item">Exhibition</span></router-link><br>
          <router-link @click.prevent="jump('/the-project')" class="navigation__item" to="/the-project"><span class="item">About this project</span></router-link><br>
          <router-link @click.prevent="jump('/about-minemark')" class="navigation__item" to="/about-minemark"><span class="item">
            About Minemark
          </span></router-link><br>
          <router-link @click.prevent="jump('/donate')" class="navigation__item" to="/donate"><span class="item">Donate</span></router-link><br>
        </div>
        <div class="navigation__socials">
          <hr>
          <div class="navigation__social-items">
            <use-socials />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Core
import { defineComponent, reactive, toRefs } from 'vue'
import router from '@/router'

// Components
import UseSocials from '@/use/useSocials.vue'

export default defineComponent({
  name: 'Navigation',
  components: {
    UseSocials
  },
  setup () {
    const state = reactive({
      menuOpen: false
    })

    const openMenu = (): void => {
      state.menuOpen = true
    }

    const closeMenu = (): void => {
      state.menuOpen = false
    }

    const toggleMenu = (): void => {
      (state.menuOpen === true) ? closeMenu() : openMenu()
    }

    const jump = (_path: string) => {
      toggleMenu()
      router.push({ path: _path })
    }

    const getRouteDependantClass = (): string => {
      return (router.currentRoute.value.path === '/') ? 'white' : ''
    }

    const getRouteDependantStyle = (): object => {
      console.log(router.currentRoute.value)
      return { right: (router.currentRoute.value.path === '/') ? '-64px' : '-70px' }
      // return { left: '-80px' }
    }

    return {
      ...toRefs(state),
      jump,
      toggleMenu,
      getRouteDependantStyle,
      getRouteDependantClass
    }
  }
})
</script>

<style scoped>

</style>
