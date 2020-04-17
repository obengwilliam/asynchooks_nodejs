'use strict'

const ctx = require('./reqContext')
const express = require('express')
const profileSvc = require('./service')

const app = express()
const router = express.Router()

// profile
router.get('/profile', async function (req, res, next) {
  console.log('RCT:', ctx.getContext())
  return res.status(200).json(await profileSvc.getProfile(req.id))
})

app.use(function (req, res, next) {
  const r = Math.random()
  console.log('R:', r)
  ctx.addContext(r)
  next()
})
app.use(router)

app.listen(3000, function () {
  console.log('Listening ', 3000)
})
