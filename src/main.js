import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "~pages";

const router = createRouter({
  // ...
  routes,
  history: createWebHashHistory(),
});

createApp(App).use(router).mount("#app");
