'use strict'

const asyncHooks = require('async_hooks')

const log = process._rawDebug


function init () {
  log('init')
}

function destroy () {
  log('destroy')
}

asyncHooks
  .createHook({
    init,
    destroy
  })
  .enable()

setTimeout(function () {
  log('IN')
}, 2000)
