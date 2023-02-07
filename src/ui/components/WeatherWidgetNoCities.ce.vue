<template>
    <div class="no-cities">
      No cities yet...
      <button @click="fCitiesListVisibilityChange" class="no-cities_btn">Add one?</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WeatherWidgetNoCities',

  methods: {
    fCitiesListVisibilityChange() {
      this.$emit('on-cities-list-visibility-change');
    },
  },
});
</script>
