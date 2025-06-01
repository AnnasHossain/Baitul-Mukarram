<template>
  <div v-if="!cookieAccepted" class="cookie-popup">
    <p>
      Diese Website verwendet Cookies, um sicherzustellen, dass Sie das beste Erlebnis auf unserer Website erhalten.
    </p>
    <button @click="acceptCookies">Akzeptieren</button>
  </div>
</template>

<script>
export default {
  name: 'CookiePopup',
  data () {
    return {
      cookieAccepted: false
    }
  },
  mounted () {
    // Überprüfe, ob der Nutzer bereits Cookies akzeptiert hat
    this.cookieAccepted = localStorage.getItem('cookieAccepted') === 'true'
  },
  methods: {
    acceptCookies () {
      this.cookieAccepted = true
      localStorage.setItem('cookieAccepted', 'true')
    }
  }
}
</script>

<style scoped>
.cookie-popup {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 1rem;
  text-align: center;
  z-index: 9999;
}
.cookie-popup button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
