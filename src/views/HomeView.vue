<template>
  <div class="home">
    <h2>Die Baitul Mukarram Masjid e.V.</h2>
    <div class="slider" @touchstart="startTouch" @touchend="endTouch">
      <button class="slider-button left" @click="prevImage">&#10094;</button>
      <button class="slider-button right" @click="nextImage">&#10095;</button>
      <div class="slider-container" :style="{ transform: slidePosition }">
        <img v-for="(image, index) in images" :key="index" :src="image" class="img-fluid" alt="mosque image">
      </div>
    </div>
    <a
      href="https://maps.app.goo.gl/Y2V87o6D98Wm8kTm7"
      target="_blank"
      class="map-link"
    >
      in der Fontanestraße 17/Selchower Straße 12 in Berlin-Neukölln!
    </a>
    <br />
      <p class="footer-bottom"><span>(zuletzt aktualisiert: 19.05.2025)</span></p>
    <section class="jumma-prayer">
      <div class="prayers-grid">
        <div class="prayer-name">1. Freitagsgebet</div>
        <div class="prayer-time"> 13:15 Uhr </div>
        <div>(bengalische Khutba)</div>
      </div>
    </section>
    <section class="jumma-prayer">
      <div class="prayers-grid">
        <div class="prayer-name">2. Freitagsgebet</div>
        <div class="prayer-time"> 14:15 Uhr </div>
        <div>(deutsch/arabische Khutba)</div>
      </div>
    </section>
    <h3 class="d-flex flex-column" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-controls="multiCollapseExample1"> <u>Bevorstehende Events</u></h3>
      <div class="row">
        <div class="collapse multi-collapse show" id="multiCollapseExample1">
          <div v-if="events.length > 0" class="events">
            <div class="events">
              <div class="event" v-for="event in events" :key="event.id">
                <h4 :style="{ whiteSpace: 'pre-line' }">{{ event.title }}</h4>
                <hr class="event-separator" />
                <p :style="{ whiteSpace: 'pre-line' }">{{ event.description }}</p>
              </div>
            </div>
          </div>
          <div v-else>
            {{ error }}
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <h3 class="d-flex flex-column" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-controls="multiCollapseExample2"><u>Über die Moschee </u></h3>
        <div class="collapse multi-collapse show" id="multiCollapseExample2">
              <p><br>Inspiriert von der Baitul Mukarram Moschee in Bangladesh möchten wir eine Moschee schaffen,
                die der muslimischen Gemeinschaft als Gebetstätte dient und zugleich über unsere bengalische Kultur
                und Gemeinschaft den interkulturellen Austausch mit Geschwistern des Islams fördert.</p>
          <div class="slider" @touchstart="startTouch" @touchend="endTouch">
            <button class="slider-button left" @click="prevImage">&#10094;</button>
            <button class="slider-button right" @click="nextImage">&#10095;</button>
            <div class="slider-container" :style="{ transform: slidePosition }">
              <img v-for="(image, index) in images" :key="index" :src="image" class="img-fluid" alt="mosque image">
            </div>
          </div>
        </div>
      <p><br>Für die Gebetszeiten orientieren wir uns an der App "MyMasjid"-App:</p>
      <li><a href="https://apps.apple.com/de/app/my-masjid-community/id1452575134" target="_blank">Herunterladen im Apple App Store</a></li>
      <li><a href="https://play.google.com/store/apps/details?id=com.teo.mymasjid&hl=de" target="_blank">Herunterladen im Google Play Store</a></li>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods: {
    CalenderPage () {
      this.$router.push('/calender-view') // Weiterleitung zur anderen Seite
    },
    nextImage () {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevImage () {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    startTouch (e) {
      this.startX = e.changedTouches[0].clientX
    },
    endTouch (e) {
      const endX = e.changedTouches[0].clientX
      const diffX = this.startX - endX

      if (diffX > 50) {
        this.nextImage()
      } else if (diffX < -50) {
        this.prevImage()
      }
    }
  },
  data () {
    return {
      images: [
        require('@/assets/pexels-neukoelln-baitul-mukarram-front.png'),
        require('@/assets/moschee-draußen.png'),
        require('@/assets/pexels-neukoelln-baitul-mukarram.jpeg')
      ],
      currentIndex: 0,
      events: [{
        id: 1,
        title: '🕌Gebetszeiten des Eid-ul-Adha 2025',
        description: '1. Gebet: 6:00 Uhr (bangla)\n 2. Gebet: 8:00 Uhr (arabic) \n 3. Gebet: 9:00 Uhr (bangla) \n'
      }],
      error: 'Zurzeit keine Events',
      startX: 0
    }
  },
  computed: {
    currentImage () {
      return this.images[this.currentIndex]
    },
    slidePosition () {
      return `translateX(-${this.currentIndex * 100}%)` // Verschiebt die Bilder
    }
  },
  mounted () {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    }, 5000) // Wechselt alle 5 Sekunden
  }
}
</script>

<style>

.jumma-prayer {
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

/* Flexibles Grid für die Karten */
.prayers-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
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
  margin-top: -5px;
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

.slider {
  width: 100%;
  max-width: 600px; /* Oder gewünschte Breite */
  height: 350px; /* Einheitliche Höhe */
  overflow: hidden;
  position: relative;
}

.slider-container {
  display: flex;
  width: 100%; /* Breite für alle Bilder */
  transition: transform 0.5s ease-in-out; /* Animationsdauer */
}

.slider img {
  width: 200%;
  height: 400px; /* Einheitliche Höhe */
  object-fit: contain; /* Keine Verzerrung */
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .slider {
    width: 100%;
    max-width: 500px; /* Oder gewünschte Breite */
    height: 200px; /* Einheitliche Höhe */
    overflow: hidden;
    position: relative;
  }

  .slider-container {
    display: flex;
    width: 100%; /* Breite für alle Bilder */
    transition: transform 0.5s ease-in-out; /* Animationsdauer */
  }

  .slider img {
    width: 100%;
    height: 200px; /* Einheitliche Höhe */
    object-fit: contain; /* Keine Verzerrung */
    flex-shrink: 0;
  }

  .slider-button {
    width: 36px;
    height: 36px;
    font-size: 18px;
    padding: 0;
  }

  .slider-button.left {
    left: 5px;
  }

  .slider-button.right {
    right: 5px;
  }
}

.event-separator {
  border: none;
  border-top: 1px solid var(--primary-color);
  margin: 10px 0;
  width: 100%;
}
/* Klassischer Link-Stil für die Kartenlink */
.map-link {
  color: #1a0dab;
  text-decoration: underline;
  cursor: pointer;
}

.map-link:hover {
  text-decoration: none;
}

.slider-button {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: rgba(0,0,0,0.5);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 1;
  font-size: 18px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0;
}

.slider-button.left {
  left: 10px;
}

.slider-button.right {
  right: 10px;
}

.slider-button:hover {
  background-color: rgba(0,0,0,0.8);
}
</style>
