<template>
  <div class="prayer-container">
    <header class="header">
      <h1>Gebetszeiten</h1>
      <p>{{ msg }}</p>
    </header>

    <div v-if="loading" class="loading">
      Lade Gebetszeiten...
    </div>
    <div v-else-if="error" class="error">
      Fehler: {{ error }}
    </div>
    <div v-else>
      <section class="daily-prayers">
        <h2>Tägliche Gebete</h2>
        <div class="prayers-grid">
          <div v-for="(time, prayer) in dailyPrayers" :key="prayer" class="prayer-card" :class="{ 'active-prayer': prayer === currentPrayer }">
            <div class="prayer-name">{{ prayer }}</div>
            <div class="prayer-time">{{ time }}</div>
          </div>
        </div>
      </section>
      <section class="jumma-prayer">
        <div class="prayers-grid">
          <div class="prayer-name">1. Freitagsgebet:</div>
          <div class="prayer-time">13:15 Uhr</div>
        </div>
      </section>
      <section class="jumma-prayer">
        <div class="prayers-grid">
          <div class="prayer-name">2. Freitagsgebet:</div>
          <div class="prayer-time">14:15 Uhr</div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrayerTime',
  props: {
    msg: {
      type: String,
      default: 'Gebetszeiten werden täglich aktualisiert und sind für den Standort Berlin'
    }
  },
  data () {
    return {
      currentPrayer: null,
      prayerTimes: [
        { date: '01.05', fajr: '3:38', zuhr: '13:09', asr: '17:11', maghrib: '20:38', isha: '22:17' },
        { date: '02.05', fajr: '3:38', zuhr: '13:09', asr: '17:11', maghrib: '20:40', isha: '22:18' },
        { date: '03.05', fajr: '3:37', zuhr: '13:08', asr: '17:12', maghrib: '20:42', isha: '22:18' },
        { date: '04.05', fajr: '3:36', zuhr: '13:08', asr: '17:13', maghrib: '20:43', isha: '22:19' },
        { date: '05.05', fajr: '3:36', zuhr: '13:08', asr: '17:13', maghrib: '20:45', isha: '22:20' },
        { date: '06.05', fajr: '3:35', zuhr: '13:08', asr: '17:14', maghrib: '20:47', isha: '22:20' },
        { date: '07.05', fajr: '3:34', zuhr: '13:08', asr: '17:15', maghrib: '20:48', isha: '22:21' },
        { date: '08.05', fajr: '3:34', zuhr: '13:08', asr: '17:15', maghrib: '20:50', isha: '22:22' },
        { date: '09.05', fajr: '3:33', zuhr: '13:08', asr: '17:16', maghrib: '20:52', isha: '22:23' },
        { date: '10.05', fajr: '3:32', zuhr: '13:08', asr: '17:17', maghrib: '20:53', isha: '22:23' },
        { date: '11.05', fajr: '3:32', zuhr: '13:08', asr: '17:17', maghrib: '20:55', isha: '22:24' },
        { date: '12.05', fajr: '3:31', zuhr: '13:08', asr: '17:18', maghrib: '20:57', isha: '22:25' },
        { date: '13.05', fajr: '3:30', zuhr: '13:08', asr: '17:19', maghrib: '20:58', isha: '22:25' },
        { date: '14.05', fajr: '3:30', zuhr: '13:08', asr: '17:19', maghrib: '21:00', isha: '22:26' },
        { date: '15.05', fajr: '3:29', zuhr: '13:08', asr: '17:20', maghrib: '21:01', isha: '22:27' },
        { date: '16.05', fajr: '3:28', zuhr: '13:08', asr: '17:21', maghrib: '21:03', isha: '22:27' },
        { date: '17.05', fajr: '3:28', zuhr: '13:08', asr: '17:21', maghrib: '21:05', isha: '22:28' },
        { date: '18.05', fajr: '3:27', zuhr: '13:08', asr: '17:22', maghrib: '21:06', isha: '22:29' },
        { date: '19.05', fajr: '3:26', zuhr: '13:08', asr: '17:23', maghrib: '21:08', isha: '22:29' },
        { date: '20.05', fajr: '3:25', zuhr: '13:08', asr: '17:23', maghrib: '21:09', isha: '22:30' },
        { date: '21.05', fajr: '3:25', zuhr: '13:08', asr: '17:24', maghrib: '21:11', isha: '22:31' },
        { date: '22.05', fajr: '3:24', zuhr: '13:08', asr: '17:24', maghrib: '21:12', isha: '22:32' },
        { date: '23.05', fajr: '3:23', zuhr: '13:08', asr: '17:25', maghrib: '21:14', isha: '22:33' },
        { date: '24.05', fajr: '3:22', zuhr: '13:08', asr: '17:25', maghrib: '21:15', isha: '22:34' },
        { date: '25.05', fajr: '3:22', zuhr: '13:08', asr: '17:26', maghrib: '21:16', isha: '22:35' },
        { date: '26.05', fajr: '3:21', zuhr: '13:08', asr: '17:27', maghrib: '21:18', isha: '22:36' },
        { date: '27.05', fajr: '3:20', zuhr: '13:09', asr: '17:27', maghrib: '21:19', isha: '22:37' },
        { date: '28.05', fajr: '3:20', zuhr: '13:09', asr: '17:28', maghrib: '21:20', isha: '22:38' },
        { date: '29.05', fajr: '3:19', zuhr: '13:09', asr: '17:28', maghrib: '21:22', isha: '22:39' },
        { date: '30.05', fajr: '3:19', zuhr: '13:09', asr: '17:29', maghrib: '21:23', isha: '22:40' },
        { date: '31.05', fajr: '3:18', zuhr: '13:09', asr: '17:29', maghrib: '21:24', isha: '22:41' }
      ],
      dailyPrayers: {},
      loading: true,
      error: null
    }
  },
  mounted () {
    this.setPrayerTimes()
    this.updateCurrentPrayer()
    setInterval(this.updateCurrentPrayer, 60000) // Aktualisierung jede Minute
  },
  methods: {
    setPrayerTimes () {
      const today = new Date()
      const todayDate = this.formatDate(today.getDate(), today.getMonth() + 1) // Aktuelles Datum formatieren 'DD.MM'

      let found = false // Flag für die Übereinstimmung des Datums

      this.prayerTimes.forEach(time => {
        if (time.date === todayDate) {
          this.dailyPrayers = {
            Fajr: time.fajr,
            Zuhr: time.zuhr, // das wort zuhr in großes umändern für auskommentierten block
            Asr: time.asr,
            Maghrib: time.maghrib,
            Isha: time.isha
          }
          found = true
        }
      })

      if (!found) {
        this.error = 'Fehler beim Anzeigen der Zeiten.'
      }

      this.loading = false
    },
    formatDate (day, month) {
      return (day < 10 ? `0${day}` : day) + '.' + (month < 10 ? `0${month}` : month)
    },
    updateCurrentPrayer () {
      const now = new Date()
      const currentTime = now.getHours() * 60 + now.getMinutes() // Minuten seit Mitternacht
      const today = this.prayerTimes.find(time => time.date === this.formatDate(now.getDate(), now.getMonth() + 1))

      if (!today) return

      const prayerTimesArray = [
        { name: 'Fajr', time: today.fajr },
        { name: 'Zuhr', time: today.zuhr },
        { name: 'Asr', time: today.asr },
        { name: 'Maghrib', time: today.maghrib },
        { name: 'Isha', time: today.isha }
      ]

      let nextPrayer = null
      console.log('Aktuelle Zeit (Minuten seit Mitternacht):', currentTime)
      console.log('Heutige Gebetszeiten:', today)

      for (let i = 0; i < prayerTimesArray.length; i++) {
        const prayerTime = prayerTimesArray[i]
        const [hours, minutes] = prayerTime.time.split(':').map(Number)
        const prayerMinutes = hours * 60 + minutes
        console.log('Aktuelle Zeit (Minuten seit Mitternacht):', currentTime)
        console.log('Heutige Gebetszeiten:', today)
        console.log('Gebet geprüft:', prayerTime.name, 'um', prayerTime.time)
        if (currentTime >= prayerMinutes && currentTime < prayerMinutes + 5) {
          this.currentPrayer = prayerTime.name
          console.log('Aktuelle Zeit (Minuten seit Mitternacht):', currentTime)
          console.log('Heutige Gebetszeiten:', today)
          return
        } else if (currentTime < prayerMinutes) {
          nextPrayer = prayerTime.name
          console.log('Aktuelle Zeit (Minuten seit Mitternacht):', currentTime)
          console.log('Heutige Gebetszeiten:', today)
          break
        }
      }
      console.log('heutige gebetszeiten:', today)
      console.log(new Date().toLocaleString())
      this.currentPrayer = nextPrayer
    }
  }
}
</script>

<style scoped>
.prayer-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.header {
  text-align: center;
  margin-bottom: 30px;
}
.daily-prayers {
  background: var(--nav-bg-color);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.daily-prayers h2 {
  text-align: center;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.prayers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.prayer-card {
  flex: 1 1 150px;
  max-width: 200px;
  background: var(--nav-bg-color);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.prayer-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.prayer-name {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--text-color);
}

.prayer-time {
  font-size: 1.4em;
  color: var(--text-color);
}

.loading,
.error {
  text-align: center;
  font-size: 1.2em;
  margin-top: 20px;
}
</style>

.active-prayer {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  background: var(--primary-color);
  color: white;
}
