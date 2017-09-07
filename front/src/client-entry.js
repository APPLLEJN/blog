import Vue from 'vue'
import { app, appOption, router, store, isProd, preFetchComponent } from './main'
import clientGoogleAnalyse from './utils/clientGoogleAnalyse'
import makeResponsive from './assets/js/base'

const callback = isProd ? setTimeout : router.onReady.bind(router)
if (isProd) {
  store.state.isLoadingAsyncComponent = true
}

// setTimeout to make the following chunks loaded to webpack modules,
// therefore webpackJsonp won't create script to head to send a request
callback(() => {
  if (isProd) store.state.isLoadingAsyncComponent = false
  let realApp = isProd ? new Vue(appOption) : app

  // SSR can not render hash since browsers even don't send it
  // therefore we must hydrate the hash for the client side vue-router,
  // which is important for hash anchor jump especially for Table Of Contents(toc)
  if (window.__INITIAL_STATE__) {
    makeResponsive()
    window.__INITIAL_STATE__.route.hash = window.location.hash
    store.replaceState(window.__INITIAL_STATE__)
    realApp.$mount('#app')
  }

  // service worker
  if (isProd && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(() => {
      clientGoogleAnalyse(store.state.route.path || '/')
    })
  } else {
    clientGoogleAnalyse(store.state.route.path || '/')
  }

  const beforeEachHook = (to, from, next) => {
    // required by a new hash, just navigate to it
    if (to.path === from.path && to.hash !== from.hash) {
      return next()
    }
    let loadingPromise = store.dispatch('START_LOADING')
    let endLoadingCallback = (path) => {
      return loadingPromise.then(interval => {
        clearInterval(interval)
        store.dispatch('SET_PROGRESS', 100)
        next(path)
      })
    }

    // there must be a matched component according
    // to routes definition
    let component = router.getMatchedComponents(to.fullPath)[0]

    // if it's an async component, resolve it and check the preFetch
    // which can avoid clock when routes change
    if (typeof component === 'function' && !component.options) {
      return new Promise((resolve, reject) => {
        const _resolve = realComponent => {
          resolve(realComponent)
        }
        // for general component
        let res = component(_resolve)
        // for factory component
        if (res && res.then) {
          res.then(_resolve)
        }
      }).then(component => letsGo(component, store, to, endLoadingCallback))
    }
    // component is there, check the preFetch
    letsGo(component, store, to, endLoadingCallback)
  }

  router.beforeEach(beforeEachHook)

  function letsGo(component, store, to, endLoadingCallback) {
    if (component && component.preFetch) {
      // component need fetching some data before navigating to it
      return component.preFetch(store, to, endLoadingCallback).catch(err => {
        console.error(new Date().toLocaleString(), err)
        endLoadingCallback(false)
      })
    } else {
      // component's a static page and just navigate to it
      endLoadingCallback()
    }
  }

  if (typeof window.__INITIAL_STATE__ === 'undefined') {
    //realApp.$mount('#app')
    //beforeEachHook(router.currentRoute, {}, () => {})
    //Promise.all(
    //  preFetchComponent.map(component => component.preFetch(store, store.state.route))
    //).then(() => makeResponsive())
  }

  // send user info if google analytics code is provided.
  if (window.__INITIAL_STATE__ && window.__INITIAL_STATE__.siteInfo) {
    let analyzeCode = window.__INITIAL_STATE__.siteInfo.analyzeCode
    if (analyzeCode && analyzeCode.value !== '') {
      router.afterEach((to, from) => {
        // should delay it to get the correct title generated by vue-meta
        from.name && to.path !== from.path && setTimeout(() => {
          clientGoogleAnalyse(to.path || '/')
        })
      })
    }
  }
})
