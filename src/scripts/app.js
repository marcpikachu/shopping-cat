import "@fortawesome/fontawesome-free/css/all.css"
// 實作寫在這裡！
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.data("shoppingCart", () => ({
    cats:[
      {name:'老大', price:20, pic:'cat001.jpg'},
      {name:'貝貝', price:15, pic:'cat002.jpg'},
      {name:'老虎', price:10, pic:'cat003.jpg'}
      ],
    adoptList: [],

 addToCart(cat) {
  console.log("你剛剛認養了：", cat.name);
  this.adoptList.push(cat);
  console.log("現在清單是：", this.adoptList);
}

}))

Alpine.start();