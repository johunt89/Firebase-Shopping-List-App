import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://shoppinglist-19916-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);

console.log(app);
console.log(database);

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");

function addToCart() {
    let inputValue = inputField.value;
    console.log(inputValue);
  }