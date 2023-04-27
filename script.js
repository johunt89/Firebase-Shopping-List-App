import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://shoppinglist-19916-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "items")

const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-button");
const shoppinglistEl = document.getElementById("shopping-list");

onValue(itemsInDB, function(snapshot){
    let itemsArray = Object.values(snapshot.val())
    clearShoppingListEl();
    for(let i = 0; i <itemsArray.length; i++){
        addToShoppingList(itemsArray[i])
    }
})


addButton.addEventListener("click", function(){
    let inputValue = inputField.value;
    push(itemsInDB, inputValue)
    clearInput();
})

//functions

function clearInput(){
    inputField.value = "";
}

function addToShoppingList(itemValue){
    shoppinglistEl.innerHTML += `<li>${itemValue}</li>`;
}

function clearShoppingListEl(){
    shoppinglistEl.innerHTML = "";
}