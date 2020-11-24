<template>
  <div class="navigation" :class="[(menuOpen === true) ? 'opened': '']">
    <div>
      <button class="btn--hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navigation-items">
      <router-link @click.prevent="jump('/')" class="navigation__item" to="/">Home</router-link>
      <router-link @click.prevent="jump('/the-project')" class="navigation__item" to="/the-project">About</router-link>
      <router-link @click.prevent="jump('/about-minemark')" class="navigation__item" to="/about-minemark">AboutMineMark</router-link>
      <router-link @click.prevent="jump('/exhibition')" class="navigation__item" to="/exhibition">Exhibition</router-link>
      <router-link @click.prevent="jump('/donate')" class="navigation__item" to="/donate">Donate</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import router from '@/router'

export default defineComponent({
  name: 'Navigation',
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

    return {
      ...toRefs(state),
      jump,
      toggleMenu
    }
  }
})
</script>

<style scoped>

</style>
