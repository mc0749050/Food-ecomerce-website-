let parent = document.getElementById("cartDivItem");
function opencart() {
  document.getElementById("cartDiv").style.display = "block";
} 
function closecart(){
  document.getElementById("cartDiv").style.display = "none";
}

let items = [
  {
    name: "Pizza",
    price: 250,
    img: "https://img.freepik.com/premium-photo/isolated-pizza-with-mushrooms-olives_219193-8149.jpg?w=740",
  },
  {
    name: "Sandwich",
    price: 90,
    img: "https://as1.ftcdn.net/v2/jpg/00/63/14/82/1000_F_63148210_6CW92adBmtCT8s96W0IYPJpkZsPh8IQ5.jpg",
  },
  {
    name: "Burger",
    price: 110,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rice",
    price: 260,
    img: "https://img.freepik.com/free-photo/top-close-up-view-rice-plate-rice-dried-fruits_140725-78711.jpg?w=740&t=st=1700379548~exp=1700380148~hmac=a01d5b9919c38c511ea27b3c550473029c291e90eb36f1a401523f750f1b9111",
   },
   {
    name: "Special Thali",
    price: 399,
    img: "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35126.jpg?w=740",
    },
   {
     name: "Pasta",
     price: 70,
     img: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?w=740&t=st=1700380480~exp=1700381080~hmac=acc5200eab7b31a56b5515b6cf070197ae088903d89cd0ef4646763226cd74d7",
    },
   {
    name: "Sahi paneer",
    price: 280,
    img: "https://img.freepik.com/premium-photo/3262-tomato-soup-with-tofu-isolated-transparent-background_932774-3114.jpg?w=740",
   },
  {
   name: "Gulab Jamun",
   price: 490,
   img: "https://img.freepik.com/premium-photo/indian-sweet-food-gulab-jamun-served-round-ceramic-bowl_466689-71909.jpg?w=740",
   },
  ]
  
  
  function addToCart(n) {
   document.getElementById("noitemimg").style.display = "none"
    const newDiv = document.createElement('div');
    newDiv.classList.add(`divv${n}`);
    newDiv.setAttribute("id", `div${n}`);
    newDiv.innerHTML =  `<div id="cartItem">
      <img src="${items[n].img}" alt="#">
      <p class="dishName">${items[n].name}</p>
      <p class="details">Food contains nutrients—substances essential for the growth, <br> repair, and maintenance of body tissues and for the regulation of vital processes</p>
      <p  class="price p${n}">₹${items[n].price}</p>
      <div class="quantity">
        <button onclick="sub(${n})">-</button>
        <button id="display">1</button>
        <button onclick="add(${n})">+</button>
      </div>
      <button id="cartItemRemove" onclick="cartItemRemove(${n})">Remove</button>
      <button onclick="cartItemOrder(${n})" id="cartItemOrder">Order</button>
    </div>`;
    
 
    parent.appendChild(newDiv);
    
    
  }
  function cartItemRemove(n) {
    document.querySelector(`.divv${n}`).style.display = "none";
  }
  function cartItemOrder(n) {
    
    document.getElementById("popup").style.display = "block";
    
document.getElementById(`div${n}`).style.display = "none";

  }
  
  let i = 1;
 
  function sub(n){
    if(i < 1){
      i = 0;
      document.getElementById("display").innerText = i;
    }
    else{
      document.getElementById("display").innerText = i--;
    }
  }
  
  function add(n) {
   i++;
document.getElementById("display").innerText = i;
  }
  