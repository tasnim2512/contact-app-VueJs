import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import customInput from './components/customInput.vue'
import CustomButton from './components/customButton.vue'
import headerComponent from './components/headerComponent.vue'

import './assets/tailwind.css'

const app= createApp(App).use(router)
app.component('custom-input', customInput);
app.component('custom-button', CustomButton);
app.component('theHeader', headerComponent);
app.mount('#app')
