<template>
  <div id="app">
    <Map/>
  </div>
</template>

<script>
import Map from './components/Map/MapContent.vue'

export default {
  name: 'App',
  components: {
    Map
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
