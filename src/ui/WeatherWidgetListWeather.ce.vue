<template>
  <div
    :class="{
      'd-none': isCityListOpen || (isEmptyCitiesList && !isCityListOpen),
    }"
    class="weather-widget"
  >
    <div
      v-for="vWeather of ixWeather"
      :key="vWeather.id"
      class="weather-widget_single"
    >
      <div class="weather-widget_head">
        <h4 class="weather-widget_heading">
          {{ vWeather.city }}, {{ vWeather.country }}
          <span class="weather-widget_item"> {{ vWeather.weather }} </span>
        </h4>
        <button
          @click="fOpenCitiesList"
          :style="{ 'background-image': 'url(' + btnOpenBg + ')' }"
          class="weather-widget_btn"
        ></button>
      </div>
      <div class="weather-widget_main">
        <img
          class="weather-widget_img"
          :src="vWeather.icon_url"
          alt="Weather icon"
        />
        <span class="weather-widget_temp">{{ vWeather.temp }}°С</span>
      </div>

      <div class="weather-widget_info">
        <div class="weather-widget_row">
          <div class="weather-widget_item">
            Feels like {{ vWeather.feels_like }}°С,
          </div>
        </div>

        <div class="weather-widget_row">
          <div class="weather-widget_item">
            Wind speed: {{ vWeather.wind_speed }}m/s,
          </div>
        </div>

        <div class="weather-widget_row">
          <div class="weather-widget_item">
            Pressure:
            <span
              :style="{ 'background-image': 'url(' + pressureBgIcon + ')' }"
              class="weather-widget_icon"
            ></span>
            {{ vWeather.pressure }}hPa
          </div>
        </div>

        <div class="weather-widget_row">
          <div class="weather-widget_item">
            Humidity: {{ vWeather.humidity }}%
          </div>
        </div>

        <div class="weather-widget_row">
          <div class="weather-widget_item">
            Visibility: {{ vWeather.visibility / 1000 }}km
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { btnOpenBg, pressureBgIcon } from "@/icons_data/ui_icons";
import { WeatherDataIxI } from "@/interface/WeatherDataI";

export default defineComponent({
  name: "WeatherWidgetListWeather",

  data() {
    return {
      pressureBgIcon: pressureBgIcon,
      btnOpenBg: btnOpenBg,
    };
  },

  props: {
    ixWeather: {
      type: Object as PropType<WeatherDataIxI>,
      required: true,
    },
    isCityListOpen: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEmptyCitiesList: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  methods: {
    fOpenCitiesList() {
      this.$emit("on-open-cities-list");
    },
  },
});
</script>
