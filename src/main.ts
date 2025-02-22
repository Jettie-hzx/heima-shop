import { createSSRApp } from 'vue'
import pinia from './stores'
//import directives from './directives'
import vLazy from './directives/vLazy'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  app.directive('lazy', vLazy)
  //directives(app)
  return {
    app
  }
}
