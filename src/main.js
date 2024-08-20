import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/**
 * import Toastr
 */
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

/**
 * Tailwind CSS
*/
import './style.css'

/**
 * Mixins
 */
import mixins from './mixins';

/**
 * Vue Router
 */
import router from './router';
import store from './store';

//create App Vue
const app = createApp(App)

//gunakan "Toast" di Vue Js dengan plugin "use"
app.use(Toast)

//gunakan "Mixins" di Vue Js dengan plugin "use"
app.mixin(mixins)
app.use(router)
app.use(store)

app.mount('#app')
