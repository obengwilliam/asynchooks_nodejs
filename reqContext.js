'use strict'

const asyncHooks = require('async_hooks')
const log = process._rawDebug

const ctx = new Map()

function init (asyncId, type, triggerAsyncId) {
  const ctxId = ctx.get(triggerAsyncId)
  if (!ctxId) return
  ctx.set(asyncId, ctxId)
}

function destroy (asyncId) {
  ctx.delete(asyncId)
}
asyncHooks.createHook({ init, destroy }).enable()

module.exports = {
  addContext (id) {
    const asyncId = asyncHooks.executionAsyncId()
    ctx.set(asyncId, id)
  },

  getContext () {
    const asyncId = asyncHooks.executionAsyncId()
    return ctx.get(asyncId)
  }
}
