/* eslint-disable prettier/prettier */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./scss/main.scss"
import "normalize.css"

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core"

/* import specific icons */
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

// export { Vue }

/* add icons to the library */
library.add(fas, fab)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.mount("#app")
