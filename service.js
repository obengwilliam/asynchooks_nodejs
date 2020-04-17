'use strict'
const util = require('util')
const getUser = util.promisify(setTimeout)
const ctx = require('./reqContext')

module.exports = {
  async getProfile () {
    await getUser(3000)
    console.log('RQS:', ctx.getContext())
    return { name: 'william' }
  }
}
