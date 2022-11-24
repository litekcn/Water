import { App } from 'vue'
import w-button from './src/button.vue'

// 定义 install 方法， App 作为参数
w-button.install = (app: App): void => {
    app.component(w-button.name, w-button)
}

export default w-button
