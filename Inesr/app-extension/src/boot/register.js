import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-inest'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
