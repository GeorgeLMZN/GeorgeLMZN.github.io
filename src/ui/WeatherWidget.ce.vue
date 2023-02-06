<template>
  <div class="weather-widget_wrapper">
    <weather-widget-no-cities
      v-if="isEmptyCitiesList && !isCityListOpen"
      @on-cities-list-visibility-change="fCitiesListVisibilityChange"
    />

    <weather-widget-list-weather
      v-if="!isEmptyCitiesList"
      :isEmptyCitiesList="isEmptyCitiesList"
      :isCityListOpen="isCityListOpen"
      :ixWeather="ixWeather"
      @on-open-cities-list="fCitiesListVisibilityChange"
    />

    <weather-widget-list-city
      :isCityListOpen="isCityListOpen"
      :ixWeather="ixWeather"
      @on-delete-city="fDeleteCity"
      @on-close-cities-list="fCitiesListVisibilityChange"
      @on-add-city="faAddCity"
      @on-drop-item="fSortWeatherData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { WeatherDataI, WeatherOrderInfoI } from '@/interface/WeatherDataI';
import { weatherWidget as ctrl } from '@/app/WeatherWidgetApp';
import WeatherWidgetListWeather from './WeatherWidgetListWeather.ce.vue';
import WeatherWidgetListCity from './WeatherWidgetListCity.ce.vue';
import WeatherWidgetNoCities from './WeatherWidgetNoCities.ce.vue';

export default defineComponent({
  name: 'WeatherWidget',

  components: {
    WeatherWidgetListWeather,
    WeatherWidgetListCity,
    WeatherWidgetNoCities,
  },

  data() {
    return {
      isCityListOpen: false,
      ixWeather: {} as Record<string, WeatherDataI>,
    };
  },

  methods: {
    fCitiesListVisibilityChange() {
      this.isCityListOpen = !this.isCityListOpen;
    },

    fDeleteCity(param: number) {
      delete this.ixWeather[param];
      this.ixWeather = { ...this.ixWeather };
      ctrl.saveData(this.ixWeather);
    },

    fSortWeatherData(param: WeatherOrderInfoI) {
      this.ixWeather = { ...ctrl.sortIxItemsByOrder(param, this.ixWeather) };
      ctrl.saveData(this.ixWeather);
    },

    async faAddCity(param: { city: string }) {
      const vCityWeather = await ctrl.faGetWeatherDataByCityName(param.city);
      this.ixWeather[vCityWeather.city] = vCityWeather;
      this.ixWeather = { ...this.ixWeather };
      ctrl.saveData(this.ixWeather);
    },
  },

  async created() {
    const ixWeather = ctrl.getData();

    if (Object.keys(ixWeather).length) {
      this.ixWeather = ixWeather;
    } else {
      const vCoords = await ctrl.getCurrentLocation();
      const vCityWeather = await ctrl.faGetWeatherDataByCoords(vCoords);
      this.ixWeather[vCityWeather.city] = vCityWeather;
      this.ixWeather = { ...this.ixWeather };
      ctrl.saveData(this.ixWeather);
    }
  },

  computed: {
    isEmptyCitiesList(): boolean {
      return !Object.keys(this.ixWeather).length;
    },
    isShowControls(): boolean {
      return this.isEmptyCitiesList && !this.isCityListOpen;
    },
  },
});
</script>
