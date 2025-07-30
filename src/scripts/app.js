import "@fortawesome/fontawesome-free/css/all.css";
import Alpine from "alpinejs";
import axios from "axios";

window.Alpine = Alpine;

Alpine.data("shoppingCart", () => ({
    cats: [],
    adoptList: [],

      async init() {
        const url = "http://localhost:3002/cats";
        try {
        const resp = await axios.get(url);
        this.cats = resp.data;
        } catch (err) {
        console.error("API 錯誤：", err);
        }
    },
    addToCart(cat) {
        this.adoptList.push(cat); 
    },
    removeItem(cat) {
        const index = this.adoptList.findIndex(item => item.name == cat.name);
        if (index != -1) {
            this.adoptList.splice(index, 1);
        }
    
    },
    clearCart() {
        this.adoptList = []; 
    }

}));

Alpine.start();

