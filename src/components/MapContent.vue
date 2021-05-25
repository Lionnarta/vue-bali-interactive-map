<template>
  <div id="map-container"></div>
</template>

<script>
import L from 'leaflet'

export default {
  name: 'MapContent',
  data() {
    return {
      center: [-8.409518, 115.188919],
      zoom: 10,
      tileSize: 512,
      zoomOffset: -1
    }
  },
  methods: {
    setLeafletMap() {
      var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {id: "MapId",tileSize: this.tileSize, zoomOffset: this.zoomOffset ,attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
          topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {id: "MapId",tileSize: this.tileSize, zoomOffset: this.zoomOffset ,attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}),
          stadia = L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png', {id: "MapId",tileSize: this.tileSize, zoomOffset: this.zoomOffset ,attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'}),
          wi = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {id: "MapId",tileSize: this.tileSize, zoomOffset: this.zoomOffset ,attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});
      
      var southWest = L.latLng(-8.874141, 113.960504),
          northEast = L.latLng(-8.017000, 116.260766),
          bounds = L.latLngBounds(southWest, northEast);

      var map = L.map("map-container", {
        center: this.center,
        zoom: this.zoom,
        minZoom: 10,
        maxBounds: bounds,
        layers: [stadia]
      });

      var baseMap = {
        "Street" : street,
        "Topographic": topo,
        "Stadia": stadia,
        "World Imagery": wi
      }

      L.control.layers(baseMap, null, {position: "bottomright"}).addTo(map)
      L.control.scale({position: "topright"}).addTo(map)
    }
  },
  mounted() {
    this.setLeafletMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map-container {
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
