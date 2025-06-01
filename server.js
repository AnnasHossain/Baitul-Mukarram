const express = require('express')
const path = require('path')
const app = express()

// Statische Dateien aus dem "dist"-Ordner bereitstellen
app.use(express.static(path.join(__dirname, 'dist')))

// Alle Routen an index.html weiterleiten (für Single-Page-Applications)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`)
})
