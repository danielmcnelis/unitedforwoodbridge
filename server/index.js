
const fs = require('fs')
const http = require('http')
const https = require('https')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const onAWS = fs.existsSync('privkey.pem')
const PORT = onAWS ? 443 : 8080
const PORT2 = 8080
const app = express()
module.exports = app
let httpServer
let httpsServer

const createApp = () => {
	console.log('creating App...')
	// logging middleware
	app.use(morgan('dev'))

	// body parsing middleware
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	// compression middleware
	app.use(compression())

	// static file-serving middleware
	app.use(express.static(path.join(__dirname, '..', 'public')))

	// any remaining requests with an extension (.js, .css, etc.) send 404
	app.use((req, res, next) => {
		if (path.extname(req.path).length) {
			const err = new Error('Not found')
			err.status = 404
			next(err)
		} else {
			next()
		}
	})

	// sends index.html
	app.use('*', (req, res) => {
		res.sendFile(path.join(__dirname, '..', 'public/index.html'))
	})

	// error handling endware
	app.use((err, req, res, next) => {
		console.error(err)
		console.error(err.stack)
		res.status(err.status || 500).send(err.message || 'Internal server error.')
	})

	// load key/cert
	const privateKey = fs.existsSync('privkey.pem') ? fs.readFileSync('privkey.pem', 'utf8') : ''
	const certificate = fs.existsSync('fullchain.pem') ? fs.readFileSync('fullchain.pem', 'utf8') : ''
	const credentials = { key: privateKey, cert: certificate }

	// Wrap(proxy) express with http server
	httpServer = http.createServer(app)

	// Wrap(proxy) http server with https server
	httpsServer = https.createServer(credentials, app)
}

const startListening = () => {
	console.log('start Listening...')
	// start listening (and create a 'server' object representing our server)
	// const server = app.listen(PORT, () =>
	// 	console.log(`Mixing it up on port ${PORT}`)
	// )
	if (onAWS) {
		const server1 = httpsServer.listen(PORT, () =>
			console.log(`Mixing it up on port ${PORT}`)
		)
		const server2 = httpServer.listen(PORT2, () =>
			console.log(`Testing things out on port ${PORT2}`)
		)
	} else {
		const server = httpServer.listen(PORT, () =>
			console.log(`Testing things out on port ${PORT}`)
		)
	}
}

async function bootApp() {
	await createApp()
	await startListening()
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
	bootApp()
} else {
	createApp()
}
