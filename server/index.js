import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import fs from 'fs'
import http from 'http'
import https from 'https'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

const httpServer = http.createServer(app)
httpServer.listen({ host, port })

try {
  const privateKey = fs.readFileSync('/shared/cert/nginx-private.key', 'utf8')
  const certificate = fs.readFileSync('/shared/cert/nginx-certificate.crt', 'utf8')

  const credentials = {
    key: privateKey,
    cert: certificate,
    requestCert: false,
    rejectUnauthorized: false
  }
  const httpsServer = https.createServer(credentials, app)

  httpsServer.listen({ host, port: 443 })
} catch (e) {

}

console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
