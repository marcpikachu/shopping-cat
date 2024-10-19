import "@fortawesome/fontawesome-free/css/all.css";
// 實作寫在這裡！

import { createApp } from "vue/dist/vue.esm-bundler.js";

const AppData = {
  data() {
    return {
      cats: [],
    };
  },
};

createApp(AppData).mount("#app");
