<template>
  <div class="hello">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"/>
    </l-map>
  </div>
</template>

<script>
// import L from 'leaflet'
import { LMap, LTileLayer } from 'vue2-leaflet'

export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer
  },
  data() {
    return {
      center: [-8.6705, 115.2126],
      zoom: 9,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    height: 100vh;
    width: 100vh;
  }
</style>
