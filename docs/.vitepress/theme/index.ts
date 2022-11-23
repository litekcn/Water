import DefaultTheme from 'vitepress/theme'

import './style.css'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use()
  }
}
