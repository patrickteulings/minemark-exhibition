<template>
  <div class="home">
    <div class="background">
      <div class="background__overlay"></div>
        <img src="img/drawings/homepage.jpg">
    </div>
    <div class="content-wrapper">
      <div class="intro-wrapper">
        <div class="intro"><h1>We are witnessing a new landmine emergency on a scale not seen since the historic treaty to ban landmines was agreed more than 20 years ago.</h1></div>
      </div>
      <nav class="home__navigation">
        <a class="navigation__item" @click.prevent="navigateTo('/exhibition')" href="/exhibition">
          <span class="subtitle">Enter the amzing</span>
          <span class="title">Exhibition</span>
        </a>
        <a class="navigation__item" @click.prevent="navigateTo('/project')" href="/the-project">
          <span class="subtitle">About</span>
          <span class="title">The Project</span></a>
        <a class="navigation__item" @click.prevent="navigateTo('/about-minemark')" href="/about-minemark">
          <span class="subtitle">Learn more about us</span>
          <span class="title">MineMark</span></a>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import router from '@/router'

export default defineComponent({
  name: 'Home',
  components: {

  },
  setup () {
    const navigateTo = (_url: string): void => {
      router.push({ path: _url })
    }

    return {
      navigateTo
    }
  }
})
</script>
