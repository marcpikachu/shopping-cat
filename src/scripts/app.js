import "@fortawesome/fontawesome-free/css/all.css";
import Alpine from "alpinejs";
import axios from "axios";

window.Alpine = Alpine;

Alpine.data("shoppingCart", () => ({
    cats: [],
      async init() {
        const url = "http://localhost:3002/cats";
        try {
        const resp = await axios.get(url);
        this.cats = resp.data;
        } catch (err) {
        console.error("API 錯誤：", err);
        }
    },
}));

Alpine.start();
