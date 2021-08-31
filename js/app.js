'use strict';

let container = document.getElementById('container');
let formEl = document.getElementById('form'); 

let orders = [];
let imgArr = ['thumbnail.jpg','thumbnail(1).jpg','thumbnail(2).jpg']; 

let tableEl = document.createElement('table');
container.appendChild(tableEl);

let tdEl = document.createElement('td');
tableEl.appendChild(tdEl);

readFromLocalStorage();


function Order(custName, carMod) {
    this.custName = custName;
    this.carMod = carMod;
    orders.push(this);
}

Order.prototype.getRandomPrice = function() {
    let Price = 1000;
    price = price + Math.floor(Math.random() * 9000);
    return price;

}
function renderHead() {
    //let tableEl = document.createElement('table');
    //container.appendChild(tableEl);

    //let tdEl = document.createElement('td');
    //tableEl.appendChild(tdEl);

    let tdEl1 = document.createElement('td');
    tdEl1.textContent = 'Order Image';
    tdEl.appendChild(tdEl1);

    let tdEl2 = document.createElement('td');
    tdEl2.textContent = 'Order Details';
    tdEl.appendChild(tdEl2);
}

renderHead();
 
function render(){ 
    let tdEl = document.createElement('td');
    tableEl.appendChild(tdEl);
    let z = document.createElement("TD");
}

function saveToLocalStorage() {
    let data = JSON.stringify(orders);
    localStorage.setItem('cars', data);
}
function readFromLocalStorage() {
    let stringObj = localStorage.getItem('cars')
    let normalObj = JSON.parse(stringObj);

    if(normalObj) {
        orders = normalObj;
        renderOrders();
    }
}

function renderOrders() { 
    let picture = '';
    let trEl;
    for(let i = 0; i < orders.length; i++ ){
        tdEl = document.createElement('tr');
        if(orders[i].carMod === kia){
            picture = 'thumbnail.jpeg';
        } else if(orders[i].carMod === ford){
            picture = 'thumbnail(1).jpeg';
        } else {
            picture = 'thumbnail(2).jpeg';
        }
    }
    let trEl1 = document.createElement('tr');
    tdEl.appendChild(trEl1);
    trEl1.textContent = 'picture';
    trEl = document.createElement('tr');
    tdEl.appendChild(trEl);
    tdEl2.textContent = `${custName} , ${carMod} , ${getRandomPrice}`;


    //let trEl = document.createElement('tr');
    //tdEl.appendChild(trEl);
    //tdEl2.textContent = '';

}

function makeOrder(event) { 
    event.preventDefault();

    let custName = event.target.cname.value;
    let carMod = event.target.model.value;

    new Order(custName, carMod);
    renderOrders();
    saveToLocalStorage();

}

formEl.addEventListener('submit', makeOrder);