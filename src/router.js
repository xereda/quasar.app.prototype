import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { path: '/', component: load('agendarConsulta') }, // Default
    { name: 'teste', path: '/teste', component: load('teste') }, // Default
    { name: 'agendarConsulta', path: '/agendarConsulta', component: load('agendarConsulta') }, // Default
    { name: 'porMedico', path: '/porMedico', component: load('porMedico') }, // Default
    { name: 'porEspecialidade', path: '/porEspecialidade', component: load('porEspecialidade') }, // Default
    { name: 'detalhesMedico', path: '/detalhesMedico', component: load('detalhesMedico') }, // Default
    { path: '*', component: load('error404') } // Not found
  ]
})
