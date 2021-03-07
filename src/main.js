import { createApp } from 'vue'
import App from './App'
import 'normalize.css'

import BaseCard from '@c/shared/BaseCard'
import BaseButton from '@c/shared/BaseButton'
import BaseDialog from '@c/shared/BaseDialog'

const app = createApp(App)

app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app')
