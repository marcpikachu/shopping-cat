import "@fortawesome/fontawesome-free/css/all.css";
import Alpine from "alpinejs";
import axios from "axios";

window.Alpine = Alpine;

Alpine.data("shoppingCart", () => ({
    cats: [],
    adoptList: [],

      async init() {
        const wannaBuy = localStorage.getItem('adoptList');
            if (wannaBuy) {
                this.adoptList = JSON.parse(wannaBuy);
            }

        const url = "http://localhost:3002/cats";
        try {
        const resp = await axios.get(url);
        this.cats = resp.data;
        } catch (err) {
        console.error("API 錯誤：", err);
        }
    },
    addToCart(cat) {
        const existing = this.adoptList.find(item => item.name === cat.name);
            if (existing) {
                existing.qty++;
            } else {
                this.adoptList.push({ ...cat, qty: 1 });
            } 
        localStorage.setItem('adoptList', JSON.stringify(this.adoptList))
    },
    removeItem(cat) {
        const index = this.adoptList.findIndex(item => item.name == cat.name);
        if (index != -1) {
            this.adoptList.splice(index, 1);
        }
    },
    clearCart() {
        this.adoptList = []; 
        localStorage.removeItem('adoptList');
    },
    get totalPrice() {
        return this.adoptList.reduce((sum, item) => sum + item.price * item.qty, 0);
}

}));

Alpine.start();

