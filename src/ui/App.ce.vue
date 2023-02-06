<template>
  <weather-widget/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherWidget from './WeatherWidget.ce.vue';

export default defineComponent({
  name: 'App',
   components: {
    WeatherWidget,
  },
});
</script>

<style lang="scss" src="@/assets/styles/styles.scss"></style>