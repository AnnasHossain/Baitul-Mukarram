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
        { date: '01.06', fajr: '3:18', shouruq: '4:43', zuhr: '13:09', asr: '17:30', maghrib: '21:25', isha: '22:41' },
        { date: '02.06', fajr: '3:17', shouruq: '4:43', zuhr: '13:09', asr: '17:30', maghrib: '21:27', isha: '22:42' },
        { date: '03.06', fajr: '3:17', shouruq: '4:43', zuhr: '13:10', asr: '17:31', maghrib: '21:28', isha: '22:43' },
        { date: '04.06', fajr: '3:16', shouruq: '4:44', zuhr: '13:10', asr: '17:31', maghrib: '21:29', isha: '22:44' },
        { date: '05.06', fajr: '3:16', shouruq: '4:44', zuhr: '13:10', asr: '17:32', maghrib: '21:30', isha: '22:44' },
        { date: '06.06', fajr: '3:16', shouruq: '4:44', zuhr: '13:10', asr: '17:32', maghrib: '21:31', isha: '22:45' },
        { date: '07.06', fajr: '3:15', shouruq: '4:44', zuhr: '13:10', asr: '17:32', maghrib: '21:32', isha: '22:46' },
        { date: '08.06', fajr: '3:15', shouruq: '4:45', zuhr: '13:10', asr: '17:33', maghrib: '21:33', isha: '22:47' },
        { date: '09.06', fajr: '3:15', shouruq: '4:45', zuhr: '13:11', asr: '17:33', maghrib: '21:33', isha: '22:47' },
        { date: '10.06', fajr: '3:15', shouruq: '4:45', zuhr: '13:11', asr: '17:34', maghrib: '21:34', isha: '22:48' },
        { date: '11.06', fajr: '3:15', shouruq: '4:45', zuhr: '13:11', asr: '17:34', maghrib: '21:35', isha: '22:48' },
        { date: '12.06', fajr: '3:14', shouruq: '4:46', zuhr: '13:11', asr: '17:34', maghrib: '21:36', isha: '22:49' },
        { date: '13.06', fajr: '3:14', shouruq: '4:46', zuhr: '13:11', asr: '17:35', maghrib: '21:37', isha: '22:49' },
        { date: '14.06', fajr: '3:14', shouruq: '4:46', zuhr: '13:12', asr: '17:35', maghrib: '21:37', isha: '22:50' },
        { date: '15.06', fajr: '3:14', shouruq: '4:46', zuhr: '13:12', asr: '17:35', maghrib: '21:38', isha: '22:50' },
        { date: '16.06', fajr: '3:14', shouruq: '4:46', zuhr: '13:12', asr: '17:36', maghrib: '21:38', isha: '22:51' },
        { date: '17.06', fajr: '3:14', shouruq: '4:47', zuhr: '13:12', asr: '17:36', maghrib: '21:39', isha: '22:51' },
        { date: '18.06', fajr: '3:14', shouruq: '4:47', zuhr: '13:13', asr: '17:36', maghrib: '21:39', isha: '22:52' },
        { date: '19.06', fajr: '3:15', shouruq: '4:47', zuhr: '13:13', asr: '17:37', maghrib: '21:40', isha: '22:52' },
        { date: '20.06', fajr: '3:15', shouruq: '4:47', zuhr: '13:13', asr: '17:37', maghrib: '21:40', isha: '22:52' },
        { date: '21.06', fajr: '3:15', shouruq: '4:47', zuhr: '13:13', asr: '17:37', maghrib: '21:40', isha: '22:52' },
        { date: '22.06', fajr: '3:15', shouruq: '4:48', zuhr: '13:13', asr: '17:37', maghrib: '21:40', isha: '22:53' },
        { date: '23.06', fajr: '3:15', shouruq: '4:48', zuhr: '13:14', asr: '17:38', maghrib: '21:41', isha: '22:53' },
        { date: '24.06', fajr: '3:16', shouruq: '4:48', zuhr: '13:14', asr: '17:38', maghrib: '21:41', isha: '22:53' },
        { date: '25.06', fajr: '3:16', shouruq: '4:48', zuhr: '13:14', asr: '17:38', maghrib: '21:41', isha: '22:53' },
        { date: '26.06', fajr: '3:16', shouruq: '4:48', zuhr: '13:14', asr: '17:38', maghrib: '21:41', isha: '22:53' },
        { date: '27.06', fajr: '3:17', shouruq: '4:49', zuhr: '13:14', asr: '17:38', maghrib: '21:41', isha: '22:53' },
        { date: '28.06', fajr: '3:17', shouruq: '4:49', zuhr: '13:15', asr: '17:38', maghrib: '21:41', isha: '22:53' },
        { date: '29.06', fajr: '3:17', shouruq: '4:49', zuhr: '13:15', asr: '17:38', maghrib: '21:40', isha: '22:53' },
        { date: '30.06', fajr: '3:18', shouruq: '4:50', zuhr: '13:15', asr: '17:38', maghrib: '21:40', isha: '22:53' }
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
      // Zum Testen der Zeit
      // now.setHours(2)
      // now.setMinutes(0)
      const currentTime = now.getHours() * 60 + now.getMinutes() // Minuten seit Mitternacht
      const today = this.prayerTimes.find(time => time.date === this.formatDate(now.getDate(), now.getMonth() + 1))

      if (!today) return

      // prayerTimesArray mit shouruq, falls vorhanden
      const prayerTimesArray = [
        { name: 'Fajr', time: today.fajr },
        { name: 'Zuhr', time: today.zuhr },
        { name: 'Asr', time: today.asr },
        { name: 'Maghrib', time: today.maghrib },
        { name: 'Isha', time: today.isha }
      ]
      // Shouruq als gesonderter Eintrag für die Logik (aber nicht als offizielles Gebet)
      if (today.shouruq) {
        prayerTimesArray.splice(1, 0, { name: 'Shouruq', time: today.shouruq })
      }

      // Debug-Ausgaben
      console.log('Aktuelle Zeit (Minuten seit Mitternacht):', currentTime)
      console.log('Heutige Gebetszeiten:', today)

      for (let i = 0; i < prayerTimesArray.length; i++) {
        const prayerTime = prayerTimesArray[i]
        const [hours, minutes] = prayerTime.time.split(':').map(Number)
        const prayerMinutes = hours * 60 + minutes

        let nextPrayerMinutes = Infinity
        // Spezielle Behandlung: Fajr läuft bis Shouruq
        if (i === 0 && today.shouruq) {
          const [shouruqHours, shouruqMinutes] = today.shouruq.split(':').map(Number)
          nextPrayerMinutes = shouruqHours * 60 + shouruqMinutes
        } else if (i + 1 < prayerTimesArray.length) {
          // Normale Fälle: nächste Gebetszeit am gleichen Tag
          const [nextHours, nextMinutes] = prayerTimesArray[i + 1].time.split(':').map(Number)
          nextPrayerMinutes = nextHours * 60 + nextMinutes
        } else {
          // Sonderfall: letztes Gebet (Isha) – läuft bis zum nächsten Fajr am nächsten Tag
          const [fajrHours, fajrMinutes] = prayerTimesArray[0].time.split(':').map(Number)
          nextPrayerMinutes = fajrHours * 60 + fajrMinutes + 1440 // +1 Tag
        }

        // Shouruq ist kein offizielles Gebet, daher nicht als currentPrayer setzen
        if (
          prayerTime.name !== 'Shouruq' &&
          (
            (currentTime >= prayerMinutes && currentTime < nextPrayerMinutes) ||
            (nextPrayerMinutes > 1440 && currentTime < nextPrayerMinutes - 1440)
          )
        ) {
          this.currentPrayer = prayerTime.name
          return
        }
      }
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
.active-prayer {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  background: var(--primary-color);
  color: white;
}
</style>
