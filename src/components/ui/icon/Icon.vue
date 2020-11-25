<template>
  <span v-html="selectedIcon">
  </span>
</template>

<script lang="ts">
// Core
import { defineComponent, PropType } from 'vue'

// Interfaces
import { IconProps } from '@/types/Icon'

// It's GO Time!
export default defineComponent({
  props: {
    iconProperties: {
      type: Object as PropType<IconProps>,
      required: true
    }
  },
  setup (props) {
    const selectedIcon = `<img class="icon" src="/img/icons/feather/${props.iconProperties.name}.svg"/>`
    return {
      selectedIcon
    }
  }
})
</script>

<style scoped>

</style>
