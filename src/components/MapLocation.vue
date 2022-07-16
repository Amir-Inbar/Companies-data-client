<template>
  <section class="map-location flex column justify-center" v-if="location">
    <GMapMap
      :center="getLocation"
      :zoom="12"
      map-type-id="terrain"
      style="width: 100%; height: 180px"
      :options="mapOptions"
    >
      <GMapCluster>
        <GMapMarker :position="getLocation" :clickable="true" @click="center = getLocation" />
      </GMapCluster>
    </GMapMap>
  </section>
</template>

<script>
export default {
  name: 'map-location',
  props: {
    location: String,
  },
  data() {
    return {
      center: { lat: 37.33, lng: -121.8 },
    }
  },
  computed: {
    mapOptions() {
      return {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: true,
      }
    },
    getLocation() {
      return {
        lat: Number(this.location.slice(0, this.location.indexOf(','))),
        lng: Number(this.location.slice(this.location.indexOf(',') + 1, this.location.length - 1)),
      }
    },
  },
}
</script>
