<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">
          <img src="@/assets/moschee_logo.jpeg" alt="" class="logo-pic">
          <router-link to="/"><span>Baitul Mukarram</span></router-link>
        </div>
        <ul class="nav-links">
          <li>
            <router-link to="/PrayerView">
              <span class="nav-text">Prayer Times</span>
              <span class="nav-icon"><i class="fa fa-clock-o"></i></span>
            </router-link>
          </li>
          <li>
            <router-link to="/calender-view">
              <span class="nav-text">Prayer Calender</span>
              <span class="nav-icon"><i class="fa fa-calendar"></i></span>
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <CookiePopup />

    <main>
      <router-view />
    </main>

    <hr class="guestbook-separator" />

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Über Uns</h3>
          <p>Baitul Mukarram Masjid e.V.</p>
          <p>Fontanestraße 17, 12049 Berlin</p>
        </div>
        <div class="footer-section">
          <h3>Kontakt</h3>
          <p>Email: info@baitul-mukarram-masjid-berlin.de</p>
          <p>Telefon: 030 6272 5524</p>
        </div>
        <div class="footer-section">
          <h3>Rechtliches</h3>
          <p><router-link to="/ImpressumView">Impressum</router-link> | <router-link to="/DatenschutzView">Datenschutz</router-link></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Baitul Mukarram Masjid e.V. Berlin. Alle Rechte vorbehalten.</p>
        <p>Favicon von <a href="https://www.vecteezy.com/">vecteezy.com</a></p>
      </div>
    </footer>
  </div>
</template>
<script>
import CookiePopup from '@/components/CookiePopup.vue'

export default {
  name: 'App',
  components: {
    CookiePopup
  }
}
</script>
<style scoped>
/* Navigation Styles */
router-link{
  white-space: nowrap;
}

header {
  background: var(--nav-bg-color);
  border-bottom: 1px solid var(--border);
  text-align: center;
  padding: 2rem .5rem;
  width: 100vw;
  position: relative;
  box-sizing: border-box;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

nav {
  background-color: var(--nav-bg-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
}

.logo {
   display: flex;
   align-items: center;
   gap: 5px; /* Abstand zwischen Logo und Text */
 }

.logo-pic {
  height: fit-content; /* Automatische Höhe */
  object-fit: contain;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.nav-links a {
  text-decoration: none;
  font-weight: 500;
  color: var(--text-color);
  transition: background 0.3s, color 0.3s;
  padding: 8px 12px;
  border-radius: var(--border-radius);
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  background: var(--primary-color);
  color: #fff;
}
/* Hier werden standardmäßig der Text angezeigt und das Icon ausgeblendet */
.nav-text {
  display: inline;
}

.nav-icon {
  display: none;
}

.footer {
  flex: unset;  /* flexbox zurücksetzen */
  background-color: var(--nav-bg-color);
  color: var(--text-color);
  padding: 30px 0;
  text-align: center;
  font-size: 0.9rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin: 10px;
  text-align: left;
}

.footer-section h3 {
  margin-bottom: 12px;
  font-size: 1.2rem;
  border-bottom: 2px solid rgb(12, 91, 0);
  display: inline-block;
  padding-bottom: 5px;
}

.footer-section p,
.footer-section a {
  font-size: 0.9rem;
  color: #306d2e;
  margin: 5px 0;
  text-decoration: none;
}

.footer-section a:hover {
  color: #e97200;
  text-decoration: underline;
}

.footer-bottom {
  background-color: var(--nav-bg-color);
  padding: 15px 0;
  margin-top: 20px;
  font-size: 0.85rem;
  text-align: center;
  border-top: 1px solid rgb(48, 109, 46);
}

/* Mobile Ansicht: Bild über Text */
@media (max-width: 768px) {
  .logo-pic {
    height: auto;
    max-width: 25%;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Verhindert, dass andere Elemente in die Box gedrückt werden */
    gap: 10px;
  }

  .logo a {
    font-size: clamp(1.2rem, 2.5vw, 1.5rem);
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    max-width: 100%;
  }

  nav {
    position: relative;
    min-height: 60px;
    justify-content: center;
    overflow: visible;
    flex-wrap: nowrap;
    max-height: 8vh; /* prozentual Höhe reducing*/
    padding: 3px 10px; /* weniger padding */
  }

  .nav-links {
    display: flex;
    gap: initial;
    flex-wrap: nowrap;
    align-items: center;
  }

  /* Im mobilen View: Text ausblenden, Icon einblenden */
  .nav-text {
    display: none;
  }

  .nav-icon {
    display: inline-block;
  }

}
</style>
