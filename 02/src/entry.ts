import type { App } from 'vue'
import MyButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

export { MyButton, SFCButton, JSXButton }

export default {
  install(app: App) {
    app.component(MyButton.name, MyButton)
    app.component(SFCButton.name, SFCButton)
    app.component(JSXButton.name, JSXButton)
  }
}