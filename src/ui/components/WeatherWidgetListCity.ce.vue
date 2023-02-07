<template>

  <div class="weather-widget_list" :class="{'d-none': !isCityListOpen}">

    <div class="weather-widget_head">

      <h4 class="weather-widget_heading">Settings</h4>
      <button
          @click="fChangeCitiesListVisibility"
          :style="{ 'background-image': 'url(' + btnCloseBg + ')' }"
          class="weather-widget_btn"
      ></button>
    </div>

    <div
      @dragover.prevent
      @dragenter.prevent
      class="weather-widget_body"
      >
      <div
        v-for="item of ixWeather"
        :key="item.id"
        draggable="true"
        @drop.prevent="fOnDrop($event, item)"
        @dragstart="fStartDrag($event, item)"
        class="city-item"
        >
          {{ item.city }}
          <button 
            @click="fDelCity(item.city)"
            :style="{ 'background-image': 'url(' + btnTrashBg + ')' }"
            class="weather-widget_btn delete">
          </button>
      </div>
    </div>
    <label class="weather-widget_input-wrapper" for="add_city">
        <input
          v-model="sCity"
          @keypress.enter="fAddCity"
          class="weather-widget_input"
          id="add_city"
          type="text"
          autocomplete="off"
        />
        <button
          @click="fAddCity"
          :disabled="!sCity"
          :style="{ 'background-image': 'url(' + btnEnterBg + ')' }"
          class="weather-widget_btn add"
          ></button>
    </label>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { btnCloseBg, btnEnterBg, btnTrashBg } from '@/app/service/DownloadUiIonsS';
import { WeatherDataI, WeatherOrderInfoI } from '@/app/interface/WeatherDataI';

export default defineComponent({
  name: 'WeatherWidgetListCity',

  props: {
    ixWeather: {} as Record<string, WeatherDataI>,
    isCityListOpen: Boolean,
  },

  data() {
    return {
      sCity: '' as string,
      currentItem: {} as WeatherDataI,
      btnEnterBg: btnEnterBg,
      btnTrashBg: btnTrashBg,
      btnCloseBg: btnCloseBg
    };
  },

  methods: {
    fChangeCitiesListVisibility() {
      this.$emit('on-close-cities-list');
    },

    fAddCity() {
      this.$emit('on-add-city', {
        city: this.sCity,
      });
      this.sCity = '';
    },

    fDelCity(city: string) {
      this.$emit('on-delete-city', city);
    },

    fStartDrag(evt: any, item: WeatherDataI) {
      this.currentItem = item;
    },

    fOnDrop(evt: any, item: WeatherDataI) {
      const vEmitedData: WeatherOrderInfoI = {
        item_before: item,
        item: this.currentItem,
      };

      this.$emit('on-drop-item', vEmitedData);
    },
  },
});
</script>
