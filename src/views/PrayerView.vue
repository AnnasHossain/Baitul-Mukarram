<template>
  <div class="PrayerView">
    <PrayerTime msg="Gebetszeiten sind mit den Gebetszeiten der MyMasjid App identisch"/>
  </div>
</template>

<script>
import PrayerTime from '@/components/PrayerTime.vue'
export default {
  name: 'PrayerView',
  components: {
    PrayerTime
  }
}
</script>
