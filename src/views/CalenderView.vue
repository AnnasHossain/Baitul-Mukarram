<template>
  <div class="CalenderView">
    <h2>Gebetszeiten Kalender 2025</h2>
    <div v-if="activeTab === 'live'" class="iframe-wrapper">
      <iframe
        src="https://time.my-masjid.com/sharescreen/5e222495-e74e-4492-bdb2-c4134ead1888?sound=0&isapp=1"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarView',
  data () {
    return {
      activeTab: 'live',
      loading: true
    }
  }
}
</script>

<style scoped>
.iframe-wrapper {
  margin-top: 20px;
  border: 2px solid var(--accent);
  border-radius: 10px;
  overflow: hidden;
}

table{
  white-space: nowrap;
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  -webkit-overflow-scrolling: auto;
}

table tr td:nth-child(8) {
  background-color: var(--iftar);
}
table tr td:nth-child(4) {
  background-color: var(--suhoor);
}
table thead:nth-child(1) td:nth-child(8) {
  background-color: var(--accent);
}
table thead:nth-child(1) td:nth-child(4) {
  background-color: var(--accent);
}

.calendar-view {
  background-color: var(--nav-bg-color);
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.calendar-view h2,
.calendar-view h3 {
  text-align: center;
  margin-bottom: 20px;
}

.calendar-embed {
  margin-bottom: 40px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Styling für die Event-Einträge */
.events .event {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  background: var(--nav-bg-color);
  transition: box-shadow 0.3s;
}

.events .event:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.events .event h4 {
  margin-bottom: 5px;
}

.events .event p {
  margin: 0 0 5px;
}

@media (max-width: 768px) {
  table th, table td {
    padding: 8px;
    white-space: nowrap;
  }
}
</style>
